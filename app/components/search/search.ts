import {Component, View, bootstrap, FormBuilder, Validators, formDirectives, ControlGroup, NgFor} from 'angular2/angular2';
import {HearthstoneApi} from 'services/hearthstoneApi'

@Component({
	selector: 'search',
	appInjector:[HearthstoneApi]
})
@View({
	directives: [formDirectives, NgFor],
  	templateUrl: './components/search/search.html'
})

export class Search{
	searchForm: ControlGroup;
	searchSpec: ControlGroup;
	hearthstoneApi: HearthstoneApi;
	datas: Object;
	results: Object;
	builder:FormBuilder;
	
	constructor(hearthstoneApi: HearthstoneApi) {
		var b = new FormBuilder()

		this.searchForm = b.group({
	      	card: ["", Validators.required]
	    });

	    this.searchSpec = b.group({
	      	mana: [""],
      		attack: [""],
      		health: [""]
	    });

		// this.searchForm = new ControlGroup({
		// 	card: new Control("", Validators.required), // pre-existing validator
		// });

		// this.searchSpec = new ControlGroup({
		// 	mana: new Control("", Validators),
		// 	attack: new Control("", Validators),
		// 	health: new Control("", Validators), // pre-existing validator
		// });

		// define hearthstoneApi on construct
		this.hearthstoneApi = hearthstoneApi;

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
}
