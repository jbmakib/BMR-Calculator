// The BMR Section of the website Starts Here!

var BMRgivenHeight = document.getElementById("BMRheight");
var BMRmainWeight = document.getElementById("BMRweight");
var BMRmainAge = document.getElementById("BMRage");

function BMRheightValueFunc() {
    if (BMRheightValue.value == "inch") {
        BMRgivenHeight.setAttribute("placeholder", "Enter Your Height (in inch)");
    } else if (BMRheightValue.value == "cm") {
        BMRgivenHeight.setAttribute("placeholder", "Enter Your Height (in centimeter)");
    } else if (BMRheightValue.value == "meter") {
        BMRgivenHeight.setAttribute("placeholder", "Enter Your Height (in meter)");
    }
}

function BMRcalc() {
    var BMRmainHeight;
    if (BMRheightValue.value == "inch") {
        BMRmainHeight = BMRgivenHeight.value * 2.54;
    } else if (BMRheightValue.value == "cm") {
        BMRmainHeight = BMRgivenHeight.value;
    } else if (BMRheightValue.value == "meter") {
        BMRmainHeight = BMRgivenHeight.value * 100;
    }
    var BMRres;
    var BMRgenderValue = document.getElementById("BMRgenderValue");
    if (BMRgenderValue.value == "female") {
        var BMRdiboWeight = BMRmainWeight.value * 9.6
        var BMRdiboHeight = BMRmainHeight * 1.8
        var BMRdiboAge = BMRmainAge.value * 4.7
        BMRres = BMRdiboWeight + BMRdiboHeight - BMRdiboAge + 655;
    } else if (BMRgenderValue.value == "male") {
        var BMRdiboWeight = BMRmainWeight.value * 13.7
        var BMRdiboHeight = BMRmainHeight * 5
        var BMRdiboAge = BMRmainAge.value * 6.8
        BMRres = BMRdiboWeight + BMRdiboHeight - BMRdiboAge + 66;
    }
    BMRresInt = BMRres
    BMRres = BMRres.toString();

    if (BMRres == "NaN" || BMRres == "0" || BMRres == "66" || BMRres == "655") {
        document.getElementById("BMRres").innerHTML = "<h5>Please Enter Valid Information.</h5>";
        window.alert("Please enter valid information.\nWithout giving valid information, The site will not work.\nHope you understand it.");
    } else {
        BMRres = BMRresInt.toFixed(3);
        var all = `<h5>Your BMR is ${BMRres}</h5>`;
        document.getElementById("BMRres").innerHTML = all;
    }
}

// The BMR Section of the website Ends Here!









// this one is created for BMI section
/*
    view code for BMI section: https://github.com/jbmakib/BMI-Calculator
    live site for BMI section: https://jbmakib.github.io/BMI-Calculator/
*/

/* The BMI Section of the website starts here!

var BMIgivenHeight = document.querySelector("#BMIheight");

function BMIheightValueFunc() {
    if (BMIheightValue.value == "inch") {
        BMIgivenHeight.setAttribute("placeholder", "Enter Your Height (in inch)");
    } else if (BMIheightValue.value == "cm") {
        BMIgivenHeight.setAttribute("placeholder", "Enter Your Height (in centimeter)");
    } else if (BMIheightValue.value == "meter") {
        BMIgivenHeight.setAttribute("placeholder", "Enter Your Height (in meter)");
    }
}

function BMIcalc() {
    var BMImainWeight = document.querySelector("#BMIweight").value;
    var BMImainHeight;
    if (BMIheightValue.value == "inch") {
        BMImainHeight = BMIgivenHeight.value / 39.37;
    } else if (BMIheightValue.value == "cm") {
        BMImainHeight = BMIgivenHeight.value / 100;
    } else if (BMIheightValue.value == "meter") {
        BMImainHeight = BMIgivenHeight.value
    }
    BMImainHeight = BMImainHeight ** 2;
    var BMIres = BMImainWeight / BMImainHeight;
    var BMIres = BMIres.toFixed(3);
    var BMIresPlus;
    if (BMIres < 18.5) {
        BMIresPlus = "<h5>Your weight is too Low!!! You must gain your weight by eating measurd food.</h5>";
    } else if (BMIres <= 24.99999999999999999999999999999999999999999999 && BMIres >= 18.5) {
        BMIresPlus = "<h5>Your weight is perfect. You are fit.</h5>";
    } else if (BMIres <= 29.99999999999999999999999999999999999999999999 && BMIres >= 25) {
        BMIresPlus = "<h5>You are weighted. Please loss some weight by doing Physical Exercise.</h5>";
    } else if (BMIres <= 34.99999999999999999999999999999999999999999999 && BMIres >= 30) {
        BMIresPlus = "<h5>You are in the first step of over weight. Try to eat choosed measured food. You must do Physical Exercise.</h5>";
    } else if (BMIres <= 39.99999999999999999999999999999999999999999999 && BMIres >= 35) {
        BMIresPlus = "<h5>You are in the second step of over weight. Try to eat measured food. You must do Physical Exercise.</h5>";
    } else if (BMIres >= 40) {
        BMIresPlus = "<h5>You are totally over weighted. You are in risk of death. Please contact a doctor.</h5>";
    } else {
        BMIres = BMIres.toString();
    }
    if (BMIres == "NaN" || BMIres == "0" || BMImainWeight == "" || BMImainHeight == "") {
        document.getElementById("BMIres").innerHTML = "<h5>Please Enter Valid Information.</h5>";
        window.alert("Please enter valid information.\nWithout giving valid information, The site will not work.\nHope you understand it.");
    } else {
        var all = `<h5>Your BMI is ${BMIres} ${BMIresPlus}</h5>`;
        document.getElementById("BMIres").innerHTML = all;
    }
}

The BMI Section of the website ends here */