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
		"Toplevel computing",
		"Toplevel computing - Graduate Developer",
		new DateRange(new Date(2013, 3), new Date(2014, 3))),

	fundslibrary: "fundslibrary".toSetting(
		"Fundslibrary",
		"Fundslibrary - Junior Developer",
		new DateRange(new Date(2014, 3), new Date(2015, 2))),

	abide: "abide".toSetting(
		"Abide Financial",
		"Regulatory reporting for financial markets",
		new DateRange(new Date(2015, 3), new Date(2017, 10))
	),

	scottlogic: "scottlogic".toSetting(
		"Scott Logic",
		"Software Consultency",
		new DateRange(new Date(2017, 10), new Date())
	)
}
