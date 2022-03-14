let author = document.getElementById("author").value;
let title = document.getElementById("title").value;
let pages = document.getElementById("pages").value;
let formdata = document.querySelectorAll("input");
document.getElementById("newBook").addEventListener("click", openForm);
let submit = document.getElementById("submit");
// .addEventListener("click", addBookToLibrary);
let myLibrary = [];

function book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookInfo = function () {
    return [title, author, pages];
  };
}

function addBookToLibrary() {
  // do stuff here
  document.getElementById("form-info").style.display = "none";

  let book = new book(title, author, pages);
  let str1 = `Title:${book.title}`;
  let str2 = `Author: ${book.author}`;
  let str3 = `Pages: ${book.pages}`;

  let div = document.createElement("div");
  div.className = "ui cards";
  let div1 = document.createElement("div");
  div1.className = "card";
  let div2 = document.createElement("div");
  div2.class = "content";
  let div3 = document.createElement("div");
  div3.className = "header";
  let div4 = document.createElement("div");
  div4.className = "description";
  document.querySelector(".description").innerHTML = str1;
  // let template = myLibrary.map((user) => `${user}`).join("\n");
  // document.querySelector(".description").innerHTML = (
  // <div class="ui cards">
  //   <div class="card">
  //     <div class="content">
  //       <div class="header">Book Information</div>
  //       <div class="description"></div>
  //     </div>
  //   </div>
  // </div>
  // );
}
addBookToLibrary();

submit.addEventListener("click", () => {
  myLibrary.push(author.value, title.value, pages.value);
  author.value = "";
  title.value = "";
  pages.value = "";
  addBookToLibrary();
});

function openForm() {
  document.getElementById("form-info").style.display = "block";
}
