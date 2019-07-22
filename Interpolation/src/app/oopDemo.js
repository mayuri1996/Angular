var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var demo = /** @class */ (function () {
    function demo(val1, val2) {
        this.num1 = val1;
        this.num2 = val2;
    }
    demo.prototype.Add = function () {
        return this.num1 + this.num2;
    };
    demo.prototype.Area = function () {
        return this.Add();
    };
    return demo;
}());
var demo1 = /** @class */ (function (_super) {
    __extends(demo1, _super);
    function demo1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    demo1.prototype.sub = function () {
        var result2 = this.Add();
        return this.num1 - this.num2, result2;
    };
    return demo1;
}(demo));
var obj = new demo1(3, 7);
var result = obj.sub();
console.log(result);
