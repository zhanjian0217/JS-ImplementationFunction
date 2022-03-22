const API = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

const textInput = document.querySelector("#searchKeyword")
const Btn = document.querySelector(".btn-success")
const ul = document.querySelector(".siteList")


Btn.addEventListener("click", (e) =>{
  e.preventDefault()
  getBikes(textInput.value)
} )






async function getBikes(street) {
  const rawData = await fetch(API)
  const bikes = await rawData.json()


  const bikeData = 
   bikes.filter(data => data.ar.includes(street))
    // console.log(bikeData);
   //  (bike.ar).includes(street)
    //  return bike })
    
      
    if(street.trim() !== ""){
      bikeData.forEach((x) => {
      const result = 
        `<li class="list-group-item fs-5">
          <i class="fas fa-bicycle"></i>
          ${x.sna.replace("YouBike2.0_","")} (${x.sbi})<br>
          <small class="text-muted">${x.ar})</small>
          </li>`

        ul.insertAdjacentHTML("afterbegin", result) 
    })

  }
  

}