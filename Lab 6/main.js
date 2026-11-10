/*
  COSC 219 — Lab 6 · main.js
  The only file that touches the page. Modules only work over http://,
  so open index.html with Live Server.
*/

// import TRAIL_DATA from ./data.js and TrailRegistry from ./registry.js
import {TRAIL_DATA} from "./data.js";
import{TrailRegistry} from "./registry.js";

/* Build a registry from the data, close Bear Creek, then:
const registry = TrailRegistry.fromData(Trail_Data)

     · put one <li> per trail into #trails, using describeAll()
     · write a line into #summary in this exact shape:

       
*/
//Build a registry from the data, close Bear Creek, then:
const registry = TrailRegistry.fromData(Trail_Data);
registry.find("Bear Creek").close();
//· put one <li> per trail into #trails, using describeAll()

const trailList = document.querySelector("#trails");
for(const desc of registry.describeAll()){
  const li = document.createElement("li");
  li.textContent = desc;
  trailList.append(li);
}

// · write a line into #summary in this exact shape:
//6 trails, 5 open, 46.7 km total. Steepest: Pincushion Peak.
const summaryQuery = document.querySelector("#summary");
summaryQuery.textContent = `${registry.size} trails, ${registry.openTrails.length} open, ${registry.totalDistance}} km total. Steepest: ${registry.steepest.name}}`;
