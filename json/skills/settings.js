class DateRange {
	constructor(startDate, endDate) {
		this.startDate = startDate
		this.endDate = endDate
	}
}

class Setting {
	constructor(id, name, description, dateRange) {
		this.id = id
		this.name = name
		this.description = description
		this.dateRange = dateRange
	}
}

String.prototype.toSetting = function (name, description, dateRange) {
	var id = this.valueOf()
	return new Setting(id, name, description, dateRange);
}

// propName needs to match id!
module.exports = {
	toplevel: "toplevel".toSetting(
		"Toplevel Computing",
		"Digital case management solutions that help Government and Public Sector meet the Digital by Default Service Standard quickly, securely and cost effectively.",
		new DateRange(new Date(2013, 3), new Date(2014, 3))),

	fundslibrary: "fundslibrary".toSetting(
		"Fundslibrary",
		"FundsLibrary is one of the investments industry's leading providers of fund data, related regulatory services and software solutions.",
		new DateRange(new Date(2014, 3), new Date(2015, 2))),

	abide: "abide".toSetting(
		"Abide Financial",
		"Abide Financial is a leading transaction reporting provider with proven solutions across multiple regulatory regimes.",
		new DateRange(new Date(2015, 3), new Date(2017, 10))
	),

	scottlogic: "scottlogic".toSetting(
		"Scott Logic",
		"UK-based software consultancy working in a variety of different sectors including capital markets; energy trading; e-trading; financial services; health care; oil & gas and the public sector.",
		new DateRange(new Date(2017, 10), undefined)
	)
}
