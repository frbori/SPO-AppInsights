# spo-app-insights

## Summary

This solution provides a SharePoint Framework Application Customizer that allows to send page views analytics data to Azure Application Insights.

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.16.1-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Application Insights overview](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

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
| 1.0     | January 17, 2023 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp bundle --ship**
  - **gulp package-solution --ship**
- Upload the ./sharepoint/solution/spo-app-insights.sppkg file into the Tenant level or Site Collection level App Catalog according to your needs
- Provide your Application Insights **Connection String** in the Tenant level or Site Collection level **TenantWideExtensions** list (in the first case you can get it by accessing the SharePoint Online Admin Center > More features > Apps (Open button) > More features > Tenant wide extensions (Open button); in the latter case by accessing the url <yourSiteUrl>/Lists/TenantWideExtensions). The value needs to be added in the **connectionString** property inside the **Component Properties** column.

## Features

Once the Application Customizer is added to your site(s), Application Insights will start getting analytics data and you'll be able to see those data by accessing the **Logs** page in your Application Insights.
You can then user the [Kusto Query Language (KQL)](https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/) to query the collected data.

This extension illustrates the following concepts:

- topic 1
- topic 2
- topic 3
