const values = document.querySelectorAll("div.numbers p");
const submitBtn = document.getElementById("submit");
const thanksCard = document.querySelector("section.thank-you");
const errorBox = document.querySelector("section.error");


let assignedValue;

values.forEach(function(value){
    value.addEventListener("click", ()=>{
        values.forEach(function(item){
            if(item!==value){
                item.classList.remove("clicked-number");
            }
           
        })
        value.classList.add("clicked-number");
       assignedValue = value.dataset.value;
        
        let ratingValue = document.getElementById("rating-value");
        ratingValue.textContent = assignedValue;
    })

})

submitBtn.addEventListener("click", ()=>{
    if(assignedValue){
        thanksCard.style.display = "flex";
    }

    else{
        errorBox.style.display="flex";
        setTimeout(()=>{
            errorBox.style.display="none"
        }, 1500)
    }
   

})



