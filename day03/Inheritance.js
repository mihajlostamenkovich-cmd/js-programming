class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		console.log(`${this.name} is eating`);
	}	
}

class Student extends Person {
	//attributes: name, age, grade
	constructor(name, age, grade) {
		super(name, age);
		this.grade = grade;
	}
	//methods: study(), eat()
	study() {
		console.log(`${this.name} is studying`);
	}		

	eat() {
		console.log(`${this.name} is eating`);
	}
}

class Teacher extends Person {
		//attributes: name, age, salary
	constructor(name, age, salary) {
		super(name, age);
		this.salary = salary;
	}
	//methos: teach(), eat()
	teach() {
		console.log(`${this.name} is teaching`);
	}	
	eat() {
		console.log(`${this.name} is eating`);
	}
}

let student1 = new Student("John Doe", 20, "A");
console.log(student1); // Student { name: 'John Doe', age: 20, grade: 'A' }
student1.study();	
student1.eat(); // John Doe is eating