let countEl = document.getElementById("count-el"); // pass in arguments
let saveEL = document.getElementById("save-el");

let count = 0;
function increment() {
    count += 1;                                    // increment count on click
    countEl.textContent = count;
}

function save() {
    let previousEntries = count + " - ";
    saveEL.textContent += previousEntries;        // save count, add to previousEntries tab
    countEl.textContent = 0;                      // reset counter & count after each save
    count = 0;
}
