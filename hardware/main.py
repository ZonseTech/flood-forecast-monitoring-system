# temperature and humidity
import time
import board
import adafruit_dht

import WaterLevel

import WaterFlow

dhtDevice = adafruit_dht.DHT22(board.D4, use_pulseio=False)

while True:
    request.get("http://localhost/flood-forecast/website/api.php", {
        temperature_c: dhtDevice.temperature,
        humidity: dhtDevice.humidity,

        water_level: WaterLevel(),

        water_flow: WaterFlow()
    }).then(() => {

    }).catch((e) => {

    })    

    time.sleep(2.0)