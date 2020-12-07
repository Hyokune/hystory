import HeroCategories from 'lib/enums/heroCategories';
import DevLogItem from 'lib/interfaces/devLogItem';
import moment from 'moment';

const DevLogItems: DevLogItem[] = [
  {
    id: 1,
    category: HeroCategories.Announcement,
    date: moment('2020-11-26', 'YYYY-MM-DD').format('DD/MM/YYYY'),
    title: 'Starting my adventure',
    blurb: 'Something which I should have started a long time ago, but you know what they say, it\'s never late too start',
    img: { src: '/images/dev-log/dev-log-1.png', alt: 'Dev Log 1 Image' },
    content: `
      <p>
        Ever since I was in highschool, I've always had the idea of wanting to develop my own game in the back of my mind, but just like most people, I never got around to doing it. 
        Initially my career path wasn't to become a software developer/programmer therefore it wasn't something that I thought I could do or even start, however after my first year of 
        university, I realised becoming a pharmacist wasn't something I was passionate about so I decided to switch to a computer science degree. 
        To be fair, I enjoyed the chemistry side of it but the biology studies were killing me.
      </p>
      <p>
        Throughout my university days studying computer science, there were numerous times where I was hit with a surge of motivation to start learning game development 
        but it didn't take me anywhere due to numerous reasons. 
        Firstly there were definitely a lot of tools and resources out there to help game developers, however no matter how much I searched, 
        there weren't many good tutorials on getting fresh developers started on their game developer journey.
      </p>
      <p>
        Eventually I stumbled upon a <a href="https://www.udemy.com/course-dashboard-redirect/?course_id=657932">course on udemy</a> using Unreal Engine 4 
        which basically contained tutorials on making games. 
        The beginning was going well. I was able to follow through the course at a relative pace while doing my university work, but due to the fact that following 
        the course didn't really expand my knowledge on how to actually start developing my own game, the motivation slowly faded away and the course was left unfinished. 
        After few months, I would get motivated again but the problem was that I would always have to start from scratch as I wasn't able to remember what I did previously. 
        This process repeated multiple times through my degree, and here I am, at the starting line again, without having accomplished anything in game development. 
      </p>
      <p>To summarise, the learning curve was considerably high for me.</p>
      <p>
        Looking back now, if only I tried a little bit harder, pushed myself a bit further, I may have been able to be in a position where I could be satisfied with myself, 
        but I've come to realise that continously regretting about the past won't make any difference in my life and the only way to make it better is to move forward. 
        So to not make the same mistake, I have decided to make this site where I will start posting logs about my development progress whether it is front-end related or game development related.
      </p>
      <p>
        For now I don't have much to share, but I hope the following year will be filled with many adventurous stories and to anyone reading this, hope you can join me in this journey.
      </p>
    `
  },
];

export default DevLogItems;
