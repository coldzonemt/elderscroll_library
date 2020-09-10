### Elderscroll Library

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You will need a modern browser and a terminal to access the project. 

To run this application in development mode, run `yarn start` in the project directory. 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser (I recommend Chrome, but Firefox should also work).

The page will reload if you make edits. You will also see any lint errors in the console. 

I updated a small test file, too, and you can run `yarn test` to see the results of the simple test. 

### Features: 
This application uses the [Elderscroll API](https://docs.elderscrollslegends.io/) to display a collection of Elderscroll Legends cards in a card grid, using infinite scroll. The design uses flexbox to ensure that the display still looks reasonable on a mobile phone. There is a search bar that automatically filters the cards in the collection by name as you type, and the search is cleared when the user removes their query, which returns the first 20 cards back to the page. There is a small notification in the lower right-hand corner of the screen to indicate when the api is being called. I updated the favicon to be the Elderscroll Ouroboros. 

### Future Work: 
I would like to iterate on the design. Generating a functional prototype was my first priority, and then I wanted to add in enough small touches to make the application hopefully simple and intuitive. If I had more time, I would want to modify the images that are returned from the API to be a uniform size so that the cards would the same height. I would also like to allow users to drag and sort cards to create their own decks, for example, or be able to search on any card property. I would make the background look more like a card game mat that would remain static through infinite scroll (and this required more research into the game, so I picked a color that I felt would be a nice background as a first step).

I would add more tests, specifically to test the search feature functionality. The search feature could also be made slightly more efficient, for example, not querying the API until at least two characters had been entered into the form field, or debouncing the query. Also, predictive or autocomplete search could be a cool addition, too, and would also require more tests.

I would also look further into accessibility. I wanted to make sure that the card images all had alt-text, and I gave the search box an aria-label, and I didn't use too many colors (or make color an important part of using or understanding the application), but more could be done.
 