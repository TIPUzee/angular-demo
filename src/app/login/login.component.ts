import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent
{
    loginForm = this.fb.nonNullable.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    })
    submitted = {
        email: '',
        password: ''
    }
    
    
    constructor(private fb: FormBuilder) {}
    
    
    submit(): void
    {
        if (this.loginForm.invalid)
        {
            this.loginForm.markAllAsTouched()
            return
        }
        
        const { email, password } = this.loginForm.value
        this.submitted = {
            // @ts-expect-error
            email, password
        }
    }
}
