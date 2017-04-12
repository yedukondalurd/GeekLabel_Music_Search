angular.module('glApp').factory('SpotifyService', ['$q', '$http', function ($q, $http) {
    function spotifyService() {
        this.baseApi = 'https://api.spotify.com/v1';
    }

    spotifyService.prototype = {
        baseHttp: function (endpoint, method, params, data, headers) {
            var deferredObj = $q.defer();
            $http({
                url: this.baseApi + endpoint,
                method: method ? method : 'GET',
                params: params,
                data: data,
                headers: headers,
                withCredentials: false
            }).then(function (data) {
                deferredObj.resolve(data);
            }).catch(function (data) {
                deferredObj.reject(data);
            });
            return deferredObj.promise;
        },
        /*getArtistOrAlbums: function (artist, options) {
         return this.baseHttp('/artists/' + artist + '/albums', 'GET', options);
         },*/
        getArtists: function (options) {
            return this.baseHttp('/search', 'GET', options);
        },
        getAlbums: function (artist) {
            return this.baseHttp('/artists/' + artist + '/albums', 'GET');
        }
    };
    return new spotifyService();
}]);
