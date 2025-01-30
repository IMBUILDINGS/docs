# Config App

The IMBuildings Config App enables you to configure the device using NFC.<br>
This App is available for Android and can be downloaded using the following link.<br>

<a href="https://drive.google.com/file/d/1XwdBI1PdvPYnW5XQXE2sGgugb3Hc1I0u/view?usp=drive_link" target="_blank">Download config app
</a>

## Full device reset

To reset a device be sure it is powered off.<br>
Navigate in the menu to `Presets` and tap `Reset Memory`. Now save this reset to the device.

Power on the device once the reset command is saved to the device.<br>
Now the device will intialize and it is ready for the new configuration.

!>**Note** when fully resetting a device all connection related settings needs to be entered again. Be sure all necessary information is available.

## LoRaWAN settings

For devices with LoRaWAN connectivity there are LoRaWAN specific settings which can be set using the app.<br>
When reading out an IMBuildings LoRaWAN device you can find these settings in the `General settings` section.

For devices which will use OTAA to join the LoRaWAN network, please be sure the following settings are set:
- OTAA enabled (OTAA / ABP swithc on OTAA)
- Application EUI
- Application Key

?>The Application EUI and Application Key fields will be empty once the device made a successfull join with the LoRaWAN network.

!>**Note** that a fully reset device does have an Application EUI of: `0000000000000000` and an Application Key of: `00000000000000000000000000000000`<br>
This needs to be changed to use the device.

?>Please note that the reset switch will factory reset the module. This will remove the stored Application EUI and Keys from secure memory.<br>
In this situation the Applicaiton EUI and Application Key needs to be entered again.

## NB-IoT settings

?>We are working to document this chapter

## EnOcean settings

IMBuildings EnOcean devices do have the option to send out a telegram with Energy information (battery information).<br>
This setting is labeled as `Enable Energy transmission`.<br>
Once enabled the interval of sending out this telegram can be configured.

## People Counter

?> We are working to document this chapter

The People Counter does have the following device specific setting:
- Event mode based on counting

## Office Occupancy Counter settings

To use the NFC on the Office Occupancy Counter check the video below.
<iframe width="360" height="315" src="https://www.youtube.com/embed/H0ugGHhgrDg?si=Q2_zbAuQY5DhC71X" title="IMBuildings Config App" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The Office Occupancy Counter does have the following device specific settings:
- Event mode based on counting
- Sensor range height settings

## Moodbox / buttons settings

To use NFC please check the video below
<iframe width="360" height="315" src="https://www.youtube.com/embed/oWJgJdN2aBU?si=tInqPRMqfz2JdJpK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The Moodbox / buttons does have the following device specific settings:
- Event mode based on button pushes
- Button anti spam delay

<!--## Motion sensor settings-->

