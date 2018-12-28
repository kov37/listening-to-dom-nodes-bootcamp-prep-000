// using this file is optional
// you can also load the code snippets in using your browser's console
const element = document.getElementById('main');

console.log(element);
element.addEventListener("click", function(event) {
  element.innerHTML = "Hey YA"
  alert('I was clicked!');
  console.log("This callback is working.")
})

