/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        window.sensors = {
            accelerometer: false,
            gyro: false,
            gps: false,
            heartrate: false,
            proximity: false,
            barometer: false
        };
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {


        // Listen to accelerometer events every 100ms
        if (navigator.accelerometer) {
            window.sensors.accelerometer = true;

            navigator.accelerometer.watchAcceleration(
                // success handler
                app.fallDetect,

                // error handler
                function (e) {
                  alert("accel fail (" + e.name + ": " + e.message + ")");
                },

                // options: update every 100ms
                { frequency: 100 }
            );
        }

        // Check for geolocation support
        if (navigator.geolocation) {
            window.sensors.gps = true;
        }

        window.appReady();
    },

    // Check accelerometer values for fall range
    fallDetect: function(acc) {
        var GRAVITY_EARTH =  9.80665; // Earth's gravity in SI units (m/s^2)
        var THRESHHOLD = 3;

        var gX = acc.x / GRAVITY_EARTH;
        var gY = acc.y / GRAVITY_EARTH;
        var gZ = acc.z / GRAVITY_EARTH;

        // gForce will be close to 1 when there is no movement.
        var gForce = Math.sqrt(gX * gX + gY * gY + gZ * gZ);

        if (gForce > THRESHHOLD) {
            alert('SHAKEN, not stirred!');
        }
        console.log(gForce);
    }
};
