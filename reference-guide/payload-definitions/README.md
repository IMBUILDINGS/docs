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

## Payload details

In case you have a payload which is not listed please let us know.
You might have an 'older' device or a prototype.

### Type 1: Various sensors

### Type 1 / Variant 1

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="6" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x01</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x01</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td rowspan="4">10</td>
        <td>2</td>
        <td>Device ID</td>
        <td>6 bytes ID</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned 16bit)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>RSSI</td>
        <td>1 byte (signed)</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">7</td>
        <td>12</td>
        <td>Temperature (Celcius)</td>
        <td>2 bytes</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Relative humidity</td>
        <td>2 bytes</td>
    </tr>
    <tr>
        <td>16</td>
        <td>CO<sub>2</sub></td>
        <td>2 bytes</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Presence</td>
        <td>1 byte</td>
    </tr>
</table>

### Type 1 / Variant 2

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="6" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x01</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x02</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td rowspan="4">10</td>
        <td>2</td>
        <td>Device ID</td>
        <td>6 bytes ID</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned 16bit)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>RSSI</td>
        <td>1 byte (signed)</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">14</td>
        <td>12</td>
        <td>Date (UTC)</td>
        <td>4 bytes (YYYYMMDD) (BCD)</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Time (UTC)</td>
        <td>3 bytes (HHmmss) (BCD)</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Temperature (Celcius)</td>
        <td>2 bytes</td>
    </tr>
    <tr>
        <td>21</td>
        <td>Relative humidity</td>
        <td>2 bytes</td>
    </tr>
    <tr>
        <td>23</td>
        <td>CO<sub>2</sub></td>
        <td>2 bytes</td>
    </tr>
    <tr>
        <td>25</td>
        <td>Presence</td>
        <td>1 byte</td>
    </tr>
</table>

### Type 1 / Variant 3

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="5" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x01</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x03</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td rowspan="3">11</td>
        <td>2</td>
        <td>Device ID</td>
        <td>8 bytes ID</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">7</td>
        <td>13</td>
        <td>Temperature (Celcius)</td>
        <td>2 bytes</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Relative humidity</td>
        <td>2 bytes</td>
    </tr>
    <tr>
        <td>17</td>
        <td>CO<sub>2</sub></td>
        <td>2 bytes</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Presence</td>
        <td>1 byte</td>
    </tr>
</table>

### Type 1 / Variant 4

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="6" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x01</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x04</td>
        <td>Payload variant</td>
    </tr>
    <tr>    
        <td rowspan="4">10</td>
        <td>2</td>
        <td>Device ID</td>
        <td>6 bytes ID</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned 16bit)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>RSSI</td>
        <td>1 byte (signed)</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">6</td>
        <td>12</td>
        <td>Min. Temperature</td>
        <td>2 bytes</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Max. Temperature</td>
        <td>2 bytes</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Current Temperature</td>
        <td>2 bytes</td>
    </tr>
</table>

### Type 1 / Variant 5

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="6" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x01</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x05</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td rowspan="4">10</td>
        <td>2</td>
        <td>Device ID</td>
        <td>6 bytes ID</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>RSSI</td>
        <td>1 byte (signed)</td>
    </tr>
    <tr>
        <td class="payload-data">Data</td>
        <td>1</td>
        <td>12</td>
        <td>Event type</td>
        <td>1 byte<br>
        0x01 = Presence event<br>
        0x02 = Power lost</br>
        </td>
    </tr>
</table>

### Type 1 / Variant 6

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
</table>

### Type 1 / Variant 7

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
</table>

### Type 1 / Variant 8 

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
</table>

### Type 1 / Variant 9

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
</table>

### Type 1 / Variant 10

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
</table>

### Type 1 / Variant 11

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
</table>

### Type 2: People Counting

