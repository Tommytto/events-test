import EventController from './event-controller'
import template from './event.html'
import './event.scss'

angular.module('myApp.event', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state({
            name: 'event',
            url: '/event/{id}',
            template,
            controller: 'EventController'

        });
    }])

    .controller('EventController', ['$eventListService', '$scope', '$stateParams', EventController]);