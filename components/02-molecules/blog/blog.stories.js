import blog from './blog.twig';
import blogData from './blog.yml';

export default { title: 'Molecules/blog' };

export const blogCard = () => blog(blogData);
