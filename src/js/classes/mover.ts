import { Color, PointLight } from "three";
import { icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";

var faButze: IconDefinition = {
    //@ts-ignore
    prefix: "fac",
    //@ts-ignore
    iconName: "sprinter",
    icon: [
        256,
        256,
        [],
        null,
        "m 19.659958,180.23723 c -0.28092,-0.12093 -0.81157,-0.2839 -1.17921,-0.36216 -0.72147,-0.15356 -2.26844,-1.58027 -2.26844,-2.09209 0,-0.17232 -0.14365,-0.36114 -0.31922,-0.4196 -0.25038,-0.0834 -0.35797,-5.00343 -0.49886,-22.81403 -0.0988,-12.48926 -0.28987,-23.62711 -0.42461,-24.75078 -0.71944,-6.00003 -0.84475,-9.79482 -0.58612,-17.74897 0.28714,-8.83097 0.88399,-19.981251 1.34648,-25.155021 0.16323,-1.82598 0.34759,-4.08625 0.40969,-5.02282 l 0.11291,-1.70287 -7.2346403,-0.0928 c -8.14763997,-0.10455 -8.49845997,-0.17259 -8.82652993,-1.71195 -0.25281,-1.18621 -0.25625,-16.04026 -0.004,-16.87992 0.10552996,-0.35115 0.50774996,-0.8683 0.89382993,-1.14922 0.6393,-0.46516 1.1062,-0.51076 5.23006,-0.51076 h 4.5281003 l 0.8349,0.83443 0.8349,0.83442 0.0863,4.08166 0.0863,4.08166 h 2.01162 c 1.80458,0 2.04224,-0.0572 2.30908,-0.5558 0.1636,-0.30569 0.50909,-3.26491 0.76775,-6.57606 0.25867,-3.31114 0.54079,-6.30756 0.62694,-6.65871 0.0861,-0.35115 0.37304,-2.30482 0.63754,-4.34148 0.51939,-3.99942 1.06988,-7.43855 1.67598,-10.47062 0.21058,-1.05344 0.59204,-3.12203 0.84768,-4.59685 0.99796,-5.75718 2.64151,-13.19814 3.4691,-15.70593 0.23177,-0.70229 1.33704,-4.09248 2.45616,-7.53373 1.11911,-3.4412596 2.36624,-6.95985 2.7714,-7.81909 0.83047,-1.76125 2.40388,-3.2772 3.81718,-3.67778 7.61348,-2.15793997 83.350892,-2.34163997 96.295292,-0.23356 2.54798,0.41495 3.89958,1.45667 5.09755,3.92885 0.68355,1.41058 3.36232,9.26502 5.31723,15.59069 0.98773,3.19606 2.80615,11.48613 3.38907,15.45055 0.1549,1.05344 0.43678,2.54742 0.6264,3.31995 0.18962,0.77253 0.4735,2.32397 0.63084,3.44764 0.15735,1.12368 0.44986,2.8475 0.65002,3.83072 0.20016,0.98321 0.48611,2.93688 0.63545,4.34147 0.14933,1.4046 0.38973,3.07096 0.53421,3.70302 0.14448,0.63207 0.46859,3.91273 0.72025,7.29035 0.25165,3.37762 0.59304,6.39431 0.75865,6.70375 0.27115,0.50664 0.50081,0.56262 2.30841,0.56262 h 2.0073 l 0.0906,-4.08126 0.0906,-4.08125 0.8349,-0.83483 0.83489,-0.83483 h 4.5281 c 4.12386,0 4.59077,0.0456 5.23006,0.51076 0.38608,0.28092 0.78831,0.79807 0.89384,1.14922 0.25234,0.83966 0.2489,15.69371 -0.004,16.87992 -0.32797,1.53885 -0.68067,1.60741 -8.8064,1.71177 l -7.21451,0.0927 v 1.63554 c 0,0.89955 0.12045,2.12561 0.26766,2.72458 0.33936,1.38077 1.23324,17.034091 1.56428,27.393261 0.24957,7.80942 0.12648,11.5406 -0.5855,17.74898 -0.13692,1.1939 -0.32973,12.34128 -0.42847,24.77194 l -0.17951,22.60121 -0.76615,1.07477 c -1.3666,1.91711 -2.93054,2.37288 -8.14233,2.37288 -4.57035,0 -6.20743,-0.35191 -7.37073,-1.58439 -1.37123,-1.45279 -1.33662,-1.1476 -1.42356,-12.55176 l -0.0815,-10.68851 -1.19543,0.17925 c -0.65748,0.0986 -1.37574,0.27574 -1.59613,0.39368 -1.49311,0.79901 -6.00258,0.88437 -46.717072,0.88437 -40.7145,0 -45.22396,-0.0854 -46.71707,-0.88437 -0.22039,-0.11794 -0.93966,-0.29524 -1.59837,-0.39401 l -1.19767,-0.17959 -0.0792,10.68884 c -0.0695,9.36968 -0.1314,10.7834 -0.50189,11.45499 -1.19548,2.16706 -2.84315,2.68742 -8.43597,2.66421 -2.29119,-0.01 -4.39565,-0.11623 -4.67656,-0.23716 z m 31.45149,-54.02522 c 0.0868,-0.2263 -0.3656,-1.22173 -1.07302,-2.36077 -0.67274,-1.08321 -2.01351,-3.34854 -2.97949,-5.03405 -0.96598,-1.68552 -2.18208,-3.50959 -2.70244,-4.05349 -1.64703,-1.72154 -4.91519,-2.81985 -10.65059,-3.57928 -1.68552,-0.22319 -4.34538,-0.57448 -5.9108,-0.78066 -1.56543,-0.20617 -3.84669,-0.62115 -5.06948,-0.92217 -1.51565,-0.37311 -2.30641,-0.46415 -2.48453,-0.28602 -0.42546,0.42545 -0.57247,6.98516 -0.20324,9.06861 0.36937,2.08425 1.40503,4.31724 2.471,5.32771 1.0347,0.98082 2.72824,1.65216 4.94021,1.95835 1.80774,0.25023 12.77664,0.7666 18.64281,0.87762 1.47482,0.0279 3.17378,0.0788 3.77546,0.1131 0.78881,0.0449 1.13584,-0.0468 1.24411,-0.32895 z m 81.682242,-0.2376 c 6.73156,-0.40453 8.16813,-0.69466 9.86468,-1.99231 2.53274,-1.93721 3.43657,-4.99009 3.21892,-10.87258 -0.0746,-2.01553 -0.25048,-3.7795 -0.3909,-3.91993 -0.17016,-0.17016 -0.96656,-0.0832 -2.38791,0.26068 -2.22407,0.53812 -2.88606,0.64392 -10.77343,1.72197 -6.74174,0.92145 -9.45258,1.88316 -11.3275,4.01858 -0.43623,0.49684 -1.45952,2.09064 -2.27397,3.54177 -0.81445,1.45112 -2.0903,3.60915 -2.83522,4.79562 -0.74492,1.18646 -1.3544,2.30694 -1.3544,2.48996 0,0.46504 10.19988,0.4406 18.25973,-0.0438 z m 6.32946,-53.484411 c 0.33017,-0.55893 0.43774,-1.32984 0.43652,-3.12842 -0.002,-3.39668 -0.69861,-19.63668 -1.01116,-23.58333 -0.14461,-1.82597 -0.36463,-5.24448 -0.48894,-7.59668 -0.23571,-4.45992 -0.347,-4.87865 -1.60939,-6.05474 l -0.56053,-0.52222 H 82.834658 29.779668 l -0.88254,0.93544 c -1.03662,1.09877 -1.11208,1.51161 -1.32274,7.23675 -0.0801,2.17712 -0.25711,5.05016 -0.39333,6.38452 -0.27346,2.67861 -1.00889,19.65442 -1.00889,23.28798 0,1.71349 0.11158,2.48789 0.43813,3.0407 l 0.43814,0.7417 h 55.81829 55.818292 z",
    ],
};

import {
    faMapMarker,
    faMapMarkerAlt,
    faCircle,
    faCircleNotch,
    faHighlighter,
    faPlane,
    faShuttleVan,
    faCar,
} from "@fortawesome/free-solid-svg-icons";

import Config from "../../data/config";

import HtmlMover from "./htmlMover";
// import MeshMover from "./meshMover";

export default class Mover {
    private moverPlane: HtmlMover;
    private moverMarker: HtmlMover;
    private moverVehicle: HtmlMover;
    private pointLight: THREE.PointLight;
    // private meshMover: MeshMover;

    constructor(
        scene: THREE.Scene,
        private positions: THREE.Vector3[],
        private colors: Float32Array,
        folder: any
    ) {
        // this.pointLight = new PointLight(
        //     Config.pointLight.color,
        //     Config.pointLight.intensity,
        //     Config.pointLight.distance
        // );
        // this.pointLight.position.set(
        //     Config.pointLight.x,
        //     Config.pointLight.y,
        //     Config.pointLight.z
        // );
        // scene.add(this.pointLight);
        // this.pointLight.visible = Config.pointLight.enabled;
        // this.pointLight.castShadow = true;

        const marker = icon(faMapMarkerAlt, {
            styles: {
                color: "#fff",
                // opacity: "0.5",
                // filter: "drop-shadow(0px 3px 3px rgba(255,255,255,1))",
                filter: "drop-shadow(0px 3px 1px rgba(0,0,0,0.5))",
            },
            classes: ["fa-lg", "mt-n3"],
            // classes: ["fa-2x", "mt-n3", "ml-2", "pl-2"],
        });
        this.moverMarker = new HtmlMover(scene, marker);
        if (process.env.NODE_ENV === "development") {
            folder
                .add({ visible: true }, "visible")
                .name("2D Guide")
                .onChange((value: boolean) => {
                    this.moverMarker.visible = value;
                });
        }

        // const pen = icon(faHighlighter, {
        //     styles: {
        //         color: "#fff",
        //         // opacity: "0.5",
        //         // filter: "drop-shadow(0px 3px 3px rgba(255,255,255,1))",
        //         filter: "drop-shadow(0px 3px 1px rgba(0,0,0,0.5))",
        //     },
        //     classes: ["fa-2x", "mt-n3", "ml-2", "pl-2"],
        //     // classes: ["fa-lg"],
        // });

        //@ts-ignore
        const vehicle = icon(faButze, {
            // const vehicle = icon(faCar, {
            transform: {
                // rotate: -30,
                flipX: true,
            },
            styles: {
                // color: "#fff",
                // opacity: "0.5",
                // filter: "drop-shadow(0px 3px 3px rgba(255,255,255,1))",
                filter: "drop-shadow(0px 3px 1px rgba(0,0,0,0.5))",
            },
            classes: ["fa-2x", "mt-n1"],
            // classes: ["fa-lg"],
        });
        this.moverVehicle = new HtmlMover(scene, vehicle);

        const plane = icon(faPlane, {
            transform: {
                rotate: -30,
                flipX: true,
            },
            styles: {
                color: "#fff",
                // opacity: "0.5",
                // filter: "drop-shadow(0px 3px 3px rgba(255,255,255,1))",
                filter: "drop-shadow(0px 3px 1px rgba(0,0,0,0.5))",
            },
            classes: ["fa-lg", "mt-n1"],
            // classes: ["fa-lg", "mt-n1"],
            // classes: ["fa-2x", "mt-n3", "ml-2", "pl-2"],
        });
        this.moverPlane = new HtmlMover(scene, plane);

        // async
        // this.meshMover = new MeshMover(scene, this.positions, folder);
    }

    public moving(value: boolean) {
        this.moverVehicle.visible = value;
        this.moverVehicle.toggle();
    }
    public flying(value: boolean) {
        this.moverPlane.visible = value;
        this.moverPlane.toggle();
    }
    public static(value: boolean) {
        this.moverMarker.visible = value;
        this.moverMarker.toggle();
    }

    public setVisible(value: boolean) {
        this.moverMarker.visible = value;
        this.moverPlane.visible = false;
        this.moverVehicle.visible = false;
    }

    public update(index: number, camera: THREE.Camera) {
        if (index < 0) {
            index = 0;
        } else if (index >= this.positions.length) {
            index = this.positions.length - 1;
        }
        const safeIndex = Math.floor(index);

        // const progressIndex =
        //     (this.routeData.length / this.positions.length) * index;

        const point = this.positions[safeIndex];
        const currentColor = new Color().fromArray(this.colors, safeIndex * 3);
        // this.meshMover.update(safeIndex, point, currentColor);
        // this.mesh.getWorldPosition(meshVector);
        const eye = camera.position.clone().sub(point);
        const dot = eye.normalize().dot(point.clone().normalize());
        const ocluded = dot < 0.0; // IS TRUE WHEN BLOB IS BEHIND THE SPHERE = dot value below 0.0

        this.moverPlane.update(ocluded, dot, point, currentColor);
        this.moverVehicle.update(ocluded, dot, point, currentColor);
        // this.pointLight.color.copy(currentColor);
        // this.pointLight.position.copy(point.clone().multiplyScalar(1.2));
        this.moverMarker.update(ocluded, dot, point, currentColor);
    }
}
