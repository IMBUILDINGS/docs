# IMBuildings Payload Parser

You can get our PayloadParser from GitHub: <a href="https://github.com/IMBUILDINGS/PayloadParser" target="_blank">IMBuildings PayloadParser</a><br>
Feel free to share any issues or suggestions you may have. The best way to share this is by submitting an <a href="https://github.com/IMBUILDINGS/PayloadParser/issues/new/choose" target="_blank">issue</a>.

## About the parser

The parser is written in JavaScript (ECMAScript 6).<br>
Helper functions are added to mimic some Node.JS Buffer methods. For example the `readUInt16BE` function.

Currently the PayloadParser does only decoding of data. In the future we will also add encoding functions.

We recommend to use our PayloadParser when possible.

## General payload information

For all our devices we have constructed an uniform payload structure. This structure does exist out of a header and data. The header can be removed depending on the configuration of the device.

To distinguish the type of payload there are 2 methods.<br>
1: Using the first two bytes which are the payload type and payload variant.<br>
2: Using the fPort (only possible when using LoRaWAN)

!>Removing the header on NB-IoT devices is not recommended since you will than not be able to detect the payload definition.

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

## How to use the parser

More information comming soon. Please check the repository for now for more information on how to use the parser.

## Good to know

The parser will first try to detect if the given payload contains a header.<br>
This is done by checking the length of the total payload according to the Payload Type and Payload Variant. If it gives a match it will assume the header is present.

In case the parser determines there is no header it will fallback on the LoRaWAN  **fPort** number which can be given as input.<br>
The table below shows the relation between the **fPort** and the Payload Type and Payload Variant.

|FPort|Type|Variant|
|-----|----|-------|
|11|1|1|
|26|2|6|
|34|3|4|
and so on...

?>Note that the PayloadParser is also used for the online decoder on this site.
