
module.exports = function(robot) {

	

	robot.respond(/cheer someone on/i, function(response) {
		var userIds = Object.keys(robot.brain.data.users);
		var randomUsername = robot.brain.data.users[userIds[Math.floor(Math.random() * userIds.length)]].name
		var randomEmojii = ['👍', '🙌', '👏 ', '💃', '👌', '👊', '😍'][Math.floor(Math.random() * 7)]
		response.send('Hey @' + randomUsername + ' ' + randomEmojii + '!')
	})


	// robot.hear() will have the robot listen in on any channel it's in
	robot.hear(/badger/i, function(response) {
		response.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS")
	})

	robot.hear(/i like (.+)/i, function(response) {
		var like = response.match[1]
		// response.reply() will have the robot at-mention you when it responds
		response.reply('I also like ' + like)
	})


	robot.hear(/smile/i, function(response) {
		response.reply('http://gph.is/1HUWhs2')
	})


	robot.hear(/hi|hey|hello|howdy/i, function(response) {
		var greetings = ['😃', '😀', '😊', '🙃', '😋'][Math.floor(Math.random() * 4)]
		response.send(greetings)
	})


	robot.hear(/help/i, function(response) {
		var randomQuotes = ['Quote 1', 'Quote 2', 'Quote 3', 'Quote 4', 'Quote 5'][Math.floor(Math.random() * 5)]
		response.send(randomQuotes)
	})


	robot.respond(/is it time to start partying\?/i, function(response) {
		var currentTime = new Date()
		var hours = currentTime.getHours() - 5

		if (hours > 17) {
			response.send('🎉🍻🎉');
		} else {
			response.send('🔜');
		}
	})

}
