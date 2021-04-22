const email = ''
const SocialMedia = [
  {
    name: 'Email',
    short: email,
    url: 'mailto: ' + email,
    img: '/images/Social/email.svg',
    isShown: false,
    isWelcome: true,
    isBannerIgnored: true,
    background: '#464646',
    hoverColor: '#FFFFFF'
  },
  {
    name: 'YouTube',
    url: '',
    img: '/images/Social/youtube.svg',
    isShown: true,
    isWelcome: false,
    background: '#FF0000',
    hoverColor: '#FF0000'
  },
  {
    name: 'LinkedIn',
    url: '',
    img: '/images/Social/linkedin.svg',
    isShown: true,
    isWelcome: true,
    background: '#0077B5',
    hoverColor: '#0077B5'
  },
  {
    name: 'Steam',
    url: '',
    img: '/images/Social/steam.svg',
    isShown: true,
    isWelcome: false,
    background: '#000000',
    hoverColor: '#000000'
  },
  {
    // TODO Add this, Means the Social Container will need adjusting
    name: 'GitHub',
    url: 'https://github.com/{{ process.env.SOCIAL_GITHUB }}',
    img: '/images/Social/github.svg',
    isShown: false,
    isWelcome: true,
    // Normal Github colour is 181717 but it contrasts poorly with website colour
    background: '#101010',
    hoverColor: '#FFFFFF'
  },
  {
    name: 'Discord',
    url: '',
    img: '/images/Social/discord.svg',
    isShown: true,
    isWelcome: true,
    background: '#7289DA',
    hoverColor: '#7289DA'
  },
  {
    name: 'Unity',
    url: '',
    img: '/images/Social/unity.svg',
    isShown: false,
    isWelcome: false,
    background: '#000000',
    hoverColor: '#000000'
  }
]

export default SocialMedia
