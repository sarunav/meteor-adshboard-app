import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './signup.html';


class signupClass {
    constructor($stateParams, $scope, $reactive, $state) {
        'ngInject';
        $reactive(this).attach($scope);

        this.signup = function(firstName, lastName, email, mobile, password) {

            var self = this;
            self.saving = true;

            var firstNameVar = firstName;
            var lastNameVar = lastName;
            var emailVar = email;
            var mobileVar = mobile;
            var passwordVar = password;

            Accounts.createUser({
                email: emailVar,
                password: passwordVar,
                profile: {
                    firstName: firstNameVar,
                    lastName: lastNameVar,
                    mobile: mobileVar,
                }
            }, function(err) {
                self.saving = false;
                if (err) {
                    toastr.error(err.reason);
                } else {
                    $state.go('dashboard');
                }
            });
            return false;
        };
    }
}

let name = 'signup';

export default angular.module(name, [
    angularMeteor,
    uiRouter,
])



.component(name, {
    template: template.default,
    controllerAs: name,
    controller: signupClass
})

.config(config)

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('signup', {
            url: '/signup',
            template: '<signup></signup>',
        })
};