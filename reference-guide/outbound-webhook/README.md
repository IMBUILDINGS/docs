# Outbound webhook integration

In this section we describe how to forward data to your platform using our outbound webhok integration.

The IMMotion Cloud middleware can forward received data from People Counters to another platform using the outbound webhook module.
This can be configured within the platform via the menu: **Settings->Organization**
On the Organization page you will find the **Integrations** section.

For each device you want to forward the data to your endpoint a webhook configuration needs to be set.
Via the **Integration settings** you can add the webhook for each device.

Select the device from the list **Select item**. Be sure the **Select item type** is set to `Device`.
As **Select integation type** choose `Webhook`.
For the **Endpoint** enter the URL of your webhook endpoint: `https://yourendpoint`

Be sure the **Filter duplicates** is also enabled.

Click **Save/add integration** to finish the setup.
<img src="./assets/cloud/outbound-webhook-integration.png" alt="Outbound webhook integration"  class="image-75 image-center image-border">

