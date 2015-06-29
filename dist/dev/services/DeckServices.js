var DeckServices = (function () {
    function DeckServices() {
        this.deck = [];
    }
    DeckServices.prototype.setDeck = function (deck) {
        this.deck = deck.map(function (card) {
            return new Card(card['cardImg']);
        });
    };
    DeckServices.prototype.addToDeck = function (cardImg) {
        this.deck.push(new Card(cardImg));
    };
    DeckServices.prototype.get = function () {
        return this.deck;
    };
    return DeckServices;
})();
exports.DeckServices = DeckServices;
var Card = (function () {
    function Card(cardImg) {
        this.cardImg = cardImg;
    }
    return Card;
})();
exports.Card = Card;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0RlY2tTZXJ2aWNlcy50cyJdLCJuYW1lcyI6WyJEZWNrU2VydmljZXMiLCJEZWNrU2VydmljZXMuY29uc3RydWN0b3IiLCJEZWNrU2VydmljZXMuc2V0RGVjayIsIkRlY2tTZXJ2aWNlcy5hZGRUb0RlY2siLCJEZWNrU2VydmljZXMuZ2V0IiwiQ2FyZCIsIkNhcmQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBO0lBQUFBO1FBQ0NDLFNBQUlBLEdBQWdCQSxFQUFFQSxDQUFDQTtJQWV4QkEsQ0FBQ0E7SUFiQUQsOEJBQU9BLEdBQVBBLFVBQVFBLElBQW1CQTtRQUN2QkUsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQUEsSUFBSUE7WUFDdkJBLE1BQU1BLENBQUNBLElBQUlBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1FBQ25DQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUVERixnQ0FBU0EsR0FBVEEsVUFBVUEsT0FBZUE7UUFDeEJHLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUVESCwwQkFBR0EsR0FBSEE7UUFDQ0ksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDbEJBLENBQUNBO0lBQ0ZKLG1CQUFDQTtBQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtBQWhCWSxvQkFBWSxlQWdCeEIsQ0FBQTtBQUVEO0lBR0NLLGNBQVlBLE9BQWVBO1FBQzFCQyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFDRkQsV0FBQ0E7QUFBREEsQ0FOQSxBQU1DQSxJQUFBO0FBTlksWUFBSSxPQU1oQixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL0RlY2tTZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEZWNrU2VydmljZXN7XG5cdGRlY2s6IEFycmF5PENhcmQ+ID0gW107XG5cblx0c2V0RGVjayhkZWNrOiBBcnJheTxPYmplY3Q+KSB7XG5cdCAgICB0aGlzLmRlY2sgPSBkZWNrLm1hcChjYXJkID0+IHtcblx0ICAgICAgcmV0dXJuIG5ldyBDYXJkKGNhcmRbJ2NhcmRJbWcnXSk7XG5cdCAgICB9KTtcblx0fVxuXG5cdGFkZFRvRGVjayhjYXJkSW1nOiBTdHJpbmcpe1xuXHRcdHRoaXMuZGVjay5wdXNoKG5ldyBDYXJkKGNhcmRJbWcpKTtcblx0fVxuXG5cdGdldCgpIHtcblx0XHRyZXR1cm4gdGhpcy5kZWNrO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJke1xuXHRjYXJkSW1nOiBTdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoY2FyZEltZzogU3RyaW5nKXtcblx0XHR0aGlzLmNhcmRJbWcgPSBjYXJkSW1nO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9