let fullname = prompt("lütfen adınızı giriniz :")

let greeting = document.querySelector("#greeting")
greeting.innerHTML =`${greeting.innerHTML}<small style="color:red">${fullname}</small>`