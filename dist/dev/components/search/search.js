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
        e.preventDefault();
        if (this.searchForm.valid) {
            console.log("valid data, do something with it ->", this.searchForm.value.card);
            this.datas = this.hearthstoneApi.getDatabase(this.searchForm.value.card).then(function (response) {
                console.log(response);
            }, function (response) {
                console.log("loading failed");
            });
        }
        else {
            console.error("invalid form", this.searchForm);
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyJdLCJuYW1lcyI6WyJTZWFyY2giLCJTZWFyY2guY29uc3RydWN0b3IiLCJTZWFyY2gub25TZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQTRGLG1CQUFtQixDQUFDLENBQUE7QUFFaEgseUJBQWdELG1CQUFtQixDQUFDLENBQUE7QUFDcEUsK0JBQTZCLHlCQUU3QixDQUFDLENBRnFEO0FBRXREO0lBY0NBLGdCQUFZQSxjQUE4QkE7UUFFekNDLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLHVCQUFZQSxDQUFDQTtZQUNsQ0EsSUFBSUEsRUFBRUEsSUFBSUEsa0JBQU9BLENBQUNBLEVBQUVBLEVBQUVBLHFCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtTQUMxQ0EsQ0FBQ0EsQ0FBQ0E7UUFHSEEsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsY0FBY0EsQ0FBQ0E7SUFFdENBLENBQUNBO0lBRURELHlCQUFRQSxHQUFSQSxVQUFTQSxDQUFDQTtRQUVURSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUNuQkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHFDQUFxQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFFL0VBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUFBLFFBQVFBO2dCQUVsRkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFDdkJBLENBQUNBLEVBQUVBLFVBQUFBLFFBQVFBO2dCQUNWQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBO1lBQ2xDQSxDQUFDQSxDQUFBQSxDQUFBQTtRQUNGQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNQQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUNoREEsQ0FBQ0E7SUFJRkEsQ0FBQ0E7SUEzQ0ZGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxRQUFRQTtZQUNsQkEsV0FBV0EsRUFBQ0EsQ0FBQ0EsK0JBQWNBLENBQUNBO1NBQzVCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSx5QkFBY0EsRUFBRUEsZ0JBQUtBLENBQUNBO1lBQ2pDQSxXQUFXQSxFQUFFQSxpQ0FBaUNBO1NBQ2hEQSxDQUFDQTs7ZUFxQ0RBO0lBQURBLGFBQUNBO0FBQURBLENBNUNBLEFBNENDQSxJQUFBO0FBbkNZLGNBQU0sU0FtQ2xCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgZm9ybURpcmVjdGl2ZXMsIENvbnRyb2xHcm91cCwgQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtYSFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NvbXBpbGVyL3hoci94aHInO1xuaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SGVhcnRoc3RvbmVBcGl9IGZyb20gJ3NlcnZpY2VzL2hlYXJ0aHN0b25lQXBpJ1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzZWFyY2gnLFxuXHRhcHBJbmplY3RvcjpbSGVhcnRoc3RvbmVBcGldXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbZm9ybURpcmVjdGl2ZXMsIE5nRm9yXSxcbiAgXHR0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoe1xuXHRzZWFyY2hGb3JtOkNvbnRyb2xHcm91cDtcblx0aGVhcnRoc3RvbmVBcGk6SGVhcnRoc3RvbmVBcGk7XG5cdGRhdGFzOiBBcnJheTxPYmplY3Q+O1xuXHRcblx0Y29uc3RydWN0b3IoaGVhcnRoc3RvbmVBcGk6IEhlYXJ0aHN0b25lQXBpKSB7XG5cblx0XHR0aGlzLnNlYXJjaEZvcm0gPSBuZXcgQ29udHJvbEdyb3VwKHtcblx0XHRcdGNhcmQ6IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpLCAvLyBwcmUtZXhpc3RpbmcgdmFsaWRhdG9yXG5cdFx0fSk7XG5cblx0XHQvLyBkZWZpbmUgaGVhcnRoc3RvbmVBcGkgb24gY29uc3RydWN0XG5cdFx0dGhpcy5oZWFydGhzdG9uZUFwaSA9IGhlYXJ0aHN0b25lQXBpO1xuXG5cdH1cblxuXHRvblNlYXJjaChlKSB7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5zZWFyY2hGb3JtLnZhbGlkKSB7IC8vIHJldHVybiB0cnVlIG9yIGZhbHNlLCBkZXBlbmRpbmcgb24gdGhlIGZvcm0gc3RhdGVcblx0XHRcdGNvbnNvbGUubG9nKFwidmFsaWQgZGF0YSwgZG8gc29tZXRoaW5nIHdpdGggaXQgLT5cIiwgdGhpcy5zZWFyY2hGb3JtLnZhbHVlLmNhcmQpO1xuXHRcdFx0Ly9maW5kIGNhcmQgb24gc3VibWl0XG5cdFx0XHR0aGlzLmRhdGFzID0gdGhpcy5oZWFydGhzdG9uZUFwaS5nZXREYXRhYmFzZSh0aGlzLnNlYXJjaEZvcm0udmFsdWUuY2FyZCkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0ICAgIFx0Ly8gdGhpcy5kYXRhcyA9IHJlc3BvbnNlOyBcblx0XHQgICAgXHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0ICAgIH0sIHJlc3BvbnNlID0+IHtcblx0XHQgICAgXHRjb25zb2xlLmxvZyhcImxvYWRpbmcgZmFpbGVkXCIpOyAvLyBUaGlzIHNlY29uZCBmdW5jdGlvbiBpcyBjYWxsZWQgaWYgcHJvbWlzZSBpcyByZWplY3RlZFxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiaW52YWxpZCBmb3JtXCIsIHRoaXMuc2VhcmNoRm9ybSk7XG5cdFx0fVxuXG5cdFx0XG5cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9