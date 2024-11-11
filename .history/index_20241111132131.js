const allSeatBtn = document.getElementsByClassName('seat-btn')
for (const element of allSeatBtn) {
    element.addEventListener('click',function(event){
          
         const seatbtn = event.target.innerText
         const Seatcost = getSeatCostElementById('seat-cost')
         const selectedallElement = document.getElementById('selected-all-element')
         console.log(  event.target.setAttribute('disabled',false))
        

         const seatCount = document.getElementById('seat-count')
         const seatCountext = seatCount.innerText
         const seat = parseInt(seatCountext)  
      
          if(seat+1 > 4){
              
            alert('You maximum Bokking 4 seat ')
            return ;
         }  
        event.target.style.backgroundColor ='#1DD100'
        console.log(event.target)
      

       
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
         
          
         
         
        
        
          
         

   
         gettotalCost('total-cost',Seatcost)

         
         getGrandTotal()
        selectedallElement.appendChild(div)
        getElementByIdPlus('seat-availe')
        getElementByIdminus('seat-count')
        
        ClickgetsetElementById()

         
    })
}



function ClickgetsetElementById(){
    // const seatCount = document.getElementById('seat-count')
    // const seatCountext = seatCount.innerText
    // const seat = parseInt(seatCountext) 
    document.getElementById('phoneNUmber').addEventListener('keyup',function(e){
        const number = e.target.value
        const Nextbutton = document.getElementById('Next_button')
        if(number === 'number'){
            Nextbutton.removeAttribute('disabled')
        }
    }) 
     
    
   
    //   if(phoneNUmber === '017' ){    
    //     Nextbutton.removeAttribute('disabled')
    //   }
      
}


function getGrandTotal(Satus1,satus2){
    const seatCount = document.getElementById('seat-count')
    const seatCountext = seatCount.innerText
    const seat = parseInt(seatCountext)  
    const Applybutton = document.getElementById('apply-value')
      if(seat+1 > 3){    
       Applybutton.removeAttribute('disabled')
      }
     

    if(Satus1||Satus1){
         const InputValue = document.getElementById('Input-value').value
          if(InputValue === Satus1){
               const totalCost = document.getElementById('total-cost').innerText
               const totalCostNumber = parseInt(totalCost)
                const grandTotalAmnount = totalCostNumber - totalCostNumber*15/100;
                setValuElementById('grand-total',grandTotalAmnount)
                document.getElementById('Input-value').value =''
                document.getElementById('Inputarea').classList.add('hidden')
          }
          else if(InputValue === satus2){
            const totalCost = document.getElementById('total-cost').innerText
            const totalCostNumber = parseInt(totalCost)
             const grandTotalAmnount = totalCostNumber - totalCostNumber*15/100;
             setValuElementById('grand-total',grandTotalAmnount)
             document.getElementById('Input-value').value = ''
             document.getElementById('Inputarea').classList.add('hidden')
             
          }
          else{
            alert('PLease give Vaild coupen Code')
            document.getElementById('Input-value').value = ''
            return;
          }
        }
    
   else{
    const totalCost = document.getElementById('total-cost').innerText
    const totalCostNumber = parseInt(totalCost)
    setValuElementById('grand-total',totalCostNumber)
   }
}


function gettotalCost(id,value){
    const totalCost = document.getElementById(id).innerText
    const totalCostNumber = parseInt(totalCost) + parseInt(value)
    setValuElementById(id,totalCostNumber)
}



function setValuElementById(id,value){
    document.getElementById(id).innerText = value
}

function getElementByIdPlus(id){
    const seatAvaile = document.getElementById(id).innerText
    const seatAvailenumber = parseInt(seatAvaile) -1;
    setValuElementById(id,seatAvailenumber)
}


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
