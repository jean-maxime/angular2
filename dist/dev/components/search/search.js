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
        e.preventDefault();
        alert(this.searchSpec.value.mana);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyJdLCJuYW1lcyI6WyJTZWFyY2giLCJTZWFyY2guY29uc3RydWN0b3IiLCJTZWFyY2gub25TZWFyY2giLCJTZWFyY2gub25TcGVjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUE0RixtQkFBbUIsQ0FBQyxDQUFBO0FBRWhILHlCQUFnRCxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BFLCtCQUE2Qix5QkFFN0IsQ0FBQyxDQUZxRDtBQUV0RDtJQWNDQSxnQkFBWUEsY0FBOEJBO1FBRXpDQyxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSx1QkFBWUEsQ0FBQ0E7WUFDbENBLElBQUlBLEVBQUVBLElBQUlBLGtCQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSxxQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7U0FDMUNBLENBQUNBLENBQUNBO1FBR0hBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLGNBQWNBLENBQUNBO0lBRXRDQSxDQUFDQTtJQUVERCx5QkFBUUEsR0FBUkEsVUFBU0EsQ0FBQ0E7UUFBVkUsaUJBY0NBO1FBWkFBLENBQUNBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ25CQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUUxQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsUUFBUUE7Z0JBQ3BFQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxRQUFRQSxDQUFDQTtZQUN2QkEsQ0FBQ0EsRUFBRUEsVUFBQUEsUUFBUUE7Z0JBQ1ZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7WUFDbENBLENBQUNBLENBQUFBLENBQUFBO1FBQ0ZBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1FBQ2hEQSxDQUFDQTtJQUVGQSxDQUFDQTtJQUVERix1QkFBTUEsR0FBTkEsVUFBT0EsQ0FBQ0E7UUFFUEcsQ0FBQ0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQTdDRkg7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLFFBQVFBO1lBQ2xCQSxXQUFXQSxFQUFDQSxDQUFDQSwrQkFBY0EsQ0FBQ0E7U0FDNUJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0xBLFVBQVVBLEVBQUVBLENBQUNBLHlCQUFjQSxFQUFFQSxnQkFBS0EsQ0FBQ0E7WUFDakNBLFdBQVdBLEVBQUVBLGlDQUFpQ0E7U0FDaERBLENBQUNBOztlQXVDREE7SUFBREEsYUFBQ0E7QUFBREEsQ0E5Q0EsQUE4Q0NBLElBQUE7QUFyQ1ksY0FBTSxTQXFDbEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBmb3JtRGlyZWN0aXZlcywgQ29udHJvbEdyb3VwLCBDb250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1hIUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvY29tcGlsZXIveGhyL3hocic7XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBOZ0Zvcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtIZWFydGhzdG9uZUFwaX0gZnJvbSAnc2VydmljZXMvaGVhcnRoc3RvbmVBcGknXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NlYXJjaCcsXG5cdGFwcEluamVjdG9yOltIZWFydGhzdG9uZUFwaV1cbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtmb3JtRGlyZWN0aXZlcywgTmdGb3JdLFxuICBcdHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2h7XG5cdHNlYXJjaEZvcm06Q29udHJvbEdyb3VwO1xuXHRoZWFydGhzdG9uZUFwaTogSGVhcnRoc3RvbmVBcGk7XG5cdGRhdGFzOiBBcnJheTxPYmplY3Q+O1xuXHRcblx0Y29uc3RydWN0b3IoaGVhcnRoc3RvbmVBcGk6IEhlYXJ0aHN0b25lQXBpKSB7XG5cblx0XHR0aGlzLnNlYXJjaEZvcm0gPSBuZXcgQ29udHJvbEdyb3VwKHtcblx0XHRcdGNhcmQ6IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpLCAvLyBwcmUtZXhpc3RpbmcgdmFsaWRhdG9yXG5cdFx0fSk7XG5cblx0XHQvLyBkZWZpbmUgaGVhcnRoc3RvbmVBcGkgb24gY29uc3RydWN0XG5cdFx0dGhpcy5oZWFydGhzdG9uZUFwaSA9IGhlYXJ0aHN0b25lQXBpO1xuXG5cdH1cblxuXHRvblNlYXJjaChlKSB7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5zZWFyY2hGb3JtLnZhbGlkKSB7IC8vIHJldHVybiB0cnVlIG9yIGZhbHNlLCBkZXBlbmRpbmcgb24gdGhlIGZvcm0gc3RhdGVcblx0XHRcdC8vU2VhcmNoIGNhcmQgb24gc3VibWl0XG5cdFx0XHR0aGlzLmhlYXJ0aHN0b25lQXBpLnNlYXJjaENhcmQodGhpcy5zZWFyY2hGb3JtLnZhbHVlLmNhcmQpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdHRoaXMuZGF0YXMgPSByZXNwb25zZTsgXG5cdFx0ICAgIH0sIHJlc3BvbnNlID0+IHtcblx0XHQgICAgXHRjb25zb2xlLmxvZyhcImxvYWRpbmcgZmFpbGVkXCIpOyAvLyBUaGlzIHNlY29uZCBmdW5jdGlvbiBpcyBjYWxsZWQgaWYgcHJvbWlzZSBpcyByZWplY3RlZFxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiaW52YWxpZCBmb3JtXCIsIHRoaXMuc2VhcmNoRm9ybSk7XG5cdFx0fVxuXG5cdH1cblxuXHRvblNwZWMoZSl7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0YWxlcnQodGhpcy5zZWFyY2hTcGVjLnZhbHVlLm1hbmEpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=