import AsyncStorage from '@react-native-community/async-storage';

const DECKS_STORAGE_KEY = "Flashcards";

export function getDecks() {
   
	return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {

		if (results)
		{
			return JSON.parse(results)
		}
		else
		{
			console.log('Initial Load')
			AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({}))
			return {}
		}

	})
}

export async function saveDeck(deck) {
    await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
  }

  
export function getDummyData() {
    return {
      React: {
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          },
          {
            question: "What is JSX?",
            answer:
              "Stands for JavaScript XML. It allows combining JavaScript with HTML. Results in easier implementation and clean code."
          }
        ]
      },
      JavaScript: {
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared."
          }
        ]
      },
      "HTML and CSS": {
        title: "HTML and CSS",
        questions: [
          {
            question: "What does HTML stand for?",
            answer: "Hyper Text Markup Language"
          },
          {
            question: "Who is making the Web standards?",
            answer: "The World Wide Web Consortium"
          },
          {
            question: "What's the tag to create a numbered list?",
            answer: "<ol>"
          },
          {
            question: "What does CSS stand for?",
            answer: "Cascading Style Sheets"
          }
        ]
      }
    };
  }