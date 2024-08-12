import contactus from './contactus.twig';
import contactusData from './contactus.yml';

export default { title: 'Organisms/contactus' };

export const contactusCard = () => contactus(contactusData);
