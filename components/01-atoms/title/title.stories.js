import title from './title.twig';
import titleData from './title.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/title' };

export const titles = () => title(titleData);
