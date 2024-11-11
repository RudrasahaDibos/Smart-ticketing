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
          setValuElementById('seat-availe',seatAvailenumber)
         
        //   const seatCount = document.getElementById('seat-count').innerText
        //     const count = parseInt(seatCount) +1;
        //    setValuElementById('seat-count',count)
        getElementByIdminus('seat-count')
         
    })
}

function setValuElementById(id,value){
    document.getElementById(id).innerText = value
}

function getElementByIdPlus()


function getElementByIdminus(id){
    const seatCount = document.getElementById(id).innerText
    const count = parseInt(seatCount) +1;
   setValuElementById(id,count)
}
 

function getSeatCostElementById(id){
    const seatCosttext = document.getElementById(id).innerText
    const seatCost = parseInt(seatCosttext)
    return seatCost;
}
