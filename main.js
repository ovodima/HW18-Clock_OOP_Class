const main = document.querySelector(".main");
const interval = 250;
const time1 = document.querySelector(".time-1");
const time2 = document.querySelector(".time-2");
const time3 = document.querySelector(".time-3");
// let check = main.classList.contains('full')
let bool = true;

class Clock {
  constructor() {
    this.clock = new Date();
    this.formats = [];
  }

  getTime() {
    this.formats.push(this.clock.toUTCString());
  }

  getFormats() {
    return this.formats;
  }

  render(elem) {
    this.getTime();
    let formats = this.getFormats();

    formats.filter((format) => {
      if (format.includes(this.getTime())) {
        elem.innerText = format;
      }
    });
  }
}

class Full extends Clock {
  constructor() {
    super(new Date());
    this.hour = this.clock.getHours();
    this.minutes = this.clock.getMinutes();
  }

  getTime() {
    let fullTime;
    if (!bool) {
      fullTime = this.clock.toLocaleTimeString();
    } else if (bool) {
      fullTime = `${this.hour}:${this.minutes}`;
    } else {
      return;
    }
    this.formats.push(fullTime);
    return fullTime;
  }
}

class Short extends Clock {
  constructor() {
    super(new Date());
    this.hour = this.clock.getHours();
    this.minutes = this.clock.getMinutes();
  }

  getTime() {
    let shortFormat;

    if (bool) {
      shortFormat = this.clock.toLocaleTimeString();
    } else if (!bool) {
      if (this.hour < 10) this.hour = "0" + this.hour;
      if (this.minutes < 10) this.minutes = "0" + this.minutes;
      shortFormat = `${this.hour}:${this.minutes}`;
    } else {
      return;
    }

    this.formats.push(shortFormat);
    return shortFormat;
  }
}

main.addEventListener("click", () => {

  if (bool) {
    bool = !bool;
  } else {
    bool = true;
  }
});

setInterval(() => {
  let short = new Short();
  let full = new Full();

  short.render(time2);
  full.render(time3);
}, interval);