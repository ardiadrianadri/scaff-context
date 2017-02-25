import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const routing: ModuleWithProviders = RouterModule.forRoot([
    {path: '', pathMatch: 'full', redirectTo: ENV.componentName}
]);