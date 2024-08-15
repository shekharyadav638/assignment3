import altservices from './altservices.twig';
import altservicesData from './altservices.yml';

export default { title: 'Organisms/altservices' };

export const altservicesCard = () => altservices(altservicesData);
