function markComplete(){
  var selected=[];
  //for(var i=1;i <= 7; i++){
     if(document.getElementById("myCheckbox").checked){
       selected.push("myCheckbox");
       var element = document.getElementById("row1");
       element.style.backgroundColor = "rgba(11, 224, 11, 0.2)";
     }
  //}
  //console.log(selected[0]);
}

function markInComplete(){
  var selected=[];
  //for(var i=1;i <= 7; i++){
     if(document.getElementById("myCheckbox").checked){
       selected.push("myCheckbox");
       var element = document.getElementById("row1");
       element.style.backgroundColor = "rgba(255, 0, 0, 0.26)";
     }
  //}
  //console.log(selected[0]);
}
function markCancelComplete(){
  var selected=[];
  //for(var i=1;i <= 7; i++){
     if(document.getElementById("myCheckbox").checked){
       selected.push("myCheckbox");
       var element = document.getElementById("row1");
       element.style.backgroundColor = "rgba(128, 128, 128, 0.25)";
     }
  //}
  //console.log(selected[0]);
}

function markDelComplete(){
  var selected=[];
  //for(var i=1;i <= 7; i++){
     if(document.getElementById("myCheckbox").checked){
       selected.push("myCheckbox");
       var element = document.getElementById("row1");
       element.style.display = "none";
     }
  //}
  //console.log(selected[0]);
}
function markUndoComplete(){
  var selected=[];
  //for(var i=1;i <= 7; i++){
     if(document.getElementById("myCheckbox").checked){
       selected.push("myCheckbox");
       var element = document.getElementById("row1");
       element.style.display = "block";
     }
  //}
  //console.log(selected[0]);
}
