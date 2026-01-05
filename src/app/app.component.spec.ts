import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { Component } from '@angular/core'


// Question?
@Component({ selector: 'app-top-menu', template: '' })
class TopMenuComponent {}


describe('AppComponent', () =>
{
    let fixture: ComponentFixture<AppComponent>
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent, TopMenuComponent]
        })
        fixture = TestBed.createComponent(AppComponent)
    })
    
    it('should create the app', () =>
    {
        const app = fixture.componentInstance
        expect(app).toBeTruthy()
    })
    
    it(`should have as title 'angular-demo'`, () =>
    {
        const app = fixture.componentInstance
        expect(app.title).toEqual('angular-demo')
    })
    
    it('should render the top menu', () =>
    {
        const topMenuEl = fixture.nativeElement.querySelector('app-top-menu')
        expect(topMenuEl).toBeTruthy() // element exists
    })
})
