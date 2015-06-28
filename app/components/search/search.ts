import {Component, View, bootstrap, formDirectives, ControlGroup, Control, Validators, NgFor, Pipe} from 'angular2/angular2';
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
	searchForm:ControlGroup;
	searchSpec:ControlGroup;
	hearthstoneApi: HearthstoneApi;
	datas: Array<Object>;
	results: Object;
	
	constructor(hearthstoneApi: HearthstoneApi) {

		this.searchForm = new ControlGroup({
			card: new Control("", Validators.required), // pre-existing validator
		});

		this.searchSpec = new ControlGroup({
			mana: new Control("", Validators.required), // pre-existing validator
		});

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
			this.hearthstoneApi.searchSpec(this.searchSpec.value.mana).then(response => {
				var arrays = new Array();
				var i = 0;
				for (var i = response.Basic.length - 1; i >= 0; i--) {
					arrays.push(response.Basic[i]);
				};
				console.log(arrays);
		    	this.datas = arrays;
		    }, response => {
		    	console.log("loading failed"); // This second function is called if promise is rejected
			});
		} else {
			console.error("invalid form", this.searchSpec);
		}
	}
}
