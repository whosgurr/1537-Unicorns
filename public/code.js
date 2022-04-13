SAVED_DATA = []

function process_res(data){
    console.log(data)
    SAVED_DATA = data
    result = ""

<div class="container">
  <table id="table" data-toggle="table" data-flat="true">
    <thead>
      <tr>
        <th data-field="unicorns._id" data-sortable="true">ID</th>
        <th data-field="unicorns.name" data-sortable="true">Name</th>
        <th data-field="unicorns.dob" data-sortable="true">Date of Birth</th>
        <th data-field="unicorns.loves" data-sortable="true">Loves</th>
        <th data-field="unicorns.weight" data-sortable="true"><small>Weight</small><br/>Power Cash</th>
        <th data-field="unicorns.gender" data-sortable="true"><small>Gender</small><br/>Blocked Cash</th>
        <th data-field="unicorns.vampires" data-sortable="true"><small>Vampires</small><br/>Credit Cash</th>
      </tr>
    </thead>
  </table>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="https://unpkg.com/bootstrap-table@1.18.0/dist/bootstrap-table.min.js"></script>
    


    // for (i = 0; i < SAVED_DATA.length; i++) {
    //     // for each unicorn
    //     result += "<table>"
    //     result += "<tr>"

    //     for(field in SAVED_DATA[i]){
    //         result += "<th>"
    //         result += field 
    //         result += "        "
    //         result += "</th>"
    //     }
    //     result += "</tr>"
    //     result += "<tr>"

        
    //     for(field in SAVED_DATA[i]){
    //         result += "<td>"
    //         result += " "
    //         if(field == "loves"){
    //             result += "<ul>"
    //             for(j = 0; j < SAVED_DATA[i]["loves"].length; j++){
    //                 result += "<li>"
    //                 result += SAVED_DATA[i][field][j]
    //                 result += " "
    //                 result += "</li>"
    //             }
    //             result += "</ul>"
    //         }else{
    //             result += SAVED_DATA[i][field]
    //         }
    //         result += "</td>"
    //     }

    //     result += "<tr>"
    //     result += "</table>"
    }
    $("#result").html(result);

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
            success: process_res
        }
    )

}

function filterByNameWeight(){
    console.log("filterByNameWeight()" + "called");
    nameIsChecked = false
    weightIsChecked = false

    if($("#unicornNameFilter").is(":checked"))
        nameIsChecked = true

    if($("#unicornWeightFilter").is(":checked"))
        weightIsChecked = true

    nameList = []
    weightList = []
    bothList = []

    SAVED_DATA.forEach(unicorn => {
        nameList.push(unicorn.name)
        weightList.push(unicorn.weight)
        bothList.push(unicorn.name)
        bothList.push(unicorn.weight)
        })

    if (!nameIsChecked && !weightIsChecked)
    $("#result").html(JSON.stringify(SAVED_DATA, null, 2))

    if(nameIsChecked && !weightIsChecked)
        $("#result").html(nameList.toString())

    if(!nameIsChecked && weightIsChecked)
        $("#result").html(weightList.toString())

    if(nameIsChecked && weightIsChecked)
        $("#result").html(bothList.toString())

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