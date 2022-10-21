# Start here

Here we share all available information regarding the technical integration of our devices.
If you need any additional help please contact our colleagues from support.

Please let us know when something is not clear or if you think something needs to be added.

## How our payload structure works
For our LoRaWAN and NB-IoT devices we use a uniform payload structure. The payload packet can exist out of a header and data.<br>
For minimizing the payload it is possible to remove the header from the packet. This function of removing the header is useful for LoRaWAN devices to minimize the transmitted data.

We have marked the payload by a payload type and a type variant. These are the first 2 bytes in the header.

<table>
<tr>
    <th class="payload-header" colspan="3">Header</td>
    <th class="payload-data" width="300">data</td>
</tr>
<tr class="table-details">
    <td>Payload<br>type<br>1 byte</td>
    <td >Type<br>variant<br>1 byte</td>
    <td>Payload header<br>Typically device info<br>n bytes</td>
    <td>Payload data<br>n bytes</td>
</tr>
</table>

In case a device is configured not to use the header within the payload, the parser needs to know what payload to parse.<br>
Within LoRaWAN you can use the **FPort** to determine the type of payload.

!>*Removing the header is not recommended for NB-IoT devices.*

### IMBuildings PayloadParser
For decoding we have an example Payload Parser available which is written in JavaScript.\
The parser is available in our [PayloadParser repository on GitHub](https://github.com/IMBUILDINGS/PayloadParser).

The parser checks the length of the data according to the Payload type and Type variant. In case it is not matching it will fallback to the LoRaWAN **FPort** information when available.
When using the **FPort**, the parser links the following port values to the payload type and variant.

|FPort|Type|Variant|
|-----|----|-------|
|11|1|1|
|26|2|6|
|34|3|4|
and so on...

#### Online payload decoder
Try it out and validate your implementation.<br>
The decoder below is using the IMBuildings Payload Parser.

[tool](./tool.html ':include')

## Device configuration
To configure our devices with custom settings you can use NFC with our [Android Config App](https://support.imbuildings.com/Config-App).<br>
Most settings can also be changed using the downlink possibilities.

From factory the devices do have a default configuration.<br>
The LoRaWAN devices come with an App/Join EUI and App Key already configured. You can of course change these.<br>
For each shipped order IMBuildings shares these App/join EUIs and App keys.

?>Please contact IMBuildings for the possibilities of delivering devices with a custom configuration.

## Downlink possibilities
By sending a downlink back to the device you can change settings as well as reading out existing settings. This is very useful for situations where you want to remote provision your devices with the required settings for your use case.

Please note that the downlink features may not be available on earlier releases of our products.

## IoT devices
Below you can navigate to the device specific information.

Please note that our CO2 sensors, temperature and humidity sensors and motion sensors are documented under the Comfort Sensor.

[People Counter](./reference-guide/people-counter/)<br>
[Comfort Sensor](./reference-guide/comfort-sensor/)<br>
[IoT Buttons](./reference-guide/buttons/)<br>
[Desk Sensor](./reference-guide/desk-sensor/)<br>
[Door \ Window sensor]()

For product specifications please visit our [website](https://www.imbuildings.com)

## A note about EnOcean
The IMBuildings People Counter devices (including the Office Occupancy Counter) are also available with subGHz EnOcean connectivity.\
These are using specific telegrams for transmitting data and do not use the uniform payload structure as described earlier.\
Configuration of these devices can currently only be changed using NFC. For this you can use the Config App for Android.
