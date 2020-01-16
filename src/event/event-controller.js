export default class EventController {
    constructor($eventListService, $scope, $stateParams) {
        this.$eventListService = $eventListService;
        this.$scope = $scope;
        this.$scope.event = {};
        this.eventId = $stateParams.id;
    }
    $onInit() {
        this.$eventListService.getEvent(this.eventId).then(event => {
            console.log(event);
            this.$scope.event = event || {}
        })
    }
}