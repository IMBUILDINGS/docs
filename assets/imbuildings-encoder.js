function hideInputs() {
    let elements = ['device_id', 'datetime', 'device_status', 'battery_voltage', 'counter_a', 'counter_b', 'sensor_status', 'total_counter_a', 'total_counter_b', 'payload_counter', 'rssi', 'temperature', 'humidity', 'CO2', 'presence', 'event', 'percentage', 'minutes', 'button_pressed', 'button_a', 'button_b', 'button_c', 'button_d', 'button_e', 'CELevel', 'payload_combi']
    for (let index = 0; index < elements.length; index++) {
        document.getElementById("div_" + elements[index]).hidden = "hidden"
    }
}

function changeEncoder() {
    let type = document.getElementById('payload_type').value;
    let variant = document.getElementById('payload_variant').value;
    inputItems = []
    hideInputs()
    if (type != "" && variant != "") {
        switch (parseInt(type)) {
            case 0x01:// COMFORT_SENSOR OR DESK_SENSOR:  
                getItemsForComfortSensor(parseInt(variant), document.getElementById('checkbox').checked)
                break;
            case 0x02://PEOPLE_COUNTER
                getItemsForPeopleCounter(parseInt(variant), document.getElementById('checkbox').checked)
                break;
            case 0x03://BUTTONS
                getItemsForButtons(parseInt(variant), document.getElementById('checkbox').checked)
                break;
            case 0x04://PULSE_COUNTER
                break;
            case 0x05://TRACKER
                break;
            case 0xF1://DOWNLINK
                break;
            default:
                break;
        }
        for (let index = 0; index < inputItems.length; index++) {
            document.getElementById('div_' + inputItems[index]).removeAttribute("hidden")
        };
        if (inputItems.length <= 0) document.getElementById('div_payload_combi').removeAttribute("hidden")
    }
}

let inputItems = []
function getItemsForComfortSensor(variant, header) {
    if (header) inputItems.push("device_id")
    switch (variant) {
        case 0x01:
            if (header !== false) {
                inputItems.push("device_status")
                inputItems.push("battery_voltage")
                inputItems.push("rssi")
            }
            inputItems.push("temperature")
            inputItems.push("humidity")
            inputItems.push("CO2")
            inputItems.push("presence")
            break;
        case 0x03:
            inputItems.push("device_status")
            inputItems.push("battery_voltage")
            inputItems.push("temperature")
            inputItems.push("humidity")
            inputItems.push("CO2")
            inputItems.push("presence")
            break;
        case 0x06:
            inputItems.push("device_status")
            inputItems.push("battery_voltage")
            inputItems.push("event")
            break;
        case 0x07:
            inputItems.push("device_status")
            inputItems.push("battery_voltage")
            inputItems.push("percentage")
            break;
        case 0x08:
            inputItems.push("device_status")
            inputItems.push("battery_voltage")
            inputItems.push("minutes")
            break;
        default:
            inputItems = []
            break;
    }

}

function getItemsForPeopleCounter(variant, header) {
    if (header) inputItems.push("device_id")
    switch (variant) {
        case 0x04:
            if (header !== false) {
                inputItems.push("device_status")
                inputItems.push("battery_voltage")
                inputItems.push("rssi")
            }
            inputItems.push("datetime")
            inputItems.push("counter_a")
            inputItems.push("counter_b")
            inputItems.push("sensor_status")
            break;
        case 0x06:
            inputItems.push("device_status")
            inputItems.push("battery_voltage")
            inputItems.push("counter_a")
            inputItems.push("counter_b")
            inputItems.push("sensor_status")
            inputItems.push("total_counter_a")
            inputItems.push("total_counter_b")
            inputItems.push("payload_counter")
            break;
        case 0x07:
            inputItems.push("sensor_status")
            inputItems.push("total_counter_a")
            inputItems.push("total_counter_b")
            break;
        case 0x08:
            inputItems.push("device_status")
            inputItems.push("battery_voltage")
            inputItems.push("sensor_status")
            break;
        default:
            inputItems = []
            break;
    }
}

