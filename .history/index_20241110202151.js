const allSeatBtn = document.getElementsByClassName('seat-btn')
for (const element of allSeatBtn) {
    element.addEventListener('click',function(event){
        
         const seatbtn = event.target.innerText
         getSeatCostElementById('seat-cost')
         
    })
}

function getSeatCostElementById(id){
    const seatCosttext = document.getElementById(id).innerText
    const seatCost = parseInt(seatCosttext)
    console.log()
}