module.exports = {
  email: 'kuhuchawla01@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/KuhuChawla',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kuhu-chawla/',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/kuhuchawla01/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kuhuchawla01',
    },
    {
      name: 'GeeksForGeeks',
      url: 'https://auth.geeksforgeeks.org/user/kuhuchawla01/profile'
    }
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
      name: 'Blogs',
      url: '/#blogs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    orange: '#ff4900',
    navy: '#050505',
    darkNavy: '#050505',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
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
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
