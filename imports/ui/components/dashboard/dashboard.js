import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Users } from '../../../api/models/users';



import template from './dashboard.html';


let name = 'dashboard';

export default angular.module(name, [
    angularMeteor,
    uiRouter,
])

.component(name, {
    template: template.default,
    controllerAs: name,
    controller($scope, $reactive, $http) {
        'ngInject';

        $reactive(this).attach($scope);


    }
})

.config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('dashboard', {
            url: '/',
            template: '<dashboard></dashboard>',
            resolve: {
                currentUser($q) {
                    if (Meteor.userId() === null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else {
                        return $q.resolve();
                    }
                }
            }
        })
}