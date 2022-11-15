(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = [$scope];
function LunchCheckController($scope) {
  $scope.launchMessage = "";
  $scope.launchList = "";

  $scope.displayLaunchMessage = function () {
    var message = calculateLaunchMessage($scope.launchList);
    $scope.launchMessage = message;
  };

  function calculateLaunchMessage(itemList) {
    var itemArray = "";
    
    if (itemList == ""){
      return "No items found";
    }
    itemArray = itemList.split(',');

    if (itemArray.length < 4) {
      return "Yastás";
    } else {
      return "Try again";
    };
  }
}

})();
