// 程式碼寫這裡
const API = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

const search = document.querySelector("#searchKeyword")
const Btn = document.querySelector(".btn btn-success fs-3")



async function getBike() {
  const rawData = await fetch(API)
  const bikes = await rawData.json()

  const ul = document.querySelector(".siteList") 



  // li.appendChild(i)
  // li.textContent = "1323123123213"
  // li.appendChild(aaa)


  bikes.forEach((bike) => {
    const SNA = document.createElement("li")
    SNA.className = "list-group-item fs-5"
    SNA.textContent = bike.sna 


    const icon = document.createElement("i")
    icon.className = "fas fa-bicycle"

    const aaa = document.createElement("small")
    aaa.className = "text-muted"
    
    SNA.appendChild(icon)
    SNA.appendChild(aaa)

    
    
    
    
    ul.appendChild(SNA) 
  })
  






  // Btn.addEventListener("click", () => {
    // bikes.forEach((bike) =>{
    // console.log(bike.sna);
    // li.textContent = `${bike.sna}`
    // console.log(li);
    // ul.insertAdjacentElement("afterbegin", li)
// })

}


getBike()  




    






// sbi(場站目前車輛數量)
// sna(場站中文名稱)
// ar(地點)

/* <li class="list-group-item fs-5">
  <i class="fas fa-bicycle"></i>
  建國北路一段17巷 (20)<br>
  <small class="text-muted">建國北路一段17巷/八德路二段137巷口</small>
</li> */