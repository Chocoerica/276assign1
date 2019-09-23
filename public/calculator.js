// JavaScript code for calculator

const now = new Date();
document.getElementById("currdate").innerHTML = "The current date and time is "+ now;
var examday = new Date();
document.getElementById("examdate").addEventListener('input', function () {
    var day = document.getElementById("examdate").value;
    var examyear =day.slice(0,4);
    var exammonth = day.slice(5,7);
    var examdate = day.slice(8);
    console.log(examyear, " ", exammonth, " ", examdate);
    console.log("and", now);
    
    examday.setDate(examdate);
    examday.setFullYear(examyear);
    examday.setMonth(exammonth-1);
    var timeleft = Math.ceil((examday - now) / (1000 * 60 * 60 * 24));
    console.log("and", timeleft);
    if (examyear!=2019 && examyear!=2020){
        document.getElementById("timeleft").innerHTML = "You should only think about this current school year";
    }
    else {
        if (timeleft == 0) {
            console.log("change1");
            document.getElementById("timeleft").innerHTML = "Your exam is today!!";
        }
        else if (timeleft > 0) {
            var result = "You have " + timeleft.toString() + " days left until your exam. Time to work hard to change that grade!";
            document.getElementById("timeleft").innerHTML = result;
            console.log("change2");
        }
        else {
            console.log("change3");
            document.getElementById("timeleft").innerHTML = "You do not have time left to change your marks :(";
        }
    }
    
})


function calculatepercentage() {
    //get inputs from form, and see if its possible
    //try to find i --> maybe can do for that
    //do we have to do this for every row?
    console.log("test");
    var x = document.getElementById("form1");   
    //get inputs from form
    var rownum = 1;
    for (var i = 0; i < x.length - 2; i = i + 3) {
        
        console.log("row number", rownum)
        console.log("element lengths:", x.elements[i + 1].value.length, " and ",x.elements[i + 2].value.length)
        if (!((x.elements[i + 1].value.length == 0) || (x.elements[i + 2].value.length == 0))) { //remove inputs from form if they aren't filled out
            console.log(x.elements[i + 1].value, " ", x.elements[i + 2].value);
            var numerator = x.elements[i + 1].value;
            var denominator = x.elements[i + 2].value;

            console.log("start calculate percentage");
            //calculate percentage
            var percent = (numerator / denominator).toFixed(2);
            console.log(percent);
            var percentID = "percent" + rownum;
            console.log("setting at", percentID);
            document.getElementById(percentID).innerHTML = percent.toString();
        }
        else {
            var percentID = "percent" + rownum;
            console.log("setting blank at", percentID);
            var blank = "";
            document.getElementById(percentID).innerHTML = blank;
        }
        rownum++;
    }    
}

var textboxes = document.getElementsByName("grades");
for (var i=0; i<textboxes.length; i++){
    textboxes[i].addEventListener('input', calculatepercentage);
}
    


//when mean button is pressed
document.getElementById("meanbutton").addEventListener('click', function () {
    console.log("mean button clicked");
    var x = document.getElementById("form1");
    //get inputs from form
    var values = [];
    for (var i = 0; i < x.length - 2; i = i + 3) {
        console.log("i", i)
        if (!( (x.elements[i + 1].value.length==0) || (x.elements[i + 2].value.length==0))) { //remove inputs from form if they aren't filled out
            console.log(x.elements[i + 1].value, " ", x.elements[i + 2].value);
            values.push(x.elements[i + 1].value);
            values.push(x.elements[i+2].value);
        }
    }
    console.log(values);
    console.log("now time for percentages");
    var percentages = [];
    for (var i = 0; i < values.length - 1; i = i + 2) { //calculate individual percentages
        var percent = values[i] / values[i + 1];
        percentages.push(percent);
    }
    console.log(percentages);
    
    //calculate total of percentages
    var total = 0;
    for (var i = 0; i < percentages.length; i++) { //calculate individual percentages
        total += percentages[i];
    }
    console.log("totals", total, "and length", percentages.length);
    //calculate mean by dividing
    var mean =(( total / percentages.length)*100).toFixed(2);
    

    if (isNaN(mean)) {
        document.getElementById("result").innerHTML = " ";
    }
    else {
        console.log(mean);
        document.getElementById("result").innerHTML = mean.toString() + "/100";
    }
})

//When weight button is pressed
document.getElementById("weightbutton").addEventListener('click', function () {
    console.log("weight button clicked");
    var x = document.getElementById("form1");
    var values = [];
    
    for (var i = 0; i < x.length - 2; i = i + 3) {
        console.log("i", i)
        if (!( (x.elements[i].value.length == 0) || (x.elements[i + 1].value.length == 0) || (x.elements[i + 2].value.length == 0))) { //remove inputs from form if they aren't filled out
            values.push(parseInt(x.elements[i].value));
            values.push(parseInt(x.elements[i + 1].value));
            values.push(parseInt(x.elements[i + 2].value));
        }
    }
    console.log(values);
    console.log("now time for percentages with weights calculated");
    //calculate total of percentages
    var total = 0;
    var totalweight = 0;
    for (var i = 0; i < values.length - 2; i = i + 3) { //calculate sum of weight*num/den
        total += values[i] * values[i + 1] / values[i + 2];
        totalweight += values[i];
    }
    console.log("total",total);
    console.log("total weight", totalweight);

    //calculate mean with weights by dividing
    var res= ((total / totalweight)*100).toFixed(2);
    if (isNaN(res)) {
        document.getElementById("result").innerHTML = " ";
    }
    else {
        console.log(res);
        document.getElementById("result").innerHTML = res.toString() + "/100";
    }
    
})

//when click on the pic button
document.getElementById("picbutton").addEventListener('click', function () {
    
    //evaluate the result, if there exists a result then a picture will show up depending on how good the result is
    var result = parseInt((document.getElementById("result")).innerHTML);
    if (result.length != 0) { //if there is a result
        if (result > 100 || result < 0 || isNaN(result)) {
            document.getElementById("resimage").src = "images/rawr.png";
            document.getElementById("resimage").alt = "Use the Calculator properly!";
        }
        else if (result>=50 && result <= 100) {
            //yay pass
            document.getElementById("resimage").src = "images/pengudab.png";
        }
        else {
            //oh no fail
            document.getElementById("resimage").src = "images/cries.png";
        }
    }
    console.log("pic button pressed", result);
})