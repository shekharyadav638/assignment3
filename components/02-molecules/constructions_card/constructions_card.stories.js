import constructionscard from './constructions_card.twig';

import constructionscardData from './constructions_card.yml';

export default { title: 'Molecules/Constructions_card' };

export const constructionsCard = () => constructionscard(constructionscardData);
