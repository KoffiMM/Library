let cont = document.querySelector(".container");
let formdata = document.querySelectorAll("input");
document.getElementById("newBook").addEventListener("click", openForm);
let submit = document.getElementById("submit");

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookInfo = function () {
    return [title, author, pages];
  };
}

function addBookToLibrary(title, author, pages) {
  // do stuff here
  document.getElementById("form-info").style.display = "none";

  let book = new Book(title, author, pages);
  myLibrary.push(book);
  let str1 = `Title:${book.title}`;
  let str2 = `Author: ${book.author}`;
  let str3 = `Pages: ${book.pages}`;
  var d = document.createElement("div");
  let div = document.createElement("div");
  div.className = "ui cards";
  let div1 = document.createElement("div");
  div1.className = "card";
  let div2 = document.createElement("div");
  div2.className = "content";
  let div3 = document.createElement("div");
  div3.className = "header";
  let div4 = document.createElement("div");
  div4.className = "description";

  document.getElementById("test").appendChild(div);
  div.appendChild(div1);
  div1.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(div4);
  const para = document.createElement("p");
  para.textContent = str1;
  div4.appendChild(para);
  const para1 = document.createElement("p");
  para1.textContent = str2;
  div4.appendChild(para1);
  const para2 = document.createElement("p");
  para2.textContent = str3;
  div4.appendChild(para2);
  let div5 = document.createElement("div");
  div5.className = "ui red bottom attached button";
  div5.innerHTML = "Remove";
  div2.appendChild(div5);
  div5.addEventListener("click", () => {
    removeData();
  });
  let div6 = document.createElement("div");
  div6.className = "ui blue bottom attached button";
  div2.appendChild(div6);
  div6.innerHTML = "Read";
  div6.addEventListener("click", () => {
    if (div6.innerHTML === "Read") {
      div6.innerHTML = "Not Read";
    } else {
      div6.innerHTML = "Read";
    }
  });

  cont.appendChild(div);
}
let author = document.getElementById("author");
let title = document.getElementById("title");
let pages = document.getElementById("pages");
submit.addEventListener("click", () => {
  addBookToLibrary(title.value, author.value, pages.value);
});

function removeData() {
  cont.removeChild(cont.lastElementChild);
}
function openForm() {
  document.getElementById("form-info").style.display = "block";
}
