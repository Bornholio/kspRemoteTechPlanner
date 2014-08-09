﻿/// <reference path="body.ts" />
/// <reference path="point.ts" />
var Satellites = (function () {
    function Satellites() {
    }
    Satellites.prototype.satPosition = function (offset, innerSize, count, altitude) {
        if (typeof count === "undefined") { count = this.count; }
        if (typeof altitude === "undefined") { altitude = this.altitude + this.body.radius; }
        return new Point(innerSize / 2 + altitude * Math.cos(2 * Math.PI / count * offset), innerSize / 2 + altitude * Math.sin(2 * Math.PI / count * offset));
    };

    Satellites.prototype.satDistance = function () {
        return Calculator.length(this.satPosition(0, 0), this.satPosition(1, 0));
    };

    Satellites.prototype.stableRange = function () {
        return Calculator.circleCrossPoint(new Point(0, 0), this.range, this.satPosition(0, 0), this.satPosition(1, 0), 0 /* high */);
    };
    return Satellites;
})();
//# sourceMappingURL=satellites.js.map
