  function blastOff(destination) {
    console.log("Blasting off for " + destination + "!");
  }

  function makeRocketLauncher(rocketName, callback) {
    return function() {
      console.log("Launching " + rocketName);
      console.log("3... 2... 1...");
      callback("Mars");
    };
  }

  var launchViking = makeRocketLauncher("Viking", blastOff);
  var launchMariner = makeRocketLauncher("Mariner", blastOff);

  launchViking();
  launchMariner();

  // => Launching Viking
  // => 3... 2... 1...
  // => Blasting off for Mars!

  // => Launching Mariner
  // => 3... 2... 1...
  // => Blasting off for Mars!
