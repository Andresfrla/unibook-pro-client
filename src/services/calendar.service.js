import service from './index';

const calendarService = {
    createOrUpdateCalendar: (endpoint,formData) => service.post(endpoint, formData),
    getCalendar: (endpoint) => service.get(endpoint)
}

export default calendarService;