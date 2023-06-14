import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  // disable all console logs
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
