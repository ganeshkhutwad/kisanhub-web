import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MatExpansionModule,
	MatFormFieldModule,
	MatInputModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatSelectModule,
	MatButtonModule,
} from '@angular/material';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

import { FilterComponent } from './filter/filter.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
	declarations: [
		FilterComponent,
		ChartComponent,
	],
	imports: [
		CommonModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSelectModule,
		MatButtonModule,
		ChartjsModule,
		FormsModule,
		ReactiveFormsModule,
	],
	exports: [
		FilterComponent,
		ChartComponent,
	],
})
export class SharedModule {
	static forRoot() {
		return {
			ngModule: SharedModule,
			providers: [ ],
		};
	}
}
