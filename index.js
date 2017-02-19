/*
 * Modules
 */

var express	= require('express');
var fs 		= require('fs');
var path 	= require('path');
var async = require('async');


/*
 * DATA
 */

// TODO: add a DB instead
var dirPath = './Data/';

// To store all the data
let data = [];
console.log(data);

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


/*
 * APPLICATION
 */

var app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'home.html'));
});


/*
 * API ROUTES
 */

// ______________________________________Gets tags and user id
app.get('/users', (req, res) => {
	res.json(data);
});

app.get('/tags', (req, res) => {
	res.json(data);
});

//________________________________________Gets The data
app.get('data/users/:id', (req, res) => {
	res.json(data);
});

app.get('data/tags/:id', (req, res) => {
	res.json(data);
	// console.log(req.params.id));
});

// Start server
app.listen(8080, () => {
	console.log('Starting application on port' + 8080);
});