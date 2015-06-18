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
var Search = (function () {
    function Search() {
        this.searchForm = new angular2_1.ControlGroup({
            card: new angular2_1.Control("", angular2_1.Validators.required),
        });
    }
    Search.prototype.onSearch = function (e) {
        e.preventDefault();
        if (this.searchForm.valid) {
            console.log("valid data, do something with it ->", this.searchForm.value.card);
        }
        else {
            console.error("invalid form", this.searchForm);
        }
    };
    Search = __decorate([
        angular2_1.Component({
            selector: 'search'
        }),
        angular2_1.View({
            directives: [angular2_1.formDirectives],
            templateUrl: './components/search/search.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Search);
    return Search;
})();
exports.Search = Search;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyJdLCJuYW1lcyI6WyJTZWFyY2giLCJTZWFyY2guY29uc3RydWN0b3IiLCJTZWFyY2gub25TZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQTRGLG1CQUFtQixDQUFDLENBQUE7QUFHaEg7SUFXQ0E7UUFDQ0MsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsdUJBQVlBLENBQUNBO1lBQ2xDQSxJQUFJQSxFQUFFQSxJQUFJQSxrQkFBT0EsQ0FBQ0EsRUFBRUEsRUFBRUEscUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO1NBQzFDQSxDQUFDQSxDQUFDQTtJQUNKQSxDQUFDQTtJQUVERCx5QkFBUUEsR0FBUkEsVUFBU0EsQ0FBQ0E7UUFDVEUsQ0FBQ0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQzFCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxxQ0FBcUNBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2hGQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNQQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUNoREEsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUF4QkZGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxRQUFRQTtTQUNsQkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDTEEsVUFBVUEsRUFBRUEsQ0FBQ0EseUJBQWNBLENBQUNBO1lBQzFCQSxXQUFXQSxFQUFFQSxpQ0FBaUNBO1NBQ2hEQSxDQUFDQTs7ZUFtQkRBO0lBQURBLGFBQUNBO0FBQURBLENBekJBLEFBeUJDQSxJQUFBO0FBakJZLGNBQU0sU0FpQmxCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgZm9ybURpcmVjdGl2ZXMsIENvbnRyb2xHcm91cCwgQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtYSFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NvbXBpbGVyL3hoci94aHInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzZWFyY2gnXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbZm9ybURpcmVjdGl2ZXNdLFxuICBcdHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2h7XG5cdHNlYXJjaEZvcm06Q29udHJvbEdyb3VwO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuc2VhcmNoRm9ybSA9IG5ldyBDb250cm9sR3JvdXAoe1xuXHRcdFx0Y2FyZDogbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZCksIC8vIHByZS1leGlzdGluZyB2YWxpZGF0b3Jcblx0XHR9KTtcblx0fVxuXG5cdG9uU2VhcmNoKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5zZWFyY2hGb3JtLnZhbGlkKSB7IC8vIHJldHVybiB0cnVlIG9yIGZhbHNlLCBkZXBlbmRpbmcgb24gdGhlIGZvcm0gc3RhdGVcblx0XHRcdGNvbnNvbGUubG9nKFwidmFsaWQgZGF0YSwgZG8gc29tZXRoaW5nIHdpdGggaXQgLT5cIiwgdGhpcy5zZWFyY2hGb3JtLnZhbHVlLmNhcmQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiaW52YWxpZCBmb3JtXCIsIHRoaXMuc2VhcmNoRm9ybSk7XG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=