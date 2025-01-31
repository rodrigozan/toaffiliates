import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-titles-descriptions',
  templateUrl: './titles-descriptions.component.html',
  standalone: true,
  imports: [BrowserModule, ReactiveFormsModule]
})
export class TitlesDescriptionsComponent {
  formGroup!: FormGroup;
  titleForm: FormGroup;
  descriptionForm: FormGroup;
  generatedTitles: string[] = [];
  generatedDescriptions: string[] = [];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.titleForm = this.fb.group({
      productName: ['', Validators.required],
      mainKeyword: ['', Validators.required],
      callToAction: ['', Validators.required]
    });

    this.descriptionForm = this.fb.group({
      productName: ['', Validators.required],
      mainKeyword: ['', Validators.required],
      benefits: ['', Validators.required],
      callToAction: ['', Validators.required]
    });

    this.setupAutoGeneration();
  }

  private setupAutoGeneration() {
    const titleControls = ['productName', 'mainKeyword', 'callToAction'];
    const descriptionControls = ['productName', 'mainKeyword', 'benefits', 'callToAction'];

    titleControls.forEach(controlName => {
      this.titleForm.get(controlName)?.valueChanges.subscribe(() => {
        this.generateTitles();
      });
    });

    descriptionControls.forEach(controlName => {
      this.descriptionForm.get(controlName)?.valueChanges.subscribe(() => {
        this.generateDescriptions();
      });
    });
  }

  generateTitles() {
    const values = this.titleForm.value;
    this.generatedTitles = this.dataService.generateTitles(values.productName, values.mainKeyword, values.callToAction);
  }

  generateDescriptions() {
    const values = this.descriptionForm.value;
    this.generatedDescriptions = this.dataService.generateDescriptions(values.productName, values.mainKeyword, values.benefits, values.callToAction);
  }
}