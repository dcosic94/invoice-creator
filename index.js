let services = [];
const carWash =  {
    service: "Wash Car",
    price: 10,
  };
const mowLawn =  {
    service: "Mow Lawn",
    price: 20,
  };
const pullWeeds =  {
    service: "Pull Weeds",
    price: 30,
  };
const washBtn = document.getElementById("wash");
const mowBtn = document.getElementById("mow");
const pullBtn = document.getElementById("pull");
const sendInvoice = document.getElementById("send-invoice");
const totalAmount = document.getElementById("total-amount");
const note = document.querySelector(".note-paragraph");
const tasksContainer = document.querySelector(".task-container");
const removeBtnOne = document.getElementById("remove-one");
let sum = 0;

function renderServices () {
    let service = "";
    for (let i = 0; i < services.length; i++) {
      service += `
        <div class="flex">
        <p class="services">${services[i].service}<span id="remove-one" class="remove" onclick="remove()">Remove</span></p> 
        <p class="price"><span class="dollar">$</span>${services[i].price}</p>
        </div>
        `;
    }
    tasksContainer.innerHTML = service;
    note.textContent = "We accept cash, credit card, or PayPal";
};

washBtn.addEventListener("click", function(){
    services.push(carWash);
    renderServices();
    washBtn.disabled = true;
    sum = sum + carWash.price;
    totalAmount.textContent = "$" + sum;
});

mowBtn.addEventListener("click", function () {
    services.push(mowLawn);
    renderServices();
    mowBtn.disabled = true;
    sum = sum + mowLawn.price
    totalAmount.textContent = "$" + sum;
});

pullBtn.addEventListener("click", function () {
    services.push(pullWeeds);
    renderServices();
    pullBtn.disabled = true;
    sum = sum + pullWeeds.price
    totalAmount.textContent = "$" + sum;
});



sendInvoice.addEventListener("click", function() {
    sum = 0;
    totalAmount.textContent = "$" + sum;
    washBtn.disabled = false;
    mowBtn.disabled = false;
    pullBtn.disabled = false;
    tasksContainer.innerHTML = "";
    note.textContent = "";
    services = [];
});

