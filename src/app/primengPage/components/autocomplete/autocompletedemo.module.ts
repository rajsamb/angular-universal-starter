import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AutoCompleteDemo } from './autocompletedemo';
import { AutoCompleteDemoRoutingModule } from './autocompletedemo-routing.module';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { CodeHighlighterModule } from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AutoCompleteDemoRoutingModule,
        AutoCompleteModule,
        TabViewModule,
        CodeHighlighterModule
    ],
    declarations: [
        AutoCompleteDemo
    ]
})
export class AutoCompleteDemoModule { }
