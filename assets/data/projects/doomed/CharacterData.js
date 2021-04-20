const CharacterData = [
  {
    key: '0',
    name: 'Fool',
    desc: 'A character in the game that the user can play as.',
    skills:
    [
      [ 'Might', '0' ],
      [ 'Agility', '3' ],
      [ 'Personality', '4' ],
      [ 'Magic', '1' ]
    ],
    story: {
      Desc: 'An exuberant entertainer with a good heart and an attraction to mischief, he cherishes the audience that adores him.',
      Symbology: [ 'Innocence', 'Foolishness', 'Spontaneity', 'Risk Taking' ],
      Concept: 'A good hearted young man. With a chaotic but well meaning streak. He could be a kind and relatively normal person till he puts on his "performance gear", in which his method acting has chaotic consequences…',
      Features: ['Has the most personality', 'Looks and behaves to his namesake.', 'Has a lighthearted personality and approach to situations']
    }
  },
  {
    key: '1',
    name: 'Tower',
    desc: 'A character in the game that the user can play as.',
    skills:
    [
      [ 'Might', '5' ],
      [ 'Agility', '1' ],
      [ 'Personality', '2' ],
      [ 'Magic', '0' ]
    ],
    story: {
      Desc: 'A stern faced and duty bound warrior who stands above her peers in both height and honor.',
      Symbology: [ 'Fear of Change', 'Disaster and Upheaval', 'Revelation', 'Darkness and destruction on a physical scale' ],
      Concept: 'A warrior/Paladin with burnt skin, one eye and scorch marks on her armour. Possibly the burns on one half of her face are evil magic in nature or contorted, whilst the other side is attractive in a bold, handsome way.',
      Features: [ 'Possesses more might than the other characters.', 'Very tall, standing over most.' ]
    }
  },
  {
    key: '2',
    name: 'Justice',
    desc: 'A character in the game that the user can play as.',
    skills:
    [
      [ 'Might', '2' ],
      [ 'Agility', '4' ],
      [ 'Personality', '0' ],
      [ 'Magic', '2' ]
    ],
    story: {
      Desc: 'An Empress turned scorned vagabond escaping the assassins who target her once royal family.',
      Symbology: [ 'Cause and Effect', 'Law', 'Honesty/Dishonesty', 'Fairness' ],
      Concept: 'A scorned vagabond who is actually the legit previous Empress but since her reign fell decades ago, has fought off constant assassinations and now wanders the wastes and wilderness disguised as an outcast.',
      Features: ['Possesses more agility.', 'Has substantial stamina.']
    }
  }
]

export default CharacterData
