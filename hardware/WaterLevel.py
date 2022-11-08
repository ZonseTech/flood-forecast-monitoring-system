#!/usr/bin/python
import time
import RPi.GPIO as GPIO

# Using board based pin numbering
GPIO.setmode(GPIO.BOARD)

pin = 11

def ReadDistance():
   GPIO.setup(pin, GPIO.OUT)
   GPIO.output(pin, 0)

   time.sleep(0.02)


   #send trigger signal
   GPIO.output(pin, 1)


   time.sleep(0.05)


   GPIO.output(pin, 0)


   GPIO.setup(pin, GPIO.IN)


   while GPIO.input(pin)==0:
      starttime=time.time()


   while GPIO.input(pin)==1:
      endtime=time.time()
      
   duration=endtime-starttime
   # Distance is defined as time/2 (there and back) * speed of sound 34000 cm/s 
   distance=duration*34000/2
   return distance