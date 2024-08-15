import hero from './hero.twig';
import herodata from './hero.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/hero' };

export const Nav = () => hero(herodata);
