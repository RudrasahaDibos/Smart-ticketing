const allSeatBtn = document.getElementsByClassName('seat-btn')
for (const element of allSeatBtn) {
    element.addEventListener('click',function(event){
        
         const seatbtn = event.target.innerText
         const Seatcost = getSeatCostElementById('seat-cost')

         const selectedallElement = document.getElementById('selected-all-element')
         console.log(selectedallElement)
         const div = document.createElement('div')
         div.classList.add('flex')
         div.classList.add('justify-between')
          const p1 = document.createElement('p')
          p1.classList.add('font-bold')
          p1.classList.add('ml-4')
          const p2 = document.createElement('p')
          p2.classList.add('font-bold')
          p2.classList.add('ml-4')
          const p3 = document.createElement('p')
          p3.classList.add('font-bold')
          p3.classList.add('ml-4')
          p1.innerText= seatbtn
          p2.innerText ="Economoy"
          p3.innerText = Seatcost
          div.appendChild(p1)
          div.appendChild(p2)
          div.appendChild(p3)
          selectedallElement.appendChild(div)

         
          const seatAvaile = document.getElementById('seat-availe').innerText
          const seatAvailenumber = parseInt(seatAvaile) -1;
          document.getElementById('seat-availe').innerText = seatAvailenumber
        
         
    })
}

function getSeatCostElementById(id){
    const seatCosttext = document.getElementById(id).innerText
    const seatCost = parseInt(seatCosttext)
    return seatCost;
}