import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TopMenuComponent } from './top-menu.component'
import { Component } from '@angular/core'
import { RouterLinkWithHref } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { By } from '@angular/platform-browser'


// Question?
@Component({ template: '' })
class DummyPageComponent {}


describe('TopMenuComponent', () =>
{
    let component: TopMenuComponent
    let fixture: ComponentFixture<TopMenuComponent>
    
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([
                    { path: 'about', component: DummyPageComponent },
                    { path: 'home', component: DummyPageComponent }
                ])
            ],
            declarations: [TopMenuComponent, DummyPageComponent]
        })
        fixture = TestBed.createComponent(TopMenuComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })
    
    it('should create', () =>
    {
        expect(component).toBeTruthy()
    })
    
    it('should render the navigation links', () =>
    {
        const compiled = fixture.nativeElement as HTMLElement
        expect(compiled.querySelector('a')).toBeTruthy()
    })
    
    it('should navigate to the correct path on click (stubbed)', () =>
    {
        const linksDebug = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))
        
        // Spy on routerLink directive by checking ng-reflect-router-link
        const firstLink = linksDebug[0]
        expect(firstLink.attributes['ng-reflect-router-link']).toBe('/')
        
        const allUsersLink = linksDebug.find(el => el.attributes['ng-reflect-router-link'] === '/all-users')
        expect(allUsersLink).toBeTruthy()
        
        const loginLink = linksDebug.find(el => el.attributes['ng-reflect-router-link'] === '/login')
        expect(loginLink).toBeTruthy()
    })
})
