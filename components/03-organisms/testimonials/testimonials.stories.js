import testimonials from './testimonials.twig';
import testimonialsData from './testimonials.yml';
import './testimonials';

export default { title: 'Organisms/testimonials' };

export const testimonialsPage = () => testimonials(testimonialsData);
