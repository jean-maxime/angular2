import {Component, View, bootstrap, FormBuilder, Validators, formDirectives, ControlGroup, NgFor} from 'angular2/angular2';
import {HearthstoneApi} from 'services/hearthstoneApi'
import {DeckServices, Card} from 'services/DeckServices';
import {StorageService} from 'services/storageService';

@Component({
	selector: 'search',
	appInjector:[HearthstoneApi, DeckServices, StorageService]
})
@View({
	directives: [formDirectives, NgFor],
  	templateUrl: './components/search/search.html'
})

export class Search{
	searchForm: ControlGroup;
	searchSpec: ControlGroup;
	hearthstoneApi: HearthstoneApi;
	deckService: DeckServices;
	storageService: StorageService;
	datas: Object;
	deck: DeckServices;
	cards: Array<Card>; 
	
	constructor(hearthstoneApi: HearthstoneApi, deckService: DeckServices, storageService: StorageService) {
		var b = new FormBuilder()

		this.searchForm = b.group({
	      	card: ["", Validators.required]
	    });

	    this.searchSpec = b.group({
	      	mana: [""],
      		attack: [""],
      		health: [""]
	    });

		this.hearthstoneApi = hearthstoneApi;
	    this.storageService = storageService;

	}

	onSearch(e) {

		e.preventDefault();
		if(this.searchForm.valid) { // return true or false, depending on the form state
			//Search card on submit
			this.hearthstoneApi.searchCard(this.searchForm.value.card).then(response => {
		    	this.datas = response;
		    }, response => {
		    	console.log("loading failed"); // This second function is called if promise is rejected
			});
		} else {
			console.error("invalid form", this.searchForm);
		}

	}

	onSpec(e){

		e.preventDefault();
		if(this.searchSpec.valid) { // return true or false, depending on the form state
			//Search card on submit
			this.hearthstoneApi.searchSpec(this.searchSpec.value.mana, this.searchSpec.value.attack, this.searchSpec.value.health).then(response => {
				var arrays = new Array();
				for (var prop in response){
					for (var i = response[prop].length - 1; i >= 0; i--) {
						arrays.push(response[prop][i]);
					};
				}
		    	this.datas = arrays;
		    }, response => {
		    	console.log("loading failed"); // This second function is called if promise is rejected
			});
		} else {
			console.error("invalid form", this.searchSpec);
		}
	}

	save(img) {
		this.storageService.saveJson('deck', img);

	}
}
