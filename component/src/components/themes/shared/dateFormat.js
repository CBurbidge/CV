let formatDate = date => date.match(/20\d\d/)

export default {
    formatDate,
    formatDiff: function(startDate, endDate){
        function monthDiff(d1, d2) {
            var months;
            months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months -= d1.getMonth();
            months += d2.getMonth();
            return months <= 0 ? 0 : months;
          }
      
          var diffInMonths = monthDiff(
            new Date(startDate),
            (endDate ? new Date(endDate) : new Date())
          )
      
          var diffInYears = 0;
          if (diffInMonths > 11) {
            diffInYears = Math.floor(diffInMonths / 12.0)
            diffInMonths -= diffInYears * 12
          }
      
          var formatDiff = function () {
            var years = diffInYears > 0 ? diffInYears + "y" : ""
            var months = diffInMonths > 0 ? diffInMonths + "m" : ""
            if (years !== "" && months !== "") {
              return years + ", " + months
            } else {
              return years + months
            }
          }
      
        return formatDiff();
    }
}