# Battery operated Office Occupancy Counter - LoRaWAN (prototype)

?> Download the <a href="./pdf/IMBuildings - Quick start guide - Office Occupancy Counter - LoRaWAN - prototype.pdf" target="_blank">Quick start guide</a>

Please read the quick start guide first.

Below a picture showing the sensors and LEDs on the product<br>
<img src="./assets/OOC-overview.png" alt="overview">

**Status LED**
- Blinkin blue: connecting and communicating with the LoRaWAN network
- Green blink: count received from the sensor

**Count sensor status LED**
- Green: detection within the count zone
- Red: detection outside the count zone (the top face of the door must be in the 'red' zone)

Please note that the count sensor is only active when movement near the device is detected by the PIR.

!>Note that the status LED will only function for 2 minutes after power on the device.

Check the video below on how to open the device.
<iframe width="560" height="315" src="https://www.youtube.com/embed/v1mVnLUZIXE?si=8bh3cDe5F-m2WwVS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Check the video below on how to place the batteries.
<iframe width="560" height="315" src="https://www.youtube.com/embed/DkuvJR_vFt4?si=j8CKr5Grk8nvUou1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

?>The included screws can be used to close the housing. The housing does also close with a 'click' mechanism.

## Understanding the detection zone

The device does use two types of sensors.
1. For detecting movement near the device.
2. For counting.

<img src="./assets//OOC-top-side-view.png" alt="side and top view">

It is important that there are no obstructions

## Positioning the device

For correct counting it is important to position the counter in the middle above the door opening.

?>**Note** that by default settings, the top of the door must be within 15 cm of the device. This way the device can ignore the swinging door

<img src="./assets/ooc-door-position.png" alt="ooc positioning">

Be sure that the device is able to look through the dooropening. This means that the device can detect any movement near the device.
This is important to enable the counting feature at the right time.

<img src="/assets/ooc-dooropening.png" alt="Dooropening" width="400">

When choosing the position of the device also keep in mind the height of installation.
In the picture below you see the two threshold that can be configured to set the count zones.<br>
By default the count zones are set with threshold A at 15cm and threshold B at 150cm.

Always try to set threshold B on the same height as the door handle.<br>
To configure these threshold use the Config App or use downlinks.<br>
For larger installations it is recommended to install all devices first and do the configuration afterwards using downlinks.

<img src="./assets/ooc-thresholds.png" alt="count zones">

!>For battery optimization it is recommended to place the sensor on the side of the door where there is the least amount of movement.

## Installation
For installation use methods like screwing our double sided tape to mount the device on top of the door opening. Please choose what is best for your situation.
In most cases double sided tape is used. Be sure that good quality tape is used when mounting the device.
You might use any type of bracket which is suitable for the situation, for example angular plexiglass brackets.

In case screws are used be sure the correct type of screw is selected for the type of material in which it will be used.

## Product pictures

<img src="./assets/OOC-prototype.png" alt="OOC" width="300">

<img src="./assets/OOC-prototype-open.png" alt="OOC open" width="400">

?>The included screws can be used to close the housing. The housing does also close with a 'click' mechanism.