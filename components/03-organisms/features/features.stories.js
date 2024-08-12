import feature from './features.twig';
import featuredata from './features.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/feature' };

export const Nav = () => feature(featuredata);
