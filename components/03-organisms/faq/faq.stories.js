import faq from './faq.twig';
import faqData from './faq.yml';

export default { title: 'Organisms/faq' };

export const faqCard = () => faq(faqData);
