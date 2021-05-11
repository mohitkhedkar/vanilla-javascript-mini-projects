

// Function for tax Calculation 

function taxCalculate() {

    var incomeamt = document.getElementById("incomeamount").value;

    if(incomeamt<=250000){
        var tax=0;
    }
    else if(incomeamt>250000 && incomeamt<=500000){
        var tax=(incomeamt-250000)*0.05;
    }
    else if(incomeamt>500000 && incomeamt<=750000){
        var tax=250000*0.05+(incomeamt-500000)*0.1;
    }
    else if(incomeamt>750000 && incomeamt<=1000000){
        var tax=250000*0.05+250000*0.1+(incomeamt-750000)*0.15;
    }
    else if(incomeamt>1000000 && incomeamt<=1250000){
        var tax=250000*0.05+250000*0.1+250000*0.15+(incomeamt-1000000)*0.2;
    }
    else if(incomeamt>1250000 && incomeamt<=1500000){
        var tax=250000*0.05+250000*0.1+250000*0.15+250000*0.2+(incomeamt-1250000)*0.25;
    }
    else if(incomeamt>1500000){
        var tax=250000*0.05+250000*0.1+250000*0.15+250000*0.2+250000*0.25+(incomeamt-1500000)*0.3;
    }

    // const taxmt = tax;
    // taxamount.innerHTML = taxmt;
    alert("Total tax amount is Rs."+ tax);
}

