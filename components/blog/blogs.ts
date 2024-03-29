import blogType from "./blog-type";

const blogs: blogType[] = [
  {
    id: "id_blog_appcreate",
    title: "How this portfolio app was created",
    summary:
      "Describe: 1) The components used in the app. 2) Why the components were chosen \
        3) challenges you ran into when creating the app and how they were resolved",
    path: "appcreate.md",
  },
  {
    id: "id_blog_subcontrib",
    title: "Blitzjs subtemplate contribution",
    summary:
      "Describe: 1) The additions made to the feature 2) Why the specific additions were made \
        3) challenges you ran into when creating working on the feature",
    path: "subcontrib.md",
  },
  // Basically, any project I worked on can be blogged about in the above components/ skills used, why those were chosen, and
  // challenges encountered. Each of the challenges encountered could get their own sub blogs if they are large enough
  {
    id: "id_blog_aboutdops",
    title: "About devops",
    summary:
      "In the beginning ,there were computers and peple had to go to them and program on them and those computers will run the code right away. \
         Havgin a 'single environment' like that was probably not a good idea, so \
         the idea of a dev vs prod environment was inventeed. This led to the need for some way to get\
          the code from dev to prod, which today is called devops.",
    path: "aboutdops.md",
  },
  {
    id: "id_blog_aboutdepends",
    title: "About dependencies",
    summary:
      "Rewriting everything you need from scratch takes time, likely an infeasible amount of time if you are writing a web application. \
        You will have to use a Tech stack written by another person or company, i.e.: ASP.NET Core, Spring boot, etc.\
        Considerations: Make sure their philosophy aligns with yours. E.g.: Mantine's creator prefers to not use libraries like tailwind\
        which use several utility classes, and after using Mantine, I agree with this philosophy. For \
        this reason, it makes sense for me to continue to use Mantine because I know that the decisions and problems I face \
        will be handled by the owner in a similar way to how  I would handle them (by not using utilit y classes but rather favoring the way Mantine does thins) \
        TODO: Is there a name for the style of css that mantine uses",
    path: "aboutdepends.md",
  },
  {
    id: "id_blog_ltermgoals",
    title: "My long term goal",
    summary:
      "I'm playing the long game. I'm not aiming for high figure salaries right now, but rather am looking to expand my knowledge of software tools, languages and concepts so that \
        the day I decide to start something on my own, I have an understanding of the advantages and idsadvantages of certain technologies and which ones to leverage\
        to solve a problem Im having",
    path: "ltermgoals.md",
  },
  {
    id: "id_blog_stabletags",
    title: "Ensure your Kubernetes deployment images have a stable tag",
    skillIds: ["id_skill_k8s", "id_skill_docker"],
    summary:
      "If your images are tagged like 'dev' or 'latest', if one of your pods goes down, and is replaced by a new pod, it may use a different image because the uploaders overwrote the image tag with a newer images \
        This may cause issues if that newer image expects a different version of a corresponding service like postgres. To avoid this, always make sure that your deployments have a stable version that won't be overwritten (like 1.2.3, etc.)",
    path: "stabletags.md",
  },
  {
    id: "id_blog_surgerydb",
    title: "We did surgery on a database",
    skillIds: ["id_skill_k8s"],
    summary:
      "A few weeks into my stay at Synergy, I learned that our instance of Harbor broke. This was because we didn't specify a stable image tag for its deployment (see 'ensure kubernetes images have stable tag blog post'). \
        our postgres database was not migrated, and we ended by sshing into that container, examining its schema against the schema of the latest persistent volume, and adding and editing the postgres schema if the broken db \
        to match the new one, my manager and I did this on a 2 hour Teams call, table by table, until Harbor began working again",
    path: "surgerydb.md",
  },
  {
    id: "id_blog_loctracker",
    title: "Building a location tracker app in two months using Blitzjs",
    skillIds: ["id_skill_blitzjs"],
    summary:
      "Builds on the components created for the word anthakshari (link to blog) and widow hunt (link yo blog) apps \
        and the google maps api I researched in angelic solutoin spot (link to blog)",
    path: "loctracker.md",
  },
  {
    id: "id_blog_chatcomp",
    title: "Feature focus: Word anthakshari multiplayer chat component",
    skillIds: [],
    summary:
      "Describe how the word anthakrhari chat component works, and how it consumes and displays a feed \
    of game information and player chats. It was inspired by the online pictionary chat",
    path: "chatcomp.md",
  },
  {
    id: "id_blog_fewclicks",
    title: "Do you know what these clicks do?",
    skillIds: [],
    summary:
      "Describe the journey of learning salesforce and becoming a certified admin in 3 months. \
      Salesforce is a low code, no code platform",
    path: "fewclicks.md",
  },
  {
    id: "id_blog_frameworkwars",
    title: "The framework wars",
    skillIds: [],
    summary:
      "The number of JAvascript web frameworks are booming. Each has its strenghts, and ultimately, the developer experiences is improving because of this competition. \
    Its a lot of fun to see the competition though:",
    //"<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Who is going to win? <a href="https://twitter.com/hashtag/ReactJS?src=hash&amp;ref_src=twsrc%5Etfw">#ReactJS</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://t.co/jcBEDceJub">pic.twitter.com/jcBEDceJub</a></p>&mdash; Fireship (@fireship_dev) <a href="https://twitter.com/fireship_dev/status/1486087419946430465?ref_src=twsrc%5Etfw">January 25, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> "
    //<blockquote class="twitter-tweet"><p lang="und" dir="ltr">inb4 <a href="https://twitter.com/blitz_js?ref_src=twsrc%5Etfw">@blitz_js</a> <a href="https://twitter.com/hashtag/ReactJS?src=hash&amp;ref_src=twsrc%5Etfw">#ReactJS</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://t.co/GKHq53yU8h">pic.twitter.com/GKHq53yU8h</a></p>&mdash; Michal (@pietmichal) <a href="https://twitter.com/pietmichal/status/1486641447264833544?ref_src=twsrc%5Etfw">January 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    path: "frameworkwars.md",
  },
];

export default blogs;
