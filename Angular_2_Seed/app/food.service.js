System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FoodService;
    return {
        setters:[],
        execute: function() {
            FoodService = (function () {
                function FoodService() {
                }
                FoodService.prototype.getFood = function () {
                    return ["Muthokoi", "Malenge", "Nduma", "Pilau", "Chapati", "Kuku"];
                };
                return FoodService;
            }());
            exports_1("FoodService", FoodService);
        }
    }
});
//# sourceMappingURL=food.service.js.map