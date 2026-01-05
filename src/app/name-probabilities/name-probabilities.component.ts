import { AfterViewInit, Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom, retry } from 'rxjs'


export type NameProbability = {
    count: number,
    name: string,
    country: { country_id: string, probability: number }[]
}


@Component({
    selector: 'app-login',
    templateUrl: './name-probabilities.component.html',
    styleUrls: ['./name-probabilities.component.scss']
})
export class NameProbabilitiesComponent implements AfterViewInit
{
    names = [
        'zeeshan', 'abdullah', 'ankit', 'john', 'maria', 'alina'
    ]
    nameProbabilities: NameProbability[] = []
    
    
    constructor(private http: HttpClient) { }
    
    
    ngAfterViewInit()
    {
        this.loadAllNameProbabilities()
    }
    
    
    async loadAllNameProbabilities()
    {
        for (let name of this.names)
        {
            this.nameProbabilities.push(await this.fetchNameProbability(name) as any)
        }
    }
    
    
    async fetchNameProbability(name: string)
    {
        return await firstValueFrom(this.http.get(`https://api.nationalize.io/?name=${ name }`).pipe(retry(3)))
    }
}
