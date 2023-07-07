
document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    
    var table = document.getElementById("dataTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  });
