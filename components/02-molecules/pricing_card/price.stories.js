import price from './price.twig';
import priceData from './price.yml';

export default { title: 'Molecules/pricecard' };

export const priceCard = () => price(priceData);
