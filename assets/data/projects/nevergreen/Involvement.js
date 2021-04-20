const Tasks = [
  {
    key: '0',
    name: 'Character Controller',
    desc: 'Character controller that allows the user to move, and handles a lot of the events for picking up collectables. When I upgraded the project, improvements to how inputs were handled which helped remove the chance of missed frame inputs and slightly more responsive.',
    icon: '/images/Projects/Nevergreen/Icons/Character.png'
  },
  {
    key: '1',
    name: 'Arm Manager',
    desc: 'The player BEC has 2 usable arms with 3 arms that could be collected (more were planned), a state manager was used to allow to toggle between arm states on either arm which would have allowed for arm combinations. Due to the limited number of arms used for the submitted build, this system was unnecessary but facilitated the required results (Flight, Glide, Cut, Repulse).',
    icon: '/images/Projects/Nevergreen/Icons/ArmManager.png'
  },
  {
    key: '2',
    name: 'Collectables',
    desc: 'Collectables were intended to increase the lore around the game, acting as a loose storyteller of sorts, without requiring the player to read or be flooded with information, letting the player piece together what they think happened. More were intended for the game but were cut due to time restrictions, a small UI by holding TAB would open up showing some of the unused collectables.',
    icon: '/images/Projects/Nevergreen/Icons/Collectable.png'
  },
  {
    key: '3',
    name: 'Environment Interactions',
    desc: 'Interacting with the world was implemented in-part through the character controller, and the elements within the scene could interact back. The Moving log when BEC stands on it, cutting vines and picking up collectables and magnetic beams. I later added the small fireflies that fly around BEC, which now move and fly around points of interest as well to give the scene more life.',
    icon: '/images/Projects/Nevergreen/Icons/Interaction.png'
  },
  {
    key: '4',
    name: 'Editor Extensions',
    desc: 'With only two programmers (who also had other assignments) time spent editing values in the editor would be time-consuming to test. Most components were made with this in mind to give the designers more room to test values without programmer input in a test environment. This made testing values such as movement, jump height, gravity, interaction delays, much easier, freeing up time to continue developing other mechanics.',
    icon: '/images/Projects/Nevergreen/Icons/Extensions.png'
  },
  {
    key: '5',
    name: 'AI',
    desc: 'Although used sparingly within the game, the fireflies that float around BEC had some simple follow AI, they would bounce off any physical objects. Sadly, the submitted build did not give these much purpose, I improved these by giving them more life by flying to and from points of interest in the scene that the player is next nearby, and other elements such as bright flowers.',
    icon: '/images/Projects/Nevergreen/Icons/AI.png'
  }
]

export default Tasks
