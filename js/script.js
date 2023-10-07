let newArr = JSON.parse(tasks);

console.log(newArr);

newArr.forEach(Element => {
        document.getElementById("result").innerHTML +=`
  <div class="card">
  <img src="${Element.image}" class="card-img-top" alt="">
  <div class="card-body">
  <h5 class="card-title">${Element.act}</h5>
  <p class="card-text">${Element.desc}</p>
  <hr>
  ⚠️Priority Level:
  <button class="btn  lvlb btn-success"><span class="priolvl">${Element.level}</span></button>
  <p> ${Element.dead} </p>
  <hr>
  </div>
</div>
     `;
});



let btns = document.querySelectorAll(".lvlb");

btns.forEach((btn, i) => {
    btn.addEventListener("click", function(){
            prior(i);
    })
});

btns.forEach((btn, i) => {
  btn.addEventListener("click", function(){
      prior(btn, i);
  })
});

function prior(button, i) { 
  if (newArr[i].level < 5){
    newArr[i].level++;
  } else {
    newArr[i].level = 0;
  }
  console.log(newArr[i]);
  
  button.querySelector(".priolvl").innerText = newArr[i].level;

  // Refresher
  button.classList.remove("btn-success", "btn-warning", "btn-danger");

  // Color script
  if (newArr[i].level >= 0 && newArr[i].level <= 1) {
      button.classList.add("btn-success");
  } else if (newArr[i].level >= 2 && newArr[i].level <= 3) {
      button.classList.add("btn-warning");
  } else if (newArr[i].level >= 4 && newArr[i].level <= 5) {
      button.classList.add("btn-danger");
  }
}



document.getElementById("sort").addEventListener("click", function(){
    let newVar = newArr.sort((a, b) => b.level - a.level);
    document.getElementById("result").innerHTML = "";
    newVar.forEach(element => {
        document.getElementById("result").innerHTML += `
        <div class="card">
      <img src="${element.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.act}</h5>
        <p class="card-text">${element.desc}</p>
        <hr>
        <p> ${element.dead} </p>
        ⚠️Priority Level:
        <button class="btn lvlb btn-success"><span class="priolvl">${element.level}</span></button>
        <hr>
      </div>
    </div>
        `;
        const currentIndex = newVar.indexOf(element);
        const levelButton = document.querySelectorAll(".lvlb")[currentIndex];

       
        if (element.level >= 0 && element.level <= 1) {
            levelButton.classList.add("btn-success");
        } else if (element.level >= 2 && element.level <= 3) {
            levelButton.classList.add("btn-warning");
        } else if (element.level >= 4 && element.level <= 5) {
            levelButton.classList.add("btn-danger");
        }
    });
});







