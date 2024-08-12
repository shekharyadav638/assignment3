import team from './team.twig';
import teamdata from './team.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/team' };

export const teamData = () => team(teamdata);
