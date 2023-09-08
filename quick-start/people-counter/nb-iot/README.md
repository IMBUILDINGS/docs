# People Counter - NB-IoT

?> Download the <a href="./pdf/IMBuildings - Quick start guide - People Counter - NB-IoT v23.09-1.pdf">Quick start guide</a>

This battery powered People Counter uses the network of a mobile service provider. This means you can connect the device to the cloud from anywhere within the network coverage area.

To be able to connect to the network you need a SIM card wich is able to connect to the NB-IoT network of your mobile service provider.
IMBuildings can also deliver the device including this connectivity. [Contact us](https://imbuildings.com/contact/) for more details about this.

## Plug & Play - IMMotion/IMBuildings Cloud

In case you have the People Counter - NB-IoT including the IMMotion / IMBuildings Cloud service please read the [Cloud quick start](./quick-start/cloud/) after installation of the device according to the <a href="./pdf/IMBuildings - Quick start guide - People Counter - NB-IoT v23.09-1.pdf" target="_blank">Quick start guide</a>.

?> When counts are made, the data is sent to the cloud within a 10-minute timeframe.

!>**Note:** When you have this solution the device already contains a SIM card and the correct configuration to connect with the IMBuildings Cloud.

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
