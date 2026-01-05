import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DataCardComponent } from './data-card.component'


describe('DataCardComponent', () =>
{
    let component: DataCardComponent
    let fixture: ComponentFixture<DataCardComponent>
    
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            declarations: [DataCardComponent]
        })
        fixture = TestBed.createComponent(DataCardComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })
    
    it('should create', () =>
    {
        expect(component).toBeTruthy()
    })
    
    describe('when user data is present', () =>
    {
        beforeEach(() =>
        {
            component.user = {
                id: 1,
                name: 'John Doe',
                age: 35,
                phoneNumber: 1234567890
            }
            fixture.detectChanges()
        })
        
        it('should display the ID', () =>
        {
            const el = fixture.nativeElement.querySelector('h6')
            expect(el.textContent).toContain('ID: 1')
        })
        
        it('should display the name', () =>
        {
            const el = fixture.nativeElement.querySelector('h1')
            expect(el.textContent).toContain('Name: John Doe')
        })
        
        it('should display the age', () =>
        {
            const el = fixture.nativeElement.querySelectorAll('h3')[0]
            expect(el.textContent).toContain('35 years old')
        })
        
        it('should display the phone number', () =>
        {
            const el = fixture.nativeElement.querySelectorAll('h3')[1]
            expect(el.textContent).toContain('1234567890')
        })
    })
    
    describe('when user data is absent', () =>
    {
        beforeEach(() =>
        {
            // @ts-expect-error
            component.user = null
            fixture.detectChanges()
        })
        
        it('should display "Invalid User Data"', () =>
        {
            const el = fixture.nativeElement.querySelector('h1')
            expect(el.textContent).toContain('Invalid User Data')
        })
    })
})
