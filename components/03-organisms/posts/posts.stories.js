import posts from './posts.twig';
import postsData from './posts.yml';

export default { title: 'Organisms/posts' };

export const post = () => posts(postsData);
