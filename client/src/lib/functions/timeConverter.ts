// time converter is responsible for converting the
// value from websocket into 'DD-MMMM-YYYY HH:MM:SS' format
// it returns a string

export const timeConverter = (timestamp: Date | number = Date.now()) => {
  var a = new Date(timestamp);
  var year = a.getFullYear();
  var month = a.toLocaleString("default", { month: "long" });
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
};
