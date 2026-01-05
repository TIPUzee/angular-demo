import { TestBed } from '@angular/core/testing'

import { UsersDataService } from './users-data.service'


describe('UsersDataService', () =>
{
    let service: UsersDataService
    
    beforeEach(() =>
    {
        TestBed.configureTestingModule({})
        service = TestBed.inject(UsersDataService)
    })
    
    it('should be created', () =>
    {
        expect(service).toBeTruthy()
    })
    
    it('getUsers should return an array of users', () =>
    {
        const users = service.getUsers()
        expect(users).toBeTruthy()
        expect(Array.isArray(users)).toBeTrue()
        expect(users.length).toBeGreaterThan(0)
    })
    
    it('each user should have id, name, age, phoneNumber', () =>
    {
        const users = service.getUsers()
        users.forEach(user =>
        {
            expect(user.id).toBeDefined()
            expect(user.name).toBeDefined()
            expect(user.age).toBeDefined()
            expect(user.phoneNumber).toBeDefined()
        })
    })
    
    it('should return exactly the same users as defined', () =>
    {
        const users = service.getUsers()
        expect(users.length).toBe(10)
        expect(users[0].name).toBe('John Doe')
        expect(users[1].name).toBe('Jane Doe')
        expect(users[9].name).toBe('Emma Johnson')
    })
})
