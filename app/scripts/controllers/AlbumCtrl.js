(function() {
    function AlbumCtrl(Fixtures, $scope) {
      this.albumData = Fixtures.getAlbum();
      $scope.songs = albumPicasso.songs;
    }

    angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
  })();
