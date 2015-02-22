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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device-motion": "0.2.4",
    "org.apache.cordova.geolocation": "0.3.13-dev",
    "com.jsmobile.plugins.sms": "0.0.1",
    "org.dartlang.phonegap.gyroscope": "0.0.2"
}
// BOTTOM OF METADATA
});