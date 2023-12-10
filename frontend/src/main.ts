import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '18ca21dc-873e-474b-9a31-5b566435c0cf',
    clientToken: 'pub967ec225e38e0785b76094b536e815a1',
    site: 'datadoghq.com',
    service: 'frontend',
    env: 'test',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'allow',
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
