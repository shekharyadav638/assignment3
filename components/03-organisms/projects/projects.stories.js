import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import projects from './projects.twig';
import projectsdata from './projects.yml';
import './projects';

export default { title: 'Organisms/projects' };

export const Default = () => {
  const div = document.createElement('div');
  div.innerHTML = projects(projectsdata);

  Fancybox.bind('.glightbox', {});
  return div;
};
