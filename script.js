let pool = 10;
const stats = {
  Funny: 0,
  Thoughtful: 0,
  Driven: 0,
  Intellectual: 0,
  Honest: 0,
  Romantic: 0,
  Humble: 0,
};
const content = document.getElementById("content");

function clickPoint(valName, valAmount) {
  const poolElement = document.getElementById("pool");
  let stat = stats[valName];
  const statElement = document.getElementById(`${valName}_span`);
  const pointCost = stat - valAmount;
  if (stat === valAmount) {
    return;
  }
  if (Math.abs(stat - valAmount) > pool) {
    return;
  }
  pool += stat - valAmount;
  stats[valName] = valAmount;
  statElement.innerHTML = `${valName} : ${stats[valName]} `;
  poolElement.innerHTML = pool;

  for (let i = 1; i <= 3; i++) {
    const item = document.getElementById(`${valName}_p${i}`);
    if (i <= valAmount) {
      if (item.classList.contains("gray")) {
        item.classList.remove("gray");
        item.classList.add("selected");
      }
    } else {
      if (item.classList.contains("selected")) {
        item.classList.remove("selected");
        item.classList.add("gray");
      }
    }
  }
}
function clearAll() {
  pool = 10;
  Object.keys(stats).map((s) => {
    stats[s] = 0;
  });
  initSection();
}

function clearStat(stat) {
  pool += stats[stat];
  stats[stat] = 0;
  const spanID = `${stat}_span`;
  const spanElement = document.getElementById(spanID);
  const poolElement = document.getElementById("pool");
  //   console.log("Clearing:", stat);
  for (let i = 1; i <= 3; i++) {
    const item = document.getElementById(`${stat}_p${i}`);
    if (item.classList.contains("selected")) {
      item.classList.remove("selected");
      item.classList.add("gray");
    }
  }
  spanElement.innerHTML = ` ${stat} : ${stats[stat]} `;
  poolElement.innerHTML = pool;
}

function initSection() {
  content.innerHTML =
    `<h1>Personality Self Assessment</h1>` +
    `<div> Points: <div id="pool"> 10 </div></div> `;
  Object.keys(stats).map((s) => {
    content.innerHTML +=
      `<div class='stat' id='${s}'> ` +
      `<div class='clear' onClick='clearStat("${s}")'>X</div>` +
      `<span id='${s}_span'>${s} : ${stats[s]} </span>` +
      `<div class='points'>` +
      `<div class='point gray' id='${s}_p1' onClick='clickPoint("${s}", 1)'></div>` +
      `<div class='point gray' id='${s}_p2' onClick='clickPoint("${s}", 2)'></div>` +
      `<div class='point gray' id='${s}_p3' onClick='clickPoint("${s}", 3)'></div>` +
      "</div></div>";
  });

  content.innerHTML += `<div class="button" onClick='clearAll()'>Clear</div>`;
}
window.addEventListener("load", (event) => {
  initSection();
});
