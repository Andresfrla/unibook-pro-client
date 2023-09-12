import service from './index';

const ServicesService = {
    getAllServices: (endpoint) => service.get(endpoint),
    createService: (endpoint, formData) => service.post(endpoint, formData),
    getOneService: (endpoint) => service.post(endpoint),
    updateOneService: (endpoint, formData) => service.put(endpoint, formData),
    deleteOneService: (endpoint) => service.delete(endpoint),
}

export default ServicesService;
