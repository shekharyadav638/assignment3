import card from './card.twig';

import cardData from './card.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/contactCard' };

export const cardExample = () => card(cardData);
