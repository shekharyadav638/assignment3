import about from './aboutus.twig';
import aboutData from './aboutus.yml';

export default { title: 'Molecules/aboutus' };
export const aboutus = () => about(aboutData);
