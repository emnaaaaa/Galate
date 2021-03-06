import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { QuestionComponent } from './question.component';
import { FormsModule } from '@angular/forms';
import { CreateQuestionComponent } from './create-question/create-question.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  declarations: [
    QuestionComponent,
    CreateQuestionComponent,
  ],
})
export class QuestionModule { }
