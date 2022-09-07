const btn = document.getElementById("enter")
const weight = document.getElementById("weight")
const units = document.getElementById("units").value
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

function Calculate(){
    let wei = weight.value;
    let reps = repnum.innerHTML
    

/* 
    alert(wei)
    alert(units)
    alert(repnum.innerHTML)
*/
}

btn.addEventListener('click', Calculate)
