import React, { useContext, useEffect, useState } from 'react'

//PlaceHolder / Help Card
const hintCard = {
  'front':'Flash Cards\nHint: *Space* to advance. *X* to add the current card to the review stack. *R* to reload and shuffle',
  'back':'This is a back, press *R*'
}

const FlashContext = React.createContext()

export function useFlashData() {
  return useContext(FlashContext)
}

export function FlashDataProvider({ children }) {
  const [flashData, setFlashData] = useState({'deck':[hintCard], 'review':[], 'meta':{}})

  //Durstenfeld Shuffle the deck
  const shuffleDeck = () => {
    if(this.flashData['deck'].length>1) {
      let tempData = {...this.flashData}
      for (let i = tempData['deck'].length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [tempData['deck'][i], tempData['deck'][j]] = [tempData['deck'][j], tempData['deck'][i]];
      }
      this.setFlashData(tempData)
    }
  }

  //Load a deck from a short hand text file
  const loadDeckFromShortHandFile = (deckPath) => {
    let outData = {}
    try {
      const fileText = await fetch(deckPath).then(response => response.text())
      var [deckMetadata, deckData] = fileText.split("\n//\n")
      outData['meta'] = {}
      deckMetadata.split('\n').map((metaLine) => {
        let outMeta = metaLine.split(' > ')
        outData['meta'][outMeta[0]] = outMeta[1]
        return metaLine
      })
      outData['deck'] = deckData.split('\n').map((deckLine) => deckLine.split(' > '))
      outData['review'] = []
      this.setFlashData(outData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('FlashCard Data Context Loaded')
  }, [])

  return (
    <FlashContext.Provider value={flashData}>
      {children}
    </FlashContext.Provider>
  )
}
