var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var add_item_1 = require('../add-item/add-item');
var item_detail_1 = require('../item-detail/item-detail');
var data_1 = require('../../providers/data/data');
var HomePage = (function () {
    function HomePage(nav, dataService) {
        var _this = this;
        this.nav = nav;
        this.dataService = dataService;
        this.items = [];
        this.dataService.getData().then(function (todos) {
            if (todos) {
                _this.items = JSON.parse(todos);
            }
        });
    }
    HomePage.prototype.addItem = function () {
        var _this = this;
        var addModal = ionic_angular_1.Modal.create(add_item_1.AddItemPage);
        addModal.onDismiss(function (item) {
            if (item) {
                _this.saveItem(item);
            }
        });
        this.nav.present(addModal);
    };
    HomePage.prototype.saveItem = function (item) {
        this.items.push(item);
        this.dataService.save(this.items);
    };
    HomePage.prototype.viewItem = function (item) {
        this.nav.push(item_detail_1.ItemDetailPage, {
            item: item
        });
    };
    HomePage.prototype.deleteItem = function (item) {
        this.items.pop();
        this.dataService.deleteData(item);
    };
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/home.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, data_1.Data])
    ], HomePage);
    return HomePage;
})();
exports.HomePage = HomePage;
