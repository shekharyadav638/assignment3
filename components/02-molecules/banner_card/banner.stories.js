import banner from './banner.twig';
import bannerData from './banner.yml';

export default { title: 'Molecules/banner' };

export const cardExample = () => banner(bannerData);
