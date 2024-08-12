import card from './card3.twig';

import cardData from './card3.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/altfeatureCards' };

export const card3 = () => card(cardData);
