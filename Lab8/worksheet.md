# Lab 8 — Debugging worksheet

Fill one block in for each fault you find. **The reasoning is what is marked**,
not the fix — a one-line correction with no explanation earns very little.

Copy the block as many times as you need.

---

## Fault 1

**Symptom** — what did you see, or what did the checker say?
Checker said to fix the skipped heading levels, upon inspection the html went form h1 to h3 to i changed it to h2

**How I found it** — which tool, and what did it tell you?
(Console message? Elements panel? Reading the CSS? Tabbing through the page?)
i used the VSCode search feature and searched h1 then just looked for a skipped heading level based off the checker prompt

**Cause** — why did that happen? Name the concept, not just the line.
heading heirachy was violated

**Fix** — what you changed.
changed <h3> to <h2>

**Lecture** — which one covers this.
lecture 2 (stated in the check.html)

---

## Fault 2

**Symptom**
Check stated broken for control has a label

**How I found it**
visually looked at the form for a missing label or issues with the label 

**Cause**
code had a placeholder attribute instead of a label

**Fix**
added a label above the input and matched the for to the id

**Lecture**
Lecture 3

---

## Fault 3

**Symptom**
"box-sizing: border box is set" would have cause viewing issues on narrower screens (mobile)

**How I found it**
The checker stated the box-sizing issue

**Cause**
CSS Box Model default content-box, because width was 100% the pading and border got added on top of 100% and pushed the box past the edge.

**Fix**
added box-sizing: border-box; to styles.css

**Lecture**
Lecture 4

---

## Fault 4

**Symptom**
missing highlighting when tabbing through form

**How I found it**
check js and tabbing through the form

**Cause**
outline was set to none in styles.css

**Fix**
added 1px outline instyles.css

**Lecture**
lecture 4

---

## Fault 5

**Symptom**
Checker showed there was an issue with filter compares w/o converting types

**How I found it**
read through the matches function after seeing the prompt and looked for comparators

**Cause**
loose equality ==

**Fix**
changed == to === in app.js to compare values and types

**Lecture**
lecture 7

---

## Fault 6

**Symptom**
trails werent sorted by distance

**How I found it**
check.js pointed to it then went and looked at the sortByDistance() function

**Cause**
calling sort with no comparator

**Fix**
added numeric comparator based on km distance

**Lecture**
9

---

## Fault 7

**Symptom**
checker flagged a trail name put on the page as text

**How I found it**
check.js then looked through render function

**Cause**
using innerHTML pases the string as html hrather than plani text

**Fix**
switched render funtion to create span elements and set their text using .textContent

**Lecture**

lecture 13
---

## Fault 8

**Symptom**
page would flash and reset all filters

**How I found it**
using the page 

**Cause**
missing event.preventDefault(); in the event listenter on the sumbit

**Fix**
Added missing the event.preventDefault(); on the event listenter on the sumbit

**Lecture**
lecture 14

---

## One more thing

**Which fault took you longest, and why?**
The DOM section perticuarly the trail name as text issue, i think it took the longest as i have th eleast amount of experience rendering elements in js so switching from innerHTML to the spans took a while

**Which one would you never have found without the checker?**
the loose equality error, the innerhtml issue and the skipped head levels, probably also the box sizing as i never would have checked a different screen size than my own laptop without being prompted
