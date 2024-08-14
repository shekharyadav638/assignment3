import card2 from './card2.twig';

import cardData2 from './card2.yml';
import './card2';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Featurecard' };

export const Featurecard = () => card2(cardData2);
