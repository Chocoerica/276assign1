// JavaScript source code
//list of ID's
//A1weight, GradeA1num, GradeA1den
//button IDs --> meanbutton, weightbutton

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
    var mean = total / percentages.length;
    console.log(mean);
    document.getElementById("result").innerHTML = mean.toString();
})

document.getElementById("weightbutton").addEventListener('click', function () {
    console.log("weight button clicked");
    var values = [];
    for (var i = 0; i < x.length-2; i=i+3) {
        if (!( isNaN(x.elements[i]) || isNaN(x.elements[i + 1])|| isNaN(x.elements[i + 2]))) { //remove inputs from form if they aren't filled out
            values.push(x.elements[i]);
            values.push(x.elements[i+1]);
            values.push(x.elements[i+2]);
        }
    }

    var weights = [];
    for (var i = 0; i < x.length - 2; i = i + 3) { //get weights
        weights += values.elements[i].value;
    }
    console.log(weights);
    document.getElementById("result").innerHTML = weights;
})