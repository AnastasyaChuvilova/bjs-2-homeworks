function Student(studentName, studentGender, studentAge) {
	this.name = studentName, this.gender = studentGender, this.age = studentAge, this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...studentMarks) {
	if (this.hasOwnProperty("marks")) {
		this.marks.push(...studentMarks);
	};
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty("marks") && this.marks.length != 0) {
		return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
	} else {
		return 0;
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}