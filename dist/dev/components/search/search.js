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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyJdLCJuYW1lcyI6WyJTZWFyY2giLCJTZWFyY2guY29uc3RydWN0b3IiLCJTZWFyY2gub25TZWFyY2giLCJTZWFyY2gub25TcGVjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUF1RyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNILCtCQUE2Qix5QkFFN0IsQ0FBQyxDQUZxRDtBQUV0RDtJQWlCQ0EsZ0JBQVlBLGNBQThCQTtRQUN6Q0MsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsc0JBQVdBLEVBQUVBLENBQUFBO1FBRXpCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUNwQkEsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEscUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO1NBQ2pDQSxDQUFDQSxDQUFDQTtRQUVIQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUN2QkEsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDVkEsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDWkEsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7U0FDZEEsQ0FBQ0EsQ0FBQ0E7UUFhTkEsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsY0FBY0EsQ0FBQ0E7SUFFdENBLENBQUNBO0lBRURELHlCQUFRQSxHQUFSQSxVQUFTQSxDQUFDQTtRQUFWRSxpQkFjQ0E7UUFaQUEsQ0FBQ0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBRTFCQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFBQSxRQUFRQTtnQkFDcEVBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFFBQVFBLENBQUNBO1lBQ3ZCQSxDQUFDQSxFQUFFQSxVQUFBQSxRQUFRQTtnQkFDVkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTtZQUNsQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDSkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDaERBLENBQUNBO0lBRUZBLENBQUNBO0lBRURGLHVCQUFNQSxHQUFOQSxVQUFPQSxDQUFDQTtRQUFSRyxpQkFtQkNBO1FBakJBQSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUNuQkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFMUJBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUFBLFFBQVFBO2dCQUNuSUEsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsS0FBS0EsRUFBRUEsQ0FBQ0E7Z0JBQ3pCQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxJQUFJQSxRQUFRQSxDQUFDQSxDQUFBQSxDQUFDQTtvQkFDMUJBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO3dCQUNyREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2hDQSxDQUFDQTtvQkFBQUEsQ0FBQ0E7Z0JBQ0hBLENBQUNBO2dCQUNFQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQTtZQUNyQkEsQ0FBQ0EsRUFBRUEsVUFBQUEsUUFBUUE7Z0JBQ1ZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7WUFDbENBLENBQUNBLENBQUNBLENBQUNBO1FBQ0pBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ1BBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1FBQ2hEQSxDQUFDQTtJQUNGQSxDQUFDQTtJQWhGRkg7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1ZBLFFBQVFBLEVBQUVBLFFBQVFBO1lBQ2xCQSxXQUFXQSxFQUFDQSxDQUFDQSwrQkFBY0EsQ0FBQ0E7U0FDNUJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0xBLFVBQVVBLEVBQUVBLENBQUNBLHlCQUFjQSxFQUFFQSxnQkFBS0EsQ0FBQ0E7WUFDakNBLFdBQVdBLEVBQUVBLGlDQUFpQ0E7U0FDaERBLENBQUNBOztlQTBFREE7SUFBREEsYUFBQ0E7QUFBREEsQ0FqRkEsQUFpRkNBLElBQUE7QUF4RVksY0FBTSxTQXdFbEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgZm9ybURpcmVjdGl2ZXMsIENvbnRyb2xHcm91cCwgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SGVhcnRoc3RvbmVBcGl9IGZyb20gJ3NlcnZpY2VzL2hlYXJ0aHN0b25lQXBpJ1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzZWFyY2gnLFxuXHRhcHBJbmplY3RvcjpbSGVhcnRoc3RvbmVBcGldXG59KVxuQFZpZXcoe1xuXHRkaXJlY3RpdmVzOiBbZm9ybURpcmVjdGl2ZXMsIE5nRm9yXSxcbiAgXHR0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoe1xuXHRzZWFyY2hGb3JtOiBDb250cm9sR3JvdXA7XG5cdHNlYXJjaFNwZWM6IENvbnRyb2xHcm91cDtcblx0aGVhcnRoc3RvbmVBcGk6IEhlYXJ0aHN0b25lQXBpO1xuXHRkYXRhczogT2JqZWN0O1xuXHRyZXN1bHRzOiBPYmplY3Q7XG5cdGJ1aWxkZXI6Rm9ybUJ1aWxkZXI7XG5cdFxuXHRjb25zdHJ1Y3RvcihoZWFydGhzdG9uZUFwaTogSGVhcnRoc3RvbmVBcGkpIHtcblx0XHR2YXIgYiA9IG5ldyBGb3JtQnVpbGRlcigpXG5cblx0XHR0aGlzLnNlYXJjaEZvcm0gPSBiLmdyb3VwKHtcblx0ICAgICAgXHRjYXJkOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cblx0ICAgIH0pO1xuXG5cdCAgICB0aGlzLnNlYXJjaFNwZWMgPSBiLmdyb3VwKHtcblx0ICAgICAgXHRtYW5hOiBbXCJcIl0sXG4gICAgICBcdFx0YXR0YWNrOiBbXCJcIl0sXG4gICAgICBcdFx0aGVhbHRoOiBbXCJcIl1cblx0ICAgIH0pO1xuXG5cdFx0Ly8gdGhpcy5zZWFyY2hGb3JtID0gbmV3IENvbnRyb2xHcm91cCh7XG5cdFx0Ly8gXHRjYXJkOiBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSwgLy8gcHJlLWV4aXN0aW5nIHZhbGlkYXRvclxuXHRcdC8vIH0pO1xuXG5cdFx0Ly8gdGhpcy5zZWFyY2hTcGVjID0gbmV3IENvbnRyb2xHcm91cCh7XG5cdFx0Ly8gXHRtYW5hOiBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzKSxcblx0XHQvLyBcdGF0dGFjazogbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycyksXG5cdFx0Ly8gXHRoZWFsdGg6IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMpLCAvLyBwcmUtZXhpc3RpbmcgdmFsaWRhdG9yXG5cdFx0Ly8gfSk7XG5cblx0XHQvLyBkZWZpbmUgaGVhcnRoc3RvbmVBcGkgb24gY29uc3RydWN0XG5cdFx0dGhpcy5oZWFydGhzdG9uZUFwaSA9IGhlYXJ0aHN0b25lQXBpO1xuXG5cdH1cblxuXHRvblNlYXJjaChlKSB7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5zZWFyY2hGb3JtLnZhbGlkKSB7IC8vIHJldHVybiB0cnVlIG9yIGZhbHNlLCBkZXBlbmRpbmcgb24gdGhlIGZvcm0gc3RhdGVcblx0XHRcdC8vU2VhcmNoIGNhcmQgb24gc3VibWl0XG5cdFx0XHR0aGlzLmhlYXJ0aHN0b25lQXBpLnNlYXJjaENhcmQodGhpcy5zZWFyY2hGb3JtLnZhbHVlLmNhcmQpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdHRoaXMuZGF0YXMgPSByZXNwb25zZTtcblx0XHQgICAgfSwgcmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdGNvbnNvbGUubG9nKFwibG9hZGluZyBmYWlsZWRcIik7IC8vIFRoaXMgc2Vjb25kIGZ1bmN0aW9uIGlzIGNhbGxlZCBpZiBwcm9taXNlIGlzIHJlamVjdGVkXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImludmFsaWQgZm9ybVwiLCB0aGlzLnNlYXJjaEZvcm0pO1xuXHRcdH1cblxuXHR9XG5cblx0b25TcGVjKGUpe1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKHRoaXMuc2VhcmNoU3BlYy52YWxpZCkgeyAvLyByZXR1cm4gdHJ1ZSBvciBmYWxzZSwgZGVwZW5kaW5nIG9uIHRoZSBmb3JtIHN0YXRlXG5cdFx0XHQvL1NlYXJjaCBjYXJkIG9uIHN1Ym1pdFxuXHRcdFx0dGhpcy5oZWFydGhzdG9uZUFwaS5zZWFyY2hTcGVjKHRoaXMuc2VhcmNoU3BlYy52YWx1ZS5tYW5hLCB0aGlzLnNlYXJjaFNwZWMudmFsdWUuYXR0YWNrLCB0aGlzLnNlYXJjaFNwZWMudmFsdWUuaGVhbHRoKS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0dmFyIGFycmF5cyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRmb3IgKHZhciBwcm9wIGluIHJlc3BvbnNlKXtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gcmVzcG9uc2VbcHJvcF0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRcdGFycmF5cy5wdXNoKHJlc3BvbnNlW3Byb3BdW2ldKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0ICAgIFx0dGhpcy5kYXRhcyA9IGFycmF5cztcblx0XHQgICAgfSwgcmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdGNvbnNvbGUubG9nKFwibG9hZGluZyBmYWlsZWRcIik7IC8vIFRoaXMgc2Vjb25kIGZ1bmN0aW9uIGlzIGNhbGxlZCBpZiBwcm9taXNlIGlzIHJlamVjdGVkXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImludmFsaWQgZm9ybVwiLCB0aGlzLnNlYXJjaFNwZWMpO1xuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9