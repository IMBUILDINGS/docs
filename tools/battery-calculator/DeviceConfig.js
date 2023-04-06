"use strict";

class DeviceConfig {

    static IDENTIFIER = {
        DeviceTypeIdentifier        : 0x01,
        DeviceID                    : 0x02,
        IMEI                        : 0x03,
        IMSI                        : 0x04,
        ICCID                       : 0x05,
        DestIPPort                  : 0x0A,
        IPNONIP                     : 0x0B,
        APN                         : 0x0C,
        Operator                    : 0x0D,
        NBIoTBand                   : 0x0E,
        UDPListenPort               : 0x0F,
        MQTTSNClientID              : 0x14,
        MQTTSNTopicName             : 0x15,
        TransmitInterval            : 0x1E,
        EventSetting                : 0x1F,
        PayloadDefinition           : 0x20,
        HeartbeatInterval           : 0x21,
        HeartbeatPayloadDefinition  : 0x22,
        LoRaWANActivation           : 0x28,
        LoRaWANABPAppSessionKey     : 0x29,
        LoRaWANABPNwkSessionKey     : 0x2A,
        LoRaWANDeviceAddress        : 0x2B,
        LoRaWANOTAAAppKey           : 0x2C,
        LoRaWANOTAAAppEUI           : 0x2D,
        LoRaWANADR                  : 0x2E,
        LoRaWANConfirmedMessages    : 0x2F,
        Reset                       : 0x30,
        LoRaWANDataRateMinMax       : 0x31,
        LoRaWANDataRate             : 0x32,
        LoRaWANPort                 : 0x33,
        LoRaWANRegion               : 0x34,
        LoRaWANRx2Window            : 0x35,
        LoRaWANPortHeartbeat        : 0x36,
        DeviceCommands              : 0xC8,
        ConnectionError             : 0xF0,
        FreeSpace                   : 0xFE,
        NotUsed                     : 0xFF
    }

    static INTERVAL = {
        Disabled        : 0,
        OnEvent         : 0,
        Hours8          : 241,
        Hours12         : 242,
        Hours24         : 243,
        Hours6          : 244
    }

    static EVENT_TYPES = {
        CountChanged    : 1
    }

    static NBIOT_OPTIONS = {
        IPNONIP: {IP: "IP", NONIP: "NONIP"}
    }

    static LORAWAN_OPTIONS = {
        ACTIVATION : {ABP: 0, OTAA: 1},
        REGIONS: {
            DEFAULT: 0,
            EU868: 0,
            EU433: 1,
            NA915: 2,
            AU915: 3
        },
        CONFIRMED_MESSAGES: {
            OFF: 0,
            ON: 1,
            FIRST_2: 2
        }
    }

