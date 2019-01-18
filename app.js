'use strict';

const Homey = require('homey');

class Timeline extends Homey.App {

	onInit() {
		new Homey.FlowCardAction('post_on_timeline')
		.register()
		.registerRunListener(args => {
				const notification = new Homey.Notification({
					excerpt: args.message
				});
				return Homey.ManagerNotifications.registerNotification(notification);
		});
	}

}

module.exports = Timeline;
