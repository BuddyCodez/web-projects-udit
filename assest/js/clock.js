let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    //some issues resolved
  }
  if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  document.getElementById("hrs").innerText = hrs;
  document.getElementById("min").innerText = mins;
  document.getElementById("sec").innerText = secs;
  document.getElementById("per").innerText = period;
  setTimeout(clock, 1000);
};

clock();
