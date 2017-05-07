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
        $http.post("http://ec2-204-236-195-193.compute-1.amazonaws.com:8082/getAppointment"
                 ,
                  { 'timeMin' : startDate,
                    'timeMax' : endDate,
                    'id' : "primary"
                  }
                 ).success(function(response){
                   console.log(response);
            $scope.busySlots = response;
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
                  console.log(smallStart);
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
//        console.log($scope.finaldisplay.length);
        if($scope.finaldisplay.length == 0)
        {
            alert("Cannot send zero records...");
            $("#chose_time").show();
            $("#loadData1").hide();
            return;
        }
        $scope.sendableData = [];
        for(i=0;i<$scope.finaldisplay.length;i++)
        {
            var dt = $scope.finaldisplay[i].date;
            console.log($scope.finaldisplay[i]);
            console.log($scope.finaldisplay[i].times);
            for(j=0;j<$scope.finaldisplay[i].times.length;j++)
            {
                $scope.sendableData.push((dt+$scope.finaldisplay[i].times[j])+" - "+(moment(dt+$scope.finaldisplay[i].times[j], "DD/MM/YYHH:mm").add(15,'m').format("DD/MM/YYHH:mm")));
            }
        }
        console.log($scope.sendableData);
        //var dates  = JSON.stringify(["shdjgjasd", "ahdjgjhaD", "dhhjDVJh"]);
        var datesfectched = $scope.sendableData
        var dates  = JSON.stringify(datesfectched);

       // jsona = [];
        // jsona.push({"":"","":""})
        var datesfinal = {
          hr_email:"ann.watsonhr@gmail.com",
          referrance_email:"nero.niranjan@gmail.com",
          date_times:dates
        }
        console.log(datesfinal)
        var parameter = JSON.stringify(datesfinal)
        console.log(parameter)
        $http.post("http://ec2-204-236-195-193.compute-1.amazonaws.com:8082/api/confirm_time_slot",
                  parameter
                 ).success(function(){
            alert("Mail sent to the referral");
        });
        $("#chose_time").show();
        $("#loadData1").hide();
    }
    $scope.confirmAppointment = function(){
      $http.get("http://ec2-204-236-195-193.compute-1.amazonaws.com:8082/getSelectedTimeSlot/nero.niranjan@gmail.com"
    ).success(function(response){
      console.log("response" );
          console.log(response );
          var temp_date = response.selectedDate.split("-");
          //$scope. = response.selectedDate

         $scope.final_event_date = temp_date[0];
          $scope.final_evet_time = temp_date[1];
          $scope.referral_email = response.referral_email;

     });
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
//        alert("I am working:");
        $http.post('http://ec2-204-236-195-193.compute-1.amazonaws.com:8082/createAppointment',{
                      'subject' : $("#sub").val(),
                      'candidate' : "Niranjan Bhaskar",
                      'starttime' :   moment($scope.final_event_date,"DD/MM/YYHH:mm").format(),
                      'endtime' : moment($scope.final_evet_time,"DD/MM/YYHH:mm").format(),
                      'referral' :   $scope.referral_email

                   }).success(function(){
                           alert("Appointment booked successfully.");

                          });
    }
});
