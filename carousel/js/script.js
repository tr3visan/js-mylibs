let slider = document.getElementById('slider')
let sliderMax = slider.childElementCount;
let sliderVal = 0;

const right = document.querySelector('.controll-right')

right.addEventListener('click', () => {
  if(++sliderVal == sliderMax) {
    sliderVal = 0
  }  
  slider.style.left = '-' + sliderVal + '00%'
})

const left = document.querySelector('.controll-left')

left.addEventListener('click', () => {
  if(--sliderVal == -1) {
    sliderVal = sliderMax - 1
  } 
  slider.style.left = '-' + sliderVal + '00%'
})