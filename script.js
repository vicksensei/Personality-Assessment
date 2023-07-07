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
  if (stat === valAmount) {
    return;
  }
  if (stat - valAmount > pool) {
    return;
  }
  pool += stat - valAmount;
  stats[valName] = valAmount;
  statElement.innerHTML = `${valName} : ${stats[valName]} `;
  console.log("stat-valAmount :>> ", stat - valAmount);
  console.log("pool :>> ", pool);
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
window.addEventListener("load", (event) => {
  Object.keys(stats).map((s) => {
    content.innerHTML +=
      `<div class='stat' id='${s}'> ` +
      `<span id='${s}_span'>${s} : ${stats[s]} </span>` +
      `<div class='points'>` +
      `<div class='point gray' id='${s}_p1' onClick='clickPoint("${s}", 1)'></div>` +
      `<div class='point gray' id='${s}_p2' onClick='clickPoint("${s}", 2)'></div>` +
      `<div class='point gray' id='${s}_p3' onClick='clickPoint("${s}", 3)'></div>` +
      "</div></div>";
  });

  //   for
});
