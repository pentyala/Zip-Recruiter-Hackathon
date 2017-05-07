/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

var test;

//Loads the correct sidebar on window load,

$(document).ready(function(){
//    $("#cand1").hide();
    $("#loadData1").hide();
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
app.controller("myCtrl", function($scope, $http) {

  $http({
      method: 'GET',
      url: 'index.php'
  }).then(function successCallback(response) {
        $scope.event_details = response;
        $scope.summary = response.summary;
        $scope.name= "Niranjan";
        $scope.email = response.attendees[0].email;
        var temp_date = response.start.dateTime;
        temp_date = moment(temp_date).format("YYYY-MM-DD HH:mm:ss");
        var temp_arr = temp_date.split(" ");
        $scope.date_event = temp_arr[0];
        $scope.time_event = temp_arr[1];
      }, function errorCallback(response) {});

      $scope.confirm_event = function(){
        var email = "sample" ; /// get from localstorage
        $scope.event_details.attendees[0].email = email;
        $http({
            method: 'POST',
            data: $scope.event_details,
            url: 'index.php'
        }).then(function successCallback(response) {  }, function errorCallback(response) {});
      }
});


app.controller('load_data', function($scope, $http){
    $scope.senddata = function(){
//        console.log("I asmf idiot");
        $("#chose_time").hide();
        $("#loadData1").show();
        
        var startDate = $("#sdate1").val();
//        console.log(startDate);
        startDate = moment(startDate, "D MMM, YYYY").format();
        var endDate = $("#edate1").val();
//        alert(startDate);
        endDate = moment(endDate, "D MMM, YYYY").format();
//        alert(startDate);
        $scope.startDate = startDate;
        $scope.endDate = endDate;
        
        /*
        
            Waiting for the API.
        */
        $http.get("test.json"
//                  ,
//                   { 'timeMin' : startDate,
//                     'timeMax' : endDate,
//                     'id' : "pavangondhi@gmail.com"
//                   }
                 ).success(function(response){
            $scope.busySlots = response.busy;
            interval = 15;
            for(i=0;i<$scope.busySlots.length;i++)
            {
                /*2017-05-05T11:00:00-07:00*/
//                console.log($scope.busySlots[i].start);
                test = $scope.busySlots[i].start;
//                console.log(test);
                $scope.busySlots[i].start = moment($scope.busySlots[i].start);
                $scope.busySlots[i].end = moment($scope.busySlots[i].end);
//                console.log($scope.busySlots[i]);
                
            }
            
//            $scope.availableSlots = [{ date: '25/01/17', times: [ '12:00', '13:00' ] }, { date: '26/01/17', times: [ '12:00', '13:00' ] }];
            $scope.availableSlots = [];
            smallStart = moment($scope.startDate).format();
            smallEnd = moment(moment($scope.startDate).add(15, 'm')).format();
//            console.log(smallStart);
//            console.log(smallEnd);
//            console.log($scope.busySlots);
//            console.log(smallEnd);
            while(smallEnd<=$scope.endDate)
            {
                flag = false;
                for(i=0;i<$scope.busySlots.length;i++)
                {
                   
                    smallStart = moment(smallStart);
                    smallEnd = moment(smallEnd);
                    if(($scope.busySlots[i].start<smallEnd && $scope.busySlots[i].end>smallEnd) || ($scope.busySlots[i].start>smallStart && $scope.busySlots[i].end<smallStart) || (($scope.busySlots[i].start>smallStart && $scope.busySlots[i].end<smallEnd)) )
                        {
                            flag = true;
                            break;
                        }
                }
                if(!flag)
                {
                    $scope.availableSlots.push({date: smallStart.format("DD/MM/YY"), times : smallStart.format("HH:mm")});
                }
                smallStart = smallEnd
                smallEnd = moment(moment(smallEnd).add(15, 'm')).format();
            }
//            console.log($scope.availableSlots);
            /*
                Data is the JSON file, parse it.
            */
            
            
            /*parsing the same date multiple times*/
            
            $scope.finaldisplay = [];
            for(i=0;i<$scope.availableSlots.length;i++)
            {
                flg = true;
                for(j=0;j<$scope.finaldisplay.length;j++)
                {
                    if($scope.finaldisplay[j].date == $scope.availableSlots[i].date)
                    {
                        $scope.finaldisplay[j].times.push($scope.availableSlots[i].times);
                        flg=false;
                    }
                }
                if(flg)
                {
//                    console.log($scope.availableSlots);
                    date = $scope.availableSlots[i].date;
                    console.log(date);
                    times = [];
                    times.push($scope.availableSlots[i].times);
                    console.log(times);
                    $scope.finaldisplay.push({"date":date,"times":times})
//                    $scope.finaldisplay[j].push($scope.availableSlots.times);
                }
            }
            console.log($scope.finaldisplay);
            
        });
    }
    
    $scope.sendDates = function(){
        console.log($scope.finaldisplay.length);
        if($scope.finaldisplay.length == 0)
        {
            alert("Cannot send zero records...");
            return;
        }
        $http.post("url"
//                  ,
//                   { 'timeMin' : startDate,
//                     'timeMax' : endDate,
//                     'id' : "pavangondhi@gmail.com"
//                   }
                 ).success(function(){
            alert("Mail sent");
        });
        $("#chose_time").show();
        $("#loadData1").hide();
    }
    
    $scope.removeDate=function(dat)
    {
        $scope.finaldisplay = $scope.finaldisplay.filter(function(el) {
            return el.date !== dat;
        });
    }
    
    $scope.removeTime = function(dat, tim)
    {
        for(i=0; i<$scope.finaldisplay.length;i++)
        {
            if($scope.finaldisplay[i].date == dat)
            {
                $scope.finaldisplay[i].times = $scope.finaldisplay[i].times.filter(function(el){
                   return el !== tim; 
                });
            }
        }
    }
    
    $scope.sendSelectedDates = function(){
        console.log($scope.finaldisplay.length);
        if($scope.finaldisplay.length == 0)
        {
            alert("Cannot send zero records...");
            return;
        }
        $http.post('url',{
                      'summary': 'Blah Blah Blah',
                      'location': 'Blah Blah Blah',
                      'description': 'Blah Blah BlahBlah Blah Blah',
                      'start': {
                        'dateTime': '2017-05-06T19:00:00-07:00',
                        'timeZone': 'America/Los_Angeles',
                      },
                      'end': {
                        'dateTime': '2017-05-06T21:00:00-07:00',
                        'timeZone': 'America/Los_Angeles',
                      },
                      'recurrence': [
                        'RRULE:FREQ=DAILY;COUNT=2'
                      ],
                      'attendees': [
                        {'email': 'nero.niranjan@gmail.com'},
                      ],
                      'reminders': {
                        'useDefault': false,
                        'overrides': [
                          {'method': 'email', 'minutes': 24 * 60},
                          {'method': 'popup', 'minutes': 10},
                        ]
                      }
                    }).success(function(){
                           alert("mail sent successfully.");
                           
                           });
    }
});
