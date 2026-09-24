// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'rixxz142', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['rixxz142/rixxz142', 'rixxz142/portfolio'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Work Projects at Terra Drone Indonesia',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'TerraMAN WhatsApp Bot (2026)',
          description:
            'Automated backup bot that archives messages and media shared in WhatsApp groups (text, files, images and videos) to Google Drive, organized into folders by group name.',
          link: 'https://terra-drone.co.id',
        },
        {
          title: 'TerraMAN Finance Telegram Bot (2026)',
          description:
            'Telegram-based financial tracking bot that uses LLM and OCR to record AED transactions into Google Sheets and maintain user-specific financial records.',
          link: 'https://terra-drone.co.id',
        },
        {
          title: 'Terra Academy (2026)',
          description:
            'Learning Management System for managing drone training, courses, learning materials, user progress and certifications.',
          link: 'https://terra-drone.co.id',
        },
        {
          title: 'Product Reselling Hub (2026)',
          description:
            'Enterprise sales platform for managing inventory, sales, logistics, after-sales service and revenue tracking.',
          link: 'https://terra-drone.co.id',
        },
        {
          title: 'Terra Hub (2026)',
          description:
            'Centralized organization portal that provides access to multiple web products and internal applications through a single platform.',
          link: 'https://terra-drone.co.id',
        },
        {
          title: 'Terra Organize (2025 - 2026)',
          description:
            'Centralized drone fleet management system for managing pilots, inventory, maintenance, operations and flight logs.',
          link: 'https://terra-drone.co.id',
        },
        {
          title: 'Terra Progress (2025)',
          description:
            'Geospatial platform for monitoring project progress through interactive maps and visual documentation.',
          link: 'https://terra-drone.co.id',
        },
        {
          title: 'SkyOps Mobile & Web (2025)',
          description:
            'Digital inventory tracking system with mobile and web apps for checking equipment in and out of inventory and project sites, so every transported item is recorded and accounted for.',
          link: 'https://terra-drone.co.id',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Muhammad Rizqi Anugerah',
    description:
      'Software Engineer (Full Stack & Infrastructure) based in Bandung, Indonesia. Linux enthusiast who enjoys working across frontend, backend, databases, servers and deployment.',
    imageURL: '',
  },
  social: {
    linkedin: 'muhammadrizqianugerah',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'rrizqianugrah@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'Python',
    'Go',
    'PHP',
    'Java',
    'C / C++',
    'SQL',
    'Bash',
    'React',
    'Next.js',
    'Vue.js',
    'React Native',
    'Node.js',
    'Express.js',
    'Flask',
    'FastAPI',
    'Laravel',
    'Tailwind CSS',
    'PostgreSQL',
    'MySQL',
    'MariaDB',
    'MongoDB',
    'Linux',
    'Docker',
    'Podman',
    'Nginx',
    'PM2',
    'GCP',
    'n8n',
    'Google APIs',
    'Webhooks',
    'Git',
    'Vim',
  ],
  experiences: [
    {
      company: 'Terra Drone Indonesia',
      position: 'Web Developer (Intern)',
      from: 'June 2026',
      to: 'Present',
      companyLink: 'https://terra-drone.co.id',
    },
    {
      company: 'Terra Drone Indonesia',
      position: 'Database Server (Intern)',
      from: 'June 2025',
      to: 'June 2026',
      companyLink: 'https://terra-drone.co.id',
    },
  ],
  certifications: [
    {
      name: 'SQL and Relational Databases',
      body: 'Cognitive Class',
      year: '2026',
      link: '',
    },
    {
      name: 'Data Analysis with Python',
      body: 'Cognitive Class',
      year: '2026',
      link: '',
    },
    {
      name: 'Drone Pilot Training Certificate',
      body: 'Terra Drone Indonesia',
      year: '2025',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Binus University, Bandung & Jakarta',
      degree: 'School of Computer Science, Database Technology',
      from: 'September 2022',
      to: 'Present',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
