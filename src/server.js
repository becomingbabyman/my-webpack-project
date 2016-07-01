import { Stuff } from 'collections';

if (!Stuff.findOne()) Stuff.insert({ name: 'thing', type: 1 })

Meteor.publish('stuff', function() {
  return Stuff.find()
})
