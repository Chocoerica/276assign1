// JavaScript source code
//list of ID's
//A1weight, GradeA1num, GradeA1den
//button IDs --> meanbutton, weightbutton
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
        if (result > 100 || result < 0) {
            document.getElementById("resimage").src = "images/rawr.png";
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