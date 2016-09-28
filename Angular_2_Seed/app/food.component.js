System.register(['angular2/core', './food.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, food_service_1;
    var FoodComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (food_service_1_1) {
                food_service_1 = food_service_1_1;
            }],
        execute: function() {
            FoodComponent = (function () {
                function FoodComponent(foodService) {
                    this.title = "My Favourite Foods";
                    this.food = foodService.getFood();
                }
                FoodComponent = __decorate([
                    core_1.Component({
                        selector: 'food',
                        template: "\n\t\t<h2>Food</h2>\n\t\t{{ title }}\n\t\t<ul>\n\t\t\t<li *ngFor=\"#food of food\">\n\t\t\t\t{{ food }}\n\t\t\t</li>\n\t\t</ul>\n\t",
                        providers: [food_service_1.FoodService]
                    }), 
                    __metadata('design:paramtypes', [food_service_1.FoodService])
                ], FoodComponent);
                return FoodComponent;
            }());
            exports_1("FoodComponent", FoodComponent);
        }
    }
});
//# sourceMappingURL=food.component.js.map