import Immutable from 'immutable';

function printBestStudents(students) {
    const mySeq = Immutable.Seq(students);
    console.log(mySeq);

    const filtered = mySeq.filter((student) => student.score > 70);

    const capFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const JSObject = filtered.toJS();

    Object.keys(JSObject).map((key) => {
        const student = JSObject[key];
        student.firstName = capFirstLetter(student.firstName);
        student.lastName = capFirstLetter(student.lastName);
        return student;
    });

console.log(JSObject);
}

export default printBestStudents;
