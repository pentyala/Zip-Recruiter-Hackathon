myApp = angular.module("myApp", []);
myApp.controller("myCtrl", function($scope, $http) {
  var arrHR = ['Apple', 'Banana', 'Cake', 'Donuts'];
  var arrHM = ['Cake', 'Donuts'];
  var arrEdu = ['1', '2', '3', '4'];
$scope.categories = arrEdu;

$scope.checker = function(categoryIndex){
  console.log("here" + categoryIndex);
  switch(categoryIndex){
      case 0:
      $scope.questions = arrHR;
      break;

      case 1:
      $scope.questions = arrHM;
      break;

      case 2:
      $scope.questions = arrEdu;
      break;

      default:
      break;
    }
   }

   $scope.addButton = function(int indexVar){

   }

  $(function()
  {
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();

        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function(e)
    {
    $(this).parents('.entry:first').remove();
    e.preventDefault();
    return false;
  });
  });

});