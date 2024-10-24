let navbar = document.querySelector(".navbar");

document.querySelector("#bars-btn").onclick = () => {
  navbar.classList.toggle("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
};

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    console.log("kabir")
    searchForm.classList.toggle('active');
}

// let btn = document.querySelector("#search-btn");

// btn.addEventListener("click", () => {
//   console.log("kabir");
//   searchForm.classList.toggle(".active");
// });