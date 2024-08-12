import headerData from '../../03-organisms/header/header.yml';
import heroData from '../../03-organisms/hero/hero.yml';
import header from '../../03-organisms/header/header.twig';
import hero from '../../03-organisms/hero/hero.twig';
import featuresData from '../../03-organisms/features/features.yml';
import features from '../../03-organisms/features/features.twig';
import whodata from '../../03-organisms/who/who.yml';
import who from '../../03-organisms/who/who.twig';
import valuesdata from '../../03-organisms/values/values.yml';
import values from '../../03-organisms/values/values.twig';
import statsdata from '../../03-organisms/stats/stats.yml';
import stats from '../../03-organisms/stats/stats.twig';
import serviceData from '../../03-organisms/service/service.yml';
import service from '../../03-organisms/service/service.twig';
import pricedata from '../../03-organisms/pricing/pricing.yml';
import price from '../../03-organisms/pricing/pricing.twig';
import teamdata from '../../03-organisms/team/team.yml';
import team from '../../03-organisms/team/team.twig';
import testimonialsdata from '../../03-organisms/testimonials/testimonials.yml';
import testimonials from '../../03-organisms/testimonials/testimonials.twig';
import clientsdata from '../../03-organisms/clients/clients.yml';
import clients from '../../03-organisms/clients/clients.twig';
import postsdata from '../../03-organisms/posts/posts.yml';
import posts from '../../03-organisms/posts/posts.twig';
import contactusdata from '../../03-organisms/contactus/contactus.yml';
import contactus from '../../03-organisms/contactus/contactus.twig';

export const Main = () => `
  <div class="main-template">
    ${header(headerData)}
    ${hero(heroData)}
    ${who(whodata)}
    ${values(valuesdata)}
    ${stats(statsdata)}
    ${features(featuresData)}
    ${service(serviceData)}
    ${price(pricedata)}
    ${testimonials(testimonialsdata)}
    ${team(teamdata)}
    ${clients(clientsdata)}
    ${posts(postsdata)}
    ${contactus(contactusdata)}
  </div>
`;

export default { title: 'Templates/newtemp' };
