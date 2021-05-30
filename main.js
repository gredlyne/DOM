// 1. You are to get all elements in your html by id using the selector method in JavaScript.
var ids= document.querySelectorAll('[id]')
console.log(ids)



//2. You are to change the header text which says "Let's modify the DOM" to "New DOM Layout" and also change the background color by adding this classList "bg-success"
var mainTitle= document.getElementById("main-heading")
mainTitle.textContent= "New DOM Layout";
document.getElementById("page-header").classList.add("bg-success")
mainTitle.style.backgroundColor="green"



//3. You are to access each paragraph tag from your html and add the following text content to it:
var paraone= document.getElementById("para1")
paraone.textContent= "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."

var paratwo= document.getElementById("para2")
paratwo.textContent= "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."



//4. You are to add a click event function to the button which will create a new paragraph in the box layout when on clicks on it.

document.getElementById("btn").addEventListener("click", fillpara4);
function fillpara4(){
        document.getElementById("para4").textContent="The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."}


// 5. You are to change each boxes to the proper colors mentioned in them. Note the new classLists you are to add for each boxes:

document.getElementById("red").classList.remove("bg-white")
document.getElementById("red").classList.add("bg-danger")

document.getElementById("blue").classList.remove("bg-white")
document.getElementById("blue").classList.add("bg-primary")

document.getElementById("yellow").classList.remove("bg-white")
document.getElementById("yellow").classList.add("bg-warning")

document.getElementById("green").classList.remove("bg-white")
document.getElementById("green").classList.add("bg-success")

document.getElementById("black").classList.remove("bg-white")
document.getElementById("black").classList.add("bg-dark")


var card= document.getElementsByClassName("card-body");
card[0].style.backgroundColor="red"
card[1].style.backgroundColor="blue"
card[2].style.backgroundColor="yellow"
card[3].style.backgroundColor="green"
card[4].style.backgroundColor="black"








