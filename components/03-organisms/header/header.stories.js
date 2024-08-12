import header from './header.twig';
import headerdata from './header.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/header' };

export const Nav = () => header(headerdata);
