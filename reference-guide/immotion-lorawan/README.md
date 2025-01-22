## IMBuildings Cloud - LoRaWAN Integration

IMBuildings Cloud allows data to be retreived from multiple LoRaWAN solutions.
Received data is visible within the IMMotion Cloud application.

Currently the following LoRaWAN solutions can be integrated
- The Things Network / The Things Industries
- Loriot
- Senet
- Chirpstack (on request)
- RAK Wireless WisGate OS (on request)

In case you work with another platfrom you want to integrate please contact our <a href="mailto:support@imbuildings.com">support department</a>

To forward the data of your IMBuildings products to our Cloud please arrange that uplink data is forwarded using HTTPS (Webhook) to the following endpoints:
- The Things Network: 
```
https://inbound.im-motion.net/lorawan/ttn
```
- Loriot: 
```
https://inbound.im-motion.net/lorawan/loriot
```
- Senet: 
```
https://inbound.im-motion.net/lorawan/senet
```

?>Once data is forwarded you should be able to claim your devices into your account by entering the Device EUI during the claim procedure.

# TTN (The Things Network)

In this chapter we describe how to set a webhook to forward uplink data from TTN to the IMMotion Cloud application.

Start by navigating to the Application of which you want to forward from.
<img src="./assets/cloud/lorawan-ttn-application.png" alt="TTN Application"  class="image-75 image-center image-border">

Click in the left menu on `Integrations > Webhooks`

This will bring you to an overview of configured webhooks of your Application.
Click on `Add webhook`
<img src="./assets/cloud/lorawan-ttn-webhooks.png" alt="TTN Webhooks"  class="image-75 image-center image-border">

Select the `Custom webhook`
<img src="./assets/cloud/lorawan-ttn-select-webhook.png" alt="TTN Select Webhook"  class="image-75 image-center image-border">

Now you can add the webhook details. Enter an ID and name for this webhook configuration. Please leave the Webhook format on `JSON`

Enter for the Base URL: `https://inbound.im-motion.net/lorawan/ttn`
<img src="./assets/cloud/lorawan-ttn-add-webhook.png" alt="TTN Select Webhook"  class="image-75 image-center image-border">

Scroll down to select the Uplink event.
<img src="./assets/cloud/lorawan-ttn-webhook-events.png" alt="TTN Select Webhook events"  class="image-75 image-center image-border">

Once these settings are set click on Add webhook on the bottom of the page to add the webhook.
From now on any uplink data received on this Application will be forwarded to the IMMotion Cloud application.