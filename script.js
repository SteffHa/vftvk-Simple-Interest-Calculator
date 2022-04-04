function compute()
{
    var result = document.getElementById("result")
    result.innerHTML = ""

    //fetch input values
    var principal = document.getElementById("principal").value;
    // validate input, set focus back to input field if value is not positive
    if (principal<=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // calculate actual interest
    var interest = principal * years * rate / 100;
    // calculate year when intereset returns
    var year = new Date().getFullYear()+parseInt(years);
    // print result message
    result.innerHTML = `
    If you deposit <mark>${principal}</mark>,<br>
    at an interest rate of <mark>${rate}%</mark>.<br>
    You will receive an amount of <mark>${interest}</mark>,<br>
    in the year <mark>${year}</mark>.
    `
}


function updateRate() {
    // display value from rate range
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        