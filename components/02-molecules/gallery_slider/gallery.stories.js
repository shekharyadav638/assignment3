import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';

import gallery from './gallery.twig';
import galleryData from './gallery.yml';
import './gallery.scss';

export default {
  title: 'molecules/gallery',
};

export const Default = () => {
  const div = document.createElement('div');
  div.innerHTML = gallery(galleryData);

  Fancybox.bind('[data-fancybox="gallery"]', {});

  return div;
};
