import {Component, View, NgFor, Parent} from 'angular2/angular2';
import {DeckServices, Card} from 'services/DeckServices';
import {HearthstoneApi} from 'services/hearthstoneApi';

@Component({
  selector: 'card-item',
  properties: ['card']
})
@View({
	templateUrl: './components/deck/deck-item.html'
})
class CardItem {
  card: Card;
  decksService: DeckServices;
  hearthstoneApi: HearthstoneApi;

  constructor(@Parent() decksService: DeckServices, hearthstoneApi: HearthstoneApi) {
    this.decksService = decksService;
    this.hearthstoneApi = hearthstoneApi;
  }
}



@Component({
	selector: 'deck',
	appInjector:[DeckServices, HearthstoneApi]
})
@View({
	directives: [NgFor],
  	templateUrl: './components/deck/deck.html'
})


export class Deck{
	deckService: DeckServices;
	deck: DeckServices;
	cards: Array<Object>;

	constructor(deckService: DeckServices) {
		this.deck = deckService;
		this.cards = deckService.get();
	}
}
