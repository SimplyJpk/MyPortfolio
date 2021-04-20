const ImageOrganizer = {
  GetImageData (Data, name) {
    for (let index = 0; index < Data.length; index++) {
      if (Data[index].name === name) {
        return Data[index].content
      }
    }
    return undefined
  },
  GetIcon (name) {
    if (name === 'Might') { return '/images/Projects/DoomedFromTheBeginning/StatIcons/StatIcons_Might' }
    if (name === 'Agility') { return '/images/Projects/DoomedFromTheBeginning/StatIcons/StatIcons_Agility' }
    if (name === 'Magic') { return '/images/Projects/DoomedFromTheBeginning/StatIcons/StatIcons_Magic' }
    if (name === 'Personality') { return '/images/Projects/DoomedFromTheBeginning/StatIcons/StatIcons_Personality' }
  },
  GetCharacterImageBack () {
    return '/images/Projects/DoomedFromTheBeginning/FinalCards/Card_Back.jpg'
  }
}

export default ImageOrganizer
