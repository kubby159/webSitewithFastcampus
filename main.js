//구구단

const tableEl = document.createElement("table");
for (let i = 2; i < 10; i++) {
  let trEl = document.createElement("tr");
  for (let j = 1; j < 10; j++) {
    let tdEl = document.createElement("td");
    tdEl.append(i * j);
    trEl.append(tdEl);
  }
  tableEl.append(trEl);
}

document.querySelector("body").append(tableEl);
