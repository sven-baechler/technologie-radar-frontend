import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Technologie } from '../models/technologie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologieService {

    private baseUrl = 'http://localhost:3000/api';
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    constructor(
        private http: HttpClient
    ) {}
    
    /** GET all technologien */
    getTechnologien(): Observable<Technologie[]> {
        const getTechnologienUrl = `${this.baseUrl}/getTechnologien`;
        return this.http.get<Technologie[]>(getTechnologienUrl).pipe(
            tap((result: Technologie[]) => {}),
            catchError(this.handleError<Technologie[]>('getTechnologien', []))
        )
    }

    /** GET all published technologien */
    getPublishedTechnologien(): Observable<Technologie[]> {
        const getTechnologienUrl = `${this.baseUrl}/getPublishedTechnologien`;
        return this.http.get<Technologie[]>(getTechnologienUrl).pipe(
            tap((result: Technologie[]) => {}),
            catchError(this.handleError<Technologie[]>('getPublishedTechnologien', []))
        )
    }

    /** GET one technologie by id */
    getTechnologie(id: number): Observable<Technologie> {
        const getTechnologieUrl = `${this.baseUrl}/getTechnologie/${id}`;
        return this.http.get<Technologie>(getTechnologieUrl).pipe(
            tap((result: Technologie) => {}),
            catchError(this.handleError<Technologie>(`getTechnologie id=${id}`))
        )
    }

    /** POST: save one technologie to the server (add new technologie + edit existing technologie) */
    saveTechnologie(technologie: Technologie): Observable<number> {
        console.log("frontend-service: saveTechnologie: ", technologie);

        const saveTechnologieUrl = `${this.baseUrl}/saveTechnologie`;
        return this.http.post<number>(saveTechnologieUrl, technologie, this.httpOptions).pipe(
            tap((result: number) => {}),
            catchError(this.handleError<number>('addTechnologie'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
