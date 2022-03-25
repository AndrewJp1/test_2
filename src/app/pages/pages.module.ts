import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { DirectoryComponent } from './directory/directory.component';
import { EmployeeService } from '../services/employee/employee.service';
import { ComponentsModule } from '../components/components.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    NzGridModule,
    NzLayoutModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NzIconModule,
  ],
  declarations: [
    LoginComponent,
    DirectoryComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [
    EmployeeService
  ]
})
export class PagesModule { }
