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
var hearthstoneApi_1 = require('services/hearthstoneApi');
var DeckServices_1 = require('services/DeckServices');
var Search = (function () {
    function Search(hearthstoneApi, deckService) {
        var b = new angular2_1.FormBuilder();
        this.searchForm = b.group({
            card: ["", angular2_1.Validators.required]
        });
        this.searchSpec = b.group({
            mana: [""],
            attack: [""],
            health: [""]
        });
        this.hearthstoneApi = hearthstoneApi;
        this.deck = deckService;
        this.cards = deckService.get();
    }
    Search.prototype.onSearch = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.searchForm.valid) {
            this.hearthstoneApi.searchCard(this.searchForm.value.card).then(function (response) {
                _this.datas = response;
            }, function (response) {
                console.log("loading failed");
            });
        }
        else {
            console.error("invalid form", this.searchForm);
        }
    };
    Search.prototype.onSpec = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.searchSpec.valid) {
            this.hearthstoneApi.searchSpec(this.searchSpec.value.mana, this.searchSpec.value.attack, this.searchSpec.value.health).then(function (response) {
                var arrays = new Array();
                for (var prop in response) {
                    for (var i = response[prop].length - 1; i >= 0; i--) {
                        arrays.push(response[prop][i]);
                    }
                    ;
                }
                _this.datas = arrays;
            }, function (response) {
                console.log("loading failed");
            });
        }
        else {
            console.error("invalid form", this.searchSpec);
        }
    };
    Search.prototype.addToDeck = function (e, id) {
        e.preventDefault();
        this.deck.addToDeck(id);
        console.log(id);
    };
    Search = __decorate([
        angular2_1.Component({
            selector: 'search',
            appInjector: [hearthstoneApi_1.HearthstoneApi, DeckServices_1.DeckServices]
        }),
        angular2_1.View({
            directives: [angular2_1.formDirectives, angular2_1.NgFor],
            templateUrl: './components/search/search.html'
        }), 
        __metadata('design:paramtypes', [hearthstoneApi_1.HearthstoneApi, DeckServices_1.DeckServices])
    ], Search);
    return Search;
})();
exports.Search = Search;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyJdLCJuYW1lcyI6WyJTZWFyY2giLCJTZWFyY2guY29uc3RydWN0b3IiLCJTZWFyY2gub25TZWFyY2giLCJTZWFyY2gub25TcGVjIiwiU2VhcmNoLmFkZFRvRGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBdUcsbUJBQW1CLENBQUMsQ0FBQTtBQUMzSCwrQkFBNkIseUJBQzdCLENBQUMsQ0FEcUQ7QUFDdEQsNkJBQWlDLHVCQUF1QixDQUFDLENBQUE7QUFFekQ7SUFrQkNBLGdCQUFZQSxjQUE4QkEsRUFBRUEsV0FBeUJBO1FBQ3BFQyxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxzQkFBV0EsRUFBRUEsQ0FBQUE7UUFFekJBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3BCQSxJQUFJQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxxQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7U0FDakNBLENBQUNBLENBQUNBO1FBRUhBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3ZCQSxJQUFJQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQTtZQUNWQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQTtZQUNaQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQTtTQUNkQSxDQUFDQSxDQUFDQTtRQUdOQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxjQUFjQSxDQUFDQTtRQUNyQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsV0FBV0EsQ0FBQ0E7UUFDeEJBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFdBQVdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO0lBRWhDQSxDQUFDQTtJQUVERCx5QkFBUUEsR0FBUkEsVUFBU0EsQ0FBQ0E7UUFBVkUsaUJBY0NBO1FBWkFBLENBQUNBLENBQUNBLGNBQWNBLEVBQUVB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LFdBQVdBLEVBQUNBLENBQUNBLCtCQUFjQSxFQUFFQSwyQkFBWUEsQ0FBQ0E7U0FDMUNBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0xBLFVBQVVBLEVBQUVBLENBQUNBLHlCQUFjQSxFQUFFQSxnQkFBS0EsQ0FBQ0E7WUFDakNBLFdBQVdBLEVBQUVBLGlDQUFpQ0E7U0FDaERBLENBQUNBOztlQXlFREE7SUFBREEsYUFBQ0E7QUFBREEsQ0FoRkEsQUFnRkNBLElBQUE7QUF2RVksY0FBTSxTQXVFbEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgZm9ybURpcmVjdGl2ZXMsIENvbnRyb2xHcm91cCwgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SGVhcnRoc3RvbmVBcGl9IGZyb20gJ3NlcnZpY2VzL2hlYXJ0aHN0b25lQXBpJ1xuaW1wb3J0IHtEZWNrU2VydmljZXMsIENhcmR9IGZyb20gJ3NlcnZpY2VzL0RlY2tTZXJ2aWNlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NlYXJjaCcsXG5cdGFwcEluamVjdG9yOltIZWFydGhzdG9uZUFwaSwgRGVja1NlcnZpY2VzXVxufSlcbkBWaWV3KHtcblx0ZGlyZWN0aXZlczogW2Zvcm1EaXJlY3RpdmVzLCBOZ0Zvcl0sXG4gIFx0dGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNlYXJjaHtcblx0c2VhcmNoRm9ybTogQ29udHJvbEdyb3VwO1xuXHRzZWFyY2hTcGVjOiBDb250cm9sR3JvdXA7XG5cdGhlYXJ0aHN0b25lQXBpOiBIZWFydGhzdG9uZUFwaTtcblx0ZGVja1NlcnZpY2U6IERlY2tTZXJ2aWNlcztcblx0ZGF0YXM6IE9iamVjdDtcblx0ZGVjazogRGVja1NlcnZpY2VzO1xuXHRjYXJkczogQXJyYXk8Q2FyZD47IFxuXHRcblx0Y29uc3RydWN0b3IoaGVhcnRoc3RvbmVBcGk6IEhlYXJ0aHN0b25lQXBpLCBkZWNrU2VydmljZTogRGVja1NlcnZpY2VzKSB7XG5cdFx0dmFyIGIgPSBuZXcgRm9ybUJ1aWxkZXIoKVxuXG5cdFx0dGhpcy5zZWFyY2hGb3JtID0gYi5ncm91cCh7XG5cdCAgICAgIFx0Y2FyZDogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG5cdCAgICB9KTtcblxuXHQgICAgdGhpcy5zZWFyY2hTcGVjID0gYi5ncm91cCh7XG5cdCAgICAgIFx0bWFuYTogW1wiXCJdLFxuICAgICAgXHRcdGF0dGFjazogW1wiXCJdLFxuICAgICAgXHRcdGhlYWx0aDogW1wiXCJdXG5cdCAgICB9KTtcblxuXHRcdC8vIGRlZmluZSBoZWFydGhzdG9uZUFwaSBvbiBjb25zdHJ1Y3Rcblx0XHR0aGlzLmhlYXJ0aHN0b25lQXBpID0gaGVhcnRoc3RvbmVBcGk7XG5cdFx0dGhpcy5kZWNrID0gZGVja1NlcnZpY2U7XG5cdFx0dGhpcy5jYXJkcyA9IGRlY2tTZXJ2aWNlLmdldCgpO1xuXG5cdH1cblxuXHRvblNlYXJjaChlKSB7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5zZWFyY2hGb3JtLnZhbGlkKSB7IC8vIHJldHVybiB0cnVlIG9yIGZhbHNlLCBkZXBlbmRpbmcgb24gdGhlIGZvcm0gc3RhdGVcblx0XHRcdC8vU2VhcmNoIGNhcmQgb24gc3VibWl0XG5cdFx0XHR0aGlzLmhlYXJ0aHN0b25lQXBpLnNlYXJjaENhcmQodGhpcy5zZWFyY2hGb3JtLnZhbHVlLmNhcmQpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdHRoaXMuZGF0YXMgPSByZXNwb25zZTtcblx0XHQgICAgfSwgcmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdGNvbnNvbGUubG9nKFwibG9hZGluZyBmYWlsZWRcIik7IC8vIFRoaXMgc2Vjb25kIGZ1bmN0aW9uIGlzIGNhbGxlZCBpZiBwcm9taXNlIGlzIHJlamVjdGVkXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImludmFsaWQgZm9ybVwiLCB0aGlzLnNlYXJjaEZvcm0pO1xuXHRcdH1cblxuXHR9XG5cblx0b25TcGVjKGUpe1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKHRoaXMuc2VhcmNoU3BlYy52YWxpZCkgeyAvLyByZXR1cm4gdHJ1ZSBvciBmYWxzZSwgZGVwZW5kaW5nIG9uIHRoZSBmb3JtIHN0YXRlXG5cdFx0XHQvL1NlYXJjaCBjYXJkIG9uIHN1Ym1pdFxuXHRcdFx0dGhpcy5oZWFydGhzdG9uZUFwaS5zZWFyY2hTcGVjKHRoaXMuc2VhcmNoU3BlYy52YWx1ZS5tYW5hLCB0aGlzLnNlYXJjaFNwZWMudmFsdWUuYXR0YWNrLCB0aGlzLnNlYXJjaFNwZWMudmFsdWUuaGVhbHRoKS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0dmFyIGFycmF5cyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRmb3IgKHZhciBwcm9wIGluIHJlc3BvbnNlKXtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gcmVzcG9uc2VbcHJvcF0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRcdGFycmF5cy5wdXNoKHJlc3BvbnNlW3Byb3BdW2ldKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0ICAgIFx0dGhpcy5kYXRhcyA9IGFycmF5cztcblx0XHQgICAgfSwgcmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdGNvbnNvbGUubG9nKFwibG9hZGluZyBmYWlsZWRcIik7IC8vIFRoaXMgc2Vjb25kIGZ1bmN0aW9uIGlzIGNhbGxlZCBpZiBwcm9taXNlIGlzIHJlamVjdGVkXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImludmFsaWQgZm9ybVwiLCB0aGlzLnNlYXJjaFNwZWMpO1xuXHRcdH1cblx0fVxuXG5cdGFkZFRvRGVjayhlLCBpZCl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMuZGVjay5hZGRUb0RlY2soaWQpO1xuXHRcdGNvbnNvbGUubG9nKGlkKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9