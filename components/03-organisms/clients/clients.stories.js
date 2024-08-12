import clients from './clients.twig';
import clientsData from './clients.yml';

export default { title: 'Organisms/clients' };

export const clientsCard = () => clients(clientsData);
