var DeckServices = (function () {
    function DeckServices() {
        this.deck = [];
        this.deck.push(new Card("TU4e_002"));
        this.deck.push(new Card("NAX7_01"));
        this.deck.push(new Card("BRMA10_6"));
        this.deck.push(new Card("CS2_196"));
    }
    DeckServices.prototype.addToDeck = function (cardId) {
        this.deck.push(new Card(cardId));
    };
    DeckServices.prototype.get = function () {
        return this.deck;
    };
    return DeckServices;
})();
exports.DeckServices = DeckServices;
var Card = (function () {
    function Card(cardId) {
        this.cardId = cardId;
    }
    return Card;
})();
exports.Card = Card;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0RlY2tTZXJ2aWNlcy50cyJdLCJuYW1lcyI6WyJEZWNrU2VydmljZXMiLCJEZWNrU2VydmljZXMuY29uc3RydWN0b3IiLCJEZWNrU2VydmljZXMuYWRkVG9EZWNrIiwiRGVja1NlcnZpY2VzLmdldCIsIkNhcmQiLCJDYXJkLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFFQTtJQUlDQTtRQUhBQyxTQUFJQSxHQUFnQkEsRUFBRUEsQ0FBQ0E7UUFJdEJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1FBQ3JDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNwQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO0lBQ3JDQSxDQUFDQTtJQUVERCxnQ0FBU0EsR0FBVEEsVUFBVUEsTUFBY0E7UUFDdkJFLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO0lBQ2xDQSxDQUFDQTtJQUVERiwwQkFBR0EsR0FBSEE7UUFDQ0csTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDbEJBLENBQUNBO0lBQ0ZILG1CQUFDQTtBQUFEQSxDQWxCQSxBQWtCQ0EsSUFBQTtBQWxCWSxvQkFBWSxlQWtCeEIsQ0FBQTtBQUVEO0lBR0NJLGNBQVlBLE1BQWNBO1FBQ3pCQyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtJQUN0QkEsQ0FBQ0E7SUFDRkQsV0FBQ0E7QUFBREEsQ0FOQSxBQU1DQSxJQUFBO0FBTlksWUFBSSxPQU1oQixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL0RlY2tTZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SGVhcnRoc3RvbmVBcGl9IGZyb20gJ3NlcnZpY2VzL2hlYXJ0aHN0b25lQXBpJztcblxuZXhwb3J0IGNsYXNzIERlY2tTZXJ2aWNlc3tcblx0ZGVjazogQXJyYXk8Q2FyZD4gPSBbXTtcblx0Y2FyZElkOiBTdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLmRlY2sucHVzaChuZXcgQ2FyZChcIlRVNGVfMDAyXCIpKTtcblx0XHR0aGlzLmRlY2sucHVzaChuZXcgQ2FyZChcIk5BWDdfMDFcIikpO1xuXHRcdHRoaXMuZGVjay5wdXNoKG5ldyBDYXJkKFwiQlJNQTEwXzZcIikpO1xuXHRcdHRoaXMuZGVjay5wdXNoKG5ldyBDYXJkKFwiQ1MyXzE5NlwiKSk7XG5cdH1cblxuXHRhZGRUb0RlY2soY2FyZElkOiBTdHJpbmcpe1xuXHRcdHRoaXMuZGVjay5wdXNoKG5ldyBDYXJkKGNhcmRJZCkpO1xuXHR9XG5cblx0Z2V0KCkge1xuXHRcdHJldHVybiB0aGlzLmRlY2s7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcmR7XG5cdGNhcmRJZDogU3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGNhcmRJZDogU3RyaW5nKXtcblx0XHR0aGlzLmNhcmRJZCA9IGNhcmRJZDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==