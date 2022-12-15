let int = Number(prompt("Masofani kiriting:"));

if (!isNaN(int) && int > 0) {
  let byPer = document.querySelector("#person");
  byVelo = document.querySelector("#velo");
  byCar = document.querySelector("#car");
  byAir = document.querySelector("#air");

  let per = 3.6;
  velo = 20.1;
  car = 70;
  air = 800;
  //person
  let hour = Math.floor(int / per);
  minute = Math.floor((int / per - hour) * 60);
  second = Math.floor(((int / per - hour) * 60 - minute) * 60);
  byPer.textContent = `${hour}soat ${minute} minut ${second} sekund`;
  //velo
  let bicyHour = Math.floor(int / velo);
  bicyMinute = Math.floor((int / velo - bicyHour) * 60);
  bicySecond = Math.floor(((int / velo - bicyHour) * 60 - bicyMinute) * 60);
  byVelo.textContent = `${bicyHour} soat ${bicyMinute} minut ${bicySecond} sekund`;
  //car
  let carHour = Math.floor(int / car);
  carMinute = Math.floor((int / car - carHour) * 60);
  carSecond = Math.floor(((int / car - carHour) * 60 - carMinute) * 60);
  byCar.textContent = `${carHour} soat ${carMinute} minut ${carSecond} sekund`;
  //air
  let airHour = Math.floor(int / air);
  airMinute = Math.floor((int / air - airHour) * 60);
  airSecond = Math.floor(((int / air - airHour) * 60 - airMinute) * 60);
  byAir.textContent = `${airHour} soat ${airMinute} minut ${airSecond} sekund`;
} else {
  alert("Noto'g'ri qiymat kiritildi");
}
