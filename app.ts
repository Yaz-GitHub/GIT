module TypescriptToDemo {

    module AccountPages {

        angular
            .module('accountpages', ["ngMessages"])
            .config(AppProvider);

        function AppProvider($provide) {
            var urls = angular.copy(TypescriptToDemo.urls);
            var resources = angular.copy(TypescriptToDemo.resources);
            $provide.constant("RouteUrls", urls);
            $provide.constant("Resources", resources);
        }
        AppProvider.$inject = ['$provide'];
    }
}

