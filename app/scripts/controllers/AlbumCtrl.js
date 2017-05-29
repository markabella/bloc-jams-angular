(function() {
  function AlbumCtrl($scope) {
      $scope.songs = albumPicasso.songs;
      this.albums = [];
      this.albums.push(angular.copy(albumPicasso));

  }

  angular
  .module('blocJams')
  .controller('AlbumCtrl', AlbumCtrl);
})();
