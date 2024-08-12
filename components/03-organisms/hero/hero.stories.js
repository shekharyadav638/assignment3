import hero from './hero.twig';
import herodata from './hero.yml';
import './hero';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/hero' };

export const Nav = () => hero(herodata);
