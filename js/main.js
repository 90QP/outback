const elLis = document.querySelectorAll('#gnb > ul > li')
const elBar = document.querySelector('.bar')

elLis.forEach(function(menu){
  menu.onmouseover = function(){
    elBar.style = `
      width:${this.offsetWidth}px;
      left:${this.offsetLeft}px;
    `
  }

  menu.onmouseleave = function(){
    elBar.style = `
    width:0px;
    left:${this.offsetLeft}px;
    transform:translateX(${this.offsetWidth / 2 }px);
  `
  }
})