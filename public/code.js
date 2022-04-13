function process_res(data, nameIsChecked, weightIsChecked){
    console.log(data)
    if (!nameIsChecked && !weightIsChecked)
        $("#result").html(JSON.stringify(data, null, 2))
    if(nameIsChecked && !weightIsChecked)
        unicorns = JSON.parse(data)
        console.log(unicorns)
        $("#result").html(unicorns)
    if(!nameIsChecked && weightIsChecked)
        unicorns = JSON.parse(data)
        console.log(unicorns)
        $("#result").html(unicorns)
    if(nameIsChecked && weightIsChecked)
        unicorns = JSON.parse(data)
        console.log(unicorns)
        $("#result").html(unicorns)
}
function findUnicornByName(){
    console.log("findUnicornByName()" + "called");
    console.log($("#unicornName").val())
    $.ajax(
        {
            url: "https://quiet-crag-01632.herokuapp.com/findUnicornByName",
            type: "POST",
            data: {
                "unicornName": $("#unicornName").val()
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
            url: "https://quiet-crag-01632.herokuapp.com/findUnicornByWeight",
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
            url: "https://quiet-crag-01632.herokuapp.com/findUnicornByFood",
            type: "POST",
            data: {
                "appleIsChecked": appleIsChecked,
                "carrotIsChecked": carrotIsChecked
            },
            success: filterByNameWeight
        }
    )

}

function filterByNameWeight(data){
    console.log("filterByNameWeight()" + "called");
    nameIsChecked = false
    weightIsChecked = false

    if($("#unicornNameFilter").is(":checked"))
        nameIsChecked = true

    if($("#unicornWeightFilter").is(":checked"))
        weightIsChecked = true

    process_res(data, nameIsChecked, weightIsChecked)

        }
    

// function filter(){
//     recieved_data.map(function (obj_){
//         aList =[]
//         if()
//             aList.push("name")
//         return aList
//     })
// }

function setup(){

    $("#findUnicornByName").click(findUnicornByName)
    $("#findUnicornByWeight").click(findUnicornByWeight)
    $("#findUnicornByFood").click(findUnicornByFood)
    $("#filter").click(filterByNameWeight)
}

$(document).ready(setup)