## IMBuildings Cloud - Camera integrations

At this moment the following counting cameras are ingegrated within our Cloud platform.
- Hella
- Megacount
- TDIntelligence
- Xovis

In case you have another counting camera which you want to have integrated into our Cloud platform please contact our <a href="mailto:support@imbuildings.com">support department</a>

Below you will find some basic instruction on how to setup the camera for each brand.

# Brickstream

More information comming soon.
<!--
Endpoint: `https://inbound.im-motion.net/device/brickstream`
-->

# Hella

Endpoint: `https://inbound.im-motion.net/device/hella`

For authentication please enter any username or password.

Please note that the cloud platform currently only parses the Adult information from the camera.

When claiming the device the mac address must be used as an extended address. For example when the mac address is `11:22:33:44:55:66` please enter the following when claiming `112233FFFE445566`

# Megacount

Endpoint: `https://inbound.im-motion.net/device/megacount`

To use this endpoint enter the following in the configuration of the device:
- Export protocol: `HTTPS`
- Server: `inbound.im-motion.net`
- Port: `443`
- Data format: `JSON RT`
- URL: `/device/megacount`
- Server response: `200`

!> Please be sure that the time of the camera is set to UTC/GMT time

When claiming the device the mac address must be used as an extended address. For example when the mac address is `11:22:33:44:55:66` please enter the following when claiming `112233FFFE445566`

# TDIntelligence

Endpoint: `https://inbound.im-motion.net/device/tdintelligence`

To use this enpoint please enter the following in the configuration of the device:
- Primary Report Server Address: `inbound.im-motion.net`
- Primary Report Server Port: `443`
- Primary Report Server Directory: `/device/tdintelligence`

Via the button **Upload Setting** you can enter the protocol of the data shared to the Cloud platform. Enter the following
- Delivery Protocol: `HTTPS`
- Data Format: `JSON`
- Record Cycle: `1 minute`
- Upload Cycle: `1 minute`

The record and upload cycle can also be on other settings when needed.

Please note that the current integration only allows the Customer Flow Statistics.
All zones are summed together where Enter (In) is visible in our cloud as Counter A and the Leave (Out) as Counter B

When claiming the device the mac address must be used as an extended address. For example when the mac address is `11:22:33:44:55:66` please enter the following when claiming `112233FFFE445566`

!> Please be sure that the time of the camera is set to UTC/GMT time

# Xovis

More information comming soon.
<!--
Endpoint: `https://inbound.im-motion.net/device/xovis`
-->