    static DEVICE_CAPABILITIES = {
        0x0101 : {

        },
        0x0204 : {

        },
        0x0206 : {
            '1.31' : {
                POWER_PROFILE: {
                    NOMINAL_VOLTAGE: 3.0,
                    CAPACITY: 2.8,
                    MAIN: 0.000194,
                    SF7:{
                        PERIOD: 2.144,
                        CURRENT: 0.0131
                    },
                    SF8:{
                        PERIOD: 2.265,
                        CURRENT: 0.01368
                    },
                    SF9:{
                        PERIOD: 2.402,
                        CURRENT: 0.01484
                    },
                    SF10:{
                        PERIOD: 2.633,
                        CURRENT: 0.01866
                    },
                    SF11:{
                        PERIOD: 3.140,
                        CURRENT: 0.023
                    },
                    SF12:{
                        PERIOD: 4.255,
                        CURRENT: 0.029
                    }
                },
                SETTINGS: [
                    this.IDENTIFIER.DeviceTypeIdentifier,
                    this.IDENTIFIER.DeviceID,
                    this.IDENTIFIER.TransmitInterval,
                    this.IDENTIFIER.LoRaWANActivation,
                    this.IDENTIFIER.LoRaWANPort,
                    this.IDENTIFIER.LoRaWANABPAppSessionKey,
                    this.IDENTIFIER.LoRaWANABPNwkSessionKey,
                    this.IDENTIFIER.LoRaWANDeviceAddress,
                    this.IDENTIFIER.LoRaWANOTAAAppKey,
                    this.IDENTIFIER.LoRaWANOTAAAppEUI,
                    this.IDENTIFIER.LoRaWANADR,
                    this.IDENTIFIER.LoRaWANConfirmedMessages,
                    this.IDENTIFIER.Reset,
                    this.IDENTIFIER.LoRaWANDataRateMinMax,
                    this.IDENTIFIER.LoRaWANDataRate,
                    this.IDENTIFIER.LoRaWANRegion,
                    this.IDENTIFIER.LoRaWANRx2Window,
                    this.IDENTIFIER.ConnectionError,
                    this.IDENTIFIER.FreeSpace
                ]
            },
            '1.34' : {
                POWER_PROFILE: {
                    NOMINAL_VOLTAGE: 3.0,
                    CAPACITY: 2.8,
                    MAIN: 0.000194,
                    SF7:{
                        PERIOD: 2.144,
                        CURRENT: 0.0131
                    },
                    SF8:{
                        PERIOD: 2.265,
                        CURRENT: 0.01368
                    },
                    SF9:{
                        PERIOD: 2.402,
                        CURRENT: 0.01484
                    },
                    SF10:{
                        PERIOD: 2.633,
                        CURRENT: 0.01866
                    },
                    SF11:{
                        PERIOD: 3.140,
                        CURRENT: 0.023
                    },
                    SF12:{
                        PERIOD: 4.255,
                        CURRENT: 0.029
                    }
                },
                SETTINGS: [
                    this.IDENTIFIER.DeviceTypeIdentifier,
                    this.IDENTIFIER.DeviceID,
                    this.IDENTIFIER.TransmitInterval,
                    this.IDENTIFIER.EventSetting,
                    this.IDENTIFIER.PayloadDefinition,
                    this.IDENTIFIER.HeartbeatInterval,
                    this.IDENTIFIER.HeartbeatPayloadDefinition,
                    this.IDENTIFIER.LoRaWANActivation,
                    this.IDENTIFIER.LoRaWANABPAppSessionKey,
                    this.IDENTIFIER.LoRaWANABPNwkSessionKey,
                    this.IDENTIFIER.LoRaWANDeviceAddress,
                    this.IDENTIFIER.LoRaWANOTAAAppKey,
                    this.IDENTIFIER.LoRaWANOTAAAppEUI,
                    this.IDENTIFIER.LoRaWANADR,
                    this.IDENTIFIER.LoRaWANConfirmedMessages,
                    this.IDENTIFIER.Reset,
                    this.IDENTIFIER.LoRaWANDataRateMinMax,
                    this.IDENTIFIER.LoRaWANDataRate,
                    this.IDENTIFIER.LoRaWANPort,
                    this.IDENTIFIER.LoRaWANRegion,
                    this.IDENTIFIER.LoRaWANRx2Window,
                    this.IDENTIFIER.LoRaWANPortHeartbeat,
                    this.IDENTIFIER.ConnectionError,
                    this.IDENTIFIER.FreeSpace
                ] 
            },
            '1.35':{
                POWER_PROFILE: {
                    NOMINAL_VOLTAGE: 3.0,
                    CAPACITY: 2.8,
                    MAIN: 0.000194,
                    SF7:{
                        PERIOD: 2.144,
                        CURRENT: 0.0131
                    },
                    SF8:{
                        PERIOD: 2.265,
                        CURRENT: 0.01368
                    },
                    SF9:{
                        PERIOD: 2.402,
                        CURRENT: 0.01484
                    },
                    SF10:{
                        PERIOD: 2.633,
                        CURRENT: 0.01866
                    },
                    SF11:{
                        PERIOD: 3.140,
                        CURRENT: 0.023
                    },
                    SF12:{
                        PERIOD: 4.255,
                        CURRENT: 0.029
                    }
                },
                SETTINGS: [
                    this.IDENTIFIER.DeviceTypeIdentifier,
                    this.IDENTIFIER.DeviceID,
                    this.IDENTIFIER.TransmitInterval,
                    this.IDENTIFIER.EventSetting,
                    this.IDENTIFIER.PayloadDefinition,
                    this.IDENTIFIER.HeartbeatInterval,
                    this.IDENTIFIER.HeartbeatPayloadDefinition,
                    this.IDENTIFIER.LoRaWANActivation,
                    this.IDENTIFIER.LoRaWANABPAppSessionKey,
                    this.IDENTIFIER.LoRaWANABPNwkSessionKey,
                    this.IDENTIFIER.LoRaWANDeviceAddress,
                    this.IDENTIFIER.LoRaWANOTAAAppKey,
                    this.IDENTIFIER.LoRaWANOTAAAppEUI,
                    this.IDENTIFIER.LoRaWANADR,
                    this.IDENTIFIER.LoRaWANConfirmedMessages,
                    this.IDENTIFIER.Reset,
                    this.IDENTIFIER.LoRaWANDataRateMinMax,
                    this.IDENTIFIER.LoRaWANDataRate,
                    this.IDENTIFIER.LoRaWANPort,
                    this.IDENTIFIER.LoRaWANRegion,
                    this.IDENTIFIER.LoRaWANRx2Window,
                    this.IDENTIFIER.LoRaWANPortHeartbeat,
                    this.IDENTIFIER.ConnectionError,
                    this.IDENTIFIER.FreeSpace
                ] 
            }
        }
    }

