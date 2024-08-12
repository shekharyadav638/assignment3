import stats from './stats.twig';

import statsData from './stats.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/stats' };

export const statsdata = () => stats(statsData);
