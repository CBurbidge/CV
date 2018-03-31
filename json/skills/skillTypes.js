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
		"The practice of writing asynchronous code."
	),
	backend: "backend".toSkillType(
		"Back End",
		"'Back end' development concerns server side technologies like C#."),
	cloud: "cloud".toSkillType(
		"Cloud Computing",
		"cloud development skills, mostly AWS"
	),
	devops: "devops".toSkillType(
		"Devops",
		"devops, automation and continuous delivery practices"

	),
	frontend: "frontend".toSkillType(
		"Front End",
		"Front End development concerns client side technologies like javascript.",
		"Competent"
	),
	functional: "functional".toSkillType(
		"Functional Programming",
		""
	),
	oop: "oop".toSkillType(
		"Object Oriented Programming",
		""
	),
	tdd: "tdd".toSkillType(
		"Test Driven Development",
		"The practice of writing automated tests before writing code."
	),
}