#### Type 2 / Variant 4

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="6" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x02</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x04</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td rowspan="4">10</td>
        <td>2</td>
        <td>Device ID</td>
        <td>6 bytes ID</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>RSSI</td>
        <td>1 byte (signed)</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">12</td>
        <td>12</td>
        <td>Date (UTC)</td>
        <td>4 bytes (YYYYMMDD) (BCD)</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Time (UTC)</td>
        <td>3 bytes (HHmmss) (BCD)</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Counter A</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>21</td>
        <td>Counter B</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>23</td>
        <td>Sensor status</td>
        <td>1 byte (unsigned)</td>
    </tr>
</table>

!>Please note that Counter A and Counter B are relative count values since the last transmission. This means that these values will reset to 0 when data is transmitted.


#### Type 2 / Variant 6

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="3" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x02</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x06</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td>8</td>
        <td>2</td>
        <td>Device ID</td>
        <td>8 bytes ID</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">13</td>
        <td>10</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Counter A</td>
        <td>2 bytes (unsigned int16)</td>
    <tr>
    <tr>
        <td>15</td>
        <td>Counter B</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Sensor status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Total Counter A</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>20</td>
        <td>Total Counter B</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>22</td>
        <td>Payload counter</td>
        <td>1 byte (unsigned)</td>
    </tr>
</table>

!>Please note that Counter A and Counter B are relative count values since the last transmission. This means that these values will reset to 0 when data is transmitted.

?>We recommend to use the Total Counter A and Total Counter B values.

#### Type 2 / Variant 7

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="3" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x02</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x07</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td>8</td>
        <td>2</td>
        <td>Device ID</td>
        <td>8 bytes ID</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">5</td>
        <td>10</td>
        <td>Sensor status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Total Counter A</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Total Counter B</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
</table>

#### Type 2 / Variant 8

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="3" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x02</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x08</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td>8</td>
        <td>2</td>
        <td>Device ID</td>
        <td>8 bytes ID</td>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">4</td>
        <td>10</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Sensor status</td>
        <td>1 byte (unsigned)</td>
    </tr>
</table>

#### Type 2 / Variant 9

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="3" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x02</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x09</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td>2</td>
        <td>8</td>
        <td>Device ID</td>
        <td>8 bytes ID</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">15</td>
        <td>10</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Counter A</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Counter B</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Sensor status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>18</td>
        <td>Total Counter A</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>20</td>
        <td>Total Counter B</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>22</td>
        <td>Payload counter</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>23</td>
        <td>RSSI</td>
        <td>1 byte (signed)</td>
    </tr>
    <tr>
        <td>24</td>
        <td>CE LEvel</td>
        <td>1 byte (unsigned)</td>
    </tr>
</table>

!>Please note that Counter A and Counter B are relative count values since the last transmission. This means that these values will reset to 0 when data is transmitted.

?>We recommend to use the Total Counter A and Total Counter B values.

#### Type 2 / Variant 12

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="3" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x02</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x0C</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td>8</td>
        <td>2</td>
        <td>Device ID</td>
        <td>8 bytes ID</td>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">8</td>
        <td>10</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Sensor status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Count sensor on (seconds)</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Count sensor off (seconds)</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
</table>

!> Please note that the count sensor on and off time in seconds is reset once the message is transmitted

### Type 3: Buttons

#### Type 3 / Variant 1

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="6" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x03</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x01</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td rowspan="4">10</td>
        <td>2</td>
        <td>Device ID</td>
        <td>6 bytes ID</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>RSSI</td>
        <td>1 byte (signed)</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td>1</td>
        <td>12</td>
        <td>Button pressed</td>
        <td>1 byte<br>
        -- bit 0: Button A pressed<br>
        -- bit 1: Button B pressed<br>
        -- bit 2: Button C pressed<br>
        -- bit 3: Button D pressed<br>
        -- bit 4: Button E pressed<br>
        </td>
    </tr>   
</table>

