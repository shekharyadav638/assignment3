import tabs from './tabs.twig';

import tabsData from './tabs.yml';

export default { title: 'Organisms/tabs' };

export const tab = () => tabs(tabsData);
