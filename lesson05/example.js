module.exports = function(robot) {


  // // Badger
  // robot.hear(/badger/i, function(response) {
  //   response.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS");
  // });

  // // Open the pod bay doors, Hubot
  // robot.respond(/open the (.*) doors/i, function(response) {
  //   var doorType;
  //   doorType = response.match[1];
  //   if (doorType === "pod bay") {
  //     response.reply("I'm afraid I can't let you do that.");
  //   } else {
  //     response.reply("Opening " + doorType + " doors");
  //   }
  // });

  // var lulz = ['lol', 'rofl', 'lmao'];
  // robot.respond(/lulz/i, function(res) {
  //   return res.send(res.random(lulz));
  // });

//   // I like pie
//   robot.hear(/I like pie/i, function(response) {
//     response.emote("makes a freshly baked pie");
//   });

//   // Lulz
//   var lulz = ['lol', 'rofl', 'lmao'];
//   robot.respond(/lulz/i, function(response) {
//     response.send(response.random(lulz));
//   });

//   // Paddlin
//   robot.topic(function(response) {
//     response.send(response.message.text + "? That's a Paddlin'");
//   });

//   // Entering
//   var enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you'];
//   robot.enter(function(response) {
//     response.send(response.random(enterReplies));
//   });

//   // Leaving
//   var leaveReplies = ['Are you still there?', 'Target lost', 'Searching'];
//   robot.leave(function(response) {
//     response.send(response.random(leaveReplies));
//   });

//   // The ultimate answer to life, the universe and everything
//   var answer = process.env.HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING;
//   robot.respond(/what is the answer to the ultimate question of life/, function(response) {
//     if ((answer === undefined) || (answer === null)) {
//       response.send("Missing HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING in environment: please set and try again");
//       return;
//     }
//     response.send(answer + ", but what is the question?");
//   });

//   // You are a little slow
//   robot.respond(/you( a|')re a little slow/i, function(response) {
//     setTimeout(function() {
//       response.send("Who you calling 'slow'?");
//     }, 20 * 1000);
//   });

//   // Annoy and unannoy
//   var annoyIntervalId = null;
//   robot.respond(/annoy me/, function(response) {
//     if (annoyIntervalId) {
//       response.send("AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH");
//       return;
//     }
//     response.send("Hey, want to hear the most annoying sound in the world?");
//     annoyIntervalId = setInterval(function() {
//       response.send("AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH");
//     }, 1000);
//   });

//   robot.respond(/unannoy me/, function(response) {
//     if (annoyIntervalId) {
//       response.send("GUYS, GUYS, GUYS!");
//       clearInterval(annoyIntervalId);
//       annoyIntervalId = null;
//     } else {
//       response.send("Not annoying you right now, am I?");
//     }
//   });

//   // Secrets
//   robot.router.post('/hubot/chatsecrets/:room', function(req, response) {
//     var data, room, secret;
//     room = req.params.room;
//     data = JSON.parse(req.body.payload);
//     secret = data.secret;
//     robot.messageRoom(room, "I have a secret: " + secret);
//     response.send('OK');
//   });

//   // Does not compute
//   robot.error(function(err, response) {
//     robot.logger.error("DOES NOT COMPUTE");
//     if (response != null) {
//       response.reply("DOES NOT COMPUTE");
//     }
//   });

//   // Have a soda, sleep it off
//   robot.respond(/have a soda/i, function(response) {
//     var sodasHad;
//     sodasHad = robot.brain.get('totalSodas') * 1 || 0;
//     if (sodasHad > 4) {
//       response.reply("I'm too fizzy..");
//     } else {
//       response.reply('Sure!');
//       robot.brain.set('totalSodas', sodasHad + 1);
//     }
//   });

//   robot.respond(/sleep it off/i, function(response) {
//     robot.brain.set('totalSodas', 0);
//     response.reply('zzzzz');
//   });

 };