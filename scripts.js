document.getElementById("country").selectedIndex = 0;

const minus_btns = document.querySelectorAll(".minus-orders");
const plus_btns = document.querySelectorAll(".plus-orders");
const form = document.getElementById("form");
const submit = document.getElementById("submit")

minus_btns.forEach((mins_btn) => {
  mins_btn.addEventListener("click", () => {
    if (mins_btn.parentElement.querySelector(".amount").innerHTML > 0) {
      mins_btn.parentElement.querySelector(".amount").innerHTML--;
      updateTotal()
    }
  });
});

plus_btns.forEach((plus_btn) => {
  plus_btn.addEventListener("click", () => {
    plus_btn.parentElement.querySelector(".amount").innerHTML++;
    updateTotal()
  });
});


const updateTotal = ()=> {
  const total = document.getElementById("total")
  const prices = document.querySelectorAll(".price")
  const amounts = document.querySelectorAll(".amount")

  let final = 0;
  for(let i=0; i<prices.length; i++) {
   final = final + ( prices[i].innerHTML * amounts[i].innerHTML)

    
  }

  if(final==0) {
    total.innerHTML = 0
  }
  else{
    total.innerHTML = (final + 19).toFixed(2)
  }
  

}


function submitfun(e) {
  e.preventDefault()
  console.log("monkey")
  alert("submitted")
}

window.addEventListener("keydown", (e)=> {
  if(e.keyCode == 13) {
    submit.click()
  }
})
form.addEventListener("submit", (e)=> {
  e.preventDefault()
  alert("Form is submitted")

})