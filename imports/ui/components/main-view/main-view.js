import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './main-view.html';

let name = 'main';



export default angular.module(name, [
    angularMeteor,
    uiRouter,
])

.component(name, {
    template: template.default,
    controllerAs: name,
    controller($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
        this.helpers({
            isLoggedin: function() {
                return Meteor.userId()
            }
        })
    }
})