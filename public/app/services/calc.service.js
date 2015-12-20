(function () {
    'use strict';

    angular
        .module('app')
        .factory('CalcService', CalcService);

    function CalcService() {
        var service = {
            sendMessage: sendMessage
        };

        return service;

        function sendMessage() {
            return "Hello from Service";
        };
    }

})();