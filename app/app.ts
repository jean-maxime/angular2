/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Search} from './components/search/search';
import {Random} from './components/random/random';

@Component({
  selector: 'app'
})
@RouteConfig([
  { path: '/search', component: Search, as: 'search' },
  { path: '/random', component: Random, as: 'random' }
])
@View({
  template: '<h1>Welcome !</h1>',
  directives: [RouterOutlet, RouterLink]
})
class App {

}

bootstrap(App, [routerInjectables]);
