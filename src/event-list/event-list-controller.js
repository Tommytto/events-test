export default class EventListController {
    constructor($eventListService, $scope) {
        this.$eventListService = $eventListService;
        this.$scope = $scope;
        this.$scope.eventList = []
    }

    $onInit() {
        this.$eventListService.getEventList().then((eventList) => {
            this.$scope.eventList = eventList;
        })
    }
}