function blastoff(destination) {
  console.log("Blasting off for " + destination + "!");
}

function makeRocketLauncher(rocketName, dest, takeoffCallback) {
  return function() {
    console.log("Launching " + rocketName);
    console.log("3... 2... 1...");
    takeoffCallback(dest);
  }
}

// How should the functions above change?

var launchViking = makeRocketLauncher("Viking", "Mars", blastoff);
var launchGalileo = makeRocketLauncher("Galileo", "Jupiter", blastoff);
var launchCassini = makeRocketLauncher("Cassini", "Saturn", blastoff);

launchViking();
launchGalileo();
launchCassini();
