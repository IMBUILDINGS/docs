# Reseller

With the reseller role, you can manage and access your customers easily and switch between roles and organizations.

By default, you will log in as an **admin**, and you can only access your own organization's devices, groups, and users. When you activate the reseller role, all your customers' devices, groups, and users will become accessible. Learn more at [Switching Access](/./reference-guide/reseller/?id=switching-access).

> **Note:** A reseller can see more information about devices and groups than admins. Pages are adapted based on the active role.

## Manage Organizations/Customers

You can create or add a new customer on the **Users** page. The reseller's **Users** page differs significantly from that of admins.

When you visit the **Users** page, you will see a table listing all organizations you have access to.

<b>Add Organizations/Customers</b>

You can add organizations/customers in two ways:

1. Click the **Add Customer/Account** button in the top-right corner. <img src="./assets/cloud/reseller/add-customer-btn.png" alt="Add customer" class="image-75">

2. Locate an organization you want to add a new organization under and click the **Add Customer** icon. <img src="./assets/cloud/reseller/add-customer.svg" width="20">

Fill in the required fields and click **Create Customer/Account** to create the new organization.

> **Important:** By default, you should add organizations/customers **under** your own organization.

<b> View Organizations/Customers</b>

Organizations added under another organization are called **subtenants**. To view all subtenants of an organization, click the **View x Subtenants** button. <img src="./assets/cloud/reseller/view-subtenants.png" alt="View subtenants" class="image-75">

When clicked, all subtenants will appear in the table. These subtenants are always available in the tenant selector above the table.

<b> Disable Organizations/Customers</b>

You can disable organizations in the **Organizations** table by toggling the switch. All users from that organization will lose access to the cloud platform. Disabled tenants will have a distinct background color in the table for better visibility.

> **Note:** You cannot completely remove organizations yet.

## Manage Users

<b> Add Users</b>

You can add users in two ways:

1. Click the **Add User** button. <img src="./assets/cloud/reseller/add-user-btn.png" alt="Add user" class="image-75">

2. Find the tenant in the table and click the **Add User** icon. <img src="./assets/cloud/reseller/add-user.svg" width="20">

After clicking, fill in the required fields, such as the user's email (used as the username) and password (entered twice). You can also select or change the organization to which the user will be added.  

<img src="./assets/cloud/reseller/add-user-tenant-select.png" alt="Select organization"  class="image-100 image-center image-border">

<b> Invite Users</b>

Instead of setting a password, you can invite the user by clicking the **Invite User** button. <img src="./assets/cloud/reseller/invite-user-btn.png" alt="Invite user" class="image-75">

Alternatively, use the **Invite User** icon in the table. <img src="./assets/cloud/reseller/invite-user.svg" width="20">

Select the correct organization for the user, then enter their email. The user will receive an email with a link to set their password and complete their account setup.

<b> View Users</b>

To view users:

1. Click the **View x Users** button. <img src="./assets/cloud/reseller/view-users.png" alt="View users" class="image-75">

2. Use the **Tenant Select** dropdown to search for the desired organization.  
<img src="./assets/cloud/reseller/tenant-select.png" alt="Tenant Select"  class="image-100 image-center image-border">

<b> Edit Users</b>

When an organization is selected, the **Organizations Table** will transform into a **Users Table** for that organization. Here, you can:

- Enable/disable users.
- Edit user details.
- Remove users.

<b> Editing User Details</b>

When editing a user, you can:

- Change their organization.
- Update their username, role, and additional information.
- Configure their dashboard display settings, similar to the profile page.

<b> Remove Users</b>

To remove a user, click the **Delete (bin)** icon in the table. <img src="./assets/cloud/reseller/delete-user.svg" width="20">

## Manage Customer Devices

With the reseller role active, you can access all devices from your organization and your customers. Some functionalities are adjusted for the reseller role. On the **Devices**, **Groups**, and **Settings** pages, a new column is added before the existing ones. This column displays the name of the organization to which the device or group belongs.

On other pages, such as the dashboard, you can select groups/devices from all your customers.

<b>Move Devices</b>

On the **Devices** page, you can edit devices as if you were an admin of the selected device. Additionally, you can move devices to another organization. Here's how it works:

- If **Organization 1** owns a device and you move it to **Organization 2**, Organization 1 retains the device's data, but the device becomes archived.
- Organization 2 will have a new dataset and cannot see Organization 1's data. Settings such as the device's name will not transfer.
- If you move the device back to Organization 1, Organization 2's device will become archived, and Organization 1's old device will become active again.
- If Organization 1 wants to continue with a new dataset, the device must be claimed using a claim key.

<img src="./assets/cloud/reseller/move-device.png" alt="Move device" class="image-100 image-center image-border">

> **Note:** You cannot navigate to the claim page through the **Claim a New Device** button to prevent accidentally claiming the device under your own tenant. Perform this action as an admin.

<b>Link Devices/Groups</b>

As a reseller, you can find all groups in the table on the **Groups** page. When editing a group, you can link a device or link a group as a parent/subgroup. You can only link devices/groups belonging to the selected group's organization.

## Switching Access

As a reseller, you can easily switch between organizations and roles to set up and configure your customers' environments without having to log out or access a customer's account.

<img src="./assets/cloud/reseller/switch-environment-role.png" alt="Switch environment and role" class="image-100 image-center image-border">

> **Note:** You do not need to activate the reseller role to perform the actions below.

<b>Switching Organization/Environment</b>

When switching organizations/environments, you will see the platform as if you are in that organization/environment. For example, if you create groups or claim devices, they will be added to that organization.

Click on the environment text or organization name to open a pop-up. In this pop-up, select the desired organization/environment and press **Confirm** to switch. Your own organization/environment will always appear first in the list for easy access.

<img src="./assets/cloud/reseller/switch-environment.png" alt="Switch environment" class="image-100 image-center image-border">

> **Note:** When changing the environment, your role will automatically switch to admin.

<b>Switching Role</b>

When switching roles, you will see the platform as if you are operating in that role.

Click on the role text or current role name to open a pop-up. In the pop-up, select the role. If you select <i>restricted user</i>, you can also select one or more groups to simulate a restricted user accurately. Press **Confirm** to switch to the selected role.

<img src="./assets/cloud/reseller/switch-role.png" alt="Switch role" class="image-100 image-center image-border">

<b>Setting</b>

With the reseller role active, a new setting becomes available on the profile page: **Login with reseller mode active**. When this setting is enabled, the reseller role will be active whenever you log into your account.

## Support

As a reseller, you are responsible for providing help to your customers. The cloud platform supports you in this role.

<b>Support Information</b>

On the **Support** page, you can find support information. This information is specific to the reseller, meaning your details will be displayed for your customers. You can set this information on the **Organization** page by filling in your organization's details.

You can also upload your company logo here. The logo will appear alongside the support information.

<b>Questions</b>

On the **Support** page, your customers can submit questions. By default, you will receive an email notification whenever a customer submits a question. You can disable these notifications on the profile page with the reseller role active.

In the cloud platform's side navigation, you will find a new item called **Questions**, showing the number of open questions. Clicking it will take you to the **Questions** page, where you can see all submitted questions from your customers. Once a question is resolved, you can mark it as solved by toggling the slider at the end of the row. To view solved questions, enable the **Show Solved Questions** slider.

> **Note:** Only the resellers within your organization will see the questions submitted by your customers.