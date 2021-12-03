function compute()
{
    //Create input variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value; //variable rate
    var years = document.getElementById("years").value; //variable years
    var interest = principal * years * rate /100; //variable interest
    var year = new Date().getFullYear()+parseInt(years);
    var amount = interest + principal; //Variable to calculate Total amount recieved
       
    document.getElementById("result").innerHTML="If you deposit '<mark>'"+principal+"'</mark>',\<br\>at an interest rate of '<mark>'"+rate+"'</mark>'%\<br\>You will receive an amount of '<mark>'"+amount+"'</mark>',\<br\>in the year '<mark>'"+year+"'</mark>'\<br\>" 
}

//Function that reads the value of the range slider and displays dynatically
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Function to ensure Principal values are not 0 or negative
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var moreThanZero = parseInt(principal) > 0;
    if (!moreThanZero) {
        alert("Enter a positive number please");
        document.getElementById("principal").focus();
    }
}
