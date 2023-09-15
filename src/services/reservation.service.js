import service from './index';

const ReservationService = {
    createReservation: (endpoint, formData) => service.post(endpoint, formData),
    getAllReservations: (endpoint) => service.get(endpoint),
    getOneService: (endpoint) => service.get(endpoint),
    updateOneReservation: (endpoint, formData) => service.put(endpoint, formData),
    deleteOneReservation: (endpoint, formData) => service.delete(endpoint, formData),
}

export default ReservationService;