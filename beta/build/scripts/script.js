var list = document.querySelector("#list");
var nameHeader = document.querySelector("#name-header");
var dropdown = document.querySelector(".dropdown");
var chip = document.querySelector("#chip");
var buttons = document.querySelectorAll(".menu button");
 
var ascending = true;   // true = A to Z, false = Z to A


function playRowAnimation() {
    var rows= list.querySelectorAll("li");
    var count = 0;
    
    for (var i=0; i < rows.length; i++){
        var row = rows[i];
        if (row.hidden) continue;

        row.classList.remove("fade-in");
        void row.offsetWidth;
        row.style.animationDelay = (count * 30) + "ms";
        row.classList.add("fade-in");
        count++;
    }
}

/* Sorting A-z Button */
nameHeader.addEventListener("click", function () {
    ascending = !ascending;
   //arrow flips upward
    if (ascending) { nameHeader.classList.remove("descending");

    }
     else { nameHeader.classList.add("descending");
    //arrow flips downward    
}
list.classList.add("sorting");
setTimeout(function () {
//Rows into arrays for sorting
var rows= [];
var allRows = list.querySelectorAll("li");
for (var i = 0; i < allRows.length; i++) {
    rows.push(allRows[i]);
}
rows.sort(function (a, b) {
    var result = a.textContent.localeCompare(b.textContent);
    if (!ascending) result = -result;
    return result;
});
for (var j = 0; j < rows.length; j++) {
    list.appendChild(rows[j]);
}
list.classList.remove("sorting");
}, 200);
});


chip.addEventListener("click", function () {
    dropdown.classList.toggle("open");
});
document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("open");
  }
});
