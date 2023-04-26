
const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex";
    
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none";
})

let index = 0
const imgNum = document.querySelectorAll('.slider-content-left-top img')

const rightbtn = document.querySelector('#btnright')
rightbtn.addEventListener("click", function(){
    index = index+1
    if(index>imgNum.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index*100+"%";
    removeactive()
    imgLi[index].classList.add("active") 
})

const leftbtn = document.querySelector('#btnleft')
leftbtn.addEventListener("click",function(){
    index = index-1
    if(index<0){
        index=imgNum.length-1
    }
    document.querySelector(".slider-content-left-top").style.right =index*100+"%";
    removeactive()
    imgLi[index].classList.add("active") 
})

const imgLi = document.querySelectorAll('.slider-content-left-bottom li')

imgLi.forEach(function(imga,index){
    imga.addEventListener("click",function(){
        document.querySelector(".slider-content-left-top").style.right = index*100+"%"
        removeactive()
        imga.classList.add("active")
    })
})
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}

function imgAutoR () {
    index = index+1
    if(index>imgNum.length-1){
        index=0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index*100+"%";
   imgLi[index].classList.add("active") 
}
setInterval(imgAutoR,4000)
