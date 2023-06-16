## SensorServer v1.9.2

!> Please note that this instruction assumes that the IMMotion package is installed.

To install the SensorServer manually please place the files from the following ZIP file manually in the application folder<br>

The application folder is by default located at: `C:\Program Files (x86)\IMMOTION\users\default\apps`

[Download SensorServer v1.9.2.zip](https://support.imbuildings.com/docs/support-info/downloads/SensorServer.v.1.9.2.zip)

Please check if the following database changes needs to be applied:

**Update SNG State table**<br>
Table name: `sng_state`<br>
Alter code:
```SQL
ALTER TABLE `sng_state`
	ADD COLUMN `version` VARCHAR(10) NULL DEFAULT NULL COLLATE 'utf8mb3_bin' AFTER `added`,
	ADD COLUMN `type` VARCHAR(10) NULL DEFAULT NULL COLLATE 'utf8mb3_bin' AFTER `version`,
	ADD COLUMN `location_id` INT(10) UNSIGNED NULL AFTER `type`,
	ADD COLUMN `nodes` TEXT NULL COLLATE 'utf8mb3_bin' AFTER `location_id`;

```
If these new columns do not exist in your installation please add these using the code above.

**Update Counter table**<br>
Table name: `counter`<br>
Alter code:
```SQL
ALTER TABLE `counter`
	CHANGE COLUMN `time` `time` TIME(3) NOT NULL AFTER `date`;
```


**Add Node State table**<br>
Table name: `node_state`<br>
Alter code:
```SQL
CREATE TABLE IF NOT EXISTS `immotion`.`node_state` (
	`node_id` VARCHAR(45) NOT NULL COLLATE 'utf8mb3_bin',
	`last_data` BLOB NOT NULL,
	`timestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`node_id`) USING BTREE
)
COLLATE='utf8mb3_bin'
ENGINE=InnoDB;

```
