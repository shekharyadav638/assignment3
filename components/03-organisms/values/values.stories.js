import values from './values.twig';

import valuesData from './values.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Values' };

export const value = () => values(valuesData);
