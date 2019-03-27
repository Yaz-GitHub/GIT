var TypescriptToDemo;
(function (TypescriptToDemo) {
    var AccountPages;
    (function (AccountPages) {
        angular
            .module('accountpages', ["ngMaterial", "ngMessages", "agShared"])
            .config(AppProvider);
        function AppProvider($provide) {
            var urls = angular.copy(TypescriptToDemo.urls);
            var resources = angular.copy(TypescriptToDemo.resources);
            $provide.constant("RouteUrls", urls);
            $provide.constant("Resources", resources);
        }
        AppProvider.$inject = ['$provide'];
    })(AccountPages || (AccountPages = {}));
})(TypescriptToDemo || (TypescriptToDemo = {}));
//# sourceMappingURL=app.js.map