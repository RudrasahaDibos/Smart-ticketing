const allSeatBtn = document.getElementsByClassName('seat-btn')
for (const element of allSeatBtn) {
    element.addEventListener('click',function(event){
        
         const seatbtn = event.target.innerText
         const Seatcost = getSeatCostElementById('seat-cost')

         const selectedallElement = document.getElementById('selected-all-element')
         console.log(selectedallElement)
          const p1 = document.createElement('p')
         
    })
}

function getSeatCostElementById(id){
    const seatCosttext = document.getElementById(id).innerText
    const seatCost = parseInt(seatCosttext)
    return seatCost;
}