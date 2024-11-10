const allSeatBtn = document.getElementsByClassName('seat-btn')
for (const element of allSeatBtn) {
    element.addEventListener('click',function(event){
        
         const seatbtn = event.target.innerText
         const seatCosttext = document.getElementById('seat-cost').innerText
         const seatCost = parseInt(seatCosttext)
         
    })
}

function getSeatCostElementById