import nav from './nav.twig';
import navData from './nav.yml';

export default { title: 'Molecules/navBar' };

export const twig = () => nav(navData);
