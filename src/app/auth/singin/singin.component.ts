import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  signInForm: FormGroup;
  errorMessage: string;
   constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private router: Router) { }
 
   ngOnInit() {
     this.initForm();
   }
  
   initForm(){
     this.signInForm = this.formBuilder.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
     });
   }
 
   onSubmit(){
     const email = this.signInForm.get('email').value;
     const password = this.signInForm.get('password').value;
     this.authService.singInUser(email, password).then(
       () => {
         this.router.navigate(['/movies']);
       },
       (error) => {
         this.errorMessage = error;
       }
     );
   }

}
