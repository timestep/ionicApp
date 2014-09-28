angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  function lastID () {
    return friends[friends.length-1].id;
  }

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      for (var i = friends.length - 1; i >= 0; i--) {
        if(friends[i].id == friendId) return friends[i];
      };
      return;
    },
    add: function (newFriend) {
      if(friends.length == 0) {
        var id = 0;
      } else {
        var id = lastID();
      }
      var newGuy = {
        id: id + 1,
        name: newFriend
      }
      return friends.push(newGuy);
    },
    remove: function (friend) {
      for (var i = friends.length - 1; i >= 0; i--) {
        if(friends[i].id == friend.id) return friends.splice(i,1);
      };
      return;
    }
  }
});
