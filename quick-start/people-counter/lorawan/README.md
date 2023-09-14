## People Counter - LoRaWAN

?> Download the latest manual <a href="./pdf/IMB - 11 - IMBUILDINGS - People Counter - LoRaWAN - Manual v1.5.pdf">here</a>

Here we will describe how to get started with the IMBuildings People Counter LoRaWAN.

We will quickly go through the following topics:
- [People Counter](#People-Counter---LoRaWAN)
  - [General information](#General-information)
  - [LED indications](#LED-indications)
  - [Validation & Alignment](#Validation-&-Alignment)
  - [Features and Functions](#Features-and-Functions)
  - [mounting](#mounting)

## General information

The LoRaWAN People Counter is a battery powered sensor for counting people crossing a horizontal line. The counter consists of two parts, an infrared (IR) transmitter part and an infrared receiver part, which always work together. 
The IR transmitter the infrared signal. 
The IR receiver is the main part and holds the intelligence and communication with the outside world.

## LED indications
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:orange_circle: (flashing)</td><td>Battery voltage to low.</td></tr>
<tr><td>:orange_circle: (2 sec.)</td><td>Used battery placed</td></tr>
<tr><td>:large_blue_circle: (on)</td><td>Incorrect settings unable to make connection</td></tr>
<tr><td>:large_blue_circle: (flashing)</td><td>Connecting</td></tr>
<tr><td>:large_blue_circle: (flashing) :green_circle: (blinking)</td><td>Connected</td>
</table>

## Validation & Alignment
The device will first go into alignment mode for 1 minute before entering the validation mode.
 
Alignment mode
When the led is blinking RED you need to point the IR transmitter to the IR receiver until the led lights up GREEN continuously.
Please try to find the middle of the infrared light beam during the alignment.

<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:green_circle: (on)</td><td>IR Transmitter and receiver are aligned</td>
<tr><td>:red_circle: (on)</td><td>IR Transmitter seen on only the left or right LED</td>
<tr><td>:red_circle: (flashing)</td><td>IR Transmitter and IR Receiver not aligned</td>
</table>

validation mode
The led will blink green when a count is registered.
Please make some counts.

<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:green_circle: (blinking)</td><td>Count registrated</td>
</table>

!>Note: Under normal operation the counter indicator LEDs remain active for approximately 2 minutes after a connection has been established.
once the LED turns off no indication of activity is given, unless activated again using the magnet area.

## Features and Functions
<table>
<tr><th width="200">Feature</th><th width="300">Description</th><th width="100">Avalible from version</th></tr>
<tr><td>Event Mode</td><td>per telling sturen of met een timeout</td><td>vx.xx</td>
<tr><td>Event Mode</td><td>per telling sturen of met een timeout</td><td>vx.xx</td>
</table>



## mounting & Installation

When mounting the People Counter take care of the following:

The maximum distance between the transmitter (Tx) and receiver (Rx) is 8 meter.

To count adults we recommend to use a mounting height between 150cm and 160cm.


!>Note: The maximum measurement width of 8 meter will decrease when the infrared signal goes through glass or when full sunlight is shining directly into the receiver at a low angle.
