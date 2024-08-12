import underline from './underline.twig';
import underlineData from './underline.yml';

export default { title: 'Atoms/underline' };
export const twig = () => underline(underlineData);
