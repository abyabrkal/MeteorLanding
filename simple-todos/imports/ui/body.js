import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';


Template.body.helpers({
    tasks(){
      return Tasks.find({}, { sort: { createdAt: -1 } });
    },
});


Template.body.events({
  
  'submit .new-task'(event) {
    //prevent browser form submit default 
    event.preventDefault();
    
    // Get value frpm form element
    const target = event.target;
    const text = target.text.value;
  
    // Insert a task into collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });
    
    //Clear form
    target.text.value = '';
  
  },
});