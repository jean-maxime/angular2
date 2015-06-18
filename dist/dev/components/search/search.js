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
        var _this = this;
        this.searchForm = new angular2_1.ControlGroup({
            card: new angular2_1.Control("", angular2_1.Validators.required),
        });
        hearthstoneApi.getDatabase().then(function (response) {
            _this.datas = response;
        }, function (response) {
            console.log("loading failed");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyJdLCJuYW1lcyI6WyJTZWFyY2giLCJTZWFyY2guY29uc3RydWN0b3IiLCJTZWFyY2gub25TZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQTRGLG1CQUFtQixDQUFDLENBQUE7QUFFaEgseUJBQWdELG1CQUFtQixDQUFDLENBQUE7QUFDcEUsK0JBQTZCLHlCQUU3QixDQUFDLENBRnFEO0FBRXREO0lBY0NBLGdCQUFZQSxjQUE4QkE7UUFkM0NDLGlCQXFDQ0E7UUFyQkNBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLElBQUlBLHVCQUFZQSxDQUFDQTtZQUNsQ0EsSUFBSUEsRUFBRUEsSUFBSUEsa0JBQU9BLENBQUNBLEVBQUVBLEVBQUVBLHFCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtTQUMxQ0EsQ0FBQ0EsQ0FBQ0E7UUFHSEEsY0FBY0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsUUFBUUE7WUFDdENBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFFBQVFBLENBQUNBO1FBQ3ZCQSxDQUFDQSxFQUFFQSxVQUFBQSxRQUFRQTtZQUNWQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBO1FBQ2xDQSxDQUFDQSxDQUFBQSxDQUFBQTtJQUVGQSxDQUFDQTtJQUVERCx5QkFBUUEsR0FBUkEsVUFBU0EsQ0FBQ0E7UUFDVEUsQ0FBQ0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQzFCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxxQ0FBcUNBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2hGQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNQQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUNoREEsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUFwQ0ZGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxRQUFRQTtZQUNsQkEsV0FBV0EsRUFBQ0EsQ0FBQ0EsK0JBQWNBLENBQUNBO1NBQzVCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSx5QkFBY0EsRUFBRUEsZ0JBQUtBLENBQUNBO1lBQ2pDQSxXQUFXQSxFQUFFQSxpQ0FBaUNBO1NBQ2hEQSxDQUFDQTs7ZUE4QkRBO0lBQURBLGFBQUNBO0FBQURBLENBckNBLEFBcUNDQSxJQUFBO0FBNUJZLGNBQU0sU0E0QmxCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgZm9ybURpcmVjdGl2ZXMsIENvbnRyb2xHcm91cCwgQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtYSFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NvbXBpbGVyL3hoci94aHInO1xuaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SGVhcnRoc3RvbmVBcGl9IGZyb20gJ3NlcnZpY2VzL2hlYXJ0aHN0b25lQXBpJ1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzZWFyY2gnLFxuXHRhcHBJbmplY3RvcjpbSGVhcnRoc3RvbmVBcGldXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbZm9ybURpcmVjdGl2ZXMsIE5nRm9yXSxcbiAgXHR0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoe1xuXHRzZWFyY2hGb3JtOkNvbnRyb2xHcm91cDtcblx0aGVhcnRoc3RvbmVBcGk6SGVhcnRoc3RvbmVBcGk7XG5cdGRhdGFzOiBBcnJheTxPYmplY3Q+O1xuXHRcblx0Y29uc3RydWN0b3IoaGVhcnRoc3RvbmVBcGk6IEhlYXJ0aHN0b25lQXBpKSB7XG5cblx0XHR0aGlzLnNlYXJjaEZvcm0gPSBuZXcgQ29udHJvbEdyb3VwKHtcblx0XHRcdGNhcmQ6IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpLCAvLyBwcmUtZXhpc3RpbmcgdmFsaWRhdG9yXG5cdFx0fSk7XG5cblxuXHRcdGhlYXJ0aHN0b25lQXBpLmdldERhdGFiYXNlKCkudGhlbihyZXNwb25zZSA9PiB7XG5cdCAgICBcdHRoaXMuZGF0YXMgPSByZXNwb25zZTsgXG5cdCAgICB9LCByZXNwb25zZSA9PiB7XG5cdCAgICBcdGNvbnNvbGUubG9nKFwibG9hZGluZyBmYWlsZWRcIik7IC8vIFRoaXMgc2Vjb25kIGZ1bmN0aW9uIGlzIGNhbGxlZCBpZiBwcm9taXNlIGlzIHJlamVjdGVkXG5cdFx0fVxuXG5cdH1cblxuXHRvblNlYXJjaChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKHRoaXMuc2VhcmNoRm9ybS52YWxpZCkgeyAvLyByZXR1cm4gdHJ1ZSBvciBmYWxzZSwgZGVwZW5kaW5nIG9uIHRoZSBmb3JtIHN0YXRlXG5cdFx0XHRjb25zb2xlLmxvZyhcInZhbGlkIGRhdGEsIGRvIHNvbWV0aGluZyB3aXRoIGl0IC0+XCIsIHRoaXMuc2VhcmNoRm9ybS52YWx1ZS5jYXJkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImludmFsaWQgZm9ybVwiLCB0aGlzLnNlYXJjaEZvcm0pO1xuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9