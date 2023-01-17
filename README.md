# spo-app-insights

## Summary

A SharePoint Framework Application Customizer that allows to send analytics data to Azure Application Insights.
The solution injects JavaScript code inside the SharePoint Online (modern) pages according to [Monitor a SharePoint site with Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/sharepoint).
It also adds customDimensions in order to track the user who performed the operation as per [Capturing User Id](https://learn.microsoft.com/en-us/azure/azure-monitor/app/sharepoint#capturing-user-id).

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
| folder name | Author details (name, company, twitter alias with link) |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.0     | January 13, 2023 | Initial release |

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
- Provide your Application Insights **Instrumentation Key** in the Tenant level or Site Collection level **TenantWideExtensions** list (in the first case you can get it by accessing the SharePoint Online Admin Center > More features > Apps (Open button) > More features > Tenant wide extensions (Open button); in the latter case by accessing the url <yourSiteUrl>/Lists/TenantWideExtensions). The value needs to be added in the **key** property inside the **Component Properties** column.

## Features

Description of the extension that expands upon high-level summary above.

This extension illustrates the following concepts:

- topic 1
- topic 2
- topic 3

> Notice that better pictures and documentation will increase the sample usage and the value you are providing for others. Thanks for your submissions advance.

> Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development