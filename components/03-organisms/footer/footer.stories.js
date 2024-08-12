import footer from './footer.twig';

import footerData from './footer.yml';

export default { title: 'Organisms/footer' };

export const footerExample = () => footer(footerData);
