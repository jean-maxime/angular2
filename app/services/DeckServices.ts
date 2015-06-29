import {HearthstoneApi} from 'services/hearthstoneApi';

export class DeckServices{
	deck: Array<Card> = [];
	cardId: String;

	constructor(){
		this.deck.push(new Card("TU4e_002"));
		this.deck.push(new Card("NAX7_01"));
		this.deck.push(new Card("BRMA10_6"));
		this.deck.push(new Card("CS2_196"));
	}

	addToDeck(cardId: String){
		this.deck.push(new Card(cardId));
	}

	get() {
		return this.deck;
	}
}

export class Card{
	cardId: String;

	constructor(cardId: String){
		this.cardId = cardId;
	}
}