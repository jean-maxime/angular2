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
        console.log(this.storageService.loadJson('deck'));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVjay9kZWNrLnRzIl0sIm5hbWVzIjpbIkRlY2siLCJEZWNrLmNvbnN0cnVjdG9yIiwiRGVjay5sb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUE2QyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pFLDZCQUFpQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3pELCtCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELCtCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBRXZEO0lBZ0JDQSxjQUFZQSxXQUF5QkEsRUFBRUEsY0FBOEJBO1FBQ3BFQyxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxXQUFXQSxDQUFDQTtRQUNyQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsY0FBY0EsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO0lBQ2hCQSxDQUFDQTtJQUVERCxtQkFBSUEsR0FBSkE7UUFDQ0UsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDL0RBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1FBQ2xEQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUNyQ0EsQ0FBQ0E7SUExQkZGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxNQUFNQTtZQUNoQkEsV0FBV0EsRUFBQ0EsQ0FBQ0EsMkJBQVlBLEVBQUVBLCtCQUFjQSxFQUFFQSwrQkFBY0EsQ0FBQ0E7U0FDMURBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0xBLFVBQVVBLEVBQUVBLENBQUNBLGdCQUFLQSxDQUFDQTtZQUNqQkEsV0FBV0EsRUFBRUEsNkJBQTZCQTtTQUM1Q0EsQ0FBQ0E7O2FBb0JEQTtJQUFEQSxXQUFDQTtBQUFEQSxDQTNCQSxBQTJCQ0EsSUFBQTtBQWpCWSxZQUFJLE9BaUJoQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGVjay9kZWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yLCBQYXJlbnR9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7RGVja1NlcnZpY2VzLCBDYXJkfSBmcm9tICdzZXJ2aWNlcy9EZWNrU2VydmljZXMnO1xuaW1wb3J0IHtIZWFydGhzdG9uZUFwaX0gZnJvbSAnc2VydmljZXMvaGVhcnRoc3RvbmVBcGknO1xuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSAnc2VydmljZXMvc3RvcmFnZVNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkZWNrJyxcblx0YXBwSW5qZWN0b3I6W0RlY2tTZXJ2aWNlcywgSGVhcnRoc3RvbmVBcGksIFN0b3JhZ2VTZXJ2aWNlXVxufSlcbkBWaWV3KHtcblx0ZGlyZWN0aXZlczogW05nRm9yXSxcbiAgXHR0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9kZWNrL2RlY2suaHRtbCdcbn0pXG5cblxuZXhwb3J0IGNsYXNzIERlY2t7XG5cdGRlY2tTZXJ2aWNlOiBEZWNrU2VydmljZXM7XG5cdHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZTtcblx0ZGVjazogRGVja1NlcnZpY2VzO1xuXHRjYXJkczogQXJyYXk8T2JqZWN0PjtcblxuXHRjb25zdHJ1Y3RvcihkZWNrU2VydmljZTogRGVja1NlcnZpY2VzLCBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UpIHtcblx0XHR0aGlzLmRlY2sgPSBkZWNrU2VydmljZTtcblx0ICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UgPSBzdG9yYWdlU2VydmljZTtcblx0ICAgIHRoaXMubG9hZCgpO1xuXHR9XG5cblx0bG9hZCgpIHtcblx0XHR0aGlzLmRlY2tTZXJ2aWNlLnNldERlY2sodGhpcy5zdG9yYWdlU2VydmljZS5sb2FkSnNvbignZGVjaycpKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmxvYWRKc29uKCdkZWNrJykpO1xuXHRcdHRoaXMuY2FyZHMgPSB0aGlzLmRlY2tTZXJ2aWNlLmdldCgpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=