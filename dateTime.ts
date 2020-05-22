import {
  dayOfYear,
  currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";

console.log(dayOfYear(new Date("2020-05-22")));
console.log(currentDayOfYear());