    constructor(memorySize){
        this.memory = Buffer.alloc(memorySize, 0xFF);
        this.config = {
            setting: [],
            settingIndex: {}
        };
        this.deviceInfo = {};
        this.UnSafeFunctionsDisabled = true;
        this.automaticMemoryUpdate = false;
    }

    enableUnSafeFunction(){
        this.UnSafeFunctionsDisabled = false;
    }

    disableUnSafeFunction(){
        this.UnSafeFunctionsDisabled = true;
    }

    showMemory(){
        console.log(this.memory);
    }

    showConfig(){
        console.log(this.config);
    }

    enableEvent(){
        //this.config.transmitInterval = DeviceConfig.INTERVAL.OnEvent;
        this.config[DeviceConfig.IDENTIFIER.TransmitInterval] = {identifier: DeviceConfig.IDENTIFIER.TransmitInterval, value: DeviceConfig.INTERVAL.OnEvent};
    }

    updateMemory(){
        let memoryIndex = 0;
        for(let settingIndex = 0; settingIndex < this.config.setting.length; settingIndex++){
            let currentSetting = this.config.setting[settingIndex];

            let settingLength = currentSetting.value.length + 2;

            this.memory[memoryIndex++] = settingLength;
            this.memory[memoryIndex++] = currentSetting.identifier;
            currentSetting.value.copy(this.memory, memoryIndex);

            memoryIndex += settingLength - 2;
        }
    }

    static calculateExpectedBatteryLifetime(interval, deviceType, deviceVersion){
        let powerProfile = DeviceConfig.DEVICE_CAPABILITIES[deviceType][deviceVersion].POWER_PROFILE;
        let capacity = powerProfile.CAPACITY;
        let main = powerProfile.MAIN;
        interval = interval * 60;

        let expectedLifetime = {
            SF7: Math.floor(capacity / ((powerProfile.SF7.CURRENT / (interval / powerProfile.SF7.PERIOD)) + main) / 24),
            SF8: Math.floor(capacity / ((powerProfile.SF8.CURRENT / (interval / powerProfile.SF8.PERIOD)) + main) / 24),
            SF9: Math.floor(capacity / ((powerProfile.SF9.CURRENT / (interval / powerProfile.SF9.PERIOD)) + main) / 24),
            SF10: Math.floor(capacity / ((powerProfile.SF10.CURRENT / (interval / powerProfile.SF10.PERIOD)) + main) / 24),
            SF11: Math.floor(capacity / ((powerProfile.SF11.CURRENT / (interval / powerProfile.SF11.PERIOD)) + main) / 24),
            SF12: Math.floor(capacity / ((powerProfile.SF12.CURRENT / (interval / powerProfile.SF12.PERIOD)) + main) / 24)
        }

        return expectedLifetime;
    }

    calculateExpectedBatteryLifetime(deviceType, deviceVersion){
        return DeviceConfig.calculateExpectedBatteryLifetime(this.transmitInterval, deviceType, deviceVersion);
    }

