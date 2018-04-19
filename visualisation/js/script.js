$(document).ready(function() {
    console.log("script.js linked");
    $("#prediction").click(function(){
        $("#predictionmodal").show();  
       });
    $('span').click(function(){
        $("#predictionmodal").hide();
    });

    //console.log($("#predform").serializeObject());

    $("#predform").submit(function(e){
        e.preventDefault();
        console.log("clicked");
        var formdata = $("#predform").serializeObject();
        
        if($("#ageunit").val() === "days"){
            formdata["age"] = daystomonth(formdata["age"]);
        }
        if($("#ageunit").val() === "years"){
            formdata["age"] = yearstomonth(formdata["age"]);
        }

        if($("#bfunit").val() === "days"){
            formdata["bfduration"] = daystomonth(formdata["bfduration"]);
        }
        if($("#bfunit").val() === "years"){
            formdata["bfduration"] = yearstomonth(formdata["bfduration"]);
        }

        if($("#sfunit").val() === "days"){
            formdata["solid"] = daystomonth(formdata["solid"]);
        }
        if($("#sfunit").val() === "years"){
            formdata["solid"] = yearstomonth(formdata["solid"]);
        }

        if($("#fvunit").val() === "days"){
            formdata["vegetable"] = daystomonth(formdata["vegetable"]);
        }
        if($("#fvunit").val() === "years"){
            formdata["vegetable"] = yearstomonth(formdata["vegetable"]);
        }

        formdata.animalmilk = Number(formdata.animalmilk);
        formdata.firstBf = Number(formdata.firstBf);
        formdata.gender = Number(formdata.gender);
        formdata.haemoglobin = Number(formdata.haemoglobin);
        formdata.height = Number(formdata.height);
        formdata.iodine = Number(formdata.iodine);
        formdata.isCurrBf = Number(formdata.isCurrBf);
        formdata.semisolid = Number(formdata.semisolid);
        formdata.state = Number(formdata.state);
        formdata.vegetable = Number(formdata.vegetable);
        formdata.age = Number(formdata.age);
        formdata.solid = Number(formdata.solid);
        formdata.bfduration = Number(formdata.bfduration);
        formdata.weight = Number(formdata.weight);
        formdata.watermonth = Number(formdata.watermonth);

        console.log(formdata);

        $.post("http://127.0.0.1:5000/predict", formdata , function (data, status) {
            console.log(data);
        });
    });
});

function daystomonth(x){
    x = Number(x) ;
    var months = Math.floor(x/30) ; 
    if(x%30 >= 15){
        months ++ ;
    }
    return months ;
}

function yearstomonth(x){
    x = Number(x) ;
    var months = Math.floor(x*12);
    return months ;
}