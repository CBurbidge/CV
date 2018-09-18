var settings = require('./settings');
var skillTypes = require('./skillTypes');

class Skill {
	constructor(id, name, description, skillTypes, settings) {
		this.id = id
		this.name = name
		this.description = description
		this.skillTypesIds = skillTypes.map(x => x.id)
		this.settingsIds = settings.map(x => x.id)
	}
}

String.prototype.toSkill = function (name, description, skillTypes, settings) {
	var id = this.valueOf()
	return new Skill(id, name, description, skillTypes, settings);
}

module.exports = {
	angularJs: "angularJs".toSkill(
		"Angular Js",
		"AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google.",
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
		],
		[
			settings.abide
		]
	),

	apacheSpark: "apacheSpark".toSkill(
		"Apache Spark",
		"Apache Spark is an open-source cluster-computing framework. Spark provides an interface for programming entire clusters with implicit data parallelism and fault tolerance",
		[
			skillTypes.backend,
		],
		[
			settings.scottlogic
		]
	),

	aspDotNetMvc: "aspDotNetMvc".toSkill(
		"ASP.NET MVC",
		"ASP.NET MVC is a web application framework developed by Microsoft, which implements the model–view–controller (MVC) pattern.",
		[
			skillTypes.backend,
		],
		[
			settings.fundslibrary,
			settings.abide
		]
	),

	aspWebApi: "aspWebApi".toSkill(
		"ASP.NET Web API is a framework that makes it easy to build HTTP services that reach a broad range of clients, including browsers and mobile devices.",
		"",
		[
			skillTypes.backend,
		],
		[
			settings.scottlogic
		]
	),

	aspDotNetWebforms: "aspDotNetWebforms".toSkill(
		"ASP.NET WebForms",
		"ASP.NET is a server-side web application framework designed for web development to produce dynamic web pages",
		[
			skillTypes.backend,
		],
		[
			settings.fundslibrary
		]
	),

	azureDataFactory: "azureDataFactory".toSkill(
		"Azure Data Factory",
		"Azure Data Factory is a cloud-based data integration service that allows you to create data-driven workflows in the cloud for orchestrating and automating data movement and data transformation",
		[
			skillTypes.backend,
			skillTypes.cloud,
		],
		[
			settings.scottlogic
		]
	),

	azureSql: "azureSql".toSkill(
		"Azure SQL",
		"Microsoft Azure SQL Database is a managed cloud database (SaaS) provided as part of Microsoft Azure",
		[
			skillTypes.backend,
			skillTypes.cloud,
		],
		[
			settings.scottlogic
		]
	),

	azureSqlDw: "azureSqlDw".toSkill(
		"Azure SQL Data Warehouse",
		"SQL Data Warehouse is a cloud-based Enterprise Data Warehouse that leverages Massively Parallel Processing to quickly run complex queries across petabytes of data",
		[
			skillTypes.backend,
			skillTypes.cloud,
		],
		[
			settings.scottlogic
		]
	),

	azureResourceManager: "azureResourceManager".toSkill(
		"Azure Resource Manager",
		"Azure Resource Manager is a technology used to provision resources within the Azure platform.",
		[
			skillTypes.devops,
			skillTypes.cloud,
		],
		[
			settings.scottlogic
		]
	),

	azureHdInsights: "azureHdInsights".toSkill(
		"Azure HdInsights",
		"Azure HDInsight is a fully managed cloud service that makes it easy, fast and cost-effective to process massive amounts of data. Use popular open-source frameworks such as Hadoop, Spark, Hive, LLAP, Kafka, Storm, R and more.",
		[
			skillTypes.cloud,
		],
		[
			settings.scottlogic
		]
	),

	awsCloudformation: "awsCloudformation".toSkill(
		"AWS Cloudformation",
		"AWS CloudFormation provides a common language for you to describe and provision all the infrastructure resources in your cloud environment. CloudFormation allows you to use a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. This file serves as the single source of truth for your cloud environment",
		[
			skillTypes.cloud,
			skillTypes.devops,
		],
		[
			settings.abide,
		]
	),

	awsDynamoDB: "awsDynamoDB".toSkill(
		"AWS DynamoDB",
		"Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed cloud database and supports both document and key-value store models",
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
		"Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.",
		[
			skillTypes.cloud,
			skillTypes.devops,
		],
		[
			settings.abide
		]
	),

	awsECR: "awsECR".toSkill(
		"AWS ECR",
		"Amazon Elastic Container Registry is a fully-managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.",
		[
			skillTypes.cloud,
			skillTypes.devops,
		],
		[
			settings.scottlogic
		]
	),

	awsECS: "awsECS".toSkill(
		"AWS ECS",
		"Amazon Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS.",
		[
			skillTypes.cloud,
			skillTypes.devops,
		],
		[
			settings.scottlogic
		]
	),

	awsLambda: "awsLambda".toSkill(
		"AWS Lambda",
		"AWS Lambda lets you run code without provisioning or managing servers.",
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
		"Amazon Kinesis Data Streams enables you to build custom applications that process or analyze streaming data for specialized needs.",
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
		"AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet.",
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
		"Amazon Redshift is a fast, fully managed data warehouse that makes it simple and cost-effective to analyze all your data using standard SQL and your existing Business Intelligence tools",
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
		"Amazon Simple Queue Service is a fully managed message queuing service that makes it easy to decouple and scale microservices, distributed systems, and serverless applications.",
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
		"Amazon S3 is object storage built to store and retrieve any amount of data from anywhere – web sites and mobile apps, corporate applications, and data from IoT sensors or devices.",
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
		"Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell",
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
		"Bootstrap is a free and open-source front-end library for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.",
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
		"Cake (C# Make) is a cross-platform build automation system with a C# DSL for tasks such as compiling code, copying files and folders, running unit tests, compressing files and building NuGet packages",
		[
			skillTypes.devops,
		],
		[
			settings.abide
		]
	),

	chef: "chef".toSkill(
		"Chef",
		"Chef is a configuration management tool written in Ruby and Erlang used to streamline the task of configuring and maintaining servers.",
		[
			skillTypes.devops,
		],
		[
			settings.abide
		]
	),

	continuousIntegration: "continuousIntegration".toSkill(
		"Continuous integration",
		"Continuous integration (CI) is the practice of merging all developer working copies to a shared mainline several times a day.",
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
		"Apache Cordova is an open-source mobile application development framework which enables software programmers to build applications for mobile devices using CSS3, HTML5, and JavaScript instead of relying on platform-specific APIs like those in Android, iOS, or Windows Phone.",
		[
			skillTypes.frontend,
			skillTypes.other
		],
		[

		]
	),

	cPlusPlus: "cPlusPlus".toSkill(
		"C++",
		"A general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation",
		[
			skillTypes.backend
		],
		[
			settings.toplevel
		]
	),

	cSharp: "cSharp".toSkill(
		"C#",
		"C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented and component-oriented programming disciplines",
		[
			skillTypes.backend,
			skillTypes.testing,
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
		"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript",
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
		"A JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of the widely implemented SVG, HTML5, and CSS standards",
		[
			skillTypes.frontend
		],
		[

		]
	),

	docker: "docker".toSkill(
		"Docker",
		"Docker is a computer program that performs operating-system-level virtualization also known as containerization.",
		[
			skillTypes.backend,
			skillTypes.cloud,
			skillTypes.devops,
		],
		[
			settings.scottlogic,
		]
	),

	dotNetCore: "dotNetCore".toSkill(
		".NET Core",
		".NET Core is a free and open-source managed computer software framework for the Microsoft Windows, Apple macOS and Linux operating systems.",
		[
			skillTypes.backend,
			skillTypes.frontend,
		],
		[
			settings.scottlogic,
		]
	),

	dotNetFramework: "dotNetFramework".toSkill(
		".NET Framework",
		".NET Framework is a software framework developed by Microsoft that runs primarily on Microsoft Windows",
		[
			skillTypes.backend,
			skillTypes.frontend,
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
		"The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.",
		[
			skillTypes.frontend,
			skillTypes.backend,
		],
		[
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
		]
	),

	fSharp: "fSharp".toSkill(
		"F#",
		"F# is a strongly typed, multi-paradigm programming language that encompasses functional, imperative, and object-oriented programming methods.",
		[
			skillTypes.backend,
			skillTypes.frontend,
		],
		[
			settings.abide,
			settings.scottlogic,
		]
	),

	git: "git".toSkill(
		"git",
		"Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people",
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
		"Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting",
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
		"Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.",
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
		"Ionic is a powerful HTML5 SDK that helps you build native-feeling mobile apps using web technologies like HTML, CSS, and Javascript.",
		[
			skillTypes.other
		],
		[

		]
	),

	jasmine: "jasmine".toSkill(
		"jasmine",
		"Jasmine is an open source testing framework for JavaScript. It aims to run on any JavaScript-enabled platform, to not intrude on the application nor the IDE, and to have easy-to-read syntax.",
		[
			skillTypes.frontend,
			skillTypes.testing
		],
		[
			settings.fundslibrary,
		]
	),

	javascript: "javascript".toSkill(
		"javascript",
		"JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm",
		[
			skillTypes.backend,
			skillTypes.frontend,
			skillTypes.testing
		],
		[
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
		]
	),

	jira: "jira".toSkill(
		"JIRA",
		"Jira is a proprietary issue tracking product, developed by Atlassian. It provides bug tracking, issue tracking, and project management functions",
		[
			skillTypes.other
		],
		[
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
		]
	),

	jquery: "jquery".toSkill(
		"jQuery",
		"jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. It is free, open-source software using the MIT License.",
		[
			skillTypes.frontend,
		],
		[
			settings.fundslibrary,
		]
	),

	karma: "karma".toSkill(
		"karma",
		"Karma is a test runner for JavaScript that runs on Node.js. It is very well suited to testing AngularJS or any other JavaScript projects.",
		[
			skillTypes.testing
		],
		[
			settings.fundslibrary,
		]
	),

	knockoutJs: "knockoutJs".toSkill(
		"KnockoutJs",
		"Knockout is a standalone JavaScript implementation of the Model-View-ViewModel pattern with templates.",
		[
			skillTypes.frontend,
		],
		[
			settings.fundslibrary,
		]
	),

	latex: "latex".toSkill(
		"LaTeX",
		"LaTeX is a document preparation system. When writing, the writer uses plain text as opposed to the formatted text found in WYSIWYG word processors like Microsoft Word.",
		[
			skillTypes.other
		],
		[

		]
	),

	less: "less".toSkill(
		"LESS",
		"Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS",
		[
			skillTypes.frontend,
		],
		[
			settings.fundslibrary,
		]
	),

	linq: "linq".toSkill(
		"LINQ",
		"General-purpose query facilities added to the .NET Framework apply to all sources of information, not just relational or XML data.",
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

	moq: "moq".toSkill(
		"MoQ",
		"Moq is the one and only .NET mocking framework that allows specifying mock behavior via declarative specification queries.",
		[
			skillTypes.testing
		],
		[
			settings.toplevel,
			settings.abide,
		]
	),

	mstest: "mstest".toSkill(
		"MSTest",
		"The Visual Studio Unit Testing Framework describes Microsoft's suite of unit testing tools as integrated into some[1] versions of Visual Studio 2005 and later",
		[
			skillTypes.testing
		],
		[
			settings.scottlogic,
			settings.abide,
		]
	),

	nodeJs: "nodeJs".toSkill(
		"node.js",
		"",
		[
			skillTypes.backend
		],
		[
			settings.abide,
			settings.scottlogic,
		]
	),

	nunit: "nunit".toSkill(
		"NUnit",
		"NUnit is an open-source unit testing framework for Microsoft .NET. It serves the same purpose as JUnit does in the Java world, and is one of many programs in the xUnit family.",
		[
			skillTypes.backend,
			skillTypes.testing
		],
		[
			settings.toplevel,
			settings.abide,
			settings.scottlogic,
		]
	),

	octopusDeploy: "octopusDeploy".toSkill(
		"Octopus Deploy",
		"Octopus Deploy is an automated release management tool for modern developers and DevOps teams.",
		[
			skillTypes.devops,
		],
		[
			settings.abide,
		]
	),

	packer: "packer".toSkill(
		"Packer",
		"Packer is a free and open source tool for creating golden images for multiple platforms from a single source configuration.",
		[
			skillTypes.devops,
		],
		[
			settings.abide,
		]
	),

	powershell: "powershell".toSkill(
		"Powershell",
		"PowerShell is a task automation and configuration management framework from Microsoft, consisting of a command-line shell and associated scripting language.",
		[
			skillTypes.cloud,
			skillTypes.devops,
		],
		[
			settings.abide,
		]
	),
	
	puppeteer: "puppeteer".toSkill(
		"Puppeteer",
		"Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium",
		[
			skillTypes.frontend,
			skillTypes.testing,
		],
		[
		]
	),

	python: "python".toSkill(
		"python",
		"Python is an interpreted high-level programming language for general-purpose programming. Python has a design philosophy that emphasizes code readability, notably using significant whitespace.",
		[
			skillTypes.backend,
			skillTypes.cloud,
			skillTypes.devops,
			skillTypes.testing,
		],
		[
			settings.abide,
		]
	),

	reactJs: "reactJs".toSkill(
		"react.js",
		"React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations.",
		[
			skillTypes.frontend,
		],
		[
			settings.scottlogic,
		]
	),

	resharper: "resharper".toSkill(
		"Resharper",
		"ReSharper is a popular developer productivity extension for Microsoft Visual Studio. It automates most of what can be automated in your coding routines. It finds compiler errors, runtime errors, redundancies, and code smells right as you type, suggesting intelligent corrections for them.",
		[
			skillTypes.other,
		],
		[
			settings.toplevel,
			settings.abide,
			settings.scottlogic,
		]
	),

	restfulWebservices: "restfulWebservices".toSkill(
		"RESTFul webservices",
		"REpresentational State Transfer (REST) is an architectural style that defines a set of constraints and properties based on HTTP.",
		[
			skillTypes.backend,
			skillTypes.frontend,
		],
		[
			settings.fundslibrary,
			settings.abide,
			settings.scottlogic,
		]
	),

	rlanguage: "rlanguage".toSkill(
		"R",
		"R is a programming language and free software environment for statistical computing and graphics that is supported by the R Foundation for Statistical Computing. The R language is widely used among statisticians and data miners for developing statistical software",
		[
			skillTypes.other
		],
		[

		]
	),

	sourceSafe: "sourceSafe".toSkill(
		"Source safe",
		"Microsoft Visual SourceSafe (VSS) is a discontinued source control program, oriented towards small software development projects.",
		[
			skillTypes.other
		],
		[
			settings.toplevel,
		]
	),

	sqlServerManagementStudio: "sqlServerManagementStudio".toSkill(
		"SQL Server Management Studio",
		"SQL Server Management Studio (SSMS) is a software application first launched with Microsoft SQL Server 2005 that is used for configuring, managing, and administering all components within Microsoft SQL Server.",
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

	specflow: "specflow".toSkill(
		"Specflow",
		"SpecFlow is an open source port of Cucumber for .Net.",
		[
			skillTypes.testing,
		],
		[
			settings.abide,
			settings.scottlogic,
		]
	),

	tfs: "tfs".toSkill(
		"TFS",
		"Team Foundation Server (TFS) is a Microsoft product that provides source code management (either with Team Foundation Version Control or Git), reporting, requirements management, project management, automated builds, lab management, testing and release management capabilities",
		[
			skillTypes.other
		],
		[
			settings.toplevel,
		]
	),

	terraform: "terraform".toSkill(
		"Terraform",
		"Terraform is an infrastructure as code software by HashiCorp. It allows users to define a datacenter infrastructure in a high-level configuration language, from which it can create an execution plan to build the infrastructure.",
		[
			skillTypes.cloud,
			skillTypes.devops
		],
		[
			settings.scottlogic,
		]
	),

	teamcity: "teamcity".toSkill(
		"Teamcity",
		"TeamCity is a Java-based build management and continuous integration server from JetBrains.",
		[
			skillTypes.devops,
		],
		[
			settings.abide,
		]
	),

	tSql: "tSql".toSkill(
		"T-SQL",
		"Transact-SQL (T-SQL) is Microsoft's and Sybase's proprietary extension to the SQL (Structured Query Language) used to interact with relational databases. T-SQL expands on the SQL standard to include procedural programming, local variables, various support functions for string processing, date processing, mathematics, etc.",
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
		"TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.",
		[
			skillTypes.frontend,
		],
		[
			settings.fundslibrary,
		]
	),

	visualStudio: "visualStudio".toSkill(
		"Visual studio",
		"Microsoft Visual Studio is an integrated development environment (IDE) from Microsoft.",
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

	vstest: "vstest".toSkill(
		"VSTest",
		"The Visual Studio Unit Testing Framework describes Microsoft's suite of unit testing tools as integrated into some[1] versions of Visual Studio 2005 and later",
		[
			skillTypes.testing
		],
		[
			settings.scottlogic,
			settings.abide,
		]
	),
	
	vbDotNet: "vbDotNet".toSkill(
		"VB.NET",
		"Visual Basic .NET (VB.NET) is a multi-paradigm, object-oriented programming language, implemented on the .NET Framework.",
		[
			skillTypes.backend,
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

