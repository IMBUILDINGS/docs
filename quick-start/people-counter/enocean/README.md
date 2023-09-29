# People Counter - EnOcean

?> Download the <a href="./pdf/">Quick start guide</a>

This battery powered People Counter uses the EnOcean wireless communication to transmit the data collected by the People Counter.

Setting up a wireless EnOcean network is outside the scope of this documentation.

## Features

### Interval based transmission
When this option is used the device transmits data on a regular interval.
This interval can be configured using NFC and the Android Config App.

### Event based transmission
When this option is used the device transmits data on a configurageble event.
An event can be defined by the number of counts and a timeout.

It is also possible to transmit only when at least 1 count was made. In that case the timeout is the interval of transmision in case of available counts.

## Status LED functions

The IR receiver contains a status LED which displays at which state the device is functioning.
This status LED is visible from the frontside of the device.

**During start up / battery placement**
<table>
<tr><th width="30">Status LED</th><th width="600">Description</th></tr>
<tr><td align="center"><img src="./assets/blink-led-orange.gif" width="15"></td><td>Battery voltage to low.</td></tr>
<tr><td align="center"><img src="./assets/led-orange.gif" width="15"></td><td>Used battery placed (2 sec. on)</td></tr>
<tr><td align="center"><img src="./assets/led-blue.gif" width="15"></td><td>Incorrect settings unable to make connection</td></tr>
<tr><td align="center"><img src="./assets/blink-led-blue.gif" width="15"></td><td>Connecting</td></tr>
<tr><td align="center"><img src="./assets/blink-led-blue-green.gif" width="15"></td><td>Connected</td>
</table>

**During normal operation**
<table>
<tr><th width="30">Status LED</th><th width="600">Description</th></tr>
<tr><td align="center"><img src="./assets/blink-led-green-count.gif" width="15"></td><td>Count registrated</td>
</table>

**During alignment mode**
<table>
<tr><th width="30">Status LED</th><th width="600">Description</th></tr>
<tr><td align="center"><img src="./assets/led-green.gif" width="15"></td><td>IR Transmitter and receiver are aligned</td>
<tr><td align="center"><img src="./assets/led-red.gif" width="15"></td><td>IR Transmitter seen on only the left or right LED</td>
<tr><td align="center"><img src="./assets/blink-led-red.gif" width="15"></td><td>IR Transmitter and IR Receiver not aligned</td>
</table>

!>**Note:** Led functionality stays active for 2 minutes after establishing the NB-IoT connection or after exiting the alignment mode

## EnOcean telegrams

### Count values

For transmitting the count values for Counter A and Counter B the People Counter uses the EnOcean 4 bytes communicatin (4BS).<br>
Counter A and Counter B are transmitted using 1 telegram for each on channels 1 and 2.

!>Please note that the device transmits its total values since power on.

?>**EEP** (EnOcean Equipment Profile) A5-12-00 (Automated Meter Reading / AMR) is used for transmitting these total values.

Below an example of a telegram for Counter A and Counter B

**Example Counter A, count with value 1254**

<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Meter Reading (MR)</td><td>0x0004E6 (1254)</td></tr>
<tr><td>Measurement Channel (CH)</td><td>1</td></tr>
<tr><td>LRN Bit (LRNB)</td><td>1 (data telegram)</td></tr>
<tr><td>Data type (DT)</td><td>0 (Cumulative value)</td></tr>
<tr><td>Divisor / scale (DIV)</td><td>0 (x/1)</td></tr>
</table>

Telegram: `0x00 0x04 0xE6 0x18`

**Example Counter B, count with value 1138**

<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Meter Reading (MR)</td><td>0x000472 (1138)</td></tr>
<tr><td>Measurement Channel (CH)</td><td>2</td></tr>
<tr><td>LRN Bit (LRNB)</td><td>1 (data telegram)</td></tr>
<tr><td>Data type (DT)</td><td>0 (Cumulative value)</td></tr>
<tr><td>Divisor / scale (DIV)</td><td>0 (x/1)</td></tr>
</table>

Telegram: `0x00 0x04 0x72 0x28`

### Status information

On a configurable interval the status information is transmitted.<br>
Within the configuration of the device we call this the heartbeat.

Manufacturer Specific Communication<br>
Manufacturer ID is currently set to 0x7FF

Within the variable data the device transmits:
<table>
<tr><th>Field</th><th>Size</th></tr>
<tr><td>Device status</td><td>1 byte</td></tr>
<tr><td>Battery voltage</td><td>2 bytes</td></tr>
<tr><td>Sensor status</td><td>1 byte</td></tr>
</table>

!>Please note that the first 4 bits are not used within this payload.

?>**Calculation for battery voltage**<br>
This is a 16 bit unsigned value. To get the Voltage you need to divide the value by 100.

### Energy level
On a configurable interval the energy level of the device is transmitted.

For this the device uses the Signal Telegram: 0x06 - Energy status of the device.

### Device version
After power on and after transmitting the teach-in telegram the device version is transmitted.

For this the device uses the Signal Telegram: 0x07 - Revision of device

