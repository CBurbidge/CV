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
	backend: "backend".toSkillType(
		"Back End",
		"Back end Development refers to the server side of development which usually consists of three parts: a server, an application, and a database. Code written by back end developers is what communicates the database information to the browser."),
	devops: "devops".toSkillType(
		"Devops",
		"DevOps is a software engineering culture and practice that aims at unifying software development and software operations"
	),
	frontend: "frontend".toSkillType(
		"Front End",
		"Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and Javascript.",
		"Competent"
	),
	other: "other".toSkillType(
		"Other",
		"Technologies which don't fit into the other categories."
	),
	testing: "testing".toSkillType(
		"Testing",
		"Software testing involves the execution of a software component or system component to evaluate one or more properties of interest. In general, these properties indicate the extent to which the component or system under test."
	),
}
