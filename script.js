let classes=[];
let savedDarkMode = localStorage.getItem("darkMode");
if (savedDarkMode === "true") {
  document.body.classList.add("dark-mode");
}
updateDarkModeIcon();

let saved = localStorage.getItem("classes"); if (saved) { classes = JSON.parse(saved); }
function renderList() {
  let years = ["Freshman", "Sophomore", "Junior", "Senior"];
  let fullHTML = "";

  let lastPopulated = null;
  years.forEach(function(y) {
    let group = classes.filter(function(c) { return c.year === y; });
    if (group.length > 0) lastPopulated = y;
  });

  years.forEach(function(y) {
    let group = classes.filter(function(c) { return c.year === y; });
    let openAttr = (y === lastPopulated) ? " open" : "";
    fullHTML += "<details" + openAttr + "><summary>" + y + "</summary>";
    if (group.length > 0) {
      fullHTML += group.map(function(c) {
        let realIndex = classes.indexOf(c);
        return "<div class='class-row'>" +
          "<span class='class-name'>" + c.name + "</span>" +
          "<span class='class-grade editable' onclick='editField(" + realIndex + ", \"grade\")'>" + c.grade + "</span>" +
          "<span class='class-type'>" + c.type + "</span>" +
          "<button onclick='removeClass(" + realIndex + ")'>Remove</button>" +
          "</div>";
      }).join("");
    } else {
      fullHTML += "<p><em>No classes added yet.</em></p>";
    }
    fullHTML += "</details>";
  });

  document.getElementById("classList").innerHTML = fullHTML;
}

function editField(index, field) {
  let newValue = prompt("New value for " + field + ":", classes[index][field]);
  if (newValue !== null && newValue !== "") {
    classes[index][field] = newValue;
    localStorage.setItem("classes", JSON.stringify(classes));
    renderList();
  }
}

renderList();


function gradeToPoints(grade) {
  if (grade >= 93) return 4.00;
  if (grade >= 90) return 3.75;
  if (grade >= 87) return 3.50;
  if (grade >= 83) return 3.00;
  if (grade >= 80) return 2.75;
  if (grade >= 77) return 2.50;
  if (grade >= 73) return 2.00;
  if (grade >= 70) return 1.75;
  if (grade >= 67) return 1.50;
  if (grade >= 63) return 1.00;
  if (grade >= 60) return 0.75;
  return 0.00;
}

function calculateGPA() {
  let total = 0;
  let honorsCount = 0;
  let apCount = 0;

  for (let i = 0; i < classes.length; i++) {
    total += gradeToPoints(Number(classes[i].grade));
    if (classes[i].type === "Honors") honorsCount++;
    if (classes[i].type === "AP" || classes[i].type === "ECE") apCount++;
  }

  let unweighted = total / classes.length;
  let weighted = unweighted + (honorsCount * 0.05) + (apCount * 0.07);

  return { unweighted: unweighted, weighted: weighted };
}

document.getElementById("darkModeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  let isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
  updateDarkModeIcon();
});

document.getElementById("addBtn").addEventListener("click", function(){
let name=document.getElementById("className").value;
let grade=document.getElementById("grade").value;
let type=document.getElementById("type").value;
let year = document.getElementById("year").value;
if (name === "" || grade === "") {
  alert("Please fill in all parameters.");
  return;
}
classes.push({name:name, grade:grade, type:type, year:year});
console.log(classes);
localStorage.setItem("classes", JSON.stringify(classes));
renderList();


document.getElementById("className").value = "";
document.getElementById("grade").value = "";
document.getElementById("type").value = "Normal";

})


document.getElementById("calcBtn").addEventListener("click", function() {
  let result = calculateGPA();
  document.getElementById("gpaResult").innerHTML =
    "Unweighted: " + result.unweighted.toFixed(2) + " | Weighted: " + result.weighted.toFixed(2);
});

function removeClass(index) {
  classes.splice(index, 1);
  localStorage.setItem("classes", JSON.stringify(classes));
  renderList();
}

function updateDarkModeIcon() {
  let isDark = document.body.classList.contains("dark-mode");
  document.getElementById("darkModeBtn").textContent = isDark ? "☀️" : "🌙";
}
