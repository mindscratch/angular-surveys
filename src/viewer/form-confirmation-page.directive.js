
angular.module('mwFormViewer')
    .directive('mwFormConfirmationPage', function () {

    return {
        replace: true,
        restrict: 'AE',
        require: '^mwFormViewer',
        scope: {
            submitStatus: '=',
            confirmationMessage: '=',
            readOnly: '=?',
            onGoBack: '&?', // mindscratch: callback to allow user to go back
            errorMessage: '=' // mindscratch: message displayed if an error occurs while submitting the form
        },
        templateUrl: function(element, attributes) {
            if (attributes.templateUrl) {
                return attributes.templateUrl;
            }
            return 'mw-form-confirmation-page.html';
        },
        controllerAs: 'ctrl',
        bindToController: true,
        controller: function(){
            var ctrl = this;
        },
        link: function (scope, ele, attrs, mwFormViewer){
            var ctrl = scope.ctrl;
            ctrl.print =  mwFormViewer.print;
        }
    };
});
