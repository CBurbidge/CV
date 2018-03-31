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
			settings.abide
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
			settings.abide
		]
	),

	aspDotNetMvc: "aspDotNetMvc".toSkill(
		"ASP.NET MVC",
		"A varied web development framework that ephasises the Model View Controller pattern.",
		[
			skillTypes.backend,
		],
		[
			settings.fundslibrary,
			settings.abide
		]
	),

	aspDotNetWebforms: "aspDotNetWebforms".toSkill(
		"ASP.NET WebForms",
		"Webforms.",
		[
			skillTypes.backend,
		],
		[
			settings.fundslibrary
		]
	),

	awsCloudformation: "awsCloudformation".toSkill(
		"AWS Cloudformation",
		"Infrastructure automation",
		[
			skillTypes.cloud,
		],
		[
			settings.abide,
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
			settings.abide
		]
	),

	awsEC2: "awsEC2".toSkill(
		"AWS EC2",
		"AWS EC2 for virtual machines",
		[
			skillTypes.cloud,
		],
		[
			settings.abide
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
			settings.abide
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
			settings.abide
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
			settings.abide
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
			settings.abide
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
			settings.abide
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
			settings.abide
		]
	),

	bashScripting: "bashScripting".toSkill(
		"bash scripting",
		"Writing scripts to be run on bash terminals",
		[
			skillTypes.devops,
		],
		[
			settings.abide,
			settings.scottlogic
		]
	),

	bootstrap: "bootstrap".toSkill(
		"Bootstrap",
		"An open source responsive design library.",
		[
			skillTypes.frontend,
		],
		[
			settings.abide,
			settings.fundslibrary,
			settings.scottlogic
		]
	),

	cake: "cake".toSkill(
		"Cake",
		"C# DSL for build automation",
		[
			skillTypes.devops,
		],
		[
			settings.abide
		]
	),

	chef: "chef".toSkill(
		"Chef",
		"Server configuration automation",
		[
			skillTypes.devops,
		],
		[
			settings.abide
		]
	),

	continuousIntegration: "continuousIntegration".toSkill(
		"Continuous integration",
		"A style of software deployment that uses automated tests and short feedback loops.",
		[
			skillTypes.devops,
		],
		[
			settings.abide,
			settings.fundslibrary,
			settings.scottlogic
		]
	),

	cordova: "cordova".toSkill(
		"Apache Cordova (Phone Gap)",
		"An open source way of making cross platform mobile phone apps",
		[
			skillTypes.frontend
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
			settings.toplevel
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
			settings.toplevel,
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic
		]
	),

	css: "css".toSkill(
		"CSS",
		"Styling of web pages",
		[
			skillTypes.frontend,
		],
		[
			settings.toplevel,
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic
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
			settings.toplevel,
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
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
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
		]
	),

	fSharp: "fSharp".toSkill(
		"F#",
		"A functional programming language",
		[
			skillTypes.functional,
		],
		[
			settings.abide,
			settings.scottlogic,
		]
	),

	git: "git".toSkill(
		"git",
		"An open source source code control system",
		[
			skillTypes.devops,
		],
		[
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
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
			settings.fundslibrary,
		]
	),

	html: "html".toSkill(
		"HTML",
		"The markup language of the internet.",
		[
			skillTypes.frontend,
		],
		[
			settings.toplevel,
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
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
			settings.fundslibrary,
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
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
		]
	),

	jira: "jira".toSkill(
		"JIRA",
		"Project management software from atlassian",
		[

		],
		[
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
		]
	),

	jquery: "jquery".toSkill(
		"jQuery",
		"A standard library for DOM manipulation",
		[
			skillTypes.frontend,
		],
		[
			settings.fundslibrary,
		]
	),

	karma: "karma".toSkill(
		"karma",
		"A javascript test runner.",
		[
			skillTypes.tdd
		],
		[
			settings.fundslibrary,
		]
	),

	knockoutJs: "knockoutJs".toSkill(
		"KnockoutJs",
		"A javascript binding library",
		[
			skillTypes.frontend,
		],
		[
			settings.fundslibrary,
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
			settings.fundslibrary,
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
			settings.toplevel,
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
		]
	),

	moq: "moq".toSkill(
		"MoQ",
		"A C# mocking library",
		[
			skillTypes.tdd
		],
		[
			settings.toplevel,
			settings.abide,
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
			settings.toplevel,
			settings.abide,
			settings.scottlogic,
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
			settings.abide,
		]
	),

	packer: "packer".toSkill(
		"Packer",
		"Server provisioning",
		[
			skillTypes.devops,
		],
		[
			settings.abide,
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
			settings.abide,
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
			settings.abide,
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
			settings.toplevel,
			settings.abide,
		]
	),

	restfulWebservices: "restfulWebservices".toSkill(
		"RESTFul webservices",
		"A stateless webservice architectural style.",
		[
			skillTypes.backend,
		],
		[
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
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
			settings.toplevel,
		]
	),

	sqlServerManagementStudio: "sqlServerManagementStudio".toSkill(
		"SQL Server Management Studio",
		"Software to control SQL Server",
		[
			skillTypes.backend,
		],
		[
			settings.toplevel,
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
		]
	),

	tfs: "tfs".toSkill(
		"TFS",
		"Project management and source control software.",
		[

		],
		[
			settings.toplevel,
		]
	),

	teamcity: "teamcity".toSkill(
		"Teamcity",
		"Continuous integration software",
		[
			skillTypes.devops,
		],
		[
			settings.abide,
		]
	),

	tSql: "tSql".toSkill(
		"T-SQL",
		"Microsoft's flavour of SQL.",
		[
			skillTypes.backend,
		],
		[
			settings.toplevel,
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
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
			settings.fundslibrary,
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
			settings.toplevel,
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
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
			settings.toplevel,
		]
	),

	xslt: "xslt".toSkill(
		"XSLT",
		"A language to transform XML into HTML",
		[
			skillTypes.backend,
		],
		[
			settings.fundslibrary,
		]
	),

	xml: "xml".toSkill(
		"XML",
		"A heavily used markup language",
		[
			skillTypes.backend,
		],
		[
			settings.toplevel,
			settings.fundslibrary,
			settings.abide,
		]
	),
}

