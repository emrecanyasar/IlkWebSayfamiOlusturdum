let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info","second-class","third-class")
greeting.classList.remove("title","second-class")
console.log(greeting.classList)