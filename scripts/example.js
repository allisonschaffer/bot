
module.exports = function(robot) {

	// robot.hear() will have the robot listen in on any channel it's in
	robot.hear(/badger/i, function(response) {
		response.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS")
	})

	robot.hear(/i like (.+)/i, function(response) {
		var like = response.match[1]
		// response.reply() will have the robot at-mention you when it responds
		response.reply('I also like ' + like)
	})

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	robot.respond(/who should i call on today\?/i, function(response) {
		var user = robot.brain.userForName('gordo')
		response.reply('Call on ' + user.real_name + '!')
	})


	robot.hear(/test/i, function(response) {
		response.send("I'm working!")
	})


	robot.hear(/quotes/i, function(response) {
		var randomQuotes = ['Quote 1', 'Quote 2', 'Quote 3', 'Quote 4', 'Quote 5'][Math.floor(Math.random() * 5)]
		response.send(randomQuotes)
	})


}