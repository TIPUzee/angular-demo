import { AfterViewInit, Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom, retry } from 'rxjs'


export type CatFact = {
    length: number,
    fact: string,
}


@Component({
    selector: 'app-login',
    templateUrl: './cats.component.html',
    styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements AfterViewInit
{
    catFacts: CatFact[] = []
    
    
    constructor(private http: HttpClient) { }
    
    
    ngAfterViewInit()
    {
        this.loadAllCats()
    }
    
    
    async loadAllCats()
    {
        for (let i = 0; i < 3; i++)
        {
            this.catFacts.push(await this.fetchCats() as any)
        }
    }
    
    
    async fetchCats()
    {
        return await firstValueFrom(this.http.get(`https://catfact.ninja/fact`).pipe(retry(3)))
    }
}
