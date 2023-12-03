# Payload definitions

We have a wide variety of payload defnitions which are all identified by, what we call, a Payload Type and Payload Variant.<br>
Each device does have one or more payload definitions available. These can be configured using our Android Config App or by using dowlinks.

## General payload information

Below a general overview of the IMBuildings payload:
<table>
<tr>
    <th class="payload-header" colspan="3">header</td>
    <th class="payload-data" width="300">data</td>
</tr>
<tr class="table-details">
    <td>Payload<br>type<br>1 byte</td>
    <td >Type<br>variant<br>1 byte</td>
    <td>Payload header<br>Typically device info<br>n bytes</td>
    <td>Payload data<br>n bytes</td>
</tr>
</table>

The header can be switched off in the settings of the device.
The header contains information about the payload and the device ID.
LoRaWAN devices do have limited packet sizes. The option to switch off the header is for that case very suitable for LoRaWAN.
In such a case the payload definition can be determide by the LoRaWAN frame port (fPort).

## Downlink information

Click <a href="#/./tools/downlink/">here</a> to access our online downlink encoder.

## List of payload definitions

We have grouped the definitions per device type.
The availability of a payload definition is determined by type and version of the device which uses it.

### Comfort Sensor & Desk Sensor

<table>
<tr>
    <th class="payload-header">Type</th>
    <th class="payload-header">Variant</th>
    <th class="payload-data">Used by</th>
</tr>
<tr>
    <td>1</td>
    <td>1</td>
    <td>Comfort Sensor CO<sub>2</sub> - NB-IoT</td>
</tr>
<tr>
    <td>1</td>
    <td>2</td>
    <td>Comfort Sensor CO<sub>2</sub> - NB-IoT (with date and time)<br>
    Comfort Sensor CO<sub>2</sub> - IoT</td>
</tr>
<tr>
    <td>1</td>
    <td>3</td>
    <td>All models of Comfort Sensor - LoRaWAN<br>
(temperature, rel. humidity, CO<sub>2</sub>, presence)</td>
</tr>
<tr>
    <td>1</td>
    <td>4</td>
    <td>Comfort Sensor Presence - NB-IoT<br>
(min. temperature, max. temperature, current temperature) </td>
</tr>
<tr>
    <td>1</td>
    <td>5</td>
    <td>Comfort Sensor Presence - NB-IoT<br>
(presence event)</td>
</tr>
<tr>
    <td>1</td>
    <td>6</td>
    <td>Motion Sensor - LoRaWAN<br>
Motion Sensor - NB-IoT<br>
Desk Sensor - LoRaWAN<br>
Desk Sensor - NB-IoT<br>
(presence event)
</td>
</tr>
<tr>
    <td>1</td>
    <td>7</td>
    <td>Motion Sensor - LoRaWAN<br>
Motion Sensor - NB-IoT<br>
Desk Sensor - NB-IoT<br>
Desk Sensor - LoRaWAN<br>
(presence as percentage)
</td>
</tr>
<tr>
    <td>1</td>
    <td>8</td>
    <td>Motion Sensor - LoRaWAN<br>
Motion Sensor - NB-IoT<br>
Desk Sensor - NB-IoT<br>
Desk Sensor - LoRaWAN<br>
(presence as minutes)
</td>
</tr>
</table>

### People Counter & Office Occupancy Counter

<table>
<tr>
    <th class="payload-header">Type</th>
    <th class="payload-header">Variant</th>
    <th class="payload-data">Used by</th>
</tr>
<tr>
    <td>2</td>
    <td>1</td>
    <td>People Counter - NB-IoT</td>
</tr>
<tr>
    <td>2</td>
    <td>2</td>
    <td>People Counter - NB-IoT (1 byte count values)</td>
</tr>
<tr>
    <td>2</td>
    <td>3</td>
    <td>People Counter - NB-IoT (2 byte count values)</td>
</tr>
<tr>
    <td>2</td>
    <td>4</td>
    <td>People Counter - NB-IoT (with date and time)</td>
</tr>
<tr>
    <td>2</td>
    <td>5</td>
    <td>People Counter - LoRaWAN (with payload counter) NOT USED</td>
</tr>
<tr>
    <td>2</td>
    <td>6</td>
    <td>People Counter - LoRaWAN<br>
    Office Occupancy Counter - LoRaWAN<br>
    People Counter - NB-IoT<br>
(with total count values)</td>
</tr>
<tr>
    <td>2</td>
    <td>7</td>
    <td>People Counter - LoRaWAN<br>
    Office Occupancy Counter - LoRaWAN<br>
    People Counter - NB-IoT<br>
(only total count values)</td>
</tr>
<tr>
    <td>2</td>
    <td>8</td>
    <td>People Counter - LoRaWAN<br>
    Office Occupancy Counter - LoRaWAN<br>
    People Counter - NB-IoT<br>
(only status information)</td>
</tr>
<tr>
    <td>2</td>
    <td>9</td>
    <td>People Counter - NB-IoT<br>
(with connectivity information)</td>
</tr>
</table>

### Buttons

<table>
<tr>
    <th class="payload-header">Type</th>
    <th class="payload-header">Variant</th>
    <th class="payload-data">Used by</th>
</tr>
<tr>
    <td>3</td>
    <td>1</td>
    <td>Buttons - NB-IoT</td>
</tr>
<tr>
    <td>3</td>
    <td>2</td>
    <td>Buttons - NB-IoT (with date and time)</td>
</tr>
<tr>
    <td>3</td>
    <td>3</td>
    <td>Buttons - LoRaWAN (e.g. Moodbox)</td>
</tr>
<tr>
    <td>3</td>
    <td>4</td>
    <td>Buttons - LoRaWAN (e.g. Moodbox)<br>
    Buttons - NB-IoT (e.g. Moodbox)</td>
</tr>
<tr>
    <td>3</td>
    <td>5</td>
    <td>Buttons - NB-IoT (e.g. Moodbox)<br>
    (with connectivity inforation)</td>
</tr>
<tr>
    <td>3</td>
    <td>6</td>
    <td>Buttons - NB-IoT (e.g. Moodbox)<br>
    (with connectivity inforation)</td>
</tr>
</table>
