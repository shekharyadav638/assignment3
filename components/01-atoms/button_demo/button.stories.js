// Buttons Stories
import button from './buttons.twig';
import buttonData from './buttons.yml';
import buttonAltData from './buttons-alt.yml';

export default { title: 'Atoms/trialButton' };

export const twig = () => button(buttonData);

export const twigAlt = () => button(buttonAltData);
