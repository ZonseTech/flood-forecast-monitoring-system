# temperature and humidity
import time
import board
import adafruit_dht

import WaterLevel

import WaterFlow

dhtDevice = adafruit_dht.DHT22(board.D4, use_pulseio=False)

while True:
    result = request.post("http://localhost/flood-forecast/website/api.php?action=save", {
        temperature_c: dhtDevice.temperature,
        humidity: dhtDevice.humidity,

        water_level: WaterLevel(),

        water_flow: WaterFlow()
    }) 

    time.sleep(2.0)

    r = result.json()