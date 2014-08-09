﻿/// <reference path="body.ts" />
var BodyData;
(function (BodyData) {
    var bodies = {
        "Kerbin": { name: "Kerbin", color: "darkgreen", radius: 600, gravitationalParameter: 3531.6 },
        "Mun": { name: "Mun", color: "gray", radius: 200, gravitationalParameter: 65.138398 },
        "Minmus": { name: "Minmus", color: "lightblue", radius: 60, gravitationalParameter: 1.7658 }
    };

    function getBody(name) {
        return bodies[name];
    }
    BodyData.getBody = getBody;
})(BodyData || (BodyData = {}));
//# sourceMappingURL=bodyData.js.map