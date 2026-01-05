import { Injectable } from '@angular/core'


export type UserData = {
    id: number,
    name: string,
    age: number,
    phoneNumber: number,
}


@Injectable({
    providedIn: 'root'
})
export class UsersDataService
{
    
    private users: UserData[] = [
        { id: 1, name: 'John Doe', age: 35, phoneNumber: 1234567890 },
        { id: 2, name: 'Jane Doe', age: 28, phoneNumber: 9876543210 },
        { id: 3, name: 'Bob Smith', age: 42, phoneNumber: 5555555555 },
        { id: 4, name: 'Alice Johnson', age: 21, phoneNumber: 1111111111 },
        { id: 5, name: 'Mike Johnson', age: 39, phoneNumber: 2222222222 },
        { id: 6, name: 'Emily Smith', age: 32, phoneNumber: 3333333333 },
        { id: 7, name: 'David Johnson', age: 45, phoneNumber: 4444444444 },
        { id: 8, name: 'Sarah Doe', age: 24, phoneNumber: 5555555556 },
        { id: 9, name: 'Michael Smith', age: 30, phoneNumber: 6666666666 },
        { id: 10, name: 'Emma Johnson', age: 37, phoneNumber: 7777777777 }
    ]
    
    
    constructor() { }
    
    
    public getUsers(): UserData[] {
        return this.users;
    }
}
