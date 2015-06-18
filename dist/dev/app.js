if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var search_1 = require('./components/search/search');
var random_1 = require('./components/random/random');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        router_1.RouteConfig([
            { path: '/search', component: search_1.Search, as: 'search' },
            { path: '/random', component: random_1.Random, as: 'random' }
        ]),
        angular2_1.View({
            template: '<h1>Welcome !</h1>',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFDQSw0Q0FENEM7QUFDNUMseUJBQXlDLG1CQUFtQixDQUFDLENBQUE7QUFDN0QsdUJBQXVFLGlCQUFpQixDQUFDLENBQUE7QUFFekYsdUJBQXFCLDRCQUE0QixDQUFDLENBQUE7QUFDbEQsdUJBQXFCLDRCQUE0QixDQUFDLENBQUE7QUFFbEQ7SUFBQUE7SUFhQUMsQ0FBQ0E7SUFiREQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1NBQ2hCQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsU0FBU0EsRUFBRUEsU0FBU0EsRUFBRUEsZUFBTUEsRUFBRUEsRUFBRUEsRUFBRUEsUUFBUUEsRUFBRUE7WUFDcERBLEVBQUVBLElBQUlBLEVBQUVBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBLGVBQU1BLEVBQUVBLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUVBO1NBQ3JEQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNKQSxRQUFRQSxFQUFFQSxvQkFBb0JBO1lBQzlCQSxVQUFVQSxFQUFFQSxDQUFDQSxxQkFBWUEsRUFBRUEsbUJBQVVBLENBQUNBO1NBQ3ZDQSxDQUFDQTs7WUFHREE7SUFBREEsVUFBQ0E7QUFBREEsQ0FiQSxBQWFDQSxJQUFBO0FBRUQsb0JBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rLCByb3V0ZXJJbmplY3RhYmxlc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtTZWFyY2h9IGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoJztcbmltcG9ydCB7UmFuZG9tfSBmcm9tICcuL2NvbXBvbmVudHMvcmFuZG9tL3JhbmRvbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCdcbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvc2VhcmNoJywgY29tcG9uZW50OiBTZWFyY2gsIGFzOiAnc2VhcmNoJyB9LFxuICB7IHBhdGg6ICcvcmFuZG9tJywgY29tcG9uZW50OiBSYW5kb20sIGFzOiAncmFuZG9tJyB9XG5dKVxuQFZpZXcoe1xuICB0ZW1wbGF0ZTogJzxoMT5XZWxjb21lICE8L2gxPicsXG4gIGRpcmVjdGl2ZXM6IFtSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmtdXG59KVxuY2xhc3MgQXBwIHtcblxufVxuXG5ib290c3RyYXAoQXBwLCBbcm91dGVySW5qZWN0YWJsZXNdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==