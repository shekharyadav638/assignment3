import '@fancyapps/ui/dist/fancybox/fancybox.css';
import card from './card.twig';

import cardData from './card.yml';
import './card';

export default { title: 'Molecules/Cards' };

export const cardExample = () => card(cardData);
