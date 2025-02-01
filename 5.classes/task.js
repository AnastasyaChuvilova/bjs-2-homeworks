class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = state;
		this.type = type;
	}

	fix() {
		this.state = this._state * 1.5;
	}

	set state(state) {
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	name = String;
	books = Book[0];

	constructor(name, books = []) {
		this.name = name;
		this.books = books;
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			let book = this.books[i];
			if (book.hasOwnProperty(type)) {
				let fieldValue = book[type]
				if (fieldValue === value) {
					return book;
				}
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			let book = this.books[i];
			if (book.name === bookName) {
				this.books.splice(i, 1);
				return book;
			}
		}
		return null;
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(newMark, subjectName) {
		if (newMark < 2 || newMark > 5) {
			return;
		}

		if (!this.marks[subjectName]) {
			this.marks[subjectName] = [];
		}

		this.marks[subjectName].push(newMark);
	}

	getAverageBySubject(subjectName) {
		if (!this.marks[subjectName] || this.marks[subjectName].length === 0) {
			return 0;
		}
		let sum = this.marks[subjectName].reduce((acc, currentValue) => acc + currentValue, 0);
		return sum / this.marks[subjectName].length;
	}

	getAverage() {
		let subjects = Object.keys(this.marks);
		if (subjects.length === 0) return 0;
		let sumOfAvg = 0;
		for (let subject of subjects) {
			sumOfAvg += this.getAverageBySubject(subject);
		}
		return sumOfAvg / subjects.length;
	}
}