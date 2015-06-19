import {Component, View, bootstrap, formDirectives, ControlGroup, Control, Validators} from 'angular2/angular2';
import {XHR} from 'angular2/src/core/compiler/xhr/xhr';
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
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
	hearthstoneApi:HearthstoneApi;
	datas: Array<Object>;
	
	constructor(hearthstoneApi: HearthstoneApi) {

		this.searchForm = new ControlGroup({
			card: new Control("", Validators.required), // pre-existing validator
		});

		// define hearthstoneApi on construct
		this.hearthstoneApi = hearthstoneApi;

	}

	onSearch(e) {

		e.preventDefault();
		if(this.searchForm.valid) { // return true or false, depending on the form state
			console.log("valid data, do something with it ->", this.searchForm.value.card);
			//find card on submit
			this.datas = this.hearthstoneApi.getDatabase(this.searchForm.value.card).then(response => {
		    	// this.datas = response; 
		    	console.log(response);
		    }, response => {
		    	console.log("loading failed"); // This second function is called if promise is rejected
			}
		} else {
			console.error("invalid form", this.searchForm);
		}

		

	}
}
