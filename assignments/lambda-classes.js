//Base class here
class Person {
    //Constructor function
    constructor(attr) {
        //Super goes here

        //Props go here
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    //Methods go here
    speak() {
        return `Hello, my name is ${this.name} and I am from ${this.location}.`;
    }
}

//Base class here
class Instructor extends Person {
    //Constructor function
    constructor(attr) {
        //Super goes here
        super(attr);
        //Props go here
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    //Methods go here
    demo(subject) {
        return `Today, we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}!`;
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
        return `Finished logging favorite subjects for ${this.name}!`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}: @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}...`;
    }
}

/* 
const test = new Class({
    props: "values",
});
 */

//Creating Person(s).

const test = new Person({
    name: "User",
    age: 12345,
    location: "Place"
});

const defaultDan = new Person({
    name: "Default",
    age: 42,
    location: "X: 0, Y: 0, Z: 0"
});

//Creating Instructor(s).

const docScratch = new Instructor({
    name: "Doc Scratch",
    age: "an indeterminate number of",
    location: "Alternia's green moon",
    specialty: "creating stable-loop existences for time-travelling villains",
    favLanguage: "~ATH",
    catchPhrase: "I am an excellent host"
});

const professorHulk = new Instructor({
    name: "Bruce",
    age: 30,
    location: "Chicago",
    specialty: "smashing and science",
    favLanguage: "LOLScript",
    catchPhrase: "Hulk Out"
});

//Creating Student(s).

const tanner = new Student({
    name: "Tanner",
    age: 19,
    location: "Pennsylvania",
    previousBackground: "a little bit of Java and C++",
    className: "Web25",
    favSubjects: ['Game Dev', 'JavaScript', 'LESS']
});

const pickleJoe = new Student({
    name: "Deviljho",
    age: 19,
    location: "The New World",
    previousBackground: "eating",
    className: "Web25",
    favSubjects: ['Biting', 'Chewing', 'Swallowing Whole']
});

//Creating ProjectManager(s)

const janeDoe = new ProjectManager({
    name: "Jane",
    age: 22,
    location: "Kansas City",
    specialty: "Remaining Anonymous",
    favLanguage: "Julia",
    catchPhrase: "You can't catch me",
    gradClassName: "Web14",
    favInstructor: "Bruce"
});

const doctorMario = new ProjectManager({
    name: "Mario",
    age: 45,
    location: "The Mushroom Kingdom",
    specialty: "Defeating Bowser",
    favLanguage: "Java",
    catchPhrase: "YAHOO!",
    gradClassName: "UX2",
    favInstructor: "Doc Scratch"
});

//Testing.

//Base class Person, test
console.log(test.speak());

//Base class Person, defaultDan
console.log(defaultDan.speak());

//Person child Instructor, docScratch
console.log(docScratch.speak());
console.log(docScratch.demo("Spatial Manipulation by way of Extrasolar Fuel"));
console.log(docScratch.grade(tanner, "Temporal Assurance Methods"));

//Person child Instructor, professorHulk
console.log(professorHulk.speak());
console.log(professorHulk.demo("Confronting your Inner Hulk to Curb the Smash"));
console.log(professorHulk.grade(pickleJoe, "Eating Absolutely Everything"));

//Person child Student, tanner
console.log(tanner.listsSubjects());
console.log(tanner.PRAssignment("JavaScript III"));
console.log(tanner.sprintChallenge("JavaScript III"));

//Person child Student, pickleJoe
console.log(pickleJoe.listsSubjects());
console.log(pickleJoe.PRAssignment("Paleo Diet"));
console.log(pickleJoe.sprintChallenge("Culinary"));

//Instructor child ProjectManager, janeDoe
console.log(janeDoe.speak());
console.log(janeDoe.demo("Your Identity on the Web"));
console.log(janeDoe.grade(pickleJoe, "Neck Wrestling"));
console.log(janeDoe.standUp("#web25"));
console.log(janeDoe.debugsCode(tanner, "Great Idea! Project"));

//Instructor child ProjectManager, doctorMario
console.log(doctorMario.speak());
console.log(doctorMario.demo("Backwards Long-Jumping"));
console.log(doctorMario.grade(tanner, "Responsive Design"));
console.log(doctorMario.standUp("#koopalings"));
console.log(doctorMario.debugsCode(pickleJoe, "Food Chain Dominance - Presentation"));