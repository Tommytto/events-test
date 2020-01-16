export default class EventListService {
    constructor($http) {
        this.$http = $http
        this.eventList = [];
    }

    getEventList() {
        return this.$http.get('/events.json')
            .then((res) => res.data)
            .then(({eventsList}) => {
                this.eventList = eventsList
                return eventsList
            })
    }

    getEventListWithCheck() {
        if (!this.eventList.length) {
            return this.getEventList()
        }

        return Promise.resolve(this.eventList)
    }

    getEvent(eventId) {
        return this.getEventListWithCheck().then(this.findEvent.bind(this, eventId))
    }

    findEvent(eventId, eventList) {
        return eventList.find(item => Number(item.id) === Number(eventId))
    }
}