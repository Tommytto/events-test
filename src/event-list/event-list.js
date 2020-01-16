import EventListService from "./event-list-service";
import EventListController from "./event-list-controller";
import template from './event-list.html'
import './event-list.scss'

const module = angular.module('myApp.eventList', ['ui.router', 'myApp.core'])

module.config(['$stateProvider', '$provide', function ($stateProvider, $provide) {
    $stateProvider.state({
        name: 'eventList',
        url: '/events',
        template,
        controller: 'EventListController'
    });

    $provide.factory('$eventListService', ['$http', EventListService])
}]);

module.controller('EventListController', ['$eventListService', '$scope', EventListController]);