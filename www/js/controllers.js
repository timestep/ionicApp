angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, $state, Friends) {
  $scope.friends = Friends.all();

  $scope.addFriend = function (newFriend) {
    if(newFriend == '' || !newFriend || newFriend.length == 0) return;
    Friends.add(newFriend);
    $scope.newFriend = '';
  }

  $scope.removeFriend = function (friend) {
    Friends.remove(friend);
  }

  $scope.goToDetails = function (friend) {
    $state.go('tab.friend-detail',{friendId:friend.id})
  }

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
