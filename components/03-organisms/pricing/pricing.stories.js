import pricing from './pricing.twig';
import pricingData from './pricing.yml';

export default { title: 'Organisms/pricing' };

export const priceCard = () => pricing(pricingData);
