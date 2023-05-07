
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

function toggleRegisterForm() {
    var registerForm = document.getElementById("register-form");
    if (registerForm.style.display === "none") {
        registerForm.style.display = "block";
    } else {
        registerForm.style.display = "none";
    }
}
function registerUser() {
    // Lấy giá trị người dùng nhập vào
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    // Kiểm tra nếu tên đăng nhập và mật khẩu hợp lệ
    if (username != "" && password != "" && email != "") {
        alert("Đăng kí thành công");
    } else {
        alert("Vui lòng điền đầy đủ thông tin");
    }
}

function toggleLoginForm() {
    var loginForm = document.getElementById("login-form");
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
    } else {
        loginForm.style.display = "none";
    }
}

// Hàm xử lý hành động đăng nhập
function loginUser() {
    // Lấy giá trị người dùng nhập vào
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra nếu tên đăng nhập và mật khẩu hợp lệ
    if (username === "admin" && password === "123456") {
        alert("Đăng nhập thành công");
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
    }
}
