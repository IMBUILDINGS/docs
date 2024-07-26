## SensorServer v1.9.7

!> Please note that this instruction assumes that the IMMotion package is installed.

To install the SensorServer manually please place the files from the following ZIP file manually in the application folder<br>

The application folder is by default located at: `C:\Program Files (x86)\IMMOTION\users\default\apps`

[Download SensorServer v1.9.7.zip](https://support.imbuildings.com/docs/support-info/downloads/SensorServer%20v1.9.7.zip)

Please check if the following database changes needs to be applied:

**Update SNG State table**<br>
Table name: `sng_state`<br>
Alter code:
```SQL
ALTER TABLE `sng_state`
	ADD COLUMN `last_data` BLOB AFTER `nodes`,
	ADD COLUMN `duplicate_data_counter` INT(10) UNSIGNED DEFAULT 0 AFTER `last_data`;

```
If these new columns do not exist in your installation please add these using the code above.

