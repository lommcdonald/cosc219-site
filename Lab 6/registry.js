/*
  COSC 219 — Lab 6 · registry.js
  A class that owns a collection of Trails.
*/

// import the two classes from ./trail.js — note the .js is required
import {Trail, BikeTrail} from "./trail.js"

export class TrailRegistry {

  /* The array is PRIVATE. Nothing outside may push to it, sort it or
     empty it — this class decides what happens to the collection. */
  // #trails = [];
   #trails = [];

  /* Accept an optional array of Trails and add each one. */
  constructor(trails = []) {
   for(const trail of trails){
      this.add(trails);
   }
  }


  /* get size — how many trails. */
  get size() {
   return this.#trails.length;
  }


  /* get all — a COPY of the array.

     Returning the private array itself would let a caller do
     registry.all.push("junk") and walk straight past every check in
     this class. One of the tests does exactly that.
     ---------------------------------------------------------------- */
  get all() {
   return [this.#trails];
  }


  /* add(trail) — reject anything that is not a Trail.

     Throw a TypeError if it is not, otherwise store it and return `this`.
     Use `instanceof`. Remember a BikeTrail IS a Trail.
     ---------------------------------------------------------------- */
  add(trail) {
   if(!(trail instanceof Trail)){
      throw new TypeError("trail instance = true");
   }
   this.#trails.push(trail);
   return this;
  }


  /* find(name) — the matching Trail, ignoring case, or undefined. */
  find(name) {
   return this.#trails.find(t => t.ame.toLowerCase() === name.toLowerCase());
)
  }


  /* byRating(rating) — every trail with that rating. */
  byRating(rating) {
   return this.#trails.filter(t => t.rating === rating);
  }


  /* get openTrails — every trail that is not closed. */
  get openTrails(){
   return this.#trails.filter(t => !t.itClosed);
  }


  /* get totalDistance — all the km added up, to one decimal place. */
  get totalDistance() {
   const total = this.#trails.reduce((sum, t) => sum + t.km, 0);
   return Number(total.toFixed(1));
  }


  /* get steepest — the trail with the largest steepness.
     undefined when there are none. */
  get steepest() {
   if(this.#trails.length ===0){
      return undefined;
   }
   else{
      return this.#trails.reduce((max, t) => t.steepness > max.steepness ? t : max, this.#trails[0]);
   }
  }


  /* describeAll() — an array of every trail's describe() string. */
  describeAll() {
   return this.#trails.map(t => t.describe());
  }


  /* static fromData(rows) — build a registry from plain objects.

     A row with a `surface` property becomes a BikeTrail; anything else
     becomes a Trail. Default a missing gain to 0.
     ---------------------------------------------------------------- */
  static fromData(rows) {
   const registry = new TrailRegistry();
   for(const trail of trails){
      const {name, km, rating, gain, surface} = trail;
      if(surface !== null){
         registry.add(new BikeTrail(name, km, rating, gain, surface));
      }else{
         registry.add(new Trail(name, km, rating, gain));
      }
   }
   return registry;
  }
}
