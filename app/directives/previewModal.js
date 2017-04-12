angular.module('glApp').directive('previewModal', function () {
    return {
        restrict: 'E',
        scope: {
            data: '=data',
            show: '=info'
        },
        replace: true,
        templateUrl: "build/views/previewModal.html",
        link: function (scope, element, attrs) {
            console.log(scope.albumData);
            scope.dialogStyle = {};
            scope.hideModal = function () {
                scope.show = false;
            };
        }
    };
});
