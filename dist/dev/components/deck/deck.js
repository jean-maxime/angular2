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
var angular2_1 = require('angular2/angular2');
var DeckServices_1 = require('services/DeckServices');
var hearthstoneApi_1 = require('services/hearthstoneApi');
var storageService_1 = require('services/storageService');
var Deck = (function () {
    function Deck(deckService, storageService) {
        this.deck = deckService;
        this.storageService = storageService;
        this.load();
    }
    Deck.prototype.load = function () {
        this.deckService.setDeck(this.storageService.loadJson('deck'));
        this.cards = this.deckService.get();
    };
    Deck = __decorate([
        angular2_1.Component({
            selector: 'deck',
            appInjector: [DeckServices_1.DeckServices, hearthstoneApi_1.HearthstoneApi, storageService_1.StorageService]
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            templateUrl: './components/deck/deck.html'
        }), 
        __metadata('design:paramtypes', [DeckServices_1.DeckServices, storageService_1.StorageService])
    ], Deck);
    return Deck;
})();
exports.Deck = Deck;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVjay9kZWNrLnRzIl0sIm5hbWVzIjpbIkRlY2siLCJEZWNrLmNvbnN0cnVjdG9yIiwiRGVjay5sb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUE2QyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pFLDZCQUFpQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3pELCtCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELCtCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBRXZEO0lBZ0JDQSxjQUFZQSxXQUF5QkEsRUFBRUEsY0FBOEJBO1FBQ3BFQyxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxXQUFXQSxDQUFDQTtRQUNyQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsY0FBY0EsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO0lBQ2hCQSxDQUFDQTtJQUVERCxtQkFBSUEsR0FBSkE7UUFDQ0UsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDL0RBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO0lBQ3JDQSxDQUFDQTtJQXpCRkY7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLE1BQU1BO1lBQ2hCQSxXQUFXQSxFQUFDQSxDQUFDQSwyQkFBWUEsRUFBRUEsK0JBQWNBLEVBQUVBLCtCQUFjQSxDQUFDQTtTQUMxREEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDTEEsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLENBQUNBO1lBQ2pCQSxXQUFXQSxFQUFFQSw2QkFBNkJBO1NBQzVDQSxDQUFDQTs7YUFtQkRBO0lBQURBLFdBQUNBO0FBQURBLENBMUJBLEFBMEJDQSxJQUFBO0FBaEJZLFlBQUksT0FnQmhCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kZWNrL2RlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgTmdGb3IsIFBhcmVudH0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtEZWNrU2VydmljZXMsIENhcmR9IGZyb20gJ3NlcnZpY2VzL0RlY2tTZXJ2aWNlcyc7XG5pbXBvcnQge0hlYXJ0aHN0b25lQXBpfSBmcm9tICdzZXJ2aWNlcy9oZWFydGhzdG9uZUFwaSc7XG5pbXBvcnQge1N0b3JhZ2VTZXJ2aWNlfSBmcm9tICdzZXJ2aWNlcy9zdG9yYWdlU2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RlY2snLFxuXHRhcHBJbmplY3RvcjpbRGVja1NlcnZpY2VzLCBIZWFydGhzdG9uZUFwaSwgU3RvcmFnZVNlcnZpY2VdXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbTmdGb3JdLFxuICBcdHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2RlY2svZGVjay5odG1sJ1xufSlcblxuXG5leHBvcnQgY2xhc3MgRGVja3tcblx0ZGVja1NlcnZpY2U6IERlY2tTZXJ2aWNlcztcblx0c3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlO1xuXHRkZWNrOiBEZWNrU2VydmljZXM7XG5cdGNhcmRzOiBBcnJheTxPYmplY3Q+O1xuXG5cdGNvbnN0cnVjdG9yKGRlY2tTZXJ2aWNlOiBEZWNrU2VydmljZXMsIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSkge1xuXHRcdHRoaXMuZGVjayA9IGRlY2tTZXJ2aWNlO1xuXHQgICAgdGhpcy5zdG9yYWdlU2VydmljZSA9IHN0b3JhZ2VTZXJ2aWNlO1xuXHQgICAgdGhpcy5sb2FkKCk7XG5cdH1cblxuXHRsb2FkKCkge1xuXHRcdHRoaXMuZGVja1NlcnZpY2Uuc2V0RGVjayh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmxvYWRKc29uKCdkZWNrJykpO1xuXHRcdHRoaXMuY2FyZHMgPSB0aGlzLmRlY2tTZXJ2aWNlLmdldCgpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=