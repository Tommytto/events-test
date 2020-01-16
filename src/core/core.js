import MainLayoutComponent from "./components/main-layout/main-layout";
import AppButtonComponent from "./components/app-button/app-button";
import EventCardComponent from "./components/event-card/event-card";

const module = angular.module('myApp.core', [])

module.config(['$provide', function ($provide) {

}]);

module.component(...MainLayoutComponent);
module.component(...AppButtonComponent);
module.component(...EventCardComponent);