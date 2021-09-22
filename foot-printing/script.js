class Prints {
    constructor(id) {
        this.container = document.getElementById(id)
        this.prints = this.container.querySelectorAll('.print')
        this.index = 0
        this.step = 40
        this.reverse = false
        this.init()
    }
    init() {
        this.prints.forEach((print, index) => {
            const isEven = index % 2 === 0
            if (isEven) {
                print.style.left = '0'
            } else {
                print.style.right = '0'
            }
            print.style.top = index * this.step + 'px'
        })
        this.loop()
    }
    
    loop() {
        if (this.index === this.prints.length - 1) {
            this.reverse = !this.reverse
            this.index = 0
        }
        if (this.reverse) {
            this.prints[this.index].classList.remove('visible')
        } else {
            this.prints[this.index].classList.add('visible')
        }
        this.index++
        setTimeout(() => this.loop(), 700)
    }
}
new Prints('prints-left')