function getItemsForButtons(variant, header) {
    if (header) inputItems.push("device_id")
    switch (variant) {
        case 0x03:
            if (header !== false) {
                inputItems.push("device_status")
                inputItems.push("battery_voltage")
            }
            inputItems.push("button_pressed")
            inputItems.push("button_a")
            inputItems.push("button_b")
            inputItems.push("button_c")
            inputItems.push("button_d")
            inputItems.push("button_e")
        case 0x04:
            if (header !== false) {
                inputItems.push("device_status")
                inputItems.push("battery_voltage")
            }
            inputItems.push("device_status")
            inputItems.push("battery_voltage")
            inputItems.push("button_a")
            inputItems.push("button_b")
            inputItems.push("button_c")
            inputItems.push("button_d")
            inputItems.push("button_e")
            break;
        case 0x05:
            if (header !== false) {
                inputItems.push("device_status")
                inputItems.push("battery_voltage")
            }
            inputItems.push("button_pressed")
            inputItems.push("button_a")
            inputItems.push("button_b")
            inputItems.push("button_c")
            inputItems.push("button_d")
            inputItems.push("button_e")
            inputItems.push("rssi")
            inputItems.push("CELevel")
            break;
        case 0x06:
            if (header !== false) {
                inputItems.push("device_status")
                inputItems.push("battery_voltage")
            }
            inputItems.push("button_pressed")
            inputItems.push("button_a")
            inputItems.push("button_b")
            inputItems.push("button_c")
            inputItems.push("button_d")
            inputItems.push("button_e")
            inputItems.push("rssi")
            inputItems.push("CELevel")
            break;
        default:
            inputItems = []
            break;
    }
}

