import {Component, View, NgFor, Parent} from 'angular2/angular2';
import {DeckServices, Card} from 'services/DeckServices';
import {HearthstoneApi} from 'services/hearthstoneApi';
import {StorageService} from 'services/storageService';

@Component({
	selector: 'deck',
	appInjector:[DeckServices, HearthstoneApi, StorageService]
})
@View({
	directives: [NgFor],
  	templateUrl: './components/deck/deck.html'
})


export class Deck{
	deckService: DeckServices;
	storageService: StorageService;
	deck: DeckServices;
	cards: Array<Object>;

	constructor(deckService: DeckServices, storageService: StorageService) {
		this.deck = deckService;
	    this.storageService = storageService;
	    this.load();
	}

	load() {
		this.deckService.setDeck(this.storageService.loadJson('deck'));
		this.cards = this.deckService.get();
	}
}
