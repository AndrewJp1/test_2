import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
  ],
  declarations: [
    HeaderComponent
  ],
  entryComponents: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: []
})
export class ComponentsModule { }