    //Device Type identifier
    get deviceTypeIdentifier() {
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.DeviceTypeIdentifier];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return [setting.value[0], setting.value[1]];
        }
    }

    set deviceTypeIdentifier(IMPLEMENT){
        if(this.UnSafeFunctionsDisabled) throw new Error('Not allowed');

        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //Device version
    get deviceVersion() {
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.DeviceTypeIdentifier];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return `${setting[2]}.${setting[3]}`;
        }
    }

    set deviceVersion(IMPLEMENT){
        if(this.UnSafeFunctionsDisabled) throw new Error('Not Allowed');

        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //Unique device ID
    get deviceID(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.DeviceID];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value;
        }
    }

    set deviceID(IMPLEMENT){
        if(this.UnSafeFunctionsDisabled) throw new Error('Not allowed');
        
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //Device IMEI number
    get IMEI(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.IMEI];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value;
        }
    }

    set IMEI(IMPLEMENT){
        if(this.UnSafeFunctionsDisabled) throw new Error('Not allowed');
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //SIM Card IMSI
    get IMSI(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.IMSI];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value;
        }
    }

    set IMSI(IMPLEMENT){
        if(this.UnSafeFunctionsDisabled) throw new Error('Not allowed');
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //SIM Card ICCID
    get ICCID(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.ICCID];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value;
        }
    }

    set ICCID(IMPLEMENT){
        if(this.UnSafeFunctionsDisabled) throw new Error('Not allowed');
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //Destination IP and port
    get destinationIPPort(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.DestIPPort];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return {
                ip: `${setting.value[0]}.${setting.value[1]}.${setting.value[2]}.${setting.value[3]}`,
                port: (setting.value[4] << 8) + setting.value[5]
            }
        }
    }

    set destinationIPPort ({ip, port}){
        
        let octets = ip.split(".");
        if(octets.length != 4) throw new Error('Invalid IP address');
        
        octets[0] = octets[0] & 0xFF;
        octets[1] = octets[1] & 0xFF;
        octets[2] = octets[2] & 0xFF;
        octets[3] = octets[3] & 0xFF;

        let setting = {
            identifier: DeviceConfig.IDENTIFIER.DestIPPort,
            value: Buffer.from([octets[0], octets[1], octets[2], octets[3], (port >> 8) & 0xFF, port & 0xFF])
        }

        this.setSetting(setting);

        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //IP or NON communication
    get IPNONIP(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.IPNONIP];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value.toString('ASCII');
        }
    }

    set IPNONIP(value){

        if(value != DeviceConfig.NBIOT_OPTIONS.IPNONIP.IP || value != DeviceConfig.NBIOT_OPTIONS.IPNONIP.NONIP) throw new Error('Invalid value');

        let setting = {
            identifier: DeviceConfig.IDENTIFIER.IPNONIP,
            value: Buffer.from(value,'ASCII')
        }
        this.setSetting(setting);

        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //APN Settings
    get APN(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.APN];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value.toString('ASCII');
        }
    }

    set APN(value){
        let setting = {
            identifier: DeviceConfig.IDENTIFIER.APN,
            value: Buffer.from(value, 'ASCII')
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //Mobile network operator number
    get operator(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.Operator];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value.toString('ASCII');
        }
    }

    set operator(value){
        let setting = {
            identifier: DeviceConfig.IDENTIFIER.Operator,
            value: Buffer.from(value.toString(),'ASCII')
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //NB-IoT Band
    get NBIoTBand(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.NBIoTBand];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value[0];
        }
    }

    set NBIoTBand(value){
        if(value < 0 || value > 0xFF) throw new Error('Out of range');

        let setting = {
            identifier: DeviceConfig.IDENTIFIER.NBIoTBand,
            value: Buffer.from([value])
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //UDP Listenport
    get UDPListenPort(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.UDPListenPort];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return (setting.value[0] << 8) + setting.value[1];
        }
    }

    set UDPListenPort(value){
        if(value > 0xFFFF) throw new Error('Out of range');

        let setting = {
            identifier: DeviceConfig.IDENTIFIER.UDPListenPort,
            value: new Buffer.from([(value >> 8) & 0xFF, value & 0xFF])
        }

        this.setSetting(setting);

        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //MQTT-SN Client ID
    get MQTTSNClientID(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.MQTTSNClientID];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value.toString('ASCII');
        }
    }

    set MQTTSNClientID(value){
        let setting = {
            identifier: DeviceConfig.IDENTIFIER.MQTTSNClientID,
            value: Buffer.from(value, 'ASCII')
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //MQTT-SN Topic Name
    get MQTTSNTopicName(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.MQTTSNTopicName];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value.toString('ASCII');
        }
    }

    set MQTTSNTopicName(value){
        let setting = {
            identifier: DeviceConfig.IDENTIFIER.MQTTSNTopicName,
            value: Buffer.from(value, 'ASCII')
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN Activation
    get LoRaWANActivation() {
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.LoRaWANActivation];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value[0];
        }
    }
  
    set LoRaWANActivation (value){
        if(value != DeviceConfig.LORAWAN_OPTIONS.ACTIVATION.ABP && value != DeviceConfig.LORAWAN_OPTIONS.ACTIVATION.OTAA) throw new Error('Invalid option');

        let setting = {
            identifier: DeviceConfig.IDENTIFIER.LoRaWANActivation,
            value: Buffer.from([value])
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN ABP App session key
    get LoRaWANABPAppSessionKey(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.LoRaWANABPAppSessionKey]
        let setting = this.config.setting[settingIndex];

        if(setting){
           return setting.value.toString('HEX'); 
        }
    }

    set LoRaWANABPAppSessionKey (value){
        let setting = {
            identifier: DeviceConfig.IDENTIFIER.LoRaWANABPAppSessionKey,
            value: Buffer.from(value,'HEX')
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN ABP Nwk session key
    get LoRaWANABPNwkSessionKey(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.LoRaWANABPNwkSessionKey];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value.toString('HEX');
        }
    }

    set LoRaWANABPNwkSessionKey (value){
        let setting = {
            identifier: DeviceConfig.IDENTIFIER.LoRaWANABPNwkSessionKey,
            value: Buffer.from(value, 'HEX')
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN Device Address
    get LoRaWANDeviceAddress(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.LoRaWANDeviceAddress];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value.toString('HEX');
        }
    }

    set LoRaWANDeviceAddress(value){
        let setting = {
            identifier: DeviceConfig.IDENTIFIER.LoRaWANDeviceAddress,
            value: Buffer.from(value, 'HEX')
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN OTAA App Key
    get LoRaWANOTAAAppKey(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.LoRaWANOTAAAppKey];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value.toString('HEX');
        }
    }

    set LoRaWANOTAAAppKey(value){
        let setting = {
            identifier: DeviceConfig.IDENTIFIER.LoRaWANOTAAAppKey,
            value: Buffer.from(value, 'HEX')
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN OTAA App EUI
    get LoRaWANOTAAAppEUI(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.LoRaWANOTAAAppEUI];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value.toString('HEX');
        }
    }

    set LoRaWANOTAAAppEUI(value){
        let setting = {
            identifier: DeviceConfig.IDENTIFIER.LoRaWANOTAAAppEUI,
            value: Buffer.from(value, 'HEX')
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN ADR
    get LoRaWANADR(){
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.LoRaWANADR];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value[0];
        }
    }   

    set LoRaWANADR(value){
        if(value < 0 || value > 0xFF) throw new Error('Out of range');

        let setting = {
            identifier: DeviceConfig.IDENTIFIER.LoRaWANADR,
            value: Buffer.from([value])
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN Confirmed messages
    set LoRaWANConfirmedMessages(value){
        switch(value){
            case DeviceConfig.LORAWAN_OPTIONS.CONFIRMED_MESSAGES.OFF:
            case DeviceConfig.LORAWAN_OPTIONS.CONFIRMED_MESSAGES.ON:
            case DeviceConfig.LORAWAN_OPTIONS.CONFIRMED_MESSAGES.FIRST_2:

                let setting = {
                    identifier: DeviceConfig.IDENTIFIER.LoRaWANConfirmedMessages,
                    value: Buffer.from([value])
                }
                this.setSetting(setting);

                break;
            default:
                throw new Error('Invalid value');
        }

        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN Min and Max Datarate
    set LoRaWANMinMaxDatarate({min, max}){
        if(min < 0 || min > 5) throw new Error('Out of range (min)');
        if(max < 0 || min > 5) throw new Error('Out of range (max)');

        throw new Error('TO BE IMPLEMENTED');
        let value = 0; //TO BE IMPLEMENTED!!!!!

        let setting = {
            identifier: DeviceConfig.IDENTIFIER.LoRaWANDataRateMinMax,
            value: Buffer.from([value])
        }
        this.setSetting(setting);

        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN default datarate
    set LoRaWANDatarate(value){
        if(value < 0 || value > 5) throw new Error('Out of range');
        
        let setting = {
            identifier: DeviceConfig.IDENTIFIER.LoRaWANDataRate,
            value: Buffer.from([value])
        }
        this.setSetting(setting);

        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN port for data uplinks
    set LoRaWANPort(value){
        if(value < 1 || value >  223) throw new Error('Out of range');

        let setting = {
            identifier: DeviceConfig.IDENTIFIER.LoRaWANPort,
            value: Buffer.from([value])
        }
        this.setSetting(setting);

        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN Region
    set LoRaWANRegion(value){
        switch(value){
            case DeviceConfig.LORAWAN_OPTIONS.REGIONS.EU868:
            case DeviceConfig.LORAWAN_OPTIONS.REGIONS.EU433:
            case DeviceConfig.LORAWAN_OPTIONS.REGIONS.NA915:
            case DeviceConfig.LORAWAN_OPTIONS.REGIONS.AU915:
            case DeviceConfig.LORAWAN_OPTIONS.REGIONS.DEFAULT:
                
                let setting = {
                    identifier: DeviceConfig.IDENTIFIER.LoRaWANRegion,
                    value: Buffer.from([value])
                }
                this.setSetting(setting);
                break;

            default:
                throw new Error('Invalid value');
        }

        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //LoRaWAN Rx2 Window settings
    //Not implemented

    //LoRaWAN Port for heartbeat
    set LoRaWANPortHeartbeat(value){
        if(value < 1 || value > 223) throw new Error('Out of range');

        let setting = {
            identifier: DeviceConfig.IDENTIFIER.LoRaWANPortHeartbeat,
            value: Buffer.from([value])
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //Event definition
    set event ({eventType, arg1, arg2}){
        if(eventType != 1) throw new Error('Invalid event type');
        if(arg1 < 0 || arg1 > 0xFF) throw new Error('Out of range');
        if(arg2 < 0 || arg2 > 0xFF) throw new Error('Out of range');

        let setting = {
            identifier: DeviceConfig.IDENTIFIER.EventSetting,
            value: Buffer.from([eventType, arg1, arg2])
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //Payload Definition
    set payloadDefinition ({type, variant, options}){
        if(type < 0 || type > 0xFF) throw new Error('Out of range');
        if(variant < 0 || variant > 0xFF) throw new Error('Out of range');
        if(options < 0 || options > 0xFF) throw new Error('Out of range');

        let setting = {
            identifier: DeviceConfig.IDENTIFIER.PayloadDefinition,
            value: Buffer.from([type, variant, options])
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //Heartbeat interval
    set heartbeatInterval (interval){
        if(interval < 0 || interval > 0xFF) throw new Error('Out of range');

        let setting = {
            identifier: DeviceConfig.IDENTIFIER.HeartbeatInterval,
            value: Buffer.from([interval])
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //Heartbeat payload definition
    set heartbeatPayloadDefinition ({type, variant, options}){
        if(type < 0 || type > 0xFF) throw new Error('Out of range');
        if(variant < 0 || variant > 0xFF) throw new Error('Out of range');
        if(options < 0 || options > 0xFF) throw new Error('Out of range');

        let setting  = {
            identifier: DeviceConfig.IDENTIFIER.HeartbeatPayloadDefinition,
            value: Buffer.from([type, variant, options])
        }
        this.setSetting(setting);
        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    //Transmit interval
    set transmitInterval (interval){
        interval = (interval > 0xFF) ? 0xFF : interval;
        interval = (interval < 0) ? 1 : interval;
        let setting = {identifier: DeviceConfig.IDENTIFIER.TransmitInterval, value: Buffer.from([interval])};
        this.setSetting(setting);

        if(this.automaticMemoryUpdate) this.updateMemory();
    }

    get transmitInterval() {
        let settingIndex = this.config.settingIndex[DeviceConfig.IDENTIFIER.TransmitInterval];
        let setting = this.config.setting[settingIndex];

        if(setting){
            return setting.value[0];
        }
    }

    setSetting(setting){
        let settingIndex = this.config.settingIndex[setting.identifier];
        if(settingIndex == undefined){
            settingIndex = this.config.setting.push();
            this.config.settingIndex[setting.identifier] = settingIndex;
        }

        this.config.setting[settingIndex] = setting;
    }
}

try{
    module.exports = DeviceConfig;
}catch(e){}