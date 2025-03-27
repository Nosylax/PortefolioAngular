
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  contactForm: FormGroup;
  formSent = false;
  formError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched(); // Force l'affichage des erreurs
      return;
    }

    const formData = new FormData();
    formData.append('name', this.contactForm.get('name')?.value);
    formData.append('email', this.contactForm.get('email')?.value);
    formData.append('message', this.contactForm.get('message')?.value);

    fetch('https://formspree.io/f/xblglrpz', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          this.formSent = true;
          this.formError = false;
          this.contactForm.reset();

          // Marquer les champs comme "pristine" pour éviter les erreurs affichées après reset
          this.contactForm.markAsPristine();
          this.contactForm.markAsUntouched();
        } else {
          throw new Error('Erreur lors de l’envoi.');
        }
      })
      .catch(() => {
        this.formError = true;
        this.formSent = false;
      });
  }
}
