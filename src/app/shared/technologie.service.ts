import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Technologie } from './models/technologie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologieService {

    private technologienUrl = 'api/technologien' // URL to web api
    private baseUrl = 'http://localhost:3000/api';
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    constructor(
        private http: HttpClient
    ) {}
    
    /** GET technologien from the server */
    // TODO-sven: tap(_) machen
    getTechnologien(): Observable<Technologie[]> {
        const getTechnologienUrl = `${this.baseUrl}/getTechnologien`;
        return this.http.get<Technologie[]>(getTechnologienUrl).pipe(
            tap((result: Technologie[]) => {
                console.log('getTechnologien: ');
                console.log(result);
            }),
            catchError(this.handleError<Technologie[]>('getTechnologien', []))
        )
    }

    /** GET technologie by id. Will 404 if id not found */
    // TODO-sven: tap(_) machen
    getTechnologie(id: number): Observable<Technologie> {
        const getTechnologieUrl = `${this.baseUrl}/getTechnologie/${id}`;
        return this.http.get<Technologie>(getTechnologieUrl).pipe(
            tap((result: Technologie) => {
                console.log(`fetched technologie id=${id}: `);
                console.log(result);
            }),
            catchError(this.handleError<Technologie>(`getTechnologie id=${id}`))
        )
    }

    /** POST: saves technologie to the server */
    // TODO-sven: return wert beschreiben
    // TODO-sven: tap(_) machen
    saveTechnologie(technologie: Technologie): Observable<number> {
        console.log("frontend-service: saveTechnologie: ", technologie);

        const saveTechnologieUrl = `${this.baseUrl}/saveTechnologie`;
        return this.http.post<number>(saveTechnologieUrl, technologie, this.httpOptions).pipe(
            tap((result: number) => {
                console.log(`result: ${result}`);
            }),
            catchError(this.handleError<number>('addTechnologie'))
        );
    }

    // TODO-sven: entfernen, wenn alles über save läuft ???
    /** PUT: update the technologie on the server */
    updateTechnologie(technologie: Technologie): Observable<Technologie> {
        return this.http.put<Technologie>(this.technologienUrl, technologie, this.httpOptions).pipe(
            tap(_ => this.log(`updated technologie id=${technologie.id}`)),
            catchError(this.handleError<Technologie>('updateTechnologie'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
    
    private log(message: string) {
        // TODO: create a log service
        console.log(message);
    }
}
