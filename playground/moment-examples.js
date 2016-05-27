var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1459111648;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ H:m a'));

console.log(moment().format('MMMM Do, YYYY @ H:m A'))
