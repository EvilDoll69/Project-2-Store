const images = document.getElementsByClassName("item");

images.addEventListener("mouseover", function(e) {
  images.classList.add("hover");
})

console.log(images);