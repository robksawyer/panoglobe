import { ImageLoader } from "three";
import $ from "jquery";
import Route from "./route";
import { calc3DPositions } from "./../utils/panoutils";
import MyFormatter from "./../utils/sliderFormatter";
import { getHeightData } from "./../utils/panoutils";
// import Config from "../../data/config";

import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import "../../css/nouislider.css";

import T_heightmap from "../../textures/heightmap_1440.jpg";

export default class RouteManager {
    constructor(scene, container, globusradius, controls) {
        this.routes = [];
        this.activeMarker = null;

        const heightData = new Promise((resolve) => {
            return new ImageLoader().load(T_heightmap, resolve);
        }).then((image) => {
            const scaleDivider = 20;
            return getHeightData(image, scaleDivider);
        });

        const ui = document.createElement("div");
        ui.classList.add(
            "position-absolute",
            "fixed-bottom",
            "m-2",
            "mb-5",
            "m-md-5",
            "p-2"
        );
        container.appendChild(ui);

        const slider = document.createElement("div");
        ui.appendChild(slider);

        this.buildRoute = function (routeData, phase, folder) {
            return heightData.then((data) => {
                let calculatedRouteData = calc3DPositions(
                    routeData.gps,
                    data,
                    globusradius + 0.0
                );

                // const max =
                //     (calculatedRouteData.length - 1) *
                //     (Config.routes.lineSegments + 1);
                const max = calculatedRouteData.length - 1;

                const poi = [];
                const strings = [];
                calculatedRouteData.forEach(function (e, index) {
                    // e.index = index;
                    if (e.adresse) poi.push(index);
                    strings.push(e.adresse);
                });
                // let result = poi.map((a) => a.index);

                if (slider.noUiSlider) {
                    slider.noUiSlider.destroy();
                }
                const mf = new MyFormatter(strings);
                noUiSlider.create(
                    slider,
                    {
                        start: [strings.length],
                        step: 1,
                        connect: false,
                        range: {
                            min: 0,
                            max: max,
                        },
                        pips: {
                            mode: "values",
                            values: poi,
                            stepped: true,
                            density: 100,
                            format: mf,
                        },
                    },
                    true
                );
                slider.noUiSlider.on("set", function (value) {
                    controls.moveIntoCenter(
                        calculatedRouteData[Math.floor(value)].lat,
                        calculatedRouteData[Math.floor(value)].lng,
                        500
                    );
                });
                slider.noUiSlider.on("slide", function (value) {
                    route.routeLine.setDrawIndex(value);
                });

                var pips = slider.querySelectorAll(".noUi-value");

                function clickOnPip() {
                    const value = Number(this.getAttribute("data-value"));
                    slider.noUiSlider.set(value);
                    route.routeLine.setDrawIndex(value);
                    controls.moveIntoCenter(
                        // routeData.gps[Math.floor(value)].lat,
                        // routeData.gps[Math.floor(value)].lng,
                        calculatedRouteData[Math.floor(value)].lat,
                        calculatedRouteData[Math.floor(value)].lng,
                        1000
                    );
                }

                for (var i = 0; i < pips.length; i++) {
                    // pips[i].style.cursor = "pointer";
                    pips[i].addEventListener("click", clickOnPip);
                }

                const route = new Route(
                    scene,
                    container,
                    calculatedRouteData,
                    phase,
                    controls,
                    this,
                    folder
                );
                this.routes.push(route);

                // let x = folder.add(
                //     {
                //         range: 1,
                //     },
                //     "range",
                //     0,
                //     1,
                //     0.1
                // );
                // x.onChange(function (value) {
                //     route.routeLine.setDrawProgress(value);
                //     const x = Math.floor(calculatedRouteData.length * value);
                //     slider.noUiSlider.set(x);
                // });

                // route.marker.forEach((m) => {
                //     const x = folder
                //         .add({ toggle: false }, "toggle")
                //         .name(m.poi.adresse);
                //     x.onChange(function (value) {
                //         // route.setActiveMarker(m);
                //         // m.setActive(value);
                //         controls.moveIntoCenter(m.poi.lat, m.poi.lng, 1000);
                //     });
                // });

                // // Onload other route disable last active marker
                if (this.activeMarker !== null) {
                    this.activeMarker.setActive(false);
                }

                // const lat = 48.78232, lng = 9.17702; // stgt
                // const lat = 19.432608, lng = -99.133209; // mexico
                // select last Marker on first route, and first marker on following routes
                const index =
                    this.routes.length > 1 ? 0 : route.marker.length - 1;
                const marker = route.marker[index];
                controls.moveIntoCenter(marker.poi.lat, marker.poi.lng, 2000);

                return route;
            });
        };

        this.setActiveMarker = function (route, marker) {
            if (route.activeMarker === marker) {
                // current marker is active => toggle
                marker.setActive(false);
                route.activeMarker = null;
                this.activeMarker = null;
                return;
            } else if (this.activeMarker != undefined) {
                // the manager disables ALL active Markers
                // this.routes.forEach((r) => {
                //     if (r.activeMarker != undefined) {
                //         r.activeMarker.setActive(false);
                //         r.activeMarker = null;
                //     }
                // });
                // some other marker is active, turn off then turn new one on
                this.activeMarker.setActive(false);
                marker.setActive(true);
            } else {
                marker.setActive(true);
            }
            this.activeMarker = marker;
        };
    }

    static load(url) {
        // load datalist
        if (url) {
            return $.getJSON(url, {
                format: "json",
            })
                .done(() => {
                    console.log("Route has been loaded");
                    // this.buildRoute(data, phase, folder);
                })
                .fail(() => {
                    alert("Sorry! An Error occured while loading the route :(");
                });
            // .always(function() {
            // alert( "complete" );
            // });
        } else {
            // IF NO JSON OBJECT GIVEN
            alert("Call to loadRoute without providing a Link to a datalist");
        }
    }

    // get activeMarker() {
    //   return this.activeMarker;
    // }

    update(delta, camera) {
        this.routes.forEach((route) => {
            route.update(delta, camera);
        });
    }
}
