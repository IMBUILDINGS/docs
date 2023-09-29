# People Counter

This section contains information for all our variations of People Counters including our Office Occupancy Counters (OOC)

Please note that payload information for the EnOcean devices can be found in the chapter [EnOcean telegrams](#enocean-telegrams)

## Status LED information

### People Counter - LoRaWAN

**During start up / battery placement**
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:orange_circle: (flashing)</td><td>Battery voltage to low.</td></tr>
<tr><td>:orange_circle: (2 sec.)</td><td>Used battery placed</td></tr>
<tr><td>:large_blue_circle: (on)</td><td>Incorrect settings unable to make connection</td></tr>
<tr><td>:large_blue_circle: (flashing)</td><td>Connecting</td></tr>
<tr><td>:large_blue_circle: (flashing) :green_circle: (blinking)</td><td>Connected</td>
</table>

**During normal operation**
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:green_circle: (blinking)</td><td>Count registrated</td>
</table>

**During alignment mode**
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:green_circle: (on)</td><td>IR Transmitter and receiver are aligned</td>
<tr><td>:red_circle: (on)</td><td>IR Transmitter seen on only the left or right LED</td>
<tr><td>:red_circle: (flashing)</td><td>IR Transmitter and IR Receiver not aligned</td>
</table>

!>Note: Led functionality stays active for 2 minutes after connecting

### People Counter - NB-IoT
**During start up / battery placement**
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:orange_circle: (flashing)</td><td>Battery voltage to low.</td></tr>
<tr><td>:orange_circle: (2 sec.)</td><td>Used battery placed</td></tr>
<tr><td>:large_blue_circle: (on)</td><td>Incorrect settings unable to make connection</td></tr>
<tr><td>:large_blue_circle: (flashing)</td><td>Connecting</td></tr>
<tr><td>:large_blue_circle: (flashing) :green_circle: (blinking)</td><td>Connected</td>
</table>

**During normal operation**
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:green_circle: (blinking)</td><td>Count registrated</td>
</table>

**During alignment mode**
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:green_circle: (on)</td><td>IR Transmitter and receiver are aligned</td>
<tr><td>:red_circle: (on)</td><td>IR Transmitter seen on only the left or right LED</td>
<tr><td>:red_circle: (flashing)</td><td>IR Transmitter and IR Receiver not aligned</td>
</table>

!>Note: Led functionality stays active for 2 minutes after connecting

### People Counter - EnOcean
**During start up / battery placement**
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:orange_circle: (flashing)</td><td>Battery voltage to low.</td></tr>
<tr><td>:orange_circle: (2 sec.)</td><td>Used battery placed</td></tr>
<tr><td>:large_blue_circle: (on)</td><td>Incorrect settings unable to make connection</td></tr>
<tr><td>:large_blue_circle: (flashing)</td><td>Connecting</td></tr>
<tr><td>:large_blue_circle: (flashing) :green_circle: (blinking)</td><td>Connected</td>
</table>

**During normal operation**
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:green_circle: (blinking)</td><td>Count registrated</td>
</table>

**During alignment mode**
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:green_circle: (on)</td><td>IR Transmitter and receiver are aligned</td>
<tr><td>:red_circle: (on)</td><td>IR Transmitter seen on only the left or right LED</td>
<tr><td>:red_circle: (flashing)</td><td>IR Transmitter and IR Receiver not aligned</td>
</table>

!>Note: Led functionality stays active for 2 minutes after connecting

### People Counter - IoT
**During start up / battery placement**
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:red_circle: (blinking) :red_circle: (blinking)</td><td>Not connected with gateway (SNG)</td></tr>
<tr><td>:red_circle: (blinking) :green_circle: (blinking)</td><td>Connected with gateway (SNG)</td></tr>
</table>

**During normal operation**
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:green_circle: (blinking)</td><td>Count registered</td></tr>
<tr><td>:orange_circle: (blinking)</td><td>Count registered</td></tr>
<tr><td>:green_circle: (blinking) :green_circle: (blinking)</td><td>Count(s) transmitted</td></tr>
<tr><td>:green_circle: (blinking) :red_circle: (blinking)</td><td>Count(s) transmitted but not acknowleged</td></tr>
</table>

**During alignment mode**
<table>
<tr><th width="300">Status LED</th><th width="600">Description</th></tr>
<tr><td>:green_circle: (on)</td><td>IR Transmitter and receiver are aligned</td>
<tr><td>:red_circle: (on)</td><td>IR Transmitter seen on only the left or right LED</td>
<tr><td>:red_circle: (flashing)</td><td>IR Transmitter and IR Receiver not aligned</td>
</table>

## Available settings

The general settings are the same for all people counter devices.

The OOC does have an additional setting for setting the height/distance thresholds.

<!--### General

### LoRaWAN

### NB-IOT

### EnOcean
-->

<!--
## Downlink encoding
-->
