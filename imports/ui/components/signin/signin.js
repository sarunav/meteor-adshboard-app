import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './signin.html';


class signinClass {
    constructor($stateParams, $scope, $reactive, $state) {
        'ngInject';
        $reactive(this).attach($scope);

        this.doLogin = function(email, password) {
            console.log($scope.email)

            var emailVar = email;
            var passwordVar = password;
            var self = this;
            self.saving = true;
            Meteor.loginWithPassword(emailVar, passwordVar, function(error) {
                self.saving = false;
                if (error) {
                    toastr.error(error.reason);
                } else {
                    $state.go('dashboard');
                }
            });

            return false;
        }
    }
}

let name = 'signin';

export default angular.module(name, [
    angularMeteor,
    uiRouter,
])

.component(name, {
    template: template.default,
    controllerAs: name,
    controller: signinClass
})

.config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('signin', {
            url: '/signin',
            template: '<signin></signin>'
        })
}