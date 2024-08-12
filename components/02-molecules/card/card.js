import { Fancybox } from '@fancyapps/ui/';

Fancybox.bind('[data-fancybox="gallery"]', {
  compact: false,
  idle: false,

  animated: false,
  showClass: false,
  hideClass: false,

  dragToClose: false,
  contentClick: false,

  Images: {
    // Disable animation from/to thumbnail on start/close
    zoom: false,
  },

  Toolbar: {
    display: {
      left: [],
      middle: ['infobar'],
      right: ['close'],
    },
  },

  Thumbs: {
    type: 'classic',
  },
});
