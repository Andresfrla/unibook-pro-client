import service from './index';

const calendarService = {
    createOrUpdateCalendar: (endpoint,formData) => service.post(endpoint, formData),
}

export default calendarService;