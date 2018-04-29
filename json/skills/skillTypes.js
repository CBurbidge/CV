class SkillType {
	constructor(id, name, description, level) {
		this.id = id
		this.name = name
		this.description = description
		this.level = level
	}
}

String.prototype.toSkillType = function (name, description, levelArg) {
	var id = this.valueOf()
	var level = levelArg || "Advanced"
	return new SkillType(id, name, description, level);
}

module.exports = {
	async: "async".toSkillType(
		"Asynchronous Programming",
		"Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress."
	),
	backend: "backend".toSkillType(
		"Back End",
		"Back end Development refers to the server side of development which usually consists of three parts: a server, an application, and a database. Code written by back end developers is what communicates the database information to the browser."),
	cloud: "cloud".toSkillType(
		"Cloud Computing",
		"Cloud computing is the delivery of computing services – servers, storage, databases, networking, software, analytics and more over the Internet."
	),
	devops: "devops".toSkillType(
		"Devops",
		"DevOps is a software engineering culture and practice that aims at unifying software development and software operations"
	),
	frontend: "frontend".toSkillType(
		"Front End",
		"Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and Javascript.",
		"Competent"
	),
	functional: "functional".toSkillType(
		"Functional Programming",
		"Programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data."
	),
	oop: "oop".toSkillType(
		"Object Oriented Programming",
		"Object oriented programming is a programming paradigm based on the concept of \"objects\", which may contain data and procedures."
	),
	tdd: "tdd".toSkillType(
		"Test Driven Development",
		"Test Driven Development is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only."
	),
}
