import 'angular'
import '@uirouter/angularjs'
import './core/core'
import './event-list/event-list'
import './event/event'
import './app.scss'

const app = angular.module('myApp', [
    'ui.router',
    'myApp.core',
    'myApp.event',
    'myApp.eventList',
]);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/events');
}]);
