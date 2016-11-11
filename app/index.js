var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js')

var sentryKey = 'fee9240e70644a6a8ce7f657582ead0a'
var sentryApp = '113901'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
  name: 'Github Battle',
  branch: '4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
    github_commit: 'asdfasdf'
  }
}).install()

console.log(window.thing.doesNotExist);

ReactDOM.render( routes, document.getElementById('app'));
