(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http']

    function UserService($http) {
        var service = {
            getAllUsers: getAllUsers,
            getUserById: getUserById,
            createUser: createUser,
            updateUser: updateUser,
            deleteUser: deleteUser
        };

        return service;

        function getAllUsers() {
            return $http.get('/api/users');
        };
        
        function getUserById(userId) {
            return $http.get('/api/users/' + userId);
        };
        
        function createUser(user) {
            return $http.post('/api/users', user);
        };
        
        function updateUser(user) {
            return $http.put('/api/users/' + user.id, user);
        };
        
        function deleteUser(userId) {
            return $http.get('/api/users/' + userId);
        };
    }

})();