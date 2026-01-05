import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { AllUsersComponent } from './all-users.component'
import { DataCardComponent } from './data-card/data-card.component'
import { UsersDataService } from '../services/users-data.service'


describe('AllUsersComponent', () =>
{
    let component: AllUsersComponent
    let fixture: ComponentFixture<AllUsersComponent>
    let usersService: UsersDataService;
    
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            declarations: [AllUsersComponent, DataCardComponent],
            providers: [UsersDataService]
        })
        usersService = TestBed.inject(UsersDataService);
        fixture = TestBed.createComponent(AllUsersComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })
    
    it('should create', () =>
    {
        expect(component).toBeTruthy()
    })
    
    it('should render the title', () =>
    {
        expect(fixture.nativeElement.textContent).toContain('All User Details')
    })
    
    it('should render one data card per user', () =>
    {
        const cards = fixture.debugElement.queryAll(
            By.directive(DataCardComponent)
        )
        
        expect(cards.length).toBe(usersService.getUsers().length)
    })
})
