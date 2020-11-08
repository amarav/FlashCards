# Mobile UdaciFlashcards

<p>
  Udaciflashcards is the final project required to pass for the Udacity React Nanodegree program.
  Mobile flashcards is a react native application  (Android and iOS -) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.
  The project has been tested on Android.
</p>

# Why this project?

<p>
This project encompasses the fundamental aspects of building a native application including handling infinite lists, routing, and user input. By building this project, one can gain an understanding of how to use React Native to build an iOS and Android application.</p>
<p>A scheduled notification is shown everyday at 7:00 pm if the user hasn't attempted at least one quiz question for that day.
</p>


## 🚀 How to use

- Install packages with `yarn` or `npm install`.
- Install expo-cli using node 
   - npm install -g react-native-cli
   - npm install --global expo-cli
- Run `expo start` to start the bundler.

## How to run 

* Go to the App Store and install Expo
* Run Expo on the device
* Scan the QR code 
* The Flashcards app will start

## Prerequisites

All your devices (computer running the Metro Bundler, Android / iOS device) should be connected on the same local area network

## Screenshots

# DECK LIST
<p>Decks view is the home screen, once you start the app you get the default Decks view. The first time you run the app, you will get 2 decks created by default:</p>

* Space
* Colors

![Deck List](https://github.com/amarav/FlashCards/blob/master/images/decks.png)

# ADD DECK
<p>You can add your own Decks by touching the Add Deck tab. After creation, you are redirected back to the Decks view where you can see your newly added deck.</p>

![Deck List](https://github.com/amarav/FlashCards/blob/master/images/decks.png)

# DECK VIEW

Clicking on deck from the list of decks shows the individual Deck view

You could do one of the below:

* Add a card to the deck
* Start a quiz

![Deck view](https://github.com/amarav/FlashCards/blob/master/images/decks.png)

# ADD CARD TO DECK

* A deck card is a kind of flash card where you can test your skills

* A deck card consists of:
  * a question
  * an answer

  ![Deck List](https://github.com/amarav/FlashCards/blob/master/images/deckView.png)

# START QUIZ

A quiz can be started on any deck if cards exisits. The quiz will run through all the cards in the deck and you can test your knowledge. You can flip the card for the answer and mark a question as correct or incorrect

![Quiz](https://github.com/amarav/FlashCards/blob/master/images/quiz.png)

# SCORE PAGE
The quiz result with the pecentage score is shown when the user has completed all the quiz questions.
A congratulations message is displayed if he has cleared all the questions

![Score](https://github.com/amarav/FlashCards/blob/master/images/Score.png)
