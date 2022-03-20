const plusBtn = document.querySelector("#plus")
const minusBtn = document.querySelector("#minus")
const counter = document.querySelector("#counter")


plusBtn.addEventListener("click", () => {
  counter.value = Number(counter.value) + 1 
})
minusBtn.addEventListener("click", () => {
  if (counter.value > 1)
  counter.value = Number(counter.value) - 1 
})