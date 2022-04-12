function process_res(data){
    console.log(data)
    $("#result").html(JSON.stringify.data)
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


    $.ajax(
        {
            url: "https://quiet-crag-01632.herokuapp.com/findUnicornByNameWeight",
            type: "POST",
            data: {
                "nameIsChecked": nameIsChecked,
                "weightIsChecked": weightIsChecked
            },
            success: process_res
        }
    )



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
            success: process_res
        }
    )

}

function filterByNameWeight(){
    console.log("filterByNameWeight()" + "called");
    recieved_data.map(function (obj_){
    nameIsChecked = "unchecked"
    weightIsChecked = "unchecked"
    filterList =[]

    if($("#unicornNameFilter").is(":checked"))
        nameIsChecked = "checked"

    if($("#unicornWeightFilter").is(":checked"))
        weightIsChecked = "checked"

        })
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
}

$(document).ready(setup)