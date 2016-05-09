module.exports = function(robot) {

  // // Badgers
  // robot.hear(/badger/i, function(res) {
  //   res.send("Badgers? WE DON'T NEED NO STINKIN BADGERS!");
  // });

  // // Open the pod bay doors, Hubot
  // robot.respond(/open the (.*) doors/i, function(res) {
  //   var doorType;
  //   doorType = res.match[1];
  //   if (doorType === "pod bay") {
  //     res.reply("I'm afraid I can't let you do that.");
  //   } else {
  //     res.reply("Opening " + doorType + " doors");
  //   }
  // });

  // var lulz = ['lol', 'rofl', 'lmao'];
  // robot.respond(/lulz/i, function(res) {
  //   return res.send(res.random(lulz));
  // });

  // // I like pie
  // robot.hear(/I like pie/i, function(res) {
  //   res.emote("makes a freshly baked pie");
  // });

  // // Lulz
  // var lulz = ['lol', 'rofl', 'lmao'];
  // robot.respond(/lulz/i, function(res) {
  //   res.send(res.random(lulz));
  // });

  // // Paddlin
  // robot.topic(function(res) {
  //   res.send(res.message.text + "? That's a Paddlin'");
  // });

  // // Entering
  // var enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you'];
  // robot.enter(function(res) {
  //   res.send(res.random(enterReplies));
  // });

  // // Leaving
  // var leaveReplies = ['Are you still there?', 'Target lost', 'Searching'];
  // robot.leave(function(res) {
  //   res.send(res.random(leaveReplies));
  // });

  // // The ultimate answer to life, the universe and everything
  // var answer = process.env.HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING;
  // robot.respond(/what is the answer to the ultimate question of life/, function(res) {
  //   if ((answer === undefined) || (answer === null)) {
  //     res.send("Missing HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING in environment: please set and try again");
  //     return;
  //   }
  //   res.send(answer + ", but what is the question?");
  // });

  // // You are a little slow
  // robot.respond(/you( a|')re a little slow/i, function(res) {
  //   setTimeout(function() {
  //     res.send("Who you calling 'slow'?");
  //   }, 20 * 1000);
  // });

  // // Annoy and unannoy
  // var annoyIntervalId = null;
  // robot.respond(/annoy me/, function(res) {
  //   if (annoyIntervalId) {
  //     res.send("AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH");
  //     return;
  //   }
  //   res.send("Hey, want to hear the most annoying sound in the world?");
  //   annoyIntervalId = setInterval(function() {
  //     res.send("AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH");
  //   }, 1000);
  // });

  // robot.respond(/unannoy me/, function(res) {
  //   if (annoyIntervalId) {
  //     res.send("GUYS, GUYS, GUYS!");
  //     clearInterval(annoyIntervalId);
  //     annoyIntervalId = null;
  //   } else {
  //     res.send("Not annoying you right now, am I?");
  //   }
  // });

  // // Secrets
  // robot.router.post('/hubot/chatsecrets/:room', function(req, res) {
  //   var data, room, secret;
  //   room = req.params.room;
  //   data = JSON.parse(req.body.payload);
  //   secret = data.secret;
  //   robot.messageRoom(room, "I have a secret: " + secret);
  //   res.send('OK');
  // });

  // // Does not compute
  // robot.error(function(err, res) {
  //   robot.logger.error("DOES NOT COMPUTE");
  //   if (res != null) {
  //     res.reply("DOES NOT COMPUTE");
  //   }
  // });

  // // Have a soda, sleep it off
  // robot.respond(/have a soda/i, function(res) {
  //   var sodasHad;
  //   sodasHad = robot.brain.get('totalSodas') * 1 || 0;
  //   if (sodasHad > 4) {
  //     res.reply("I'm too fizzy..");
  //   } else {
  //     res.reply('Sure!');
  //     robot.brain.set('totalSodas', sodasHad + 1);
  //   }
  // });

  // robot.respond(/sleep it off/i, function(res) {
  //   robot.brain.set('totalSodas', 0);
  //   res.reply('zzzzz');
  // });

};