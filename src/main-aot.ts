import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './aot/app.module.ngfactory';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';


enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);