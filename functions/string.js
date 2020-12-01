// Ham trim
module.exports.trim = function (str) {
  return str.trim();
};

// Ham format ten
module.exports.convert = function (str) {
    var result = "";
    str = str.trim();
    var start = str.indexOf(" ");
    var end = str.lastIndexOf(" ");
    
    if (start == end) {
      var lowerCase = str.toLowerCase();
      var arr = lowerCase.split(" ");
      if (arr.length >= 2) {
        for (var i = 0; i < arr.length; i++) {
          var st = arr[i];
          result += st[0].toUpperCase() + st.slice(1) + " ";
        }
      } else {
        var st = arr[0];
        result += st[0].toUpperCase() + st.slice(1) + " ";
      }
      return result.trim();
    } else {
      var string = str.slice(0, start) + str.slice(end);
      var lowerCase = string.toLowerCase();
      var arr = lowerCase.split(" ");
      if (arr.length >= 2) {
        for (var i = 0; i < arr.length; i++) {
          var st = arr[i];
          result += st[0].toUpperCase() + st.slice(1) + " ";
        }
      } else {
        var st = arr[0];
        result += st[0].toUpperCase() + st.slice(1) + " ";
      }
      return result.trim();
    }
};
