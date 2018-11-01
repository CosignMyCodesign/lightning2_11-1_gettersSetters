// Make a childCare class where you can pass in any child and care giver as properties with methods to change diaper (console logs an inspirational quote to the care giver), and to store behavior in a properties (good or bad ect) using a setter.

class Childcare {
  constructor(props) {
    this.child = props.child
    this.careGiver = props.careGiver
  }

  get inspiration () {
    return `Good job ${this.careGiver}, ${this.child} feels much better thanks to you!`
  }

  set behavior (goodBad) {
    this._behavior = goodBad
  }
}

const careProps = {
  child: "Baby Ezra",
  careGiver: "Babysitter Bob"
}

const caregiver1 = new Childcare(careProps)

console.log(caregiver1.inspiration)

caregiver1.behavior = "Good"

console.log(caregiver1._behavior)