export class DeckServices{
	deck: Array<Card> = [];

	setDeck(deck: String)
	{
	    // this.deck = deck.map(card => {
	    //   return new Card(card['cardImg']);
	    // });
	}

	addToDeck(cardImg: String)
	{
		this.deck.push(new Card(cardImg));
	}

	get()
	{
		return this.deck;
	}
}

export class Card{
	cardImg: String;

	constructor(cardImg: String){
		this.cardImg = cardImg;
	}
}