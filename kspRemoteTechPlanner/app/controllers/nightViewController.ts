﻿/// <reference path="../_references.ts" />

module App {
    import calcOrb = Calculator.Orbital;
    import calcSat = Calculator.Satellite;

    export class NightViewController {
        'use strict';

        sc: SatChain;
        body: Body;
        get period(): number {
            return calcOrb.period(this.body.radius + this.sc.altitude, this.body.stdGravity);
        }
        get nightTime(): number {
            return calcOrb.nightTime(this.body.radius, this.body.radius + this.sc.altitude, this.body.stdGravity);
        }
        get reqGen(): number {
            var ae: number[] = [], aq: number[] = [];
            for (var index in this.sc.antennas) {
                ae.push(this.sc.antennas[index].antenna.elcNeeded);
                aq.push(this.sc.antennas[index].quantity);
            }

            return calcSat.requiredGenerator(this.sc.elcNeeded, ae, aq, this.body.radius, this.body.stdGravity, this.body.radius + this.sc.altitude);
        }
        get reqBatt(): number {
            var ae: number[] = [], aq: number[] = [];
            for (var index in this.sc.antennas) {
                ae.push(this.sc.antennas[index].antenna.elcNeeded);
                aq.push(this.sc.antennas[index].quantity);
            }

            return calcSat.requiredBattery(this.sc.elcNeeded, ae, aq, this.body.radius, this.body.stdGravity, this.body.radius + this.sc.altitude);
        }

        static $inject = ["satChainServ"];
        constructor(
            private satChainServ: SatChainService
            ) {

            this.sc = this.satChainServ.satChain;
            this.body = this.sc.body;
        }
    }
}
