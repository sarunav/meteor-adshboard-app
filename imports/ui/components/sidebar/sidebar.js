import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './sidebar.html';

let name = 'sidebar';

export default angular.module(name, [
    angularMeteor
])

.component(name, {
    template: template.default,
    controllerAs: name,
    controller($scope, $reactive, $state) {
        'ngInject';

        $reactive(this).attach($scope);
        console.log($state.current.name)
        this.menuItems = [{
                "title": "Dashboard",
                "link": "dashboard",
                "icon": "fa-dashboard"
            },
            {
                "title": "Events",
                "link": "eventsView",
                "icon": "fa-calendar"
            },
            {
                "title": "Users",
                "link": "users",
                "icon": "fa-users"
            },
            {
                "title": "Orders",
                "link": "ordersView",
                "icon": "fa-list-alt"
            },
            {
                "title": "Roles",
                "link": "rolesView",
                "icon": "fa-user-circle-o"
            },
            {
                "title": "Settings",
                "link": "settingsView",
                "icon": "fa-cogs"
            },
        ];
        let index = this.menuItems.findIndex(i => i.link === $state.current.name);
        this.activeMenu = this.menuItems[index];
        this.setActive = function(menuItem) {
            this.activeMenu = menuItem
        }

        this.helpers({
            isLoggedin: function() {
                return Meteor.userId()
            }
        })

    }
});