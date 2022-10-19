# Start here

Here we share all available information regarding the technical integration of our devices.
If you need any additional help please contact our colleagues from support.

Please let us know when something is not clear or if you think something needs to be added.

## How our payload structure works
For our LoRaWAN and NB-IoT devices we use a uniform payload structure. The payload packet can exist out of a header and data.\
For minimizing the payload it is possible to remove the header from the packet. This function of removing the header is useful for LoRaWAN devices to minimize the transmitted data.

We have marked the payload by a type and a variant. These are the first 2 bytes in the header.

### IMBuildings PayloadParser
For decoding we have an example Payload Parser available which is written in JavaScript.\
The parser is available in our [PayloadParser repository on GitHub](https://github.com/IMBUILDINGS/PayloadParser).

## Device configuration
To configure our devices with custom settings you can use NFC with our [Android Config App](https://support.imbuildings.com/Config-App).\
Most settings can also be changed using the downlink possibilities.

## Downlink possibilities
By sending a downlink back to the device you can change settings as well as reading out existing settings. This is very useful for situations where you want to remote provision your devices with the required settings for your use case.

Please not that the downlink features may not be available on earlier releases of our products.

## IoT devices
Below you can navigate to the device specific information.

Please note that our CO2 sensors, temperature and humidity sensors and motion sensors are documented under the Comfort Sensor.

[People Counter](./reference-guide/people-counter/README.md)\
[Comfort Sensor]()\
[IoT Buttons]()\
[Desk Sensor]()\
[Door \ Window sensor]()

For product specifications please visit our [website](https://www.imbuildings.com)

## A note about EnOcean
The IMBuildings People Counter devices (including the Office Occupancy Counter) are also available with sub GHz EnOcean connectivity.\
These are using specific telegrams for transmitting data and do not use the uniform payload structure as described earlier.\
Configuration of these devices can currently only be changed using NFC. For this you can use the Config App for Android.
