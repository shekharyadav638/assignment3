import card from './card.twig';
import cardData from './card.yml';

export default { title: 'Molecules/teamcard' };

export const teamCard = () => card(cardData);
