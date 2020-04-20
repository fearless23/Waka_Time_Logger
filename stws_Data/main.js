const { data } = require("./wakatime_stws.js");
const fs = require("fs");

// console.log(Object.keys(data.days[0]));
const keys = [
  "categories",
  "date",
  "dependencies",
  "editors",
  "grand_total",
  "languages",
  "machines",
  "operating_systems",
  "projects"
];
const len = data.days.length;
// const len = 3;
let sum = 0;
let dayWorked = 0;
let dates = [];
let times = [];
for (let i = 0; i < len; i++) {
  const { date, categories, grand_total, machines } = data.days[i];
  // console.log(i, date);
  const machine = machines[0];
  let time  = 0;
  if (machine) {
    dayWorked++;
    time = machine.hours * 60 + machine.minutes;
    sum += time;
    
  }
  fs.writeFile("data.json", time, (a, b) => {
    console.log(a, b);
  });
}
console.log(data.days[0].date);
console.log(data.days[len - 1].date);
const d = sum / dayWorked / 60;
const hours = Math.floor(d);
const min = (d - hours) * 60;
console.log(sum, dayWorked, len, hours, min);
console.log(times);
fs.writeFile("data.json", times, (a, b) => {
  console.log(a, b);
});
