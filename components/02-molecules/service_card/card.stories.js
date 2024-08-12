import card from './card.twig';
import cardData from './card.yml';

export default { title: 'Molecules/servicecard' };

export const cardExample = () => card(cardData);
