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
		"Asynchronous",
		"The practice of writing asynchronous code."
	),
	backend: "backend".toSkillType(
		"'Back end'",
		"'Back end' development concerns server side technologies like C#."),
	cloud: "cloud".toSkillType(
		"Cloud",
		"cloud development skills, mostly AWS"
	),
	devops: "devops".toSkillType(
		"Devops",
		"devops, automation and continuous delivery practices"

	),
	frontend: "frontend".toSkillType(
		"'Front end'",
		"'Front end' development concerns client side technologies like javascript.",
		"Competent"
	),
	functional: "functional".toSkillType(
		"Functional",
		"A style of programming."
	),
	oop: "oop".toSkillType(
		"Object Oriented",
		"A style of programming that uses objects"
	),
	tdd: "tdd".toSkillType(
		"TDD",
		"The practice of writing automated tests before writing code."
	),
}
