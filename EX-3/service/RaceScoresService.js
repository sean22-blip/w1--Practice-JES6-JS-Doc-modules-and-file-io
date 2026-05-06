import fs from "fs";
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";

/**
 * Service for managing a list of race results.
 * Supports adding, saving, loading, and querying results.
 */
class RaceScoresService {
  /**
   * The list of race results.
   * @type {RaceResult[]}
   * @private
   */
  _raceResults = [];

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The race result to add.
   */
  addRaceResult(result) {
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file data should be saved.
   */
  saveToFile(filePath) {
    const data = JSON.stringify(this._raceResults, null, 2);
    fs.writeFileSync(filePath, data, "utf8");
    console.log(`Results saved to ${filePath}`);
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      const parsed = JSON.parse(data);

      // Reconstruct proper RaceResult objects (JSON loses class types)
      this._raceResults = parsed.map((item) => {
        const duration = Duration.fromObject(item._duration);
        return new RaceResult(item._participantId, item._sport, duration);
      });

      console.log(`Results loaded from ${filePath}`);
      return true;
    } catch (error) {
      console.error("Error loading file:", error.message);
      return false;
    }
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
    const result = this._raceResults.find(
      (r) => r.participantId === participantId && r.sport === sport
    );
    return result ? result.duration : null;
  }

  /**
   * Computes total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration} The total Duration object.
   */
  getTotalTimeForParticipant(participantId) {
    const results = this._raceResults.filter(
      (r) => r.participantId === participantId
    );

    if (results.length === 0) return new Duration(0);

    return results.reduce(
      (total, r) => total.plus(r.duration),
      new Duration(0)
    );
  }
}

export { RaceScoresService };
