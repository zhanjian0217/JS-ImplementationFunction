// 程式碼寫這裡
const closeBtn = document.querySelectorAll(".closeBtn")
const txt = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addBtn")
const ul = document.querySelector(".todo-list")

closeBtn.forEach((e) => {
  e.addEventListener("click", ()=> {
    e.parentElement.remove()
  })
})

addBtn.addEventListener("click", () => {
  const li = document.createElement("li")
  const span = document.createElement("span")
  const close = document.createElement("button")

  li.classList.add("todo-item")
  span.classList.add("item")
  close.classList.add("closeBtn")

  close.textContent = "X"
  span.textContent = txt.value


  
  li.appendChild(span)
  li.appendChild(close)
  
  if (txt.value !== "") {
    ul.insertAdjacentElement("afterbegin", li ) 
    txt.value = "" 
  }else{
    alert("請輸入內容")
  }

  close.addEventListener("click", () => {
    close.parentElement.remove()
  })

})

document.addEventListener("keypress", (e)=> {
  if (e.keyCode === 13){
    return addBtn.click()
  }
})
  