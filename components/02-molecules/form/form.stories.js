import form from './form.twig';

import formData from './form.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/form' };

export const formExample = () => form(formData);
