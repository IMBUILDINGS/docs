# IMBuildings Cloud

Here we will describe how to start with the IMBuildings (or IMMotion) Cloud platform.

We will quickly go through the following topics:
- [Login](#login)
- [Adding devices (claim devices)](#adding-devices-claim-devices)
- [Adding groups](#adding-groups)
- [Link devices to groups](#link-devices-to-groups)
- [Creating users](#creating-users)
- [Using the dashboard](#using-the-dashboard)

We post demo's on [our YouTube channel](https://www.youtube.com/@immotion4802).

## Login

Your supplier will share the username and password for login.
You can of course change the passwords after login on your [profile page](https://app.im-motion.net/profile). The profile page can be opened via the menu on the left.

To login open the following URL: [https://app.im-motion.net](https://app.im-motion.net)

<img src="./assets/cloud/login-immotion.png" alt="login form"  class="image-75 image-center image-border">

?>To login on our demo account please use the following credentials:<br>
**Username:** demo@imbuildings.com<br>
**Password:** imbuildings

## Adding devices (claim devices)

!> You can continue to [Adding groups](#adding-groups) when you have a **People Counter NB-IoT** or when your **supplier already added the devices** for you

Check out the [claim device demo](https://www.youtube.com/watch?v=BC-9KPNkMdQ) 

You can claim a device on the [devices page](https://app.im-motion.net/devices), click the **Claim a new device** button<img src="./assets/cloud/claim-device-button.png" alt="Claim a new device" class="image-75"> to navigate to the [claim page](https://app.im-motion.net/claim).

!> Make sure the device is turned on before you atempt to claim it. 

**1. Fill in the ID of the device** in the input field. You can find the device ID on the back of the device. The device ID could be labeled as 'Device EUI', 'Node ID' or 'MAC-Address' depending on your device type.

<img src="./assets/cloud/claim-step1.png" alt="claim-step1" class="image-75 image-center image-border">

It may be that you require a 'Release key', if this is not given to you, contact your supplier.

**2. Fill in a name for the device** in the input field. This name should be clear, so you can identify the device without having to check the ID.

<img src="./assets/cloud/claim-step2.png" alt="claim-step2" class="image-75 image-center image-border">

**3. Select a group** in the select field **or create a new group**. You can create a new group by clicking on the 'Create new group button', more on this at [Adding groups](#adding-groups).

<img src="./assets/cloud/claim-step3.png" alt="claim-step3" class="image-75 image-center image-border">

**4. Finished** the claim. You are done with the claim, you will find 3 buttons which you can use to navigate to a desired location

<img src="./assets/cloud/claim-step4.png" alt="claim-step4" class="image-75 image-center image-border">

?> **Note:** you can search within the selection box

!> To have access to the Settings you must have Admin rights.

## Adding groups

To see data in the [dashboard](https://app.im-motion.net/dashboard/) you should create one or more groups. Groups have different settings to attend your needs. 

Check out the [add group demo](https://www.youtube.com/watch?v=EhrddjzvBDs).

Groups can be managed on the [Groups page](https://app.im-motion.net/groups). This can be opened via the menu **Settings->Groups**.

To add a new group just click the **Create new group** button<img src="./assets/cloud/add-new-group-button.png" alt="Create new group" class="image-75"> on the [Groups page](https://app.im-motion.net/groups). This button will open the create group wizard as shown in the image below, the wizard consists of 2 steps.

**1. Give the new group a name** in the input field. 

**2. Select one or more devices** in the select field. 

<img src="./assets/cloud/create-new-group-step1.png" alt="create-new-group-step1" class="image-75 image-center image-border">

**3. Select a display setting** in the select field. 

<img src="./assets/cloud/create-new-group-step2.png" alt="create-new-group-step2" class="image-75 image-center image-border">

Once the group is added it will appear in the Groups list<br>
<img src="./assets/cloud/group-management-list.png" alt="group management list" class="image-75 image-center image-border">

?>**Note** that you can always change the group details/settings by clicking on the edit icon of a group you want to change within the groups overview.

!> To have access to the Settings you must have Admin rights.

## Link devices to groups

Once you have created a group you can link one or more devices to it.

Check out the [link device demo](https://www.youtube.com/watch?v=3nbCeEA9rWg)

Groups can be managed on the [Groups page](https://app.im-motion.net/groups). This can be opened via the menu **Settings->Groups**.

To edit group details click on the group you want to edit.

Devices can be linked by clicking the **Link device** button.
<img src="./assets/cloud/link-device-button.png" alt="linked devices" class="image-75 image-center image-border">

Select or search the device you want to link to this group.
<img src="./assets/cloud/link-device-form.png" alt="linked devices" class="image-75 image-center image-border">

?> **Note:** you can search within the selection box

!>In case there are no devices to select please read the [Adding devices](#adding-devices) section.

!> To have access to the Settings you must have Admin rights.

## Creating users

To login on the account/tenant we recommend to create a user account for each user who is going to use the platform.

Users can be managed on the [Users page](https://app.im-motion.net/users/) via the menu **Settings->Users**.
<img src="./assets/cloud/users-list.png" alt="Users list" class="image-75 image-center image-border">

To add a user simply click on the **Add user** button<img src="./assets/cloud/add-user-button.png" alt="Link device" class="image-75">.

Enter the username and password for the new user and select the role.
<img src="./assets/cloud/add-user.png" alt="Users list" class="image-75 image-center image-border">

?>**Username**: please use the email address of this person as username

?>**Password**: be sure a strong password is made

?>**Role**: There are 3 roles available for users: User, Restricted user, Admin
<hr>

**User**

This user can see the data from all groups and devices.<br>
This user does not have access to Settings.

**Restricted user**

A restricted user can only see data from a selected list of groups.<br>
When adding a restricted user one or more groups can be selected.<br>
This user does not have access to Settings.

**Admin**

This user does have all rights to see data and change Settings.
<hr>

When adding the user the platform will ask for **your user credentials** for additional security.

Once the user is added please inform that person by sharing the username and password to allow them to [login](https://app.im-motion.net).

?>**Note**: You can always change the user settings by clicking on the user on the [Users page](https://app.im-motion.net/users/).

!> A user is always able to change the password on their [Profile page](https://app.im-motion.net/profile)

!> To have access to the Settings you must have Admin rights.

## Using the dashboard

The dashboard is the main page for displaying data to you. 

Check out the [dashboard demo](https://www.youtube.com/watch?v=EhrddjzvBDs).

### Show data

**Select a group**, you can do so in the select box. You can filter out your group by typing the desired groupname. You can also click the other select box labeled 'All groups,' where you will find all the used labels of your groups and a section to view a separate device. 


<img src="./assets/cloud/select-group.png" alt="select-group" class="image-75 image-center image-border">

**Select a date** to determine what data will be shown. You can shift through time using the two arrows on the side of the graph. This will move you through time depending on the selected interval. 

<img src="./assets/cloud/select-date.png" alt="select-date" class="image-75 image-center image-border">

**Select an interval**. You can change the interval shown by clicking either 'Day,' 'Week,' 'Month,' or 'Year.' 
 - *Day*, shows counting data per *hour*
 - *Week*, shows counting data per *day*
 - *Month*, shows counting data per *day*
 - *Year*, shows counting data per *month*

<img src="./assets/cloud/select-interval.png" alt="select-interval" class="image-75 image-center image-border">


### Options
The items listed can be clicked to perform action on/with the shown data.
- Switch views between counts and occupancy by clicking the button<img src="./assets/cloud/button-switch-dashoard-view.png" alt="button-switch-dashoard-view" class="image-75">
- Show side of the people counter; press 'in' to view all in counts only. <img src="./assets/cloud/select-counter-side.png" alt="select-counter-side" class="image-75">
- Stack the bars together by pressing the stack icon. <img src="./assets/cloud/button-stack.png" alt="button-stack" class="image-100">
- Zoom into your data (left) and use the other icon to reset the view (right). <img src="./assets/cloud/button-zoom.png" alt="button-zoom" class="image-100">
- Download icon to download the current view as an image. <img src="./assets/cloud/button-download-image.png" alt="button-download-image" class="image-100">
- Download the current view's raw data by pressin the 'download data as XLSX' button. <img src="./assets/cloud/button-download-data-xlsx.png" alt="button-download-image" class="image-75">
- Add a note to the selected group by pressing the 'add note' icon. <img src="./assets/cloud/button-notes.png" alt="button-download-image" class="image-75">
- Underneath the chart, you can select and unselect the items that are shown. <img src="./assets/cloud/button-dissable-enable-sensor.png" alt="button-download-image" class="image-75">
- The next items can be found for groups in the top-right:
    - Click on the selected wqgroup name to navigate to the group details. 
    - Click on the subgroup name to select that group on the dashboard. 
    - Click on the status icon to show the errors of the device, just like the bell icon that appears. 
    - Click on 'Personalize dashboard' with the gear icon, to navigate to the profile page where you can set the [personalized settings](https://app.im-motion.net./profile#header_dashboardsettings) .
<img src="./assets/cloud/dashboard-groupinfo.png" alt="select-interval" class="image-75 image-center image-border">

## Dashboard personalisation
The dashboard settings can be found on the profile page. On the profile page, scroll down a bit to find the dashboard settings. You can also click on 'Dashboard Settings' in the right page navigation. Changes done on this page will autometically be saved.

Check out the [dashboard settings demo](https://www.youtube.com/watch?v=YMDl9sEuG1o).

<img src="./assets/cloud/dashboard-settings.png" alt="select-interval" class="image-75 image-center image-border">


### Default settings 
Upon visiting the dashboard, the selected group, along with the chosen settings, will be displayed, ensuring immediate visibility for efficient management within the platform.
- **Default group**: Select a group, this group will be shown upon visiting the dashboard. 
- **Default interval**: Select an interval, this interval will be selected upon visiting the dashboard.
- **Show Data Start/End Time**: Select a start time and end time, these times indicate the data period of which you will see data of a day. For example, you can set the opening hours of your location, like from nine to five, only data between nine to five will be used for all intervals.
- **Occupancy or bars**: Upon visiting the dashboard, this display type will initially be shown only be used for people counter display. 
- **Start stacked**: Upon visiting the dashboard, the stack option sets the bars to be stacked. 
- **Show empty groups in select**: Filter out empty groups in the select field. Some groups may just exist for logical structuring of your data, and it is likely useless for these groups to be available in your selection.

### Visual settings.
With these settings, you can make customizations to the chart on the dashboard, making its appearance and functionality to suit your preferences. It's important to note that these customizations solely affect the visual representation of the data and do not alter the underlying data itself in any way.
- **Bar style**: With the rounded setting selected the bars may be visually more pleasing to you.
- **Show Negative Occupancy**: This is for the occupancy display, and by default, this setting is turned off. Occupancy below zero is not shown on the dashboard since it should not be possible to have a negative number of people inside a room. When you turn this feature on, the negative values will be shown on the dashboard. These negative values may occur due to the 'in-side' of the device not being configured correctly.
- **Show summary of the counts**: This summary includes '*the total in and out*', '*average in and out*', '*the time and value of the highest count*', '*the estimated time inside per visit*', and for the occupancy display, the *efficiency of the group occupancy compared to the capacity*. <img src="./assets/cloud/dashboard-summary.png" alt="dashboard-summary" class="image-75 image-center image-border">
- **Show sensor names under the chart**: When this is unselected, there will be more space for other items, and the page might look cleaner, but you can no longer temporarily hide a device. 
- **Show numbers in bars**: Shows the values in the bars or hide the values. This may be visually more pleasing to you.
- **Show Heatmap**: If you wish to not show the heatmap on the dashboard, you can unselect this setting.
- **Show Predicted Count in Bars**: With this setting, we look at the last couple of weeks to try to predict how many counts will be made per sensor. The prediction is added as a layer over the actual counts, and in future times you will see a lightened colored bar to indicate the prediction.
<img src="./assets/cloud/dashboard-prediction.png" alt="dashboard-prediction" class="image-75 image-center image-border">

## Group configurations

Groups can be managed on the [Groups page](https://app.im-motion.net/groups). This can be opened via the menu **Settings->Groups**.

Check out the [group configuration demo](https://www.youtube.com/watch?v=vHBF5U93hB8).

How to **add groups** is explained at the header [Adding groups](#adding-groups).

How to **link device** to a group is explained at the header [Link devices to groups](#link-devices-to-groups).

!> To have access to the Settings you must have Admin rights.

### Link groups
Groups can be linked to each other in a hierarchical, tree-like structure to organize and clarify complex data. In this setup, each group can act as a "subgroup" or "parentgroup" linked to other groups. This tree structure allows you to categorize information logically, with broader categories (like: buildings) at higher levels and more specific details branching out below (like: rooms inside the building). This method not only helps in visualizing relationships between different groups but also makes it easier to navigate and manage your data, ensuring a clear and logical flow of information.

<img src="./assets/cloud/group-subgroup.png" alt="group-subgroup" class="image-75 image-center image-border">

- Click **Link a subgroup** to select a group to the currently selected group.
- Click on the **edit icon** to so navigate to that group.
- Click on the **inlink icon** to unlink that group from the currently selected group.

If you link groups together you can get a tree-like-structure like below. You can click on the names to expand or collapse groups with subgroups.
<img src="./assets/cloud/group-tree.png" alt="group-tree" class="image-75 image-center image-border">

### Additional info
Additional info gives more information about the group and can also help find the selected group. Click on the text to open the tab. 
- **Label**: A label can be used to filter on the dashboard; there are some default values, but you can also create a custom label by clicking on the icon.
- **Location code**: This code will be added after the name of the group in select items to find the desired group more easily.
- **Address**: Gives more information about where the group of devices is located.
- **ZIP**: Gives more information about where the group of devices is located.
- **Country**: Gives more information about where the group of devices is located. On the compare page, you can click on a country to select all groups of that country.
- **Timezone**: If the group is located in a different timezone then the timezone you are watching the data from, your data will be displayed in the correct timezone.
- **Desciption**: Gives more information about the group.

<img src="./assets/cloud/group-additional-info.png" alt="group-additional-info" class="image-75 image-center image-border">

### Display settings
Any changes made will be shown in the data preview below. 

- **Bar display**: The view can be turned *on/off*.
    - **Show total or individual**: Show bars per individual sensor or group the devices together and show the data as the total of the counts per interval.
    - **Show sides**: If you are only interested in one side of the People Counter data, you can select this side here and only that side will be displayed.

- **Occupancy display**: The view can be turned *on/off*.
    - **Capacity**: The capacity will show a red-dotted line that indicates the capacity. You can use this to compare it to the occupancy.
    - **Reset time** (full hour): At this hour the occupancy will be reset to 0, this is meant to fix any deviation on the end of a day. 

<img src="./assets/cloud/group-display-settings.png" alt="group-display-settings" class="image-75 image-center image-border">

## Tokens & Integrations

For supplying data to your BI solution you might use automated data collection.
Our platform allows such an integration.<br>
The data export method allows you to collect once (or a few times) a day a complete dataset.

This method can be enabled via the platform under [Settings->Organization](https://app.im-motion.net/organization).<br>
Here you will find the option to add <b>tokens</b>. Once a token is generated you are able to request an export from our 'connect' server.<br>
Several exports (all in JSON format) are available. 

<b>Export token</b><br>
The export connection string uses a token t built from several items:

``https://connect.im-motion.net/flow/4ccd9c91-7e36-470e-89fc-f8a262971022?exportType=83a08703-04c7-4aaf-ad12-bdd09fbc0190&token=b460ae48-9c48-40fb-a614-beebc815827e&startDate=2024-09-22&stopDate=2024-09-23&output=json``

- exportType, this determines the interval of the data: 
  - minutely (97b559c6-1468-4a1b-a983-48c275fa7cf9)
  - hourly (83a08703-04c7-4aaf-ad12-bdd09fbc0190)
  - daily (ec618692-79b7-4es1f-8a16-b7eb79ec9941)
- token, this is a unique token created for your organization
- startDate, indicates since what day the data should be fetched, formatted as YYYY-MM-DD.
- endDate, indicates until what day the data should be fetched, formatted as YYYY-MM-DD.
- output, type of return data(options: JSON)


# Live Monitoring

Easily monitor your rooms live using multiple display options. Currently, we provide three monitoring options: 

1. **Multi-group Monitor**  
2. **Customizable Monitor (max. 1 group)**  
3. **Area Dashboard**  

!> Your sensor must send **live data**, not interval data.  
    To display the maximum capacity of a room, set the occupancy for the group on the **Groups** page.

---

## Multi-group Monitor
The **Multi-group Monitor** displays occupancy for multiple groups, using a color-coded bar that transitions from green to red as the room fills.  
Example:  

<img src="./assets/middleware/occupancy_immotion_monitor.png" alt="Multi-group Monitor"  class="image-100 image-center image-border">

<b>Configuration Steps</b>
1. Navigate to the **Organization** page.  
2. Set the group integration to **Webhook**:
   - Select the group(s).
   - Choose **Webhook** as the integration type.
   - Set the endpoint to `https://occupancy.im-motion.net/group/{GROUP-ID}` (replace `{GROUP-ID}` with your group's ID).  
   - Press **Save/Add Integration**.  

3. For each device in the group, set the integration to **Group Trigger**:  
   - Select the device(s).  
   - Choose **Group Trigger** as the integration type.  
   - Activate the trigger (toggle the slider).  
   - Press **Save/Add Integration**.

<b> Access the Multi-group Monitor</b>
The monitor is available at:  
`https://occupancy.im-motion.net/?id={TENANT-ID}`  

<b> Options:</b>
- Add `&occupancy=show` to display occupancy, e.g., `(Inside: 2 / Max: 3)`.  
  Without this, it displays only the capacity, e.g., `(Capacity: 3)`.

---

## Customizable Monitor
The **Customizable Monitor** allows near-complete customization.  
Example:  

<img src="./assets/middleware/occupancy_monitor_custom.png" alt="Customizable Monitor"  class="image-100 image-center image-border">

<b>Configuration Steps</b>
1. On the **Organization** page, create a token named **LiveMonitoringFrame**.  
2. Press **Example** to generate the following link:  
   `https://app.im-motion.net/monitoring/frame/{GROUP-ID}?token={TOKEN}`  
   Replace `{GROUP-ID}` and `{TOKEN}` with your group ID and the created token.

3. Set group Webhook integrations:  
   - Follow the same Webhook integration settings as for the Multi-group Monitor.

4. You can also use the **data preview** icon on the **Groups** page.

<b> Example URL with Custom Options:</b>
`https://app.im-motion.net/monitoring/frame/{GROUP-ID}?token={TOKEN}&background-color=gray&gradient=false&text-color=white`

<b>Customization Options:</b>
- **`background-color`**: Set the background color.  
  *Value*: Any valid color (e.g., `gray`).  
- **`gradient`**: Disable gradient coloring for the progress bar.  
  *Value*: `"true"` or `"false"`.  
- **`title-color`**: Set the title text color.  
  *Value*: Any valid color (e.g., `white`).  
- **`text-color`**: Set the value text color.  
  *Value*: Any valid color.  
- **`display-color`**: Set a static progress bar color.  
  *Value*: Any valid color.  
- **`title`**: Hide the title.  
  *Value*: `"true"` or `"false"`.  
- **`subtitle`**: Set a subtitle text.  
  *Value*: Text (use `%20` for spaces).  
- **`title-text`**: Set a custom title text.  
  *Value*: Text (use `%20` for spaces).  
- **`frame-overlay-color`**: Set overlay color.  
  *Value*: Any valid color.  
- **`show-max`**: Show group capacity.  
  *Value*: `"true"` or `"false"`.  
- **`frame-capacity`**: Set the group capacity.  
  *Value*: A number.  
- **`reset-time`**: Reset occupancy to zero at a specified time.  
  *Value*: Full hour (e.g., `12`).  
- **`allow-negative`**: Enable counting below zero.  
  *Value*: `"true"` or `"false"`.  
- **`start-value`**: Set the starting occupancy value.  
  *Value*: A number.  
- **`in-only`**: Count only incoming people.  
  *Value*: `"true"` or `"false"`.  
- **`switch-ab`**: Switch the "in-side", counter a for out and counter b for in.    
  *Value*: `"true"` or `"false"`.  


---

## Area Dashboard
The **Area Dashboard** displays occupancy of one or multiple groups.
Example (`Example 1-4` are the group names):  

<img src="./assets/middleware/middleware-areadashboard-example.png" alt="areadashboard-example"  class="image-100 image-center image-border">

<b>Configuration Steps</b>

!> For correct display, please configure the group on the ([Groups page](https://app.im-motion.net/groups)), and set the following items:   
    - Occupancy display: `On`    
    - Capacity: `Number` of maximum people inside

1. On the **Organization** page, create a token named **AreaDashboard**. 

2. Use the created token to generate a link:  
   `http://app.im-motion.net/areaDashboard/{TOKEN}`  
   Replace `{TOKEN}` with your token.

3. Visit the link and enter the setup:  
   - Select up to 9 groups.  
   - Press `Show dashboard` to display the occupancy.

<img src="./assets/middleware/middleware-areadashboard-setup.png" alt="areadashboard-setup"  class="image-100 image-center image-border">

<b> Note:</b>
- Use full-screen mode for better visibility (`F11` on Windows).  
- Background colors update dynamically based on group capacity.  
- The occupancy may have a wrong display due to:   
    - Entrances/exits being missed.
    - The 'in-side' configuration is not configured correctly ([Groups page](https://app.im-motion.net/groups)).

<!-- 
use yt videos where needed
    Groups/display settings - > groups page
-->