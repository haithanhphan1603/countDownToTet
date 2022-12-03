const countDownDate = new Date(2023, 0, 22).getTime();
console.log(countDownDate);

setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //   console.log(days);
  document.getElementById("demo").innerHTML =
    days +
    "days " +
    hours +
    "hours " +
    minutes +
    "minutes " +
    seconds +
    "seconds ";
}, 1000);
