import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeComponent } from './home.component'


describe('HomeComponent', () =>
{
    let component: HomeComponent
    let fixture: ComponentFixture<HomeComponent>
    
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            declarations: [HomeComponent]
        })
        fixture = TestBed.createComponent(HomeComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })
    
    it('should create', () =>
    {
        expect(component).toBeTruthy()
    })
    it('should render the title', () =>
    {
        expect(fixture.nativeElement.textContent).toContain('Home')
    })
})
