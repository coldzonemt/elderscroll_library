import React from 'react';

import Card from '../Card/Card';
import CardSearch from '../CardSearch/CardSearch';
import './MainDisplay.css';

export default class MainDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          cards: [],
          updateCards:false,
          cardPage: 1,
          totalCardCount: 0,
          searchQuery: ''
        };
    
        this.mainDisplayRef = React.createRef();
      }
    
    componentDidMount() {
        this.fetchCards();
        window.addEventListener('scroll', this.refreshCards);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.refreshCards);
    }

    fetchCards() {
        const pageNumber = this.state.cardPage;
        const PAGE_SIZE = 20;
        const { cards, searchQuery } = this.state;
        let request;

        if (searchQuery) {
            request = `https://api.elderscrollslegends.io/v1/cards?pageSize=${PAGE_SIZE}&page=${pageNumber}&name=${searchQuery}`
        } else {
            request = `https://api.elderscrollslegends.io/v1/cards?pageSize=${PAGE_SIZE}&page=${pageNumber}`
        }

        fetch(request)
        .then(response => response.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              cards: cards.concat(result.cards),
              updateCards: true,
              totalCardCount: result._totalCount
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    // Provide the functionality for infinite scroll
    refreshCards = () => {
        const yPosition = -1 * this.mainDisplayRef.current.getBoundingClientRect().y;
        const refHeight = this.mainDisplayRef.current.getBoundingClientRect().height;
        const { cards, updateCards, totalCardCount, cardPage } = this.state;

        if (yPosition/refHeight >= 0.8 
            && cards.length <= totalCardCount 
            && updateCards) {
            this.setState({
                cardPage: cardPage + 1,
                updateCards: false,
                isLoaded: false
            }, this.fetchCards);
        }
    }

    retrieveQuery = (query) => {
        // This will update the state with a blank query if 
        // the user deletes or clears the text, which will 
        // return the original cards to the display.
        this.setState({
            cards: [],
            searchQuery: query,
            cardPage: 1
        }, this.fetchCards);
    }

    render() {
        const { error, isLoaded, cards } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
            <div className="main-display" ref={this.mainDisplayRef}>
                <div className="container-header">
                    <div className="welcome-message">Welcome to the Elderscroll Library!</div>
                    <div className="search-display">
                        <CardSearch retrieveQuery = {this.retrieveQuery} />
                    </div>
                </div>
                <div className="card-grid">
                    {cards.length ? 
                        cards.map(card => (
                            <Card key={card.id}>
                                {card}
                            </Card>
                        )) : <div className="no-cards-found">No cards were found containing those characters</div>
                    }
                </div>
                { !isLoaded && <div className="loading-message">Retrieving Cards ...</div> }
            </div>
            );
        }
    }
}