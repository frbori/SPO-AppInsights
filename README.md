# SharePoint Online Application Insights

## Summary

This solution provides a [SharePoint Framework](https://aka.ms/spfx) [Application Customizer](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/extensions/get-started/build-a-hello-world-extension) that allows to send web analytics data to [Azure Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) according to the client-side approach described in [Application Insights for webpages](https://learn.microsoft.com/en-us/azure/azure-monitor/app/javascript?tabs=snippet).

Once the Application Customizer is added to your site(s), Application Insights will start getting analytics data and you'll be able to see those data by accessing the **Logs** page in your Application Insights.
You can then use the [Kusto Query Language (KQL)](https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/) to query the collected data.

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.16.1-green.svg)

## Prerequisites

- An already existing Application Insights resource or the ability to create a new one into an Azure subscription.
- A SharePoint Online tenant and the ability to upload a SharePoint Framework solution into the Tenant level or Site Collection level App Catalog.

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| .\ | Francesco Bori |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.0.0.2 | January 23, 2023 | [v1.0.0.2](../../releases/tag/1.0.0.2) |
| 1.0.0.1 | January 17, 2023 | [Initial release](../../releases/tag/v1.0.0.1) |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome
- Get the .sppkg package file either:
  - Downloading the latest [release](../../releases) or
  - Packaging the solution (it'll become available at _./sharepoint/solution/_):
    - Clone this repository
    - Ensure that you are at the solution folder
    - in the command-line run:
      - **npm install**
      - **gulp bundle --ship**
      - **gulp package-solution --ship**
- Upload the _spo-app-insights.sppkg_ file into the Tenant level or Site Collection level App Catalog according to your needs
- Flag the checkbox _Make this solution available to all sites in the organization_
- Provide your Application Insights **Connection String** in the Tenant level or Site Collection level **TenantWideExtensions** list:
  - in the first case you can get it by accessing the SharePoint Online Admin Center > More features > Apps (Open button) > More features > Tenant wide extensions (Open button);
  - in the latter case by accessing the url _<yourSiteUrl>/Lists/TenantWideExtensions_.
  
  The value needs to be added in the **connectionString** property inside the **Component Properties** column.

## Optional features
It's possible to manage the following optional features:
- tracking of the **User Principal Name** of whom performed the activity (**user_AccountId** column in Application Insights). This can be enable/disable by setting the value of **enableUserTracking** boolean property inside the **Component Properties** column to true or false.
- tracking of click analytics. This can be enable/disable by setting the value of **enableClickAnalytics** boolean property inside the **Component Properties** column to true or false. More details at [Click Analytics Auto-collection plugin for Application Insights JavaScript SDK](https://learn.microsoft.com/en-us/azure/azure-monitor/app/javascript-click-analytics-plugin).