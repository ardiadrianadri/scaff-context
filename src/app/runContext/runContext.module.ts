import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunContextComponent } from './runContext.component';
import { routing } from './runContext.router';

@NgModule ({
    imports: [ CommonModule, routing ],
    declarations: [ RunContextComponent ]
})
export class RunContextModule {}