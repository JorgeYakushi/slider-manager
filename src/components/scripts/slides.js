export function setSlides(index) {
  const slides = document.getElementsByClassName("carousel__slide");
  let next;
  let prev;
  next = index + 1;
  prev = index - 1;
  if (next > slides.length - 1) {
    next = 0;
  }
  if (prev < 0) {
    prev = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    if (i === index) {
      slides[i].style["transform"] = "translateX(0%)";
      slides[i].style["transition"] = "all 0.5s";
    } else if (i === next) {
      slides[i].style["transform"] = "translateX(100%)";
    } else if (i === prev) {
      slides[i].style["transform"] = "translateX(-100%)";
    } else {
      slides[i].style["transform"] = "translateX(-100%)";
      slides[i].style["transition"] = "none";
    }
  }
}

var buttons = document.getElementsByClassName("nav__circle");
export function init() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].querySelector("i").classList.remove("fa-circle");
      }

      buttons[i].querySelector("i").classList.add("fa-circle");
    });
  }
}
