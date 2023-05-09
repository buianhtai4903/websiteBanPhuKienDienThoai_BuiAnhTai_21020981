
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
    if (username != "admin" && password != "123456" && email != "123@gmail.com") {
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

/* shop cart*/
const cartBtn = document.getElementById('cart-btn');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const clearCartBtn = document.getElementById('clear-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const products = document.getElementById('products');

let cartArray = [];

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cartArray.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} <span>$${item.price.toFixed(3)}</span><br>`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalPrice.textContent = `Tổng: ${total.toFixed(3)}Vnđ`;
}

function addToCart(name, price) {
  cartArray.push({ name, price });
  renderCart();
}

function clearCart() {
  cartArray = [];
  renderCart();
}

function checkout() {
  checkoutBtn.disabled = true;
  setTimeout(() => {
    alert('Cảm ơn bạn đã thanh toán!');
    clearCart();
    checkoutBtn.disabled = false;
  }, 1000);
}

cartBtn.addEventListener('click', () => {
  cart.classList.toggle('show');
});

products.addEventListener('click', event => {
  if (event.target.classList.contains('add-to-cart-btn')) {
    const name = event.target.getAttribute('data-name');
    const price = parseFloat(event.target.getAttribute('data-price'));
    addToCart(name, price);
  }
});

clearCartBtn.addEventListener('click', clearCart);

checkoutBtn.addEventListener('click', checkout);


