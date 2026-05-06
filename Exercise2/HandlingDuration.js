class Duration {
 /**
* Total duration in seconds.
* @type {number}
* @private
*/
_totalSeconds;
 /**
* Creates a new Duration object.
* @param {number} [seconds=0] - The number of seconds.
*/
 constructor(seconds) {
 // YOUR CODE
 this._totalSeconds = seconds;
 }
/**
* Creates a new Duration from a number of minutes and seconds.
* @param {number} [minutes=0] - The number of minutes.
* @param {number} [seconds=0] - The number of seconds.
* @returns {Duration} A new Duration instance.
*/
 static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
    // YOUR CODE
  const totalSeconds = (minutes * 60) + seconds; 
    return new Duration(totalSeconds);
 }
 /**
* Converts the duration into a human-readable string, e.g., "2m 30s".
* @returns {string} the formatted duration string.
*/
toString = () => {
 // YOUR CODE
 const mins = Math.floor(this._totalSeconds / 60);
  const secs = this._totalSeconds % 60;
  return `${mins}m ${secs}s`;
}
/**
* Returns a new Duration by adding another duration.
* @param {Duration} other - Another duration to add.
* @returns {Duration} A new Duration representing the sum.
*/
plus = (other) => {
 // YOUR CODE
 return new Duration(this._totalSeconds + other._totalSeconds);
}
/**
 * YOUR COMMENT
*/
minus = (other) => {
 // YOUR CODE
 return new Duration(this._totalSeconds - other._totalSeconds);
}

}
export default Duration;