import project from './project.twig';
import projectdata from './project.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/project' };

export const Default = () => project(projectdata);
