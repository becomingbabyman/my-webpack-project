const exported = {};
if (Meteor.isClient) {
  exported.ReactRouterSSR = require('./client.jsx').default;
} else {
  exported.ReactRouterSSR = require('./server.jsx').default;
}
// This is a wonky syntax but should work
// ReactRouterSSR will be a singleton based on how node handles modules
// But server and client or completely separate environments, so
// the correct version will be loaded in each env
// console.log('rrs', ReactRouterSSR)
export default exported