#### Type 3 / Variant 2

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="6" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x03</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x02</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td rowspan="4">10</td>
        <td>2</td>
        <td>Device ID</td>
        <td>6 bytes ID</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>RSSI</td>
        <td>1 byte (signed)</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">8</td>
        <td>12</td>
        <td>Date (UTC)</td>
        <td>4 bytes (YYYYMMDD) (BCD)</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Time (UTC)</td>
        <td>3 bytes (HHmmss) (BCD)</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Button pressed</td>
        <td>1 byte<br>
        -- bit 0: Button A pressed<br>
        -- bit 1: Button B pressed<br>
        -- bit 2: Button C pressed<br>
        -- bit 3: Button D pressed<br>
        -- bit 4: Button E pressed<br>
        </td>
    </tr>  
</table>

#### Type 3 / Variant 3

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="5" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x03</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x03</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td rowspan="3">11</td>
        <td>2</td>
        <td>Device ID</td>
        <td>8 bytes ID</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td>1</td>
        <td>13</td>
        <td>Button pressed</td>
        <td>1 byte<br>
        -- bit 0: Button A pressed<br>
        -- bit 1: Button B pressed<br>
        -- bit 2: Button C pressed<br>
        -- bit 3: Button D pressed<br>
        -- bit 4: Button E pressed<br>
        </td>
</table>

#### Type 3 / Variant 4

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="5" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x03</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x04</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td rowspan="3">11</td>
        <td>2</td>
        <td>Device ID</td>
        <td>8 bytes ID</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">10</td>
        <td>13</td>
        <td>Button A count</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Button B count</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Button C count</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Button D count</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td>21</td>
        <td>Button E count</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
</table>

#### Type 3 / Variant 5

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="5" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x03</td>
        <td>Payload type</td>
    </4tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x05</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td rowspan="3">11</td>
        <td>2</td>
        <td>Device ID</td>
        <td>8 bytes ID</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned int16)</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">3</td>
        <td>13</td>
        <td>Button pressed</td>
        <td>1 byte<br>
        -- bit 0: Button A pressed<br>
        -- bit 1: Button B pressed<br>
        -- bit 2: Button C pressed<br>
        -- bit 3: Button D pressed<br>
        -- bit 4: Button E pressed
        </td>
    </tr>
    <tr>
        <td>14</td>
        <td>RSSI</td>
        <td>1 byte (signed)</td>
    </tr>
    <tr>
        <td>15</td>
        <td>CE Level</td>
        <td>1 byte (unsigned)</td>
    </tr>
</table>

#### Type 3 / Variant 6

<table>
    <tr class="payload-header">
        <th>Section</th>
        <th>Size</th>
        <th>Index</th>
        <th width="200">Values</th>
        <th width="400">Info</th>
    </tr>
    <tr>
        <td rowspan="5" class="payload-header">Header</td>
        <td>1</td>
        <td>0</td>
        <td>0x03</td>
        <td>Payload type</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
        <td>0x06</td>
        <td>Payload variant</td>
    </tr>
    <tr>
        <td rowspan="3">11</td>
        <td>2</td>
        <td>Device ID</td>
        <td>8 bytes ID</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Device status</td>
        <td>1 byte (unsigned)</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Battery voltage</td>
        <td>2 bytes (unsigned 16bit)</td>
    </tr>
    <tr>
        <td rowspan="0" class="payload-data">Data</td>
        <td rowspan="0">12</td>
        <td>13</td>
        <td>Buttton A count</td>
        <td>2 bytes (unsigned 16bit)</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Button B count</td>
        <td>2 bytes (unsigned 16bit)</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Button C count</td>
        <td>2 bytes (unsigned 16bit)</td>
    </tr>
    <tr>
        <td>19</td>
        <td>Button D count</td>
        <td>2 bytes (unsigned 16bit)</td>
    </tr>
    <tr>
        <td>21</td>
        <td>Button E count</td>
        <td>2 bytes (unsigned 16bit)</td>
    </tr>
    <tr>
        <td>23</td>
        <td>RSSI</td>
        <td>1 byte (signed)</td>
    </tr>
    <tr>
        <td>24</td>
        <td>CE Level</td>
        <td>1 byte (unsigned)</td>
    </tr>
</table>