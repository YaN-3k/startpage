function get_time_clock() {
  current_date = new Date();

  var minute = current_date.getMinutes();
  var hour = current_date.getHours();

  minute = minute < 10 ? "0" + minute : minute;

  indicator = hour < 12 ? "am" : "pm";

  hour = hour < 13 ? hour : hour - 12;

  if (hour == 0) {
    hour = 12;
  }

  return hour + ":" + minute + indicator;
}

function get_time_log() {
  current_date = new Date();

  var day = current_date.getDate();
  var month = current_date.getMonth() + 1;
  var year = current_date.getFullYear();
  var hour = current_date.getHours();
  var minute = current_date.getMinutes();
  var second = current_date.getSeconds();

  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  return (
    day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second
  );
}

function welcome() {
  current_date = new Date();
  var hour = current_date.getHours();
  if (hour <= 12) {
    var phrase = "Good Morning";
  } else if (hour > 12 && hour <= 18) {
    var phrase = "Good Aftermoon";
  } else {
    var phrase = "Good Evening";
  }
  return phrase;
}

function update_clock() {
  document.getElementById("clock").innerText = get_time_clock();
  document.getElementById("title").innerText = welcome();
}

window.onload = function() {
  document.getElementById("log_time").innerText = get_time_log();
  update_clock();
  setInterval(update_clock, 60000);
};
