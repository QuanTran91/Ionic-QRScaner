angular.module('starter.controllers', [])

.controller('ScanCtrl', function($scope,$cordovaBarcodeScanner) {
  $scope.buttonName = "Click to scan QR code"; 
   $scope.scan = function(){
    $cordovaBarcodeScanner.scan().then(function(imageData){
      $scope.textResult = imageData.text;
    },function(error){
      console.log("Error");
    });
  };
});
