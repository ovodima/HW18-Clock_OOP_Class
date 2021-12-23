const main = document.querySelector(".main");
const interval = 250;
const time = document.querySelector(".time");
let check = time.classList.contains('full')

class Clock {
    constructor() {
        this.clock = new Date()
    }

    getTime() {
        return this.clock.toUTCString()
    }

    render() {

        if(check) {
            return time.innerText = this.getTime()
        } else if(!check) {
            return time.innerText = this.getTime()
        } else {
            time.innerText = this.getTime()
        }
        
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
        return new Date().toLocaleTimeString()
    }

    // render() {
    //     time.innerText = this.getTime()
    // }
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

        return `${this.hour}:${this.minutes}`
    }

    // render() {
    //     time.innerText = this.getTime()
    // }
    
}

main.addEventListener('click', (e) => {
    let target = e.target
    target.classList.toggle('full')
    console.log(e.target.classList)
})

setInterval(() => {
    let clock = new Clock()
    clock.render()
}, interval);