function encode() {
    let hexString = "0" + parseInt(document.getElementById("payload_type").value).toString(16) + "0" + parseInt(document.getElementById("payload_variant").value).toString(16);

    document.getElementById('text_JSON_input').innerHTML = "JSON input: GOOD"
    for (let index = 0; index < inputItems.length; index++) {
        //set requirements like id length       

        if (inputItems[index] == "device_id") {
            if (document.getElementById(inputItems[index]).value.length % 2 == 1 || document.getElementById(inputItems[index]).value == "") {
                alert(inputItems[index] + " has an incorrect length.")
                hexString += "FFFFFFFFFFFFFFFF"
            } else {
                // if (document.getElementById("payload_type").value == 2 && ) {//&& variant 4 & 3 & 2& 1   
                //     if (document.getElementById(inputItems[index]).value.length == 12) {
                //         hexString += "FFFFFFFFFFFF"
                //         alert(inputItems[index] + " has an incorrect length.")
                //     } else {
                //         hexString += document.getElementById(inputItems[index]).value
                //     }
                // } else {
                hexString += document.getElementById(inputItems[index]).value
                // }
            }
        } else if (inputItems[index] == "battery_voltage" ||
            inputItems[index] == "temperature" ||
            inputItems[index] == "humidity") {
            let valueSplit = document.getElementById(inputItems[index]).value.split(".")
            let value = ""
            if (document.getElementById(inputItems[index]).value == "") {
                hexString += "0000"
            } else {

                if (valueSplit.length > 1) {
                    value = ((parseInt(valueSplit[0]) * 100) + parseInt(valueSplit[1].length < 2 ? valueSplit[1] + "0" : valueSplit[1])).toString(16)
                } else {
                    value = (parseInt(valueSplit[0]) * 100).toString(16)
                }

                if (value.length == 3) {
                    hexString += "0"
                } else if (value.length == 2) {
                    hexString += "00"
                } else if (value.length == 1) {
                    hexString += "000"
                }
                if (inputItems[index] == "battery_voltage") {
                    if (Number("0x" + value) > 500) {
                        hexString += "000"
                        alert(inputItems[index] + " too high, maximum is 5.00.")
                    } else {
                        hexString += value
                    }
                } else {
                    if (Number("0x" + value) > 65535) {
                        hexString += "000"
                        alert(inputItems[index] + " too high, maximum is 655.35.")
                    } else {
                        hexString += value
                    }
                }

            }
        } else if (inputItems[index] == "counter_a" ||
            inputItems[index] == "counter_b" ||
            inputItems[index] == "total_counter_a" ||
            inputItems[index] == "total_counter_b" ||
            inputItems[index] == "button_a" ||
            inputItems[index] == "button_b" ||
            inputItems[index] == "button_c" ||
            inputItems[index] == "button_d" ||
            inputItems[index] == "button_e" ||
            inputItems[index] == "CO2") {
            if (document.getElementById(inputItems[index]).value == "") {
                hexString += "0000"
            } else {
                let value = parseInt(document.getElementById(inputItems[index]).value).toString(16)
                if (value.length == 3) {
                    hexString += "0"
                } else if (value.length == 2) {
                    hexString += "00"
                } else if (value.length == 1) {
                    hexString += "000"
                }
                if (parseInt(document.getElementById(inputItems[index]).value) > 65535) {
                    hexString += "0000"
                    alert(inputItems[index] + " too high, maximum is 65535.")
                } else {
                    hexString += value
                }
            }
        } else if (inputItems[index] == "datetime") {
            let d = new Date(document.getElementById(inputItems[index]).value)
            if (d == "Invalid Date") {
                alert("Invalid Date")
                d = new Date()
            }
            let str = d.getFullYear().toString()
            str += (d.getMonth() + 1).toString().length > 1 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1).toString()
            str += d.getDate().toString().length > 1 ? d.getDate().toString() : "0" + d.getDate().toString()
            str += d.getHours().toString().length > 1 ? d.getHours().toString() : "0" + d.getHours().toString()
            str += d.getMinutes().toString().length > 1 ? d.getMinutes().toString() : "0" + d.getMinutes().toString()
            str += d.getSeconds().toString().length > 1 ? d.getSeconds().toString() : "0" + d.getSeconds().toString()
            hexString += str
        } else if (inputItems[index] == "presence") {
            if (document.getElementById(inputItems[index]).value == "") {
                hexString += "00"
            } else {
                if (document.getElementById(inputItems[index]).value.toUpperCase() == "TRUE") {
                    hexString += "01"
                } else if (document.getElementById(inputItems[index]).value.toUpperCase() == "FALSE") {
                    hexString += "00"
                } else if (parseInt(document.getElementById(inputItems[index]).value) < 256) {
                    let value = parseInt(document.getElementById(inputItems[index]).value).toString(16)
                    hexString += value.length % 2 == 1 ? "0" + value : value;
                } else {
                    alert(inputItems[index] + " too high, maximum is 255.")
                    hexString += "00"
                }
            }
        } else {
            if (document.getElementById(inputItems[index]).value == "") {
                hexString += "00"
            } else {
                if (parseInt(document.getElementById(inputItems[index]).value) < 256) {
                    let value = parseInt(document.getElementById(inputItems[index]).value).toString(16)
                    hexString += value.length % 2 == 1 ? "0" + value : value;
                } else {
                    alert(inputItems[index] + " too high, maximum is 255.")
                    hexString += "00"
                }
            }
        }
    };
    document.getElementById("payloadstring").value = hexString.toUpperCase()
    decodeInput('hex')
}
function changeEncoderJSON() {
    let JSON_input = null
    try {
        JSON_input = JSON.parse(document.getElementById('JSON_input').value)
    } catch (error) { }

    if (JSON_input != null && !JSON_input.errors) {
        document.getElementById('text_JSON_input').innerHTML = "JSON input: GOOD"
        hideInputs()
        for (let i of Object.keys(JSON_input)) {
            if (i != "errors") {
                document.getElementById("div_" + i).removeAttribute("hidden")
                document.getElementById(i).value = JSON_input[i];
            }
        }
        changeEncoder()
        encode()
    } else {
        document.getElementById('text_JSON_input').innerHTML = "JSON input: BAD"
    }
}