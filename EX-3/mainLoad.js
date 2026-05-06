import { RaceScoresService } from "./service/RaceScoresService.js";

const raceManager = new RaceScoresService();

// Load results from file
raceManager.loadFromFile("./data/raceScores.json");

// Retrieve time for participant1 in swim
const time1 = raceManager.getTimeForParticipant("participant1", "swim");
console.log("participant1 swim time:", time1?.toString()); // "2m 30s"

// Retrieve time for participant2 in swim
const time2 = raceManager.getTimeForParticipant("participant2", "swim");
console.log("participant2 swim time:", time2?.toString()); // "3m 15s"

// Compute total time for participant1
const totalTime1 = raceManager.getTotalTimeForParticipant("participant1");
console.log("participant1 total time:", totalTime1.toString()); // "4m 15s"

// Compute total time for participant2
const totalTime2 = raceManager.getTotalTimeForParticipant("participant2");
console.log("participant2 total time:", totalTime2.toString()); // "3m 15s"
