###Lab 7



***AI Declaration:***
 Used to better understand topics, trouble shoot, fix bugs find typos etc.

 Help study event delegation, storage parting etc in conjucntion with midterm studying/prep

Used AI to get the website working properly for part D, pointed to adding the DOM section in app.js




```
Q&A Section 

Why the listener is on the list rather than the buttons?

```
The click listener is attachend on the because the buttons are deconstructied then reinstanciated ever time the list refreshes hich would eliminate the listeners attached to them directly

`what happens if loadTrails does not guard against corrupt dad?`

if we didnt guard against corrupt data in the loadTrails trying to JSON.parse() will cause an error an break the code on start up

