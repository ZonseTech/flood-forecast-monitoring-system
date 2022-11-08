import RPi.GPIO as GPIO
import time, sys
 
FLOW_SENSOR_GPIO = 13
 
GPIO.setmode(GPIO.BCM)
GPIO.setup(FLOW_SENSOR_GPIO, GPIO.IN, pull_up_down = GPIO.PUD_UP)
 
global count
 
def countPulse(channel):
   global count
   if start_counter == 1:
      count = count+1
 

def WaterFlow():
    count = 0

    GPIO.add_event_detect(FLOW_SENSOR_GPIO, GPIO.FALLING, callback=countPulse)
 
    start_counter = 1
    time.sleep(0.2)
    start_counter = 0
    flow = (count / 7.5)
    
    return flow
