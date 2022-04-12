function process_res(data){
    console.log(data)
}
function findUnicornByName(){
    console.log("findUnicornByName()" + "called");
    console.log($("#unicornName").val())
    $.ajax(
        {
            url: "http://localhost:5001/findUnicornByName",
            type: "POST",
            data: {
                "unicornName": $("#unicornName").val()
            },
            success: process_res
        }
    )

}

function filterByNameWeight(){
    console.log("filterByNameWeight()" + "called");

    nameIsChecked = "unchecked"
    weightIsChecked = "unchecked"

    if($("#unicornNameFilter").is(":checked"))
        nameIsChecked = "checked"

    if($("#unicornWeightFilter").is(":checked"))
        weightIsChecked = "checked"

    $.ajax(
        {
            url: "http://localhost:5001/findUnicornByFood",
            type: "POST",
            data: {
                "nameIsChecked": nameIsChecked,
                "weightIsChecked": weightIsChecked
            },
            success: process_res
        }
    )

}


function findUnicornByWeight(){
    console.log("findUnicornByWeight()" + "called");
    console.log($("#lowerWeight").val())
    console.log($("#higherWeight").val())

    
    $.ajax(
        {
            url: "http://localhost:5001/findUnicornByWeight",
            type: "POST",
            data: {
                "lowerWeight": $("#lowerWeight").val(),
                "higherWeight": $("#higherWeight").val()

            },
            success: process_res
        }
    )
}


function findUnicornByFood(){
    console.log("findUnicornByFood()" + "called");

    appleIsChecked = "unchecked"
    carrotIsChecked = "unchecked"

    if($("#apple").is(":checked"))
        appleIsChecked = "checked"

    if($("#carrot").is(":checked"))
        carrotIsChecked = "checked"

    $.ajax(
        {
            url: "http://localhost:5001/findUnicornByFood",
            type: "POST",
            data: {
                "appleIsChecked": appleIsChecked,
                "carrotIsChecked": carrotIsChecked
            },
            success: process_res
        }
    )

}


function setup(){

    $("#findUnicornByName").click(findUnicornByName)
    $("#findUnicornByWeight").click(findUnicornByWeight)
    $("#findUnicornByFood").click(findUnicornByFood)
}

$(document).ready(setup)