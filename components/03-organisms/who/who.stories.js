import who from './who.twig';
import whodata from './who.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/who' };

export const Nav = () => who(whodata);
