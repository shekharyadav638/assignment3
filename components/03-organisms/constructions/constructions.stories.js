import constructions from './constructions.twig';

import constructionsData from './constructions.yml';

export default { title: 'organisms/Constructions' };

export const constructionsSection = () => constructions(constructionsData);
