
$(function(){
    $("#courseTable").append("<tr><th>日期</th><th>景點</th></tr>");
    var topicCount = topic.length;
    let millisecsPerDay = 24*60*60*1000;
    for(var x=0;x<topicCount;x++){
        //debugger;
        $("#courseTable").append(
            `<tr><td>${(new Date(startDate.getTime()+x*millisecsPerDay)).toLocaleDateString().slice(5)}</td><td>${topic[x]}</td></tr>`
        );
    }

    $("#submitBtn").on("click", function() {
        addNewRow();
      });

    $("#frm1").append();


});

function addNewRow() {
    var table = document.getElementById("courseTable");
    var dateInput = document.getElementById("bday");
    var topicInput = document.getElementById("topicInput").value.toString();
    topic.push((topicInput))
    var newRow = table.insertRow(-1);
    var dateCell = newRow.insertCell(0);
    var topicCell = newRow.insertCell(1);
  
    dateCell.innerHTML = dateInput.value;
    topicCell.innerHTML = topicInput.value;
  
    dateInput.value = "";
    document.getElementById("topicInput").value = ""

    // $("#courseTable").append("<tr><th>日期</th><th>景點</th></tr>");
    var topicCount = topic.length;
    let millisecsPerDay = 24*60*60*1000;
    $("#courseTable tr").remove();
    $("#courseTable").append("<tr><th>時間</th><th>主題</th></tr>");
    for(var x=0;x<topicCount;x++){
      $("#courseTable").append(
            `<tr><td>${(new Date(startDate.getTime()+x*millisecsPerDay)).toLocaleDateString().slice(5)}</td><td>${topic[x]}</td></tr>`
        );
    }

    $("#submitBtn").on("click", function() {
      addNewRow();
    });

  $("#frm1").append();

  }

// function SetFirst() {
//     document.getElementById("frm1").submit();
//     var x = document.getElementById("frm1");
//     var text = "";
//     var i;
//     for (i = 0; i < x.length ;i++) {
//       text += x.elements[i].value + "<br>";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }