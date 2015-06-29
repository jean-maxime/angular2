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
var Search = (function () {
    function Search(hearthstoneApi) {
        this.searchForm = new angular2_1.ControlGroup({
            card: new angular2_1.Control("", angular2_1.Validators.required),
        });
        this.searchSpec = new angular2_1.ControlGroup({
            mana: new angular2_1.Control("", angular2_1.Validators),
            attack: new angular2_1.Control("", angular2_1.Validators),
            health: new angular2_1.Control("", angular2_1.Validators),
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
    Search = __decorate([
        angular2_1.Component({
            selector: 'search',
            appInjector: [hearthstoneApi_1.HearthstoneApi]
        }),
        angular2_1.View({
            directives: [angular2_1.formDirectives, angular2_1.NgFor],
            templateUrl: './components/search/search.html'
        }), 
        __metadata('design:paramtypes', [hearthstoneApi_1.HearthstoneApi])
    ], Search);
    return Search;
})();
exports.Search = Search;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyJdLCJuYW1lcyI6WyJTZWFyY2giLCJTZWFyY2guY29uc3RydWN0b3IiLCJTZWFyY2gub25TZWFyY2giLCJTZWFyY2gub25TcGVjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUFtRyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3ZILCtCQUE2Qix5QkFFN0IsQ0FBQyxDQUZxRDtBQUV0RDtJQWdCQ0EsZ0JBQVlBLGNBQThCQTtRQUV6Q0MsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsdUJBQVlBLENBQUNBO1lBQ2xDQSxJQUFJQSxFQUFFQSxJQUFJQSxrQkFBT0EsQ0FBQ0EsRUFBRUEsRUFBRUEscUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO1NBQzFDQSxDQUFDQSxDQUFDQTtRQUVIQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSx1QkFBWUEsQ0FBQ0E7WUFDbENBLElBQUlBLEVBQUVBLElBQUlBLGtCQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSxxQkFBVUEsQ0FBQ0E7WUFDakNBLE1BQU1BLEVBQUVBLElBQUlBLGtCQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSxxQkFBVUEsQ0FBQ0E7WUFDbkNBLE1BQU1BLEVBQUVBLElBQUlBLGtCQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSxxQkFBVUEsQ0FBQ0E7U0FDbkNBLENBQUNBLENBQUNBO1FBR0hBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLGNBQWNBLENBQUNBO0lBRXRDQSxDQUFDQTtJQUVERCx5QkFBUUEsR0FBUkEsVUFBU0EsQ0FBQ0E7UUFBVkUsaUJBY0NBO1FBWkFBLENBQUNBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ25CQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUUxQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsUUFBUUE7Z0JBQ3BFQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxRQUFRQSxDQUFDQTtZQUN2QkEsQ0FBQ0EsRUFBRUEsVUFBQUEsUUFBUUE7Z0JBQ1ZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7WUFDbENBLENBQUNBLENBQUNBLENBQUNBO1FBQ0pBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1FBQ2hEQSxDQUFDQTtJQUVGQSxDQUFDQTtJQUVERix1QkFBTUEsR0FBTkEsVUFBT0EsQ0FBQ0E7UUFBUkcsaUJBbUJDQTtRQWpCQUEsQ0FBQ0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBRTFCQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFBQSxRQUFRQTtnQkFDbklBLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLEtBQUtBLEVBQUVBLENBQUNBO2dCQUN6QkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsSUFBSUEsUUFBUUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7b0JBQzFCQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTt3QkFDckRBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNoQ0EsQ0FBQ0E7b0JBQUFBLENBQUNBO2dCQUNIQSxDQUFDQTtnQkFDRUEsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0E7WUFDckJBLENBQUNBLEVBQUVBLFVBQUFBLFFBQVFBO2dCQUNWQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBO1lBQ2xDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNKQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNQQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUNoREEsQ0FBQ0E7SUFDRkEsQ0FBQ0E7SUFwRUZIO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxRQUFRQTtZQUNsQkEsV0FBV0EsRUFBQ0EsQ0FBQ0EsK0JBQWNBLENBQUNBO1NBQzVCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNMQSxVQUFVQSxFQUFFQSxDQUFDQSx5QkFBY0EsRUFBRUEsZ0JBQUtBLENBQUNBO1lBQ2pDQSxXQUFXQSxFQUFFQSxpQ0FBaUNBO1NBQ2hEQSxDQUFDQTs7ZUE4RERBO0lBQURBLGFBQUNBO0FBQURBLENBckVBLEFBcUVDQSxJQUFBO0FBNURZLGNBQU0sU0E0RGxCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgZm9ybURpcmVjdGl2ZXMsIENvbnRyb2xHcm91cCwgQ29udHJvbCwgVmFsaWRhdG9ycywgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SGVhcnRoc3RvbmVBcGl9IGZyb20gJ3NlcnZpY2VzL2hlYXJ0aHN0b25lQXBpJ1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzZWFyY2gnLFxuXHRhcHBJbmplY3RvcjpbSGVhcnRoc3RvbmVBcGldXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbZm9ybURpcmVjdGl2ZXMsIE5nRm9yXSxcbiAgXHR0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoe1xuXHRzZWFyY2hGb3JtOkNvbnRyb2xHcm91cDtcblx0c2VhcmNoU3BlYzpDb250cm9sR3JvdXA7XG5cdGhlYXJ0aHN0b25lQXBpOiBIZWFydGhzdG9uZUFwaTtcblx0ZGF0YXM6IEFycmF5PE9iamVjdD47XG5cdHJlc3VsdHM6IE9iamVjdDtcblx0XG5cdGNvbnN0cnVjdG9yKGhlYXJ0aHN0b25lQXBpOiBIZWFydGhzdG9uZUFwaSkge1xuXG5cdFx0dGhpcy5zZWFyY2hGb3JtID0gbmV3IENvbnRyb2xHcm91cCh7XG5cdFx0XHRjYXJkOiBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSwgLy8gcHJlLWV4aXN0aW5nIHZhbGlkYXRvclxuXHRcdH0pO1xuXG5cdFx0dGhpcy5zZWFyY2hTcGVjID0gbmV3IENvbnRyb2xHcm91cCh7XG5cdFx0XHRtYW5hOiBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzKSxcblx0XHRcdGF0dGFjazogbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycyksXG5cdFx0XHRoZWFsdGg6IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMpLCAvLyBwcmUtZXhpc3RpbmcgdmFsaWRhdG9yXG5cdFx0fSk7XG5cblx0XHQvLyBkZWZpbmUgaGVhcnRoc3RvbmVBcGkgb24gY29uc3RydWN0XG5cdFx0dGhpcy5oZWFydGhzdG9uZUFwaSA9IGhlYXJ0aHN0b25lQXBpO1xuXG5cdH1cblxuXHRvblNlYXJjaChlKSB7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5zZWFyY2hGb3JtLnZhbGlkKSB7IC8vIHJldHVybiB0cnVlIG9yIGZhbHNlLCBkZXBlbmRpbmcgb24gdGhlIGZvcm0gc3RhdGVcblx0XHRcdC8vU2VhcmNoIGNhcmQgb24gc3VibWl0XG5cdFx0XHR0aGlzLmhlYXJ0aHN0b25lQXBpLnNlYXJjaENhcmQodGhpcy5zZWFyY2hGb3JtLnZhbHVlLmNhcmQpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdHRoaXMuZGF0YXMgPSByZXNwb25zZTsgXG5cdFx0ICAgIH0sIHJlc3BvbnNlID0+IHtcblx0XHQgICAgXHRjb25zb2xlLmxvZyhcImxvYWRpbmcgZmFpbGVkXCIpOyAvLyBUaGlzIHNlY29uZCBmdW5jdGlvbiBpcyBjYWxsZWQgaWYgcHJvbWlzZSBpcyByZWplY3RlZFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJpbnZhbGlkIGZvcm1cIiwgdGhpcy5zZWFyY2hGb3JtKTtcblx0XHR9XG5cblx0fVxuXG5cdG9uU3BlYyhlKXtcblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZih0aGlzLnNlYXJjaFNwZWMudmFsaWQpIHsgLy8gcmV0dXJuIHRydWUgb3IgZmFsc2UsIGRlcGVuZGluZyBvbiB0aGUgZm9ybSBzdGF0ZVxuXHRcdFx0Ly9TZWFyY2ggY2FyZCBvbiBzdWJtaXRcblx0XHRcdHRoaXMuaGVhcnRoc3RvbmVBcGkuc2VhcmNoU3BlYyh0aGlzLnNlYXJjaFNwZWMudmFsdWUubWFuYSwgdGhpcy5zZWFyY2hTcGVjLnZhbHVlLmF0dGFjaywgdGhpcy5zZWFyY2hTcGVjLnZhbHVlLmhlYWx0aCkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHZhciBhcnJheXMgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0Zm9yICh2YXIgcHJvcCBpbiByZXNwb25zZSl7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IHJlc3BvbnNlW3Byb3BdLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdFx0XHRhcnJheXMucHVzaChyZXNwb25zZVtwcm9wXVtpXSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdCAgICBcdHRoaXMuZGF0YXMgPSBhcnJheXM7XG5cdFx0ICAgIH0sIHJlc3BvbnNlID0+IHtcblx0XHQgICAgXHRjb25zb2xlLmxvZyhcImxvYWRpbmcgZmFpbGVkXCIpOyAvLyBUaGlzIHNlY29uZCBmdW5jdGlvbiBpcyBjYWxsZWQgaWYgcHJvbWlzZSBpcyByZWplY3RlZFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJpbnZhbGlkIGZvcm1cIiwgdGhpcy5zZWFyY2hTcGVjKTtcblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==