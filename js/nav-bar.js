let arr = [
  {
    a: "index.html",
    name: "| Trang chủ |",
  },
  {
    a: "about-me.html",
    name: " |Giới thiệu bản thân |",
  },
  {
    a: "product.html",
    name: "| Sản phẩm |",
  },
  
  {
    a: "contact.html",
    name: "| Liên hệ |",
  },
];

let navBar = document.querySelector(".nav-bar");
if(navBar){
    navBar.innerHTML = '';
    for(let i of arr){
        navBar.innerHTML +=`     <div class="link">
        <a href="/${i.a}">${i.name}</a>
    </div>
    `
    }
}
