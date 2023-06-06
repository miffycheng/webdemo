function addMemo() {
    var date = document.getElementById("date").value;
    var location = document.getElementById("location").value;
    var mood = document.getElementById("mood").value;
  
    var memoItem = document.createElement("li");
    memoItem.innerHTML = "<strong>" + date + "</strong> - " + location +" "+  mood;
  
    var memoList = document.getElementById("memoList");
    memoList.appendChild(memoItem);
  
    document.getElementById("date").value = "";
    document.getElementById("location").value = "";
    document.getElementById("mood").value = "";
  }
  