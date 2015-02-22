cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/com.jsmobile.plugins.sms/www/sms.js",
        "id": "com.jsmobile.plugins.sms.sms",
        "clobbers": [
            "window.sms"
        ]
    },
    {
        "file": "plugins/org.dartlang.phonegap.gyroscope/www/AngularSpeed.js",
        "id": "org.dartlang.phonegap.gyroscope.AngularSpeed",
        "clobbers": [
            "AngularSpeed"
        ]
    },
    {
        "file": "plugins/org.dartlang.phonegap.gyroscope/www/gyroscope.js",
        "id": "org.dartlang.phonegap.gyroscope.gyroscope",
        "clobbers": [
            "navigator.gyroscope"
        ]
    },
    {
        "file": "plugins/com.megster.cordova.bluetoothserial/www/bluetoothSerial.js",
        "id": "com.megster.cordova.bluetoothserial.bluetoothSerial",
        "clobbers": [
            "window.bluetoothSerial"
        ]
    },
    {
        "file": "plugins/org.awokenwell.proximity/www/proximity.js",
        "id": "org.awokenwell.proximity.proximity",
        "clobbers": [
            "navigator.proximity"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device-motion": "0.2.4",
    "org.apache.cordova.geolocation": "0.3.13-dev",
    "com.jsmobile.plugins.sms": "0.0.1",
    "org.dartlang.phonegap.gyroscope": "0.0.2",
    "com.megster.cordova.bluetoothserial": "0.3.5",
    "org.awokenwell.proximity": "0.2.1"
}
// BOTTOM OF METADATA
});