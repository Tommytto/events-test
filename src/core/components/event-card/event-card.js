import template from './event-card.html'
import './event-card.scss'

const EventCardComponent = ['eventCard', {
    template,
    bindings: {
        event: '<',
    }
}];

export default EventCardComponent