import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Users } from '../../../api/models/users';

import template from './topbar.html';

let name = 'topbar';

export default angular.module(name, [
    angularMeteor
])



.component(name, {
    template: template.default,
    controllerAs: name,
    controller($scope, $reactive, $state) {
        'ngInject';

        Meteor.subscribe('Users');

        $reactive(this).attach($scope);
        this.helpers({
            isLoggedin: function() {
                console.log(Meteor.userId());
                return Meteor.userId()
            },
            user: function() {
                // console.log(Meteor.user());
                return Meteor.user();
            }
        })

        this.logoutUser = function() {
            Meteor.logout(function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('You are now logged out');
                    $state.go('signin');
                }
            });
        };
    }
});