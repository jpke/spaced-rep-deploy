# Ewokese

A long time ago in a galaxy far, far away... Ewoks existed. Use this app to brush up on your Ewokese!



## Motivation

* Spaced repetition is a method for efficient learning that has you practice concepts or skills over increasing periods of time. It's based on the notion of a "forgetting curve," or the idea that over time, if we don't actively use or reflect on something we know, our knowledge decays. With spaced repetition, we stay ahead of that moment of forgetting, but we do it in a smart way: if we know something, we don't need to practice it for some period of time. If we don't know something, we do need to practice it.
* For example, let's say that you wanted to learn four new words, A, B, C and D. Using spaced repetition you might test the words in this order: ABABCACBDCADB...
* Notice how the spacing between the questions gets longer as you go on. So subsequent tests on question A are separated by one question (B), then two questions (BC), then four questions (CBDC). And the same thing happens with question B and question C. If you got one of the questions wrong then you would reduce the spacing for that question to make sure that the correct answer is.
* The algorithm will place the question you answer correctly three slots back, while the incorrectly answered question immediately following the next. This will reinforce a user's retention of Ewokese.
* Users must sign in with Google for access, and then have the ability to study online, print flash cards, and take the quiz.




## Technologies

* HTML/CSS
* React/Redux
* Express
* Google OAuth2
* MongoDB



## API Reference
##### The server code can be found [here](https://github.com/jpke/spaced-rep-express)

* GET /question      :: returns all questions
* GET /auth/google   :: initial authentication request
* GET /auth/google/  :: Google authenticates
  callback    
* PUT /question      :: updates questions array  




## Use

* To use this app, navigate [here](https://jpke.github.io/spaced-rep-deploy/#/) and authenticate through Google. The redirect to do this may take a few seconds since the app express server is on a free heroku dyno that may need to wake up.
* To develop on this app's frontend, make sure you have node and npm [installed](https://docs.npmjs.com/getting-started/installing-node), then simply clone the repo run:

 ```sh
 npm install
 ```

 * Since this app was created using create-react-app, you can run a development server with live reload by typing:

 ```sh
 npm start
 ```

 * Note, you will need to change ```const URL``` in src/actions.js and ```const AURH_URL``` in src/Landing.js to [http://localhost:3090](http://localhost:3090) in order to develop locally.

* These same npm commands will work for development on the [backend express server](https://github.com/jpke/spaced-rep-express).


##
##### Contributers
* bsoung
* dennellmarie
* jpke
