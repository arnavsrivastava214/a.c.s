import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-promote-to-higher-class',
  templateUrl: './promote-to-higher-class.component.html',
  styleUrls: ['./promote-to-higher-class.component.css']
})
export class PromoteToHigherClassComponent {
  form:any|FormGroup;
  currentStep = 1;
  steps = [1, 2, 3, 4, 5, 6, 7];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      fatherDOB: ['', Validators.required],
      motherName: ['', Validators.required],
      siblings: ['', [Validators.required, Validators.min(0)]],
      hometown: ['', Validators.required],
      favColor: ['', Validators.required],
      petName: ['', Validators.required]
    });
  }

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      // Here you would typically send the form data to a server
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
}
