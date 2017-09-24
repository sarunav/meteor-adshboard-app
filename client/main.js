import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import { name as sidebar } from '../imports/ui/components/sidebar/sidebar.js';
import { name as topbar } from '../imports/ui/components/topbar/topbar.js';
import { name as mainView } from '../imports/ui/components/main-view/main-view.js';
import { name as dashboard } from '../imports/ui/components/dashboard/dashboard.js';
import { name as signup } from '../imports/ui/components/signup/signup';
import { name as signin } from '../imports/ui/components/signin/signin';


angular.module('codeApp', [
    angularMeteor,
    uiRouter,
    'accounts.ui',
    'ngMessages',
    sidebar,
    topbar,
    mainView,
    dashboard,
    signup,
    signin

])

.controller('mainCtrl', function($scope, $reactive) {

    $reactive(this).attach($scope);
    this.helpers({
        isLoggedin: function() {
            return Meteor.userId()
        }
    })
})


.config(config)
    .run(run)

function config($locationProvider, $urlRouterProvider, $stateProvider, $qProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    // $qProvider.errorOnUnhandledRejections(false);
    $urlRouterProvider.otherwise('/signin');
}

function run($rootScope, $state) {
    'ngInject';
    console.log($state.current);
    $rootScope.$on('$stateChangeError',
        (event, toState, toParams, fromState, fromParams, error) => {
            console.log(error)
            if (error === 'AUTH_REQUIRED') {
                $state.go('signin');
            }
        }
    );
}