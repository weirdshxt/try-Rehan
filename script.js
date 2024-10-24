let navbar = document.querySelector(".navbar");

document.querySelector("#bars-btn").onclick = () => {
  navbar.classList.toggle("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  if (cartItem.style.right === "0px" || cartItem.style.right === "0") {
    cartItem.style.right = "-100%"; 
  } else {
    cartItem.style.right = "0";
  }
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  if (searchForm.style.transform === "scaleY(1)") {
    searchForm.style.transform = "scaleY(0)";
  } else {
    searchForm.style.transform = "scaleY(1)";
  }
};
