const btn = document.getElementById("enter")
const weight = document.getElementById("weight")
const repnum = document.getElementById("output")

const slider = document.getElementById("reps").oninput = function(){
    const value = (this.value-this.min)/(this.max)*100
    repnum.innerHTML = this.value

}

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();

} )

closeModal.addEventListener('click', () => {
    modal.close();

} )


const orm = document.getElementById("result")
const ormunits = document.getElementById("unitresult")

function selectunits() {
    const select = document.getElementById("units");
    const units = select.options[select.selectedIndex].text;
    ormunits.innerHTML = units
 
}


function Calculate(){
    
    
    let wei = weight.value;

    let reps = repnum.innerHTML

    const result = Math.round(wei*(1 + reps/30));
 


    if(reps == 1){
        orm.innerHTML = wei
    }
    else {
        orm.innerHTML = result
    }
    
/* 
    alert(wei)
    alert(units)
    alert(repnum.innerHTML)
        else if (ormunits.innerHTML == "Kg") {
        modified = (result * 2.205);
        orm.innerHTML = modified
    } 
*/
}

btn.addEventListener('click', Calculate)
