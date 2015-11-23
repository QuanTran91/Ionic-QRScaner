angular.module('starter.controllers', [])

.controller('ScanCtrl', function($scope,$cordovaBarcodeScanner,$cordovaDatePicker) {
  $scope.buttonName = "Click to scan QR code"; 
   $scope.scan = function(){
    $cordovaBarcodeScanner.scan().then(function(imageData){
      $scope.textResult = imageData.text;
      alert(imageData.text);
    },function(error){
      alert("Error");
    });
  };
  
  $scope.pickDate = function(){
     var options = {
    date: new Date(),
    mode: 'date', // or 'time'
    minDate: new Date() - 10000,
    allowOldDates: true,
    allowFutureDates: false,
    doneButtonLabel: 'DONE',
    doneButtonColor: '#F2F3F4',
    cancelButtonLabel: 'CANCEL',
    cancelButtonColor: '#000000'
  };
  
  $cordovaDatePicker.show(options).then(function(date){
        alert(date);
    });

  };
});
