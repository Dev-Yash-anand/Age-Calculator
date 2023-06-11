const btn1 = document.getElementById("btn")
const ipt = document.getElementById("bday")
const resEl = document.getElementById("res")

function calcAge(){
    const bdayVal = ipt.value   

    if(bdayVal === ""){
      alert("Enter a valid Birthday Date...");
    }else{
        const age = getAge(bdayVal);
        resEl.innerText = `Your age is ${age} years old`
    }
}

function getAge(bdayVal){
    const crntDate = new Date();
    const bdayDate = new Date(bdayVal);
    let age1 = crntDate.getFullYear() - bdayDate.getFullYear();
    const month = crntDate.getMonth() - bdayDate.getMonth();

    if(month < 0 || (month === 0 && crntDate
        .getDate() < bdayDate.getDate())){
            age1--;
            // return age1;
        }

        return age1;
}

btn1.addEventListener("click",calcAge)

