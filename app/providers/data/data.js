var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var core_1 = require('@angular/core');
var Data = (function () {
    function Data() {
        this.storage = new ionic_angular_1.Storage(ionic_angular_1.SqlStorage, { name: 'todo' });
    }
    Data.prototype.getData = function () {
        return this.storage.get('todos');
    };
    Data.prototype.save = function (data) {
        var newData = JSON.stringify(data);
        this.storage.set('todos', newData);
    };
    Data.prototype.delete = function (data) {
        var deleteData = JSON.stringify(data);
        this.storage.deleteItem(deleteData);
    };
    Data = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Data);
    return Data;
})();
exports.Data = Data;
