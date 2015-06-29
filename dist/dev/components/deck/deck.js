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
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var DeckServices_1 = require('services/DeckServices');
var hearthstoneApi_1 = require('services/hearthstoneApi');
var CardItem = (function () {
    function CardItem(decksService, hearthstoneApi) {
        this.decksService = decksService;
        this.hearthstoneApi = hearthstoneApi;
    }
    CardItem = __decorate([
        angular2_1.Component({
            selector: 'card-item',
            properties: ['card']
        }),
        angular2_1.View({
            templateUrl: './components/deck/deck-item.html'
        }),
        __param(0, angular2_1.Parent()), 
        __metadata('design:paramtypes', [DeckServices_1.DeckServices, hearthstoneApi_1.HearthstoneApi])
    ], CardItem);
    return CardItem;
})();
var Deck = (function () {
    function Deck(deckService) {
        this.deck = deckService;
        this.cards = deckService.get();
    }
    Deck = __decorate([
        angular2_1.Component({
            selector: 'deck',
            appInjector: [DeckServices_1.DeckServices, hearthstoneApi_1.HearthstoneApi]
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            templateUrl: './components/deck/deck.html'
        }), 
        __metadata('design:paramtypes', [DeckServices_1.DeckServices])
    ], Deck);
    return Deck;
})();
exports.Deck = Deck;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVjay9kZWNrLnRzIl0sIm5hbWVzIjpbIkNhcmRJdGVtIiwiQ2FyZEl0ZW0uY29uc3RydWN0b3IiLCJEZWNrIiwiRGVjay5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFBNkMsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRSw2QkFBaUMsdUJBQXVCLENBQUMsQ0FBQTtBQUN6RCwrQkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUV2RDtJQVlFQSxrQkFBc0JBLFlBQTBCQSxFQUFFQSxjQUE4QkE7UUFDOUVDLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLFlBQVlBLENBQUNBO1FBQ2pDQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxjQUFjQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFmSEQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLFdBQVdBO1lBQ3JCQSxVQUFVQSxFQUFFQSxDQUFDQSxNQUFNQSxDQUFDQTtTQUNyQkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDTEEsV0FBV0EsRUFBRUEsa0NBQWtDQTtTQUMvQ0EsQ0FBQ0E7UUFNWUEsV0FBQ0EsaUJBQU1BLEVBQUVBLENBQUFBOztpQkFJdEJBO0lBQURBLGVBQUNBO0FBQURBLENBaEJBLEFBZ0JDQSxJQUFBO0FBSUQ7SUFlQ0UsY0FBWUEsV0FBeUJBO1FBQ3BDQyxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxXQUFXQSxDQUFDQTtRQUN4QkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsV0FBV0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFDaENBLENBQUNBO0lBbEJGRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsTUFBTUE7WUFDaEJBLFdBQVdBLEVBQUNBLENBQUNBLDJCQUFZQSxFQUFFQSwrQkFBY0EsQ0FBQ0E7U0FDMUNBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0xBLFVBQVVBLEVBQUVBLENBQUNBLGdCQUFLQSxDQUFDQTtZQUNqQkEsV0FBV0EsRUFBRUEsNkJBQTZCQTtTQUM1Q0EsQ0FBQ0E7O2FBWURBO0lBQURBLFdBQUNBO0FBQURBLENBbkJBLEFBbUJDQSxJQUFBO0FBVFksWUFBSSxPQVNoQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGVjay9kZWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yLCBQYXJlbnR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7RGVja1NlcnZpY2VzLCBDYXJkfSBmcm9tICdzZXJ2aWNlcy9EZWNrU2VydmljZXMnO1xuaW1wb3J0IHtIZWFydGhzdG9uZUFwaX0gZnJvbSAnc2VydmljZXMvaGVhcnRoc3RvbmVBcGknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYXJkLWl0ZW0nLFxuICBwcm9wZXJ0aWVzOiBbJ2NhcmQnXVxufSlcbkBWaWV3KHtcblx0dGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvZGVjay9kZWNrLWl0ZW0uaHRtbCdcbn0pXG5jbGFzcyBDYXJkSXRlbSB7XG4gIGNhcmQ6IENhcmQ7XG4gIGRlY2tzU2VydmljZTogRGVja1NlcnZpY2VzO1xuICBoZWFydGhzdG9uZUFwaTogSGVhcnRoc3RvbmVBcGk7XG5cbiAgY29uc3RydWN0b3IoQFBhcmVudCgpIGRlY2tzU2VydmljZTogRGVja1NlcnZpY2VzLCBoZWFydGhzdG9uZUFwaTogSGVhcnRoc3RvbmVBcGkpIHtcbiAgICB0aGlzLmRlY2tzU2VydmljZSA9IGRlY2tzU2VydmljZTtcbiAgICB0aGlzLmhlYXJ0aHN0b25lQXBpID0gaGVhcnRoc3RvbmVBcGk7XG4gIH1cbn1cblxuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RlY2snLFxuXHRhcHBJbmplY3RvcjpbRGVja1NlcnZpY2VzLCBIZWFydGhzdG9uZUFwaV1cbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtOZ0Zvcl0sXG4gIFx0dGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvZGVjay9kZWNrLmh0bWwnXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBEZWNre1xuXHRkZWNrU2VydmljZTogRGVja1NlcnZpY2VzO1xuXHRkZWNrOiBEZWNrU2VydmljZXM7XG5cdGNhcmRzOiBBcnJheTxPYmplY3Q+O1xuXG5cdGNvbnN0cnVjdG9yKGRlY2tTZXJ2aWNlOiBEZWNrU2VydmljZXMpIHtcblx0XHR0aGlzLmRlY2sgPSBkZWNrU2VydmljZTtcblx0XHR0aGlzLmNhcmRzID0gZGVja1NlcnZpY2UuZ2V0KCk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==