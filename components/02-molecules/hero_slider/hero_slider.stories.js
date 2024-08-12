import heroSlider from './hero_slider.twig';
import heroSliderData from './hero_slider.yml';
import './hero_slider';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/hero_slider' };

export const slider = () => heroSlider(heroSliderData);
