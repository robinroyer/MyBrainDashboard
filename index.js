/*
 * Modules
 */

var express	= require('express');
var fs 		= require('fs');
var path 	= require('path');
var async = require('async');


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

