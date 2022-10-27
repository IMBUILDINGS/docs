# People Counter

This section contains information for all our variations of People Counters including our Office Occupancy Counters (OOC)

Please note that payload information for the EnOcean devices can be found in the chapter [EnOcean telegrams](#enocean-telegrams)

## Available settings

The general settings are the same for all people counter devices.

The OOC does have an additional setting for setting the height/distance thresholds.

<!--### General

### LoRaWAN

### NB-IOT

### EnOcean
-->
## Payload decoding

Detailed information is available in the [Reference Guide](/docs/pdf/IMBUILDINGS_Reference_Guide_for_System_Integrators.pdf ':ignore').
Please have a look at chapter 1.2 for the various payload formats.

!>Please note that the mentioned PDF contains only information for LoRaWAN and NB-IoT devices.<br>
For EnOcean please refer the [EnOcean Chapter](#EnOcean-telegrams)

<!--
## Downlink encoding
-->
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

