/* Trail Browser — needs fixing.

   Eight faults are planted across index.html, styles.css and this file.
   Some throw. Some are silent. One is a security hole.

   Do not rewrite the app. Find each fault, fix it, and record it in
   worksheet.md. */

import { TRAILS } from "./data.js";

const results = document.querySelector("#results");
const count = document.querySelector("#count");
const form = document.querySelector("#controls");


export function matches(trail, search, rating) {
  const bySearch = trail.name.toLowerCase().includes(search.toLowerCase());
  const byRating = rating === "all" || trail.rating === rating;
  return bySearch && byRating;
}


export function sortByDistance(trails) {
  const sorted = trails.slice();

  sorted.sort(function (a, b){
    return a.km - b.km;
  });
  return sorted;
}


export function render(trails) {
  results.innerHTML = "";

  trails.forEach((trail) => {
    const li = document.createElement("li");
    li.className = "trail";

    const trailNameSpan = document.createElement("span");
    trailNameSpan.className = "trail-name";
    trailNameSpan.textContent = trail.name;
    
    
    const trailDistSpan = document.createElement("span");
    trailDistSpan.className = "trail-km";
    trailDistSpan.textContent = `${trail.km} km`;
    
    li.append(trailNameSpan, trailDistSpan);
    results.append(li);
  });

  count.textContent = trails.length + " trails";
}


function apply() {
  const search = document.querySelector("#search").value;
  const rating = document.querySelector("#rating").value;

  const found = TRAILS.filter((t) => matches(t, search, rating));
  render(sortByDistance(found));
}


form.addEventListener("submit", () => {
  event.preventDefault();
  apply();
});


apply();
