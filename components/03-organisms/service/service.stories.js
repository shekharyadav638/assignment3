import service from './service.twig';
import serviceData from './service.yml';

export default { title: 'Organisms/service' };

export const cardExample = () => service(serviceData);
