const newman = require('newman');

newman.run({
    collection: require('./collections/practise_collection.json'), // can also provide a URL or path to a local JSON file.
   
    iterationCount:1,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
            // template: './templates/full/htmlreqres.hbs' // optional, this will be picked up relative to the directory that Newman runs in.
        }
    },
  
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});