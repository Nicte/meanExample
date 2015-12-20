(function () {
    'use strict';

    angular
        .module('app')
        .controller('CalcController', CalcController);

    CalcController.$inject = ['CalcService']

    function CalcController(CalcService) {
        var vm = this;
        vm.name = 'hello from controller';
        vm.sendMessage = CalcService.sendMessage();
    }
})();