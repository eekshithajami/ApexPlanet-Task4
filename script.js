// ===============================
// Contact Form Validation
// ===============================

function submitForm() {

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();
let output = document.getElementById("output");

let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name=="" || email=="" || message==""){

output.style.color="red";
output.innerHTML="Please fill all fields.";
return;

}

if(!pattern.test(email)){

output.style.color="red";
output.innerHTML="Enter a valid Email.";
return;

}

output.style.color="green";
output.innerHTML="Form Submitted Successfully!";

document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("message").value="";

}


// ===============================
// Notes App using Local Storage
// ===============================

function addNote(){

let note=document.getElementById("noteInput").value.trim();

if(note==""){

alert("Please enter a note.");
return;

}

let notes=JSON.parse(localStorage.getItem("notes")) || [];

notes.push(note);

localStorage.setItem("notes",JSON.stringify(notes));

document.getElementById("noteInput").value="";

displayNotes();

}

function displayNotes(){

let notes=JSON.parse(localStorage.getItem("notes")) || [];

let html="";

notes.forEach(function(note,index){

html+=`

<div class="note">

<span>${note}</span>

<button onclick="deleteNote(${index})">

Delete

</button>

</div>

`;

});

document.getElementById("notesList").innerHTML=html;

}

function deleteNote(index){

let notes=JSON.parse(localStorage.getItem("notes")) || [];

notes.splice(index,1);

localStorage.setItem("notes",JSON.stringify(notes));

displayNotes();

}


// ===============================
// Product Data
// ===============================

let products=[

{
name:"Laptop",
category:"Electronics",
price:55000
},

{
name:"Mobile",
category:"Electronics",
price:25000
},

{
name:"Tablet",
category:"Electronics",
price:18000
},

{
name:"Headphones",
category:"Accessories",
price:2500
},

{
name:"Keyboard",
category:"Accessories",
price:1500
},

{
name:"Mouse",
category:"Accessories",
price:900
},

{
name:"Smart Watch",
category:"Electronics",
price:7000
},

{
name:"USB Cable",
category:"Accessories",
price:400
}

];


// ===============================
// Display Products
// ===============================

function displayProducts(){

let filter=document.getElementById("filter").value;

let sort=document.getElementById("sort").value;

let filtered=[...products];

if(filter!="All"){

filtered=filtered.filter(product=>product.category===filter);

}

if(sort=="low"){

filtered.sort((a,b)=>a.price-b.price);

}

if(sort=="high"){

filtered.sort((a,b)=>b.price-a.price);

}

let html="";

filtered.forEach(product=>{

html+=`

<div class="product">

<h3>${product.name}</h3>

<p><b>Category:</b> ${product.category}</p>

<p><b>Price:</b> ₹${product.price}</p>

</div>

`;

});

document.getElementById("productList").innerHTML=html;

}


// ===============================
// Load Data when page opens
// ===============================

displayProducts();
displayNotes();