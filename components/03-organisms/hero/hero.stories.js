import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import hero from './hero.twig';
import herodata from './hero.yml';
import './hero';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/hero' };

export const Nav = () => hero(herodata);
