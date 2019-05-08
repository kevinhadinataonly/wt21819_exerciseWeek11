"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var country_service_1 = require("../country.service");
var Page1Component = /** @class */ (function () {
    function Page1Component(countryService) {
        this.countryService = countryService;
        this.countries = null;
    }
    Page1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.countryService.getCountries().subscribe(function (country) {
            _this.countries = country;
        });
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: 'ns-page1',
            templateUrl: './page1.component.html',
            styleUrls: ['./page1.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [country_service_1.CountryService])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZTEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFvRDtBQVFwRDtJQUdFLHdCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGbEQsY0FBUyxHQUFHLElBQUksQ0FBQztJQUVxQyxDQUFDO0lBRXZELGlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNsRCxLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFUVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUlvQyxnQ0FBYztPQUh2QyxjQUFjLENBVzFCO0lBQUQscUJBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VudHJ5U2VydmljZSB9IGZyb20gJy4uL2NvdW50cnkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXBhZ2UxJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UxLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZTEuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlMUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvdW50cmllcyA9IG51bGw7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvdW50cnlTZXJ2aWNlOiBDb3VudHJ5U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb3VudHJ5U2VydmljZS5nZXRDb3VudHJpZXMoKS5zdWJzY3JpYmUoY291bnRyeSA9PiB7XG4gICAgICB0aGlzLmNvdW50cmllcyA9IGNvdW50cnk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19