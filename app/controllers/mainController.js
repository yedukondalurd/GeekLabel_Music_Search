angular.module('glApp').controller('MainController', ['$scope', 'SpotifyService', function ($scope, SpotifyService) {
    $scope.searchKey = '';
    $scope.artistData = '';
    $scope.searchArtistOrAlbum = function (searchKey) {
        var param = {q: searchKey, type: 'artist'};
        SpotifyService.getArtists(param).then(function (response) {
            $scope.artistData = response.data.artists;
        });
    };
    $scope.modalShown = false;
    $scope.showPreview = function (artist) {
        SpotifyService.getAlbums(artist.id).then(function (response) {
            $scope.previewData = {
                imageUrl: artist.images[0].url,
                albumData: response.data.items
            };
            $scope.modalShown = !$scope.modalShown;
        });

    };
}]);