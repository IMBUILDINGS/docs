## SNG4G Firmware update

On this page you will find a short instruction how to apply a new firmware onto the SNG4G product.

Below the download for the latest firmware. This download includes the necessary tools to perform the update.

[Download update v3.1.21 (EU version)](https://support.imbuildings.com/docs/support-info/downloads/SNG4G-v3.1.21-868.zip)

### 1. Extract the contents of the downloaded zip file

Please extract the contents of the zip file to a folder of choice. Note that this zip contains a folder named `SNG4G-868`<br>
This folder contains the `USB Firmware Loader` tools, the `SNG Tool v3.4.0` and the firmware bin file `SNG4G V3.1.21 868.bin`

### 2. Put the SNG4G into bootmode
Please start the application named `1` in the `USB Firmware Loader` folder.

Once the application is started please connect the SNG4G to the power supply and connect the SNG4G to your PC using a USB cable.<br>
The applicatin will ask to connect the SNG and detect when the SNG is connected.
<br>On the question 'Are you sure you want to update SNG firmware' answer 'Yes'

<img src="./assets/firmware-loader-confirm-bootmode.png" alt="Firmware load question"  class="image-center image-border">

Now this application can be closed.

The SNG is now in bootmode. This is visible by the LEDs on the SNG blinking alternate red/green.

### 3. Load the new firmware

Start the following application `USB Firmware Loader`.

<img src="./assets/firmware-loader.png" alt="Firmware loader"  class="image-center image-border">

You should see that a USB device is connected. This is the SNG4G which is in bootmode.

Click on `Load file` and open the `SNG4G v3.1.21 868.bin` file (or another version depending on the version you downloaded).
<br>Once the file is loaded it will be checked and the `Update` button will be enabled.

Click on `Update` to load the firmware.<br>
Once ready a message will appear. Click on 'Ok' and close the application.

<img src="./assets/firmware-loader-ready.png" alt="Firmware loader ready"  class="image-center image-border">

The firmware is now updated

### 4. Validate the new firmware

To check if the new firmware is active you can open the SNG Tool. This is also included in the zip file.
Please start the SNG Tool and see that the SNG with the new firmware is connected.

<img src="./assets/sng-tool.png" alt="SNG Tool"  class="image-75 image-center image-border">
