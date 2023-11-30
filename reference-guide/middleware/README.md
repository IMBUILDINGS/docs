# Middleware

- [Introduction](#introduction)
- [Adding devices](#device-data-forwarding)

## Introduction

<img src="./assets/middleware/middleware-overview.png" alt="login form"  class="image-100 image-center">

## Data forwarding

In general data forwarding is triggered when new data is comming into our platform.

Data is forwarded by an HTTPS POST request. This is the webhook method.

Currently data forwarding can be enabled per devices by adding a webhook to that device.
Once data is received the webhook will be used to share the data.

### Device data

?> The information in the `decoded` object can vary depending on the contents of the `devicePayload`<br>Please note that the `devicePayload`` is base64 encoded

**Example without metadata**
```js
{
  "devicePayload": "Agbo6xv//k9fuAABCgAAAAEAACUAHyU=",
  "decoded": {
    "received_at": "2023-02-12T20:39:46.266Z",
    "payload_type": 2,
    "payload_variant": 6,
    "device_id": "e8eb1bfffe4f5fb8",
    "device_status": 0,
    "battery_voltage": 2.66,
    "counter_a": 0,
    "counter_b": 1,
    "sensor_status": 0,
    "total_counter_a": 37,
    "total_counter_b": 31,
    "payload_counter": 37
  }
}
```

**Example including metadata**
```js
{
  "devicePayload": "Agbo6xv//k9fuAABCgAAAAEAACUAHyU=",
  "decoded": {
    "received_at": "2023-02-12T20:39:46.266Z",
    "payload_type": 2,
    "payload_variant": 6,
    "device_id": "e8eb1bfffe4f5fb8",
    "device_status": 0,
    "battery_voltage": 2.66,
    "counter_a": 0,
    "counter_b": 1,
    "sensor_status": 0,
    "total_counter_a": 37,
    "total_counter_b": 31,
    "payload_counter": 37
  },
  "metadata": {
    "name": "Entrance-1",
    "field_names": {
      "counter_a": "In",
      "counter_b": "Out"
    },
    "groups": [
      {
        "_id": "xxxxxxxxxxxxxxxxx",
        "additional_info": {
          "location_code": "1234",
          "address": "Oudegracht",
          "zip": "",
          "city": "Utrecht",
          "country": "NL"
        },
        "name": "Utrecht Oudegracht",
        "tenant": "xxxxxxxxxxxxxxxxxxx",
        "type": "location",
        "devices": [
          {
            "_id": "xxxxxxxxxxxxxxxxxx",
            "fields": [
              "counter_a",
              "counter_b"
            ],
            "in_field": "counter_a",
            "out_field": "counter_b"
          }
        ]
      }
    ]
  }
}
```

### Group data

Group data forwarding allows to receive group information including the current state of that group.\
A group can be for example a location (like a building) or an area (like a room).

The forward is triggered when the group is updated when data from a linked device is received.

**Example**
```JS
comming soon
```
