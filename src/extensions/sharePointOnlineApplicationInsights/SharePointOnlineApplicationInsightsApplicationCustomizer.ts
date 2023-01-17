import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISharePointOnlineApplicationInsightsApplicationCustomizerProperties {
  connectionString: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SharePointOnlineApplicationInsightsApplicationCustomizer
  extends BaseApplicationCustomizer<ISharePointOnlineApplicationInsightsApplicationCustomizerProperties> {

  private async getUserUPN(): Promise<string> {
    const sp = spfi().using(SPFx(this.context));
    const user = await sp.web.currentUser();
    return user.UserPrincipalName;
  }

  public async onInit(): Promise<void> {
    console.log("1.0.0.1");
    const connectionString: string = this.properties.connectionString;
    if (!connectionString) {
      console.log("SPO-AppInsights: No connection string to Application Insights was provided.");
    } else {
      const userUPN: string = await this.getUserUPN();
      const appInsights = new ApplicationInsights({
        config: {
          connectionString: connectionString,
          accountId: userUPN
        }
      });
      appInsights.loadAppInsights();
      appInsights.trackPageView();
    }
    return Promise.resolve();
  }
}