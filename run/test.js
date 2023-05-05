for(let x = 1; x<=5; x++) {
    if (x % 2 == 0)
        break

    console.log("continue")
}


class test {
    constructor() {
        this.boob = "asdasdasd"
    }

    wow() {
        console.log(this.boob)
    }
}



const t = new test()

t.wow()