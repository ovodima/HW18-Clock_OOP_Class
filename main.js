const main = document.querySelector(".main");
const interval = 250;
const time1 = document.querySelector(".time-1");
const time2 = document.querySelector(".time-2");
const time3 = document.querySelector(".time-3");
// let check = time.classList.contains('full')

class Clock {
    constructor() {
        this.clock = new Date()
        this.formats = []
    }

    getTime() {
        this.formats.push(this.clock.toUTCString())
    }

    getFormats() {
        return this.formats
    }

    render(elem) {
        this.getTime()
        let formats = this.getFormats()
        
        formats.filter(format => {
            if(format.includes(this.getTime())) {
                elem.innerText = format
            }
        })

        
    }
        
    }


class Full extends Clock {
    constructor() {
        super(new Date())
        this.hour = this.clock.getHours()
        this.minutes = this.clock.getMinutes()
        this.second = this.clock.getSeconds()
    }

    getTime() {
        let localString = new Date().toLocaleTimeString()
        this.formats.push(localString)
        return localString
    }
}

class Short extends Clock {
    constructor() {
        super(new Date())
        this.hour = this.clock.getHours()
        this.minutes = this.clock.getMinutes()
    }

    getTime() {
        if (this.hour < 10) this.hour = "0" + this.hour;
        if (this.minutes < 10) this.minutes = "0" + this.minutes;
        
        let shortFormat = `${this.hour}:${this.minutes}`

        this.formats.push(shortFormat)
        return shortFormat
    }

}

main.addEventListener('click', (e) => {
    let target = e.target
    target.classList.toggle('full')
    console.log(e.target.classList)
})



setInterval(() => {
// let clock = new Clock()
let short = new Short()
let full = new Full()

//  clock.render(time1)
 short.render(time2)
 full.render(time3)
}, interval);


