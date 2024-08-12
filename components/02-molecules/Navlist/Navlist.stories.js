import nav from './Navlist.twig';
import navdata from './Navlist.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Navlist' };

export const Nav = () => nav(navdata);
