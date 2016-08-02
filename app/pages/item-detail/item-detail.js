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
var ionic_angular_2 = require('ionic-angular');
var ItemDetailPage = (function () {
    function ItemDetailPage(platform, nav, navParams) {
        this.platform = platform;
        this.nav = nav;
        this.navParams = navParams;
        this.title = this.navParams.get('item').title;
        this.description = this.navParams.get('item').description;
    }
    //doesn't work
    ItemDetailPage.prototype.presentActionSheet = function () {
        console.log('event fired');
        var actionSheet = ionic_angular_2.ActionSheet.create({
            title: 'Task Action Sheet',
            cssClass: 'item-detail.scss',
            buttons: [
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.nav.present(actionSheet);
    };
    ItemDetailPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/item-detail/item-detail.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_2.Platform, ionic_angular_2.NavController, ionic_angular_1.NavParams])
    ], ItemDetailPage);
    return ItemDetailPage;
})();
exports.ItemDetailPage = ItemDetailPage;
