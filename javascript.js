let locaton=document.getElementById("inputs")
let meter_feet=document.getElementById("MF")
let Liter_Gallon=document.getElementById("LG")
let Killogram_pound=document.getElementById("KP")

locaton.addEventListener("input",function(){
    calculation(locaton.value)
    
})

function calculation(value){
    let meter = (value * 0.3048).toFixed(4)
    let foot = (value * 3.28084).toFixed(4)

    let liter = (value * 0.264172).toFixed(4)
    let gallon = (value * 3.78541).toFixed(4)

    let kg = (value * 0.9999988107).toFixed(4)
    let pound = (value * 2.20462).toFixed(4)



    if(value<=0){
        document.getElementById("MF").innerText=``
        document.getElementById("LG").innerText=``
        document.getElementById("KP").innerText=``

    }
    else{
        document.getElementById("MF").innerText=`${value} Meter = ${foot} foot || ${value} feet = ${meter} meter`
        document.getElementById("LG").innerText=`${value} Gallon = ${liter} liter || ${value} liter = ${gallon} gallon`
        document.getElementById("KP").innerText=`${value} Killogram = ${foot} Pound || ${value} Pound = ${meter} Killogram`;

    }

    






    

}

