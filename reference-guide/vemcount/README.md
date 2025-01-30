# VemCount integration

In this section we describe how to forward data to the VemCount platform.

The IMMotion Cloud middleware can forward received data from People Counters to the VemCount platform using the outbound module.
This can be configured within the platform via the menu: **Settings->Organization**
On the Organization page you will find the **Integrations** section.

For each device you want to forward the data to VemCount a webhook configuration needs to be set.
Via the **Integration settings** you can add the webhook for each device.

Select the device from the list **Select item**. Be sure the **Select item type** is set to `Device`.
As **Select integation type** choose `Webhook`.
For the **Endpoint** enter the following URL: `https://data.vemcount.com/ss/iot/imbuilding`

Be sure the **Filter duplicates** is also enabled.

Click **Save/add integration** to finish the setup.
<img src="./assets/cloud/vemcount-integration.png" alt="VemCount integration"  class="image-75 image-center image-border">

Before the data will be accepted by the VemCount platform you need to add the device using the Device ID to the VemCount platform. When adding the device choose API as the vendor.