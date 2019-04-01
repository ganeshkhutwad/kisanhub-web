import {
	Component,
	OnInit,
	ViewChild,
	Output,
	EventEmitter,
} from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormGroupDirective,
	NgForm,
	Validators,
	AbstractControl,
	ValidatorFn,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import * as moment from 'moment';

export interface Metric {
	value: string;
	viewValue: string;
}

export interface Country {
	value: string;
	viewValue: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
	  const isSubmitted = form && form.submitted;
	  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
	panelOpenState = false;
	metrics: Metric[] = [
		{value: 'rainfall', viewValue: 'Rainfall'},
		{value: 'tmax', viewValue: 'Max Temperature'},
	];
	countries: Country[] = [
		{value: 'scotland', viewValue: 'Scotland'},
		{value: 'england', viewValue: 'England'},
	];
	
	weatherForm = new  FormGroup({
		fromDate: new FormControl('', [Validators.required]),
		toDate: new FormControl('', [Validators.required]),
		metric: new FormControl('', [Validators.required]),
		country: new FormControl('', [Validators.required])
	});
	
	matcher = new MyErrorStateMatcher();

	@Output() onFormSubmitted = new EventEmitter<any>();

	@ViewChild('f') weatherNgForm;

	constructor() { }

	ngOnInit() { }

	onSubmit() {
		if(this.weatherForm.valid) {
			const startMonth = moment(this.weatherForm.value.fromDate).month() + 1;
			const startYear = moment(this.weatherForm.value.fromDate).year();
			const endMonth = moment(this.weatherForm.value.toDate).month() + 1;
			const endYear = moment(this.weatherForm.value.toDate).year();

			const formObj = {
				startMonth,
				startYear,
				endMonth,
				endYear,
				metric: this.weatherForm.value.metric,
				country: this.weatherForm.value.country
			};

			this.onFormSubmitted.emit(formObj);
		}
	}

	onReset() {
		this.weatherNgForm.resetForm();
	}
}
