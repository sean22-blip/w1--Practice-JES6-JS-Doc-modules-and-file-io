import { Duration } from "./Duration.js";

/**
 * Represents a single race result for a participant.
 */
class RaceResult {
  /**
   * The ID of the participant.
   * @type {string}
   * @private
   */
  _participantId;

  /**
   * The type of sport (e.g., "swim", "run").
   * @type {string}
   * @private
   */
  _sport;

  /**
   * The duration/time for this result.
   * @type {Duration}
   * @private
   */
  _duration;

  /**
   * Creates a new RaceResult.
   * @param {string} participantId - The participant's ID.
   * @param {string} sport - The sport type.
   * @param {Duration} duration - The time taken.
   */
  constructor(participantId, sport, duration) {
    this._participantId = participantId;
    this._sport = sport;
    this._duration = duration;
  }

  /** @returns {string} The participant ID. */
  get participantId() {
    return this._participantId;
  }

  /** @returns {string} The sport type. */
  get sport() {
    return this._sport;
  }

  /** @returns {Duration} The duration. */
  get duration() {
    return this._duration;
  }
}

export { RaceResult };
