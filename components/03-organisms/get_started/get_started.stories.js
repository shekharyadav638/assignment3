import getstarted from './get_started.twig';
import getstartedData from './get_started.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/get_started' };

export const getStarted = () => getstarted(getstartedData);
