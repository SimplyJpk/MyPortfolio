const SocialMedia =
{
  EMAIL: {
    name: 'Email',
    url: process.env.SOCIAL_EMAIL,
    img: '/images/Social/email.svg',
    isShown: false,
    isWelcome: true,
    isBannerIgnored: true,
    background: '#464646',
    hoverColor: '#FFFFFF'
  },
  YOUTUBE: {
    name: 'YouTube',
    url: 'https://youtube.com/' + process.env.SOCIAL_YOUTUBE,
    img: '/images/Social/youtube.svg',
    isShown: true,
    isWelcome: false,
    background: '#FF0000',
    hoverColor: '#FF0000'
  },
  LINKEDIN: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/' + process.env.SOCIAL_LINKEDIN,
    img: '/images/Social/linkedin.svg',
    isShown: true,
    isWelcome: true,
    background: '#0077B5',
    hoverColor: '#0077B5'
  },
  STEAM: {
    name: 'Steam',
    url: 'https://steamcommunity.com/id/' + process.env.SOCIAL_STEAM,
    img: '/images/Social/steam.svg',
    isShown: true,
    isWelcome: false,
    background: '#000000',
    hoverColor: '#000000'
  },
  GITHUB: {
    // TODO Add this, Means the Social Container will need adjusting
    name: 'GitHub',
    url: 'https://github.com/' + process.env.SOCIAL_GITHUB,
    img: '/images/Social/github.svg',
    isShown: false,
    isWelcome: true,
    // Normal Github colour is 181717 but it contrasts poorly with website colour
    background: '#101010',
    hoverColor: '#FFFFFF'
  },
  DISCORD: {
    name: 'Discord',
    url: 'https://discord.gg/' + process.env.SOCIAL_DISCORD,
    img: '/images/Social/discord.svg',
    isShown: true,
    isWelcome: true,
    background: '#7289DA',
    hoverColor: '#7289DA'
  },
  UNITY: {
    name: 'Unity',
    url: '',
    img: '/images/Social/unity.svg',
    isShown: false,
    isWelcome: false,
    background: '#000000',
    hoverColor: '#000000'
  }
}

export default SocialMedia
