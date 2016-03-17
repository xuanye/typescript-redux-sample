"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path='../../typings/browser.d.ts'/>
var React = require('react');
var Counter = (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        _super.apply(this, arguments);
    }
    Counter.prototype.componentDidMount = function () {
        var _this = this;
        this.unsubscribe = this.context.store.subscribe(function () { return _this.forceUpdate(); });
    };
    Counter.prototype.componentWillUnmount = function () {
        this.unsubscribe();
    };
    Counter.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, "Counter: "), React.createElement("b", null, "#", this.context.store.getState().counter)), React.createElement("button", {onClick: function (e) { return _this.context.store.dispatch({ type: 'INCR', by: 1 }); }}, "INCREMENT"), React.createElement("span", {style: { padding: "0 5px" }}), React.createElement("button", {onClick: function (e) { return _this.context.store.dispatch({ type: 'INCR', by: -1 }); }}, "DECREMENT")));
    };
    Counter.contextTypes = {
        store: React.PropTypes.object
    };
    return Counter;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Counter;
//# sourceMappingURL=counter.js.map