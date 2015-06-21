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
var angular2_2 = require('angular2/angular2');
var hearthstoneApi_1 = require('services/hearthstoneApi');
var Search = (function () {
    function Search(hearthstoneApi) {
        this.searchForm = new angular2_1.ControlGroup({
            card: new angular2_1.Control("", angular2_1.Validators.required),
        });
        this.hearthstoneApi = hearthstoneApi;
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
        return "hello";
    };
    Search = __decorate([
        angular2_1.Component({
            selector: 'search',
            appInjector: [hearthstoneApi_1.HearthstoneApi]
        }),
        angular2_1.View({
            directives: [angular2_1.formDirectives, angular2_2.NgFor],
            templateUrl: './components/search/search.html'
        }), 
        __metadata('design:paramtypes', [hearthstoneApi_1.HearthstoneApi])
    ], Search);
    return Search;
})();
exports.Search = Search;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyJdLCJuYW1lcyI6WyJTZWFyY2giLCJTZWFyY2guY29uc3RydWN0b3IiLCJTZWFyY2gub25TZWFyY2giLCJTZWFyY2gub25TcGVjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUE0RixtQkFBbUIsQ0FBQyxDQUFBO0FBRWhILHlCQUFnRCxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BFLCtCQUE2Qix5QkFFN0IsQ0FBQyxDQUZxRDtBQUV0RDtJQWNDQSxnQkFBWUEsY0FBOEJBO1FBRXpDQyxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSx1QkFBWUEsQ0FBQ0E7WUFDbENBLElBQUlBLEVBQUVBLElBQUlBLGtCQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSxxQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7U0FDMUNBLENBQUNBLENBQUNBO1FBR0hBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLGNBQWNBLENBQUNBO0lBRXRDQSxDQUFDQTtJQUVERCx5QkFBUUEsR0FBUkEsVUFBU0EsQ0FBQ0E7UUFBVkUsaUJBY0NBO1FBWkFBLENBQUNBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ25CQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUUxQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsUUFBUUE7Z0JBQ3BFQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxRQUFRQSxDQUFDQTtZQUN2QkEsQ0FBQ0EsRUFBRUEsVUFBQUEsUUFBUUE7Z0JBQ1ZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7WUFDbENBLENBQUNBLENBQUFBLENBQUFBO1FBQ0ZBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1FBQ2hEQSxDQUFDQTtJQUVGQSxDQUFDQTtJQUVERix1QkFBTUEsR0FBTkEsVUFBT0EsQ0FBQ0E7UUFFUEcsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQUE7SUFDZkEsQ0FBQ0E7SUE1Q0ZIO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxRQUFRQTtZQUNsQkEsV0FBV0EsRUFBQ0EsQ0FBQ0EsK0JBQWNBLENBQUNBO1NBQzVCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSx5QkFBY0EsRUFBRUEsZ0JBQUtBLENBQUNBO1lBQ2pDQSxXQUFXQSxFQUFFQSxpQ0FBaUNBO1NBQ2hEQSxDQUFDQTs7ZUFzQ0RBO0lBQURBLGFBQUNBO0FBQURBLENBN0NBLEFBNkNDQSxJQUFBO0FBcENZLGNBQU0sU0FvQ2xCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgZm9ybURpcmVjdGl2ZXMsIENvbnRyb2xHcm91cCwgQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtYSFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NvbXBpbGVyL3hoci94aHInO1xuaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SGVhcnRoc3RvbmVBcGl9IGZyb20gJ3NlcnZpY2VzL2hlYXJ0aHN0b25lQXBpJ1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzZWFyY2gnLFxuXHRhcHBJbmplY3RvcjpbSGVhcnRoc3RvbmVBcGldXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbZm9ybURpcmVjdGl2ZXMsIE5nRm9yXSxcbiAgXHR0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoe1xuXHRzZWFyY2hGb3JtOkNvbnRyb2xHcm91cDtcblx0aGVhcnRoc3RvbmVBcGk6IEhlYXJ0aHN0b25lQXBpO1xuXHRkYXRhczogQXJyYXk8T2JqZWN0Pjtcblx0XG5cdGNvbnN0cnVjdG9yKGhlYXJ0aHN0b25lQXBpOiBIZWFydGhzdG9uZUFwaSkge1xuXG5cdFx0dGhpcy5zZWFyY2hGb3JtID0gbmV3IENvbnRyb2xHcm91cCh7XG5cdFx0XHRjYXJkOiBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSwgLy8gcHJlLWV4aXN0aW5nIHZhbGlkYXRvclxuXHRcdH0pO1xuXG5cdFx0Ly8gZGVmaW5lIGhlYXJ0aHN0b25lQXBpIG9uIGNvbnN0cnVjdFxuXHRcdHRoaXMuaGVhcnRoc3RvbmVBcGkgPSBoZWFydGhzdG9uZUFwaTtcblxuXHR9XG5cblx0b25TZWFyY2goZSkge1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKHRoaXMuc2VhcmNoRm9ybS52YWxpZCkgeyAvLyByZXR1cm4gdHJ1ZSBvciBmYWxzZSwgZGVwZW5kaW5nIG9uIHRoZSBmb3JtIHN0YXRlXG5cdFx0XHQvL1NlYXJjaCBjYXJkIG9uIHN1Ym1pdFxuXHRcdFx0dGhpcy5oZWFydGhzdG9uZUFwaS5zZWFyY2hDYXJkKHRoaXMuc2VhcmNoRm9ybS52YWx1ZS5jYXJkKS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHQgICAgXHR0aGlzLmRhdGFzID0gcmVzcG9uc2U7IFxuXHRcdCAgICB9LCByZXNwb25zZSA9PiB7XG5cdFx0ICAgIFx0Y29uc29sZS5sb2coXCJsb2FkaW5nIGZhaWxlZFwiKTsgLy8gVGhpcyBzZWNvbmQgZnVuY3Rpb24gaXMgY2FsbGVkIGlmIHByb21pc2UgaXMgcmVqZWN0ZWRcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImludmFsaWQgZm9ybVwiLCB0aGlzLnNlYXJjaEZvcm0pO1xuXHRcdH1cblxuXHR9XG5cblx0b25TcGVjKGUpe1xuXG5cdFx0cmV0dXJuIFwiaGVsbG9cIlxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=