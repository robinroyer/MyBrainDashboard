/*
 * IMPORT
 */

var express	= require('express');
var fs 		= require('fs');
var path 	= require('path');
var async = require('async');
var _ = require('lodash');
var cors = require('cors');

/*
 * DATA
 */

// TODO: add a DB instead
var dirPath = './Data/';

// To store all the data
let data = [];

fs.readdir(dirPath, (err, filesPath) => {
    if (err) throw err;
    // generate all filepath
    filesPath = filesPath.map(filePath => {
        return dirPath + filePath;
    });

    // withdraw all the data
    async.map(filesPath, (filePath, cb) => {
        fs.readFile(filePath, 'utf8', cb);
    }, (err, results) => {
    	results.forEach(element => {
    		data.push(JSON.parse(element));
    	});
    });
});

/**
 * MODULES
 */

function getUserIds() {
	users = [];
	data.forEach(element => { users.push(element.user_id); });
	return _.uniq(users);
}

function getTags() {
	tags = [];
	data.forEach(element => { tags = _.union(tags, element.tags); });
	return tags;
}

function getUserData(id) {
	return _.compact(data.map(element => {
		if (element.user_id === id) {
			return generateDataPoints(element.data);
		}
	}));
}

function getTagData(query) {

	const { filters } = query;
	if (filters === null) return [];
	const tags = filters.split(",");
	if (tags === null) return [];

	return _.compact(data.map(element => {
		if (_.intersection(element.tags, tags).length !== 0) {
			return generateDataPoints(element.data);
		}
	}));
}

/*
 * HELPERS
 */

function generateDataPoints(val){
	return val.map((element, index) => {
		return {x: index, y: element};
	})
}


/*
 * APPLICATION
 */

var app = express();
app.use(express.static('public'));

app.get('/', cors(), (req, res) => {
	res.json({statut: 'ok'});
});


/*
 * API ROUTES
 */

// ______________________________________Gets tags and user id
app.get('/users', cors(), (req, res) => {
	res.json(getUserIds());
});

app.get('/tags', cors(), (req, res) => {
	res.json(getTags());
});

//________________________________________Gets The data
app.get('/data/users/:id', cors(), (req, res) => {
	res.json(getUserData(req.params.id));
});

app.get('/data/tags?', cors(), (req, res) => {
	res.json(getTagData(req.query));
});

// Start server
app.listen(8080, () => {
	console.log('Starting application on port : ' + 8080);
});