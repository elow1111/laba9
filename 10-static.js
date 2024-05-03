export default class Time {
  // BEGIN
  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  static fromString(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return new Time(hours, minutes);
  }
  
  toString() {
    return this.hours.toString() + ':' + this.minutes.toString();
  }
  // END
  toString() {
    return `${this.hours}:${this.minutes}`;
  }
};
