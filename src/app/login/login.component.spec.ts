import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginComponent } from './login.component'
import { ReactiveFormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'


describe('LoginComponent', () =>
{
    let component: LoginComponent
    let fixture: ComponentFixture<LoginComponent>
    
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [LoginComponent]
        })
        fixture = TestBed.createComponent(LoginComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })
    
    it('should create', () =>
    {
        expect(component).toBeTruthy()
    })
    
    it('should render the title', () =>
    {
        expect(fixture.nativeElement.textContent).toContain('Login')
    })
    
    it('should initialize form with empty values', () =>
    {
        expect(component.loginForm.value).toEqual({ email: '', password: '' })
        expect(component.loginForm.valid).toBeFalse()
    })
    
    describe('validation', () =>
    {
        it('should mark email invalid if empty or wrong format', () =>
        {
            const email = component.loginForm.controls['email']
            email.setValue('')
            expect(email.valid).toBeFalse()
            
            email.setValue('invalid-email')
            expect(email.valid).toBeFalse()
            
            email.setValue('name-probabilities@example.com')
            expect(email.valid).toBeTrue()
        })
        
        it('should mark password invalid if empty or <6 chars', () =>
        {
            const password = component.loginForm.controls['password']
            password.setValue('')
            expect(password.valid).toBeFalse()
            
            password.setValue('123')
            expect(password.valid).toBeFalse()
            
            password.setValue('123456')
            expect(password.valid).toBeTrue()
        })
        
        it('form should be valid with correct email and password', () =>
        {
            component.loginForm.setValue({ email: 'name-probabilities@example.com', password: '123456' })
            expect(component.loginForm.valid).toBeTrue()
        })
    })
    
    describe('form submission', () =>
    {
        it('should update submitted object with form values', () =>
        {
            component.loginForm.setValue({ email: 'user@name-probabilities.com', password: '123456' })
            component.submit()
            
            expect(component.submitted.email).toBe('user@name-probabilities.com')
            expect(component.submitted.password).toBe('123456')
        })
        
        it('should not update submitted object if form invalid', () =>
        {
            component.loginForm.setValue({ email: '', password: '' })
            component.submit()
            
            expect(component.submitted.email).toBeFalsy()
            expect(component.submitted.password).toBeFalsy()
        })
        
        it('should render submitted values in the template', () =>
        {
            component.loginForm.setValue({ email: 'user@name-probabilities.com', password: '123456' })
            component.submit()
            fixture.detectChanges()
            
            const emailDiv = fixture.debugElement.query(By.css('.output .email')).nativeElement
            const passwordDiv = fixture.debugElement.query(By.css('.output .password')).nativeElement
            
            expect(emailDiv.textContent).toBe('user@name-probabilities.com')
            expect(passwordDiv.textContent).toBe('123456')
        })
    })
    
    it('should call submit method on form submit', () =>
    {
        spyOn(component, 'submit')
        
        const form = fixture.debugElement.query(By.css('form'))
        form.triggerEventHandler('ngSubmit', null)
        
        expect(component.submit).toHaveBeenCalled()
    })
})
