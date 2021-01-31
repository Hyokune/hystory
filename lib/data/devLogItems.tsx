import HeroCategories from 'lib/enums/heroCategories';
import DevLogItem from 'lib/interfaces/devLogItem';
import moment from 'moment';

const DevLogItems: DevLogItem[] = [
  {
    id: 2,
    category: HeroCategories.Blog,
    date: moment('2021-01-24', 'YYYY-MM-DD').format('DD/MM/YYYY'),
    title: 'Peaking into the game engine',
    blurb: 'Learning the fundamentals and basic usage of Unreal Engine 4',
    img: { src: '/images/dev-log/dev-log-2.png', alt: 'Dev Log 2 Image' },
    content: `
      <p>
        After following a bit of the Udemy course mentioned in my previous post, I realised that my knowledge wasn't really going to expand or get better if I only followed the instructions given in the course. 
        So I decided that I wanted to make a small playable game / level where a character can move around in, however I had no experience or any ideas on how to create one.
      </p>
      <p>
        For the past few months, I've been following a Korean game developer named <a href="https://www.youtube.com/channel/UCQ0XCG4FHzPdz6g_F-Uk9mA">RYU Russell</a> who's been creating youtube videos
        of his development on a 3D Maplestory game. 
        I was amazed at the fact that he was able to recreate a pixelated 2D scene into a high quality 3D map for users to play around in. Regardless of how the characters looked, it felt very nostalgic and 
        the scenery brought back a lot of childhood memories of playing Maplestory.
      <p>
      <p>
        It looked like I wasn't the only one that was inspired by those videos. Due to the big interest from the Maplestory community, he decided to release a course on <a href="https://class101.net/products/5eba361c0a91e70da7203002">Class101</a>
        to help other game developers or hobbyists to be able to create their own environments in which I decided to take part in. The course covers the steps he takes when creating environments and elaborates on how he designs them.
      </p>
      <p>
        In the first chapter he teaches the basic controls and explains the engine's user interface to help any new starters on the engine. 
        The second chapter consisted of adding different type of objects (also known as Actors) into the scene then applying materials to those objects. He also went further to explain how 
        changing certain parameter values was able to produce a different style of the same material which have been covered in the Udemy course so I was able to quickly go through these first 
        two chapters. From the third chapter onwards was where the environment creation started.
      </p>
      <img src="/images/dev-log/ue4-basic-material.png" alt="UE4 Basic Material Learning" />
      <p>
        To be able to create an environment that's not just boxes and spheres we needed some assets but conveniently it was available to us for free. 
        Epic Games recently acquired Quixel allowing all the Megascans assets to become free for use with Unreal Engine. This meant that anyone using Unreal Engine 4 is able to create high quality and 
        aesthetically pleasing levels using the assets provided by Quixel. Additionally Russell was also using Quixel Bridge's assets in the course to allow other developers to be able to follow the course without 
        having to purchase assets. One downside of these assets is that they do not have any collisions therefore you will have to generate collisions for each asset exported.
      </p>
      <p>
        When creating a level or scene, he suggested that it is important to draw a guideline on how big you want the level to be. For example if you just need a small area for the player to be in, 
        then that area can be wrapped around by some big assets like trees to help with focusing on that area and then create the level inwards rather than building the core structure of the level and building 
        the outer environment after. This is because if you start from the main focus area of the level, then the level could grow endlessly as you would want to continuously keep adding parts to the level.
      </p>
      <p>
        Just having the assets sit on the level wasn't enough to make the scenery appealing, it was time to add some post processing to increase the liveliness. 
        Russell went through the main parameters and showed how they affected the scenery giving an understanding of what to change when wanting to produce a certain imagery. 
      </p>
      <p>
        Here is the outcome of what I produced from the third chapter and can't wait for the upcoming chapters to make a different environment. 
        With the skills I learned in this course combined with the Udemy course I hope I will be able to create a playable level with some added game mechanics.
      </p> 
      <img src="/images/dev-log/ue4-forest-level.png" alt="UE4 Forest Level" />
    `
  },
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
