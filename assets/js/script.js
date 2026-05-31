// for th well come to style && for the pop up open once time while page get refresh 

document.addEventListener("DOMContentLoaded", function(){
  const loginpopup =document.getElementById("loginPopup");
  const closepopup =document.getElementById("closepopup");

  if(!sessionStorage.getItem("mess")){
    setTimeout(function(){
      alert("well come to the stylera");
      sessionStorage.setItem("mess","true")
    },1000)

  }
  if(sessionStorage.getItem("ispopup")!=="true"){
    setTimeout(function(){
    loginpopup.classList.add("show");
    sessionStorage.setItem("ispopup" ,"true");
    },2000);

    closepopup.addEventListener("click" ,function(){
      loginpopup.classList.remove("show");
    })
  }
})




const wishes = document.querySelectorAll(".wish");

for (let heart of wishes) {
  heart.addEventListener("click", function() {
    this.classList.toggle("fa-regular");
    this.classList.toggle("fa-solid");
  });
}




let buttons = document.querySelectorAll(".view");
for(let btn of buttons){
  btn.addEventListener("click" ,function(){
    let product =this.closest(".product");
    let price=product.querySelector(".price").innerText;
    let mrp = product.querySelector(".mrp").innerText;
    let off = product.querySelector(".off").innerText;    

    alert(
      "Price: " + price +
      "\nMRP: " + mrp +
      "\nOffer: " + off
    );
  });
}






let shop = document.getElementById("shopnow");
let collection = document.getElementById("collection");

shop.addEventListener("click", function () {
  collection.scrollIntoView({
    behavior: "smooth"
  });
});



// as the btn of season ge tclick tehn the seasonal product get seen deue to off it

let bestoffbtn = document.querySelector(".btn1");
let products= document.querySelectorAll(".product");

bestoffbtn.addEventListener("click", () => {

  let filterApplied= bestoffbtn.classList.contains("active");
  bestoffbtn.classList.toggle("active");

  products.forEach(product => {
    let offValue=parseInt(
      product.querySelector(".off").innerText
    );

    if (!filterApplied && offValue < 60) {
      product.style.display ="none";  
    } else {
      product.style.display= "block";  
    }
  });

});

//    add to card

let cartButtons = document.querySelectorAll(".add-cart");
cartButtons.forEach((btn)=>{
  btn.addEventListener("click" ,()=>{
    let product =btn.closest(".product");
    let brandName =product.querySelector("h5").innerText;
    alert(`"${brandName}" : is added to your card`);
  })
})



