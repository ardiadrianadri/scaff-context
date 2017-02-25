import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RunContextComponent } from './runContext.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: 'my-home', component: RunContextComponent }
]);