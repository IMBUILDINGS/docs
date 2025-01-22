const payloadType = {
    COMFORT_SENSOR:                 0x01,
    DESK_SENSOR:                    0x01,
    PEOPLE_COUNTER:                 0x02,
    BUTTONS:                        0x03,
    PULSE_COUNTER:                  0x04,
    TRACKER:                        0x05,
    DOWNLINK:                       0xF1
}

const errorCode = {
    UNKNOWN_PAYLOAD:                1,
    EXPECTED_DOWNLINK_RESPONSE:     2,
    UNKNOWN_PAYLOAD_TYPE:           3,
    UNKNOWN_PAYLOAD_VARIANT:        4
}

const settingIdentifier = {
    FREE_SPACE:                     0x00,
    DEVICE_INFO:                    0x01,
    DEVICE_ID:                      0x02,
    IMEI:                           0x03,
    IMSI:                           0x04,
    ICCID:                          0x05,
    MODULE_INFO:                    0x06,
    BATTERY_TYPE:                   0x07,
    LTE_PSMTAU_INFO:                0x08,
    DEST_IP_PORT:                   0x0A,
    IP_NONIP:                       0x0B,
    APN:                            0x0C,
    OPERATOR:                       0x0D,
    LTE_BAND:                       0x0E,
    UDP_LISTEN_PORT:                0x0F,
    SERVER_HOSTNAME:                0x10,
    DNS_SERVERS:                    0x11,
    CONNECTION_TYPE:                0x12,
    MQTTSN_CLIENT_ID:               0x14,
    MQTTSN_TOPIC_NAME:              0x15,
    AUTOCONNECT:                    0x16,
    INTERVAL:                       0x1E,
    EVENT_SETTING:                  0x1F,
    PAYLOAD_DEFINITION:             0x20,
    HEARTBEAT_INTERVAL:             0x21,
    HEARTBEAT_PAYLOAD_DEFINITION:   0x22,
    ENOCEAN_ENERGY_LEVEL_INTERVAL:  0x23,
    SYNC_UPLINK_TO_CLOCK:           0x24,
    LIFETIME_STATUS:                0x25,
    LORAWAN_DEVICE_ACTIVATION:      0x28,
    ABP_APP_SESSION_KEY:            0x29,
    ABP_NWK_SESSION_KEY:            0x2A,         
    DEVICE_ADDRESS:                 0x2B,
    OTAA_APP_KEY:                   0x2C,
    OTAA_APP_EUI:                   0x2D,
    ADR:                            0x2E,
    CONFIRMED_MESSAGES:             0x2F,
    DOWNLINK_OPTIONS:               0x2F,
    RESET:                          0x30,
    DATE_RATE_MIN_MAX:              0x31,
    DATA_RATE:                      0x32,
    FPORT:                          0x33,
    REGION:                         0x34,
    RX2_WINDOW:                     0x35,
    FPORT_HEARTBEAT:                0x36,
    OOC_DISTANCE:                   0x50,
    LED_INDICATION:                 0x51,
    BUTTON_DELAY_TIME:              0x52,
    CO2_THRESHOLDS:                 0x53,
    DEVICE_COMMANDS:                0xC8,
    ERRORS:                         0xF0,
    FREE_MEMORY:                    0xFE,
    NOT_USED:                       0xFF
}

const regions = {
    LORA_EU868:                     0x00,
    LORA_EU433:                     0x01,
    LORA_US915:                     0x02,
    LORA_AU915:                     0x03,
    LORA_AS923:                     0x04,
    LORA_KR920:                     0x06,
    LORA_IN865:                     0x07,
    LORA_RU864:                     0x08,
    ENOCEAN_EU868:                  0x00,
    ENOCEAN_US902:                  0x05,
    LTE_8_20:                       0xFA,
    LTE_GLOBAL_1:                   0xFB,
    LTE_GLOABL_2:                   0xFC
}

const resetAction = {
    MODULE_FACTORY_DEFAULTS:        0x01,
    RECONNECT_IOT_CONNECTION:       0x01,
    REBOOT_DEVICE:                  0x02,
    RESET_TIMERS:                   0x0B,
    RELOAD_TIMERS:                  0x0C
}

const eventType = {
    COUNT_CHANGED:                  0x01,
    BUTTON_PUSHED:                  0x02,
    OCCUPIED:                       0x03,
    COUNT_STATUS_CHANGED:           0x04,
    COUNT_CHANGED_STATUS_DIRECT:    0x05
}

const generalValue = {
    OFF:                            0x00,
    DISABLED:                       0x00,
    ON:                             0x01,
    ENABLED:                        0x01
}

const connectionType = {
    CAT_M1:                         0x07,
    NBIOT:                          0x09
}

const IPNONIP = {
    IP:                             "IP",
    NONIP:                          "NONIP"
}

const batteryType = {
    ALKALINE:                       0x00,
    LITHIUM_1V5:                    0x01,
    LITHIUM_3V6:                    0x02
}

const command = {
    GET_PAYLOAD:                    0x01,
    REJOIN:                         0x02,
    COUNTER_PRESET:                 0x03,
    SAVE:                           0x04,
    BUTTON_PRESET:                  0x05
}