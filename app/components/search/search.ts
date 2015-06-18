import {Component, View, bootstrap, formDirectives, ControlGroup, Control, Validators} from 'angular2/angular2';
import {XHR} from 'angular2/src/core/compiler/xhr/xhr';

@Component({
	selector: 'search'
})
@View({
	directives: [formDirectives],
  	templateUrl: './components/search/search.html'
})

export class Search{
	searchForm:ControlGroup;

	constructor() {
		this.searchForm = new ControlGroup({
			card: new Control("", Validators.required), // pre-existing validator
		});
	}

	onSearch(e) {
		e.preventDefault();
		if(this.searchForm.valid) { // return true or false, depending on the form state
			console.log("valid data, do something with it ->", this.searchForm.value.card);
		} else {
			console.error("invalid form", this.searchForm);
		}
	}
}
