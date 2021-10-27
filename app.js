const progressBar = document.querySelector("#progress-bar");
const section   = document.querySelector("section");

const animateProgressBar = () => {
  let scrollDistance = -(section.getBoundingClientRect().top);
  let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
  let value = Math.floor(progressWidth)
  if(value < 0){
      progressBar.style.width = "0%";
  }else if (value > 100){
      progressBar.style.width = "100%"
  } else {
      progressBar.style.width = value + "%";
  }

}

window.addEventListener("scroll", animateProgressBar);