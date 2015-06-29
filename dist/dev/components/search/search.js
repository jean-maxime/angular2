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
var storageService_1 = require('services/storageService');
var Search = (function () {
    function Search(hearthstoneApi, deckService, storageService) {
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
        this.storageService = storageService;
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
    Search.prototype.save = function (img) {
        this.storageService.saveJson('deck', img);
    };
    Search = __decorate([
        angular2_1.Component({
            selector: 'search',
            appInjector: [hearthstoneApi_1.HearthstoneApi, DeckServices_1.DeckServices, storageService_1.StorageService]
        }),
        angular2_1.View({
            directives: [angular2_1.formDirectives, angular2_1.NgFor],
            templateUrl: './components/search/search.html'
        }), 
        __metadata('design:paramtypes', [hearthstoneApi_1.HearthstoneApi, DeckServices_1.DeckServices, storageService_1.StorageService])
    ], Search);
    return Search;
})();
exports.Search = Search;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyJdLCJuYW1lcyI6WyJTZWFyY2giLCJTZWFyY2guY29uc3RydWN0b3IiLCJTZWFyY2gub25TZWFyY2giLCJTZWFyY2gub25TcGVjIiwiU2VhcmNoLnNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXVHLG1CQUFtQixDQUFDLENBQUE7QUFDM0gsK0JBQTZCLHlCQUM3QixDQUFDLENBRHFEO0FBQ3RELDZCQUFpQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3pELCtCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBRXZEO0lBbUJDQSxnQkFBWUEsY0FBOEJBLEVBQUVBLFdBQXlCQSxFQUFFQSxjQUE4QkE7UUFDcEdDLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLHNCQUFXQSxFQUFFQSxDQUFBQTtRQUV6QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7WUFDcEJBLElBQUlBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLHFCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtTQUNqQ0EsQ0FBQ0EsQ0FBQ0E7UUFFSEEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7WUFDdkJBLElBQUlBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBO1lBQ1ZBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBO1lBQ1pBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBO1NBQ2RBLENBQUNBLENBQUNBO1FBRU5BLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLGNBQWNBLENBQUNBO1FBQ2xDQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxjQUFjQSxDQUFDQTtJQUV6Q0EsQ0FBQ0E7SUFFREQseUJBQVFBLEdBQVJBLFVBQVNBLENBQUNBO1FBQVZFLGlCQWNDQTtRQVpBQSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUNuQkEsRUFBRUEsQ0FB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QUNBLHlCQUFjQSxFQUFFQSxnQkFBS0EsQ0FBQ0E7WUFDakNBLFdBQVdBLEVBQUVBLGlDQUFpQ0E7U0FDaERBLENBQUNBOztlQXVFREE7SUFBREEsYUFBQ0E7QUFBREEsQ0E5RUEsQUE4RUNBLElBQUE7QUFyRVksY0FBTSxTQXFFbEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgZm9ybURpcmVjdGl2ZXMsIENvbnRyb2xHcm91cCwgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7SGVhcnRoc3RvbmVBcGl9IGZyb20gJ3NlcnZpY2VzL2hlYXJ0aHN0b25lQXBpJ1xuaW1wb3J0IHtEZWNrU2VydmljZXMsIENhcmR9IGZyb20gJ3NlcnZpY2VzL0RlY2tTZXJ2aWNlcyc7XG5pbXBvcnQge1N0b3JhZ2VTZXJ2aWNlfSBmcm9tICdzZXJ2aWNlcy9zdG9yYWdlU2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NlYXJjaCcsXG5cdGFwcEluamVjdG9yOltIZWFydGhzdG9uZUFwaSwgRGVja1NlcnZpY2VzLCBTdG9yYWdlU2VydmljZV1cbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtmb3JtRGlyZWN0aXZlcywgTmdGb3JdLFxuICBcdHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2h7XG5cdHNlYXJjaEZvcm06IENvbnRyb2xHcm91cDtcblx0c2VhcmNoU3BlYzogQ29udHJvbEdyb3VwO1xuXHRoZWFydGhzdG9uZUFwaTogSGVhcnRoc3RvbmVBcGk7XG5cdGRlY2tTZXJ2aWNlOiBEZWNrU2VydmljZXM7XG5cdHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZTtcblx0ZGF0YXM6IE9iamVjdDtcblx0ZGVjazogRGVja1NlcnZpY2VzO1xuXHRjYXJkczogQXJyYXk8Q2FyZD47IFxuXHRcblx0Y29uc3RydWN0b3IoaGVhcnRoc3RvbmVBcGk6IEhlYXJ0aHN0b25lQXBpLCBkZWNrU2VydmljZTogRGVja1NlcnZpY2VzLCBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UpIHtcblx0XHR2YXIgYiA9IG5ldyBGb3JtQnVpbGRlcigpXG5cblx0XHR0aGlzLnNlYXJjaEZvcm0gPSBiLmdyb3VwKHtcblx0ICAgICAgXHRjYXJkOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cblx0ICAgIH0pO1xuXG5cdCAgICB0aGlzLnNlYXJjaFNwZWMgPSBiLmdyb3VwKHtcblx0ICAgICAgXHRtYW5hOiBbXCJcIl0sXG4gICAgICBcdFx0YXR0YWNrOiBbXCJcIl0sXG4gICAgICBcdFx0aGVhbHRoOiBbXCJcIl1cblx0ICAgIH0pO1xuXG5cdFx0dGhpcy5oZWFydGhzdG9uZUFwaSA9IGhlYXJ0aHN0b25lQXBpO1xuXHQgICAgdGhpcy5zdG9yYWdlU2VydmljZSA9IHN0b3JhZ2VTZXJ2aWNlO1xuXG5cdH1cblxuXHRvblNlYXJjaChlKSB7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5zZWFyY2hGb3JtLnZhbGlkKSB7IC8vIHJldHVybiB0cnVlIG9yIGZhbHNlLCBkZXBlbmRpbmcgb24gdGhlIGZvcm0gc3RhdGVcblx0XHRcdC8vU2VhcmNoIGNhcmQgb24gc3VibWl0XG5cdFx0XHR0aGlzLmhlYXJ0aHN0b25lQXBpLnNlYXJjaENhcmQodGhpcy5zZWFyY2hGb3JtLnZhbHVlLmNhcmQpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdHRoaXMuZGF0YXMgPSByZXNwb25zZTtcblx0XHQgICAgfSwgcmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdGNvbnNvbGUubG9nKFwibG9hZGluZyBmYWlsZWRcIik7IC8vIFRoaXMgc2Vjb25kIGZ1bmN0aW9uIGlzIGNhbGxlZCBpZiBwcm9taXNlIGlzIHJlamVjdGVkXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImludmFsaWQgZm9ybVwiLCB0aGlzLnNlYXJjaEZvcm0pO1xuXHRcdH1cblxuXHR9XG5cblx0b25TcGVjKGUpe1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKHRoaXMuc2VhcmNoU3BlYy52YWxpZCkgeyAvLyByZXR1cm4gdHJ1ZSBvciBmYWxzZSwgZGVwZW5kaW5nIG9uIHRoZSBmb3JtIHN0YXRlXG5cdFx0XHQvL1NlYXJjaCBjYXJkIG9uIHN1Ym1pdFxuXHRcdFx0dGhpcy5oZWFydGhzdG9uZUFwaS5zZWFyY2hTcGVjKHRoaXMuc2VhcmNoU3BlYy52YWx1ZS5tYW5hLCB0aGlzLnNlYXJjaFNwZWMudmFsdWUuYXR0YWNrLCB0aGlzLnNlYXJjaFNwZWMudmFsdWUuaGVhbHRoKS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0dmFyIGFycmF5cyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRmb3IgKHZhciBwcm9wIGluIHJlc3BvbnNlKXtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gcmVzcG9uc2VbcHJvcF0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRcdGFycmF5cy5wdXNoKHJlc3BvbnNlW3Byb3BdW2ldKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0ICAgIFx0dGhpcy5kYXRhcyA9IGFycmF5cztcblx0XHQgICAgfSwgcmVzcG9uc2UgPT4ge1xuXHRcdCAgICBcdGNvbnNvbGUubG9nKFwibG9hZGluZyBmYWlsZWRcIik7IC8vIFRoaXMgc2Vjb25kIGZ1bmN0aW9uIGlzIGNhbGxlZCBpZiBwcm9taXNlIGlzIHJlamVjdGVkXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImludmFsaWQgZm9ybVwiLCB0aGlzLnNlYXJjaFNwZWMpO1xuXHRcdH1cblx0fVxuXG5cdHNhdmUoaW1nKSB7XG5cdFx0dGhpcy5zdG9yYWdlU2VydmljZS5zYXZlSnNvbignZGVjaycsIGltZyk7XG5cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9