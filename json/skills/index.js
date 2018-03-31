var settings = require('./settings');
var skillTypes = require('./skillTypes');

class Skill {
	constructor(id, name, description, skillTypes, settings) {
		this.id = id
		this.name = name
		this.description = description
		this.skillTypes = skillTypes
		this.settings = settings
	}
}

String.prototype.toSkill = function (name, description, skillTypes, settings) {
	var id = this.valueOf()
	return new Skill(id, name, description, skillTypes, settings);
}

module.exports = {
	angularJs: "angularJs".toSkill(
		"Angular Js",
		"Angular Js is a javascript MV* Single Page Application framework.",
		[
			skillTypes.frontend
		],
		[

		]
	),

	akkaDotNet: "akkaDotNet".toSkill(
		"AKKA.NET",
		".NET actor system implementation framework, port of the popular scala framework.",
		[
			skillTypes.backend,
			skillTypes.async,
		],
		[

		]
	),

	aspDotNetMvc: "aspDotNetMvc".toSkill(
		"ASP.NET MVC",
		"A varied web development framework that ephasises the Model View Controller pattern.",
		[
			skillTypes.backend,
		],
		[

		]
	),

	aspDotNetWebforms: "aspDotNetWebforms".toSkill(
		"ASP.NET WebForms",
		"Webforms.",
		[
			skillTypes.backend,
		],
		[

		]
	),

	awsCloudformation: "awsCloudformation".toSkill(
		"AWS Cloudformation",
		"Infrastructure automation",
		[
			skillTypes.cloud,
		],
		[

		]
	),

	awsDynamoDB: "awsDynamoDB".toSkill(
		"AWS DynamoDB",
		"AWS DynamoDB for data storage",
		[
			skillTypes.cloud,
			skillTypes.backend,
		],
		[

		]
	),

	awsEC2: "awsEC2".toSkill(
		"AWS EC2",
		"AWS EC2 for virtual machines",
		[
			skillTypes.cloud,
		],
		[

		]
	),

	awsLambda: "awsLambda".toSkill(
		"AWS Lambda",
		"AWS Lambda for data processing and other automation tasks",
		[
			skillTypes.cloud,
			skillTypes.devops,
		],
		[

		]
	),

	awsKinesis: "awsKinesis".toSkill(
		"AWS Kinesis",
		"AWS Kinesis for data streaming",
		[
			skillTypes.cloud,
			skillTypes.backend,
		],
		[

		]
	),

	awsOpsworks: "awsOpsworks".toSkill(
		"AWS Opsworks",
		"AWS Opsworks for chef provisioning",
		[
			skillTypes.cloud,
			skillTypes.devops,
		],
		[

		]
	),

	awsRedshift: "awsRedshift".toSkill(
		"AWS Redshift",
		"AWS Redshift for data storage",
		[
			skillTypes.backend,
			skillTypes.cloud,
		],
		[

		]
	),

	awsSqs: "awsSqs".toSkill(
		"AWS SQS",
		"AWS SQS for queueing applications",
		[
			skillTypes.backend,
			skillTypes.cloud,
		],
		[

		]
	),

	awsS3: "awsS3".toSkill(
		"AWS S3",
		"AWS S3 for data storage",
		[
			skillTypes.backend,
			skillTypes.cloud,
		],
		[

		]
	),

	bashScripting: "bashScripting".toSkill(
		"bash scripting",
		"Writing scripts to be run on bash terminals",
		[
			skillTypes.devops,
		],
		[

		]
	),

	bootstrap: "bootstrap".toSkill(
		"Bootstrap",
		"An open source responsive design library.",
		[
			skillTypes.frontend,
		],
		[

		]
	),

	cake: "cake".toSkill(
		"Cake",
		"C# DSL for build automation",
		[
			skillTypes.devops,
		],
		[

		]
	),

	chef: "chef".toSkill(
		"Chef",
		"Server configuration automation",
		[
			skillTypes.devops,
		],
		[

		]
	),

	continuousIntegration: "continuousIntegration".toSkill(
		"Continuous integration",
		"A style of software deployment that uses automated tests and short feedback loops.",
		[
			skillTypes.devops,
		],
		[

		]
	),

	cordova: "cordova".toSkill(
		"Apache Cordova (Phone Gap)",
		"An open source way of making cross platform mobile phone apps",
		[

		],
		[

		]
	),

	cPlusPlus: "cPlusPlus".toSkill(
		"C++",
		"A common programming language.",
		[
			skillTypes.oop,
			skillTypes.backend
		],
		[

		]
	),

	cSharp: "cSharp".toSkill(
		"C#",
		"CSharp is a modern multi-paradigm programming language",
		[
			skillTypes.backend,
			skillTypes.functional,
			skillTypes.oop,
			skillTypes.tdd,
		],
		[

		]
	),

	css: "css".toSkill(
		"CSS",
		"Styling of web pages",
		[
			skillTypes.frontend,
		],
		[

		]
	),

	d3: "d3".toSkill(
		"D3",
		"A svg manipulation library",
		[
			skillTypes.frontend
		],
		[

		]
	),

	dotNetFramework: "dotNetFramework".toSkill(
		".NET Framework",
		"The Microsoft software development framework.",
		[
			skillTypes.backend,
		],
		[

		]
	),

	esSixPromises: "esSixPromises".toSkill(
		"ES6 Promises",
		"ECMAScript 6 promises",
		[
			skillTypes.async,
			skillTypes.frontend,
		],
		[

		]
	),

	fSharp: "fSharp".toSkill(
		"F#",
		"A functional programming language",
		[
			skillTypes.functional,
		],
		[

		]
	),

	git: "git".toSkill(
		"git",
		"An open source source code control system",
		[
			skillTypes.devops,
		],
		[

		]
	),

	grunt: "grunt".toSkill(
		"grunt",
		"A javascript task runner.",
		[
			skillTypes.devops,
			skillTypes.frontend,
		],
		[

		]
	),

	html: "html".toSkill(
		"HTML",
		"The markup language of the internet.",
		[
			skillTypes.frontend,
		],
		[

		]
	),

	ionicFramework: "ionicFramework".toSkill(
		"Ionic framework",
		"An open source framework that uses AngularJs and Apache cordova to create cross platform mobile apps.",
		[
			skillTypes.frontend
		],
		[

		]
	),

	jasmine: "jasmine".toSkill(
		"jasmine",
		"A javascript test running/assertion library",
		[
			skillTypes.frontend,
			skillTypes.tdd
		],
		[

		]
	),

	javascript: "javascript".toSkill(
		"javascript",
		"The language of the client side internet.",
		[
			skillTypes.async,
			skillTypes.frontend,
			skillTypes.functional,
			skillTypes.oop,
			skillTypes.tdd
		],
		[

		]
	),

	jira: "jira".toSkill(
		"JIRA",
		"Project management software from atlassian",
		[

		],
		[

		]
	),

	jquery: "jquery".toSkill(
		"jQuery",
		"A standard library for DOM manipulation",
		[
			skillTypes.frontend,
		],
		[

		]
	),

	karma: "karma".toSkill(
		"karma",
		"A javascript test runner.",
		[
			skillTypes.tdd
		],
		[

		]
	),

	knockoutJs: "knockoutJs".toSkill(
		"KnockoutJs",
		"A javascript binding library",
		[
			skillTypes.frontend,
		],
		[

		]
	),

	latex: "latex".toSkill(
		"LaTeX",
		"A quality typesetting software package",
		[

		],
		[

		]
	),

	less: "less".toSkill(
		"LESS",
		"A CSS preprocessor",
		[
			skillTypes.frontend,
		],
		[

		]
	),

	linq: "linq".toSkill(
		"LINQ",
		"A library for manipulating data in C# and VB.NET",
		[
			skillTypes.backend,
			skillTypes.functional,
		],
		[

		]
	),

	moq: "moq".toSkill(
		"MoQ",
		"A C# mocking library",
		[
			skillTypes.tdd
		],
		[

		]
	),

	nunit: "nunit".toSkill(
		"NUnit",
		"A C# assertion library",
		[
			skillTypes.backend,
			skillTypes.tdd
		],
		[

		]
	),

	octopusDeploy: "octopusDeploy".toSkill(
		"Octopus Deploy",
		"A deployment technology",
		[
			skillTypes.backend,
			skillTypes.devops,
		],
		[

		]
	),

	packer: "packer".toSkill(
		"Packer",
		"Server provisioning",
		[
			skillTypes.devops,
		],
		[

		]
	),

	powershell: "powershell".toSkill(
		"Powershell",
		"Microsoft's scripting language",
		[
			skillTypes.cloud,
			skillTypes.devops,
		],
		[

		]
	),

	python: "python".toSkill(
		"python",
		"A general purpose programming language",
		[
			skillTypes.oop,
			skillTypes.tdd
		],
		[

		]
	),

	resharper: "resharper".toSkill(
		"Resharper",
		"A code productivity tool.",
		[
			skillTypes.backend,
			skillTypes.frontend,
			skillTypes.tdd
		],
		[

		]
	),

	restfulWebservices: "restfulWebservices".toSkill(
		"RESTFul webservices",
		"A stateless webservice architectural style.",
		[
			skillTypes.backend,
		],
		[

		]
	),

	rlanguage: "rlanguage".toSkill(
		"R",
		"A statistical programming language package",
		[

		],
		[

		]
	),

	sourceSafe: "sourceSafe".toSkill(
		"Source safe",
		"A version control system",
		[

		],
		[

		]
	),

	sqlServerManagementStudio: "sqlServerManagementStudio".toSkill(
		"SQL Server Management Studio",
		"Software to control SQL Server",
		[
			skillTypes.backend,
		],
		[

		]
	),

	tfs: "tfs".toSkill(
		"TFS",
		"Project management and source control software.",
		[

		],
		[

		]
	),

	teamcity: "teamcity".toSkill(
		"Teamcity",
		"Continuous integration software",
		[
			skillTypes.devops,
		],
		[

		]
	),

	tSql: "tSql".toSkill(
		"T-SQL",
		"Microsoft's flavour of SQL.",
		[
			skillTypes.backend,
		],
		[

		]
	),

	typescript: "typescript".toSkill(
		"Typescript",
		"A types superset of javascript",
		[
			skillTypes.async,
			skillTypes.frontend,
			skillTypes.functional,
			skillTypes.oop,
			skillTypes.tdd
		],
		[

		]
	),

	visualStudio: "visualStudio".toSkill(
		"Visual studio",
		"Software development software.",
		[
			skillTypes.frontend,
			skillTypes.backend,
		],
		[

		]
	),

	vbDotNet: "vbDotNet".toSkill(
		"VB.NET",
		"Visual Basic DotNet",
		[
			skillTypes.backend,
			skillTypes.oop,
		],
		[

		]
	),

	xslt: "xslt".toSkill(
		"XSLT",
		"A language to transform XML into HTML",
		[
			skillTypes.backend,
		],
		[

		]
	),

	xml: "xml".toSkill(
		"XML",
		"A heavily used markup language",
		[
			skillTypes.backend,
		],
		[
		]
	),

}

