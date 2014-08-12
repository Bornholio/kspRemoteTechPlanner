﻿/// <reference path="body.ts" />

module BodyData {
    var bodies: { [index: string]: Body } = {
        "Kerbol": { name: "Kerbol", color: "rgb(255,242,0)", radius: 261600, stdGravParam: 1172332800 },
        "Moho": { name: "Moho", color: "rgb(185,122,87)", radius: 250, stdGravParam: 168.60938 },
        "Eve": { name: "Eve", color: "rgb(163,73,164)", radius: 700, stdGravParam: 8171.7302 },
        "Gilly": { name: "Gilly", color: "rgb(239,228,176)", radius: 13, stdGravParam: 0.0082894498 },
        "Kerbin": { name: "Kerbin", color: "rgb(63,111,40)", radius: 600, stdGravParam: 3531.6 },
        "Mun": { name: "Mun", color: "rgb(127,127,127)", radius: 200, stdGravParam: 65.138398 },
        "Minmus": { name: "Minmus", color: "rgb(153,217,234)", radius: 60, stdGravParam: 1.7658 },
        "Duna": { name: "Duna", color: "rgb(237,28,36)", radius: 320, stdGravParam: 301.36321 },
        "Ike": { name: "Ike", color: "rgb(127,127,127)", radius: 130, stdGravParam: 18.568369 },
        "Dres": { name: "Dres", color: "rgb(195,195,195)", radius: 138, stdGravParam: 21.484489 },
        "Jool": { name: "Jool", color: "rgb(92,231,58)", radius: 6000, stdGravParam: 282528 },
        "Laythe": { name: "Laythe", color: "rgb(25,55,98)", radius: 500, stdGravParam: 1962 },
        "Vall": { name: "Vall", color: "rgb(82,133,141)", radius: 300, stdGravParam: 207.48150 },
        "Tylo": { name: "Tylo", color: "rgb(195,195,195)", radius: 600, stdGravParam: 4523.8934 },
        "Bop": { name: "Bop", color: "rgb(142,106,51)", radius: 65, stdGravParam: 2.4868349 },
        "Pol": { name: "Pol", color: "rgb(206,211,1)", radius: 44, stdGravParam: 0.72170208 },
        "Eeloo": { name: "Eeloo", color: "rgb(221,221,210)", radius: 210, stdGravParam: 74.410815 }
    };

    export function getBody(name: string): Body {
        return bodies[name];
    }
}