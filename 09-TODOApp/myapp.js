const txt = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addBtn")
const close = document.querySelectorAll(".closeBtn")
const ul = document.querySelector(".todo-list")

close.forEach((e) => {
  e.addEventListener("click", () => {
  e.parentElement.remove()
})
})


addBtn.addEventListener("click", ()=> {
  const newLi = document.createElement("li")
  const newItem = document.createElement("span")
  const newBtn = document.createElement("button")
  newBtn.textContent = "X"
  
  newLi.classList.add("todo-item")
  newItem.classList.add("item")
  newBtn.classList.add("closeBtn")


  newLi.appendChild(newItem)
  newLi.appendChild(newBtn)

  if (txt.value !== ""){
    newItem.textContent = txt.value 
    ul.insertAdjacentElement("afterbegin", newLi )
    txt.value = ""
  }else{
    alert("請輸入內容")
  }

  // newBtn.addEventListener("click", () => {
  //   newBtn.parentElement.remove()
  // })
})
document.addEventListener("keypress", (E) => {
  if (E.keyCode === 13){
    return addBtn.click()
  }
})
