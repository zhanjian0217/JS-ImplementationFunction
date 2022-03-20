// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
const height = document.querySelector("#bodyHeight")
const weight = document.querySelector("#bodyWeight")
const btn = document.querySelector("button")
const result = document.querySelector("#resultText")


btn.addEventListener("click" , ()=>{
  let h = (height.value / 100)
  let w = Number(weight.value)

  let bmi =( w / (h*h)).toFixed(2)

  result.textContent = bmi
})
