/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */


//Loads the correct sidebar on window load,

$(document).ready(function(){
//    $("#cand1").hide();
    $("#cand2").hide();
    $("#cand3").hide();
    $("#cand4").hide();
    $("#cand5").hide();
    $("#cand6").hide();
    $("#cand7").hide();
    $("#cand8").hide();
    $("#cand9").hide();
    $("#cand10").hide();
    $("#c1").css("background-color","#f9f9f9");
    $("#c2").css("background-color","#eee");
    $("#c3").css("background-color","#eee");
    $("#c4").css("background-color","#eee");
    $("#c5").css("background-color","#eee");
    $("#c6").css("background-color","#eee");
    $("#c7").css("background-color","#eee");
    $("#c8").css("background-color","#eee");
    $("#c9").css("background-color","#eee");
    $("#c10").css("background-color","#eee");
    
    $("#c1").click(function(){
        $("#c1").css("background-color","#f9f9f9");
        for(i=1;i<11;i++)
        {
            if(i==1)
            {
                $("#c"+i).css("background-color","#f9f9f9");
                $("#cand"+i).show();    
                continue;
            }
            $("#c"+i).css("background-color","#eee");
            $("#cand"+i).hide();
        }
    });
    $("#c2").click(function(){
        $("#c2").css("background-color","#f9f9f9");
        for(i=1;i<11;i++)
        {
            if(i==2)
            {
                $("#c"+i).css("background-color","#f9f9f9");
                $("#cand"+i).show();    
                continue;
            }
            $("#c"+i).css("background-color","#eee");
            $("#cand"+i).hide();
        }
    });
    $("#c3").click(function(){
        $("#c3").css("background-color","#f9f9f9");
        for(i=1;i<11;i++)
        {
            if(i==3)
            {
                $("#c"+i).css("background-color","#f9f9f9");
                $("#cand"+i).show();    
                continue;
            }
            $("#c"+i).css("background-color","#eee");
            $("#cand"+i).hide();
        }
    });
    $("#c4").click(function(){
        $("#c4").css("background-color","#f9f9f9");
        for(i=1;i<11;i++)
        {
            if(i==4)
            {
                $("#c"+i).css("background-color","#f9f9f9");
                $("#cand"+i).show();    
                continue;
            }
            $("#c"+i).css("background-color","#eee");
            $("#cand"+i).hide();
        }
    });
    $("#c5").click(function(){
        $("#c5").css("background-color","#f9f9f9");
        for(i=1;i<11;i++)
        {
            if(i==5)
            {
                $("#c"+i).css("background-color","#f9f9f9");
                $("#cand"+i).show();    
                continue;
            }
            $("#c"+i).css("background-color","#eee");
            $("#cand"+i).hide();
        }
    });
    $("#c6").click(function(){
        $("#c6").css("background-color","#f9f9f9");
        for(i=1;i<11;i++)
        {
            if(i==6)
            {
                $("#c"+i).css("background-color","#f9f9f9");
                $("#cand"+i).show();    
                continue;
            }
            $("#c"+i).css("background-color","#eee");
            $("#cand"+i).hide();
        }
    });
    $("#c7").click(function(){
        $("#c7").css("background-color","#f9f9f9");
        for(i=1;i<11;i++)
        {
            if(i==7)
            {
                $("#c"+i).css("background-color","#f9f9f9");
                $("#cand"+i).show();    
                continue;
            }
            $("#c"+i).css("background-color","#eee");
            $("#cand"+i).hide();
        }
    });
    $("#c8").click(function(){
        $("#c8").css("background-color","#f9f9f9");
        for(i=1;i<11;i++)
        {
            if(i==8)
            {
                $("#cand"+i).show();
                continue;
            }
            $("#c"+i).css("background-color","#eee");
            $("#cand"+i).hide();
        }
    });
    $("#c9").click(function(){
        $("#c9").css("background-color","#f9f9f9");
        for(i=1;i<11;i++)
        {
            if(i==9)
            {
                $("#c"+i).css("background-color","#f9f9f9");
                $("#cand"+i).show();    
                continue;
            }
            $("#c"+i).css("background-color","#eee");
            $("#cand"+i).hide();
        }
    });
    $("#c10").click(function(){
        $("#c10").css("background-color","#f9f9f9");
        for(i=1;i<11;i++)
        {
            if(i==10)
            {
                $("#c"+i).css("background-color","#f9f9f9");
                $("#cand"+i).show();    
                continue;
            }
            $("#c"+i).css("background-color","#eee");
            $("#cand"+i).hide();
        }
    });
    
    
});


var app = angular.module('mod_app', []);
app.controller('load_data', function($scope, $http){
    $scope.senddata = function(){
        console.log("I asmf idiot");
        var startDate = $("#sdate1").val();
        console.log(startDate);
        startDate = moment(startDate, "D MMM, YYYY").format();
        var endDate = $("#edate1").val();
        startDate = moment(startDate, "D MMM, YYYY").format();
        /*
        
            Waiting for the API.
        */
        $http.post('request-url',
                   { 'timeMin' : startDate,
                     'timeMax' : endDate,
                     'id' : "pavangondhi@gmail.com"
                   }).success(function(response){
            $scope.availableSlots = response.data;
        });
    }
    
});
