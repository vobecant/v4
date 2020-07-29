module.exports = {
  siteTitle: 'Antonin Vobecky | PhD student in Computer Vision',
  siteDescription:
    'Antonin Vobecky is a PhD student at the CTU in Prague under the supervision of Josef Sivic who specializes in Computer Vision.',
  siteKeywords:
    'Antonin Vobecky, Antonin, Vobecky, vobecant, PhD student, Computer Vision',
  siteUrl: 'https://https://vobecant.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Antonin Vobecky',
  location: 'Prague, Czech Republic',
  email: 'a.vobecky@gmail.com',
  github: 'https://github.com/vobecant',
  twitterHandle: '@AVobecky',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/vobecant',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/antoninvobecky',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AVobecky',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
