var fs = require('fs');

var countries = JSON.parse(fs.readFileSync('countries.json', 'utf8'));

countries.forEach(function(country) {
  if (country.filename) {
    country.states = getStates(country.filename);
  }
});

function getStates(state_name) {
  return JSON.parse(fs.readFileSync('countries/' + state_name + '.json', 'utf8'));
}

fs.writeFile('countries-and-states.json', JSON.stringify(countries), function(writeErr) {
  if (writeErr) return console.log(writeErr);
});
