'use strict';
/*global Meteor, Template */

Template.connectedLoginButtons.helpers({
	online: function() {
		return Meteor.status().connected;
	},
	user: function() {
		return Meteor.user();
	}
});
