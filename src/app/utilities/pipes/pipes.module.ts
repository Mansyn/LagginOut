import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncatePipe } from './truncate.pipe'
import { PhonePipe } from './phone.pipe'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TruncatePipe, PhonePipe],
    exports: [TruncatePipe, PhonePipe]
})
export class PipesModule { }