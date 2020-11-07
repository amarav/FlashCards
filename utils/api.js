import AsyncStorage from '@react-native-community/async-storage';

const DECKS_STORAGE_KEY = 'MobileFlashcards'

export async function getDecks() {   
	return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {

		if (results)
		{
			return JSON.parse(results)
		}
		else
		{
			AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({}))
			return ''
		}
	})
}

export async function saveDeck(deck) {
    await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
  }


export async function ResetDecks() {
    try {
        return AsyncStorage.removeItem(DECKS_STORAGE_KEY)
    } catch (error) {
        console.error('Error clearing app data.');
    }
}
  
export function getInitialData() {
    return {
      Space: {
        title: "Space",
        questions: [
          {
            question: "What is the closest planet to the Sun?",
            answer: "Mercury"
          },
          {
            question: "Is the sun a star or a planet?",
            answer: "Star"
          },
          {
            question: "What planet is famous for the beautiful rings that surround it?",
            answer:
              "Saturn"
          }
        ]
      },
      Colors : {
        title: "Colors",
        questions: [
          {
            question: "Which color signifies peace?",
            answer:
              "White"
          }
        ]
      },
    };
  }

  export function createDeck(deckTitle) {
    console.log('inside create')
    return {
      [deckTitle]: {
        title: deckTitle,
        questions: []
      }
    };
  }

  export function addQuestToDeck(title, card) {
    console.log('add quest');
    console.log(title);
    console.log(card);

    getDecks().then((decks) => {
      decks[title] = {
        ...decks[title],
        questions: [...decks[title].questions, card]
        
    }
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  })
  }