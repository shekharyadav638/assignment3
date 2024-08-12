import card from './card.twig';
import cardData from './card.yml';

export default { title: 'Molecules/testimonial' };

export const testimonialCard = () => card(cardData);
