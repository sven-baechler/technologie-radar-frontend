import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Technologie } from './models/technologie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologieService {

    private technologienUrl = 'api/technologien' // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    constructor(
        private http: HttpClient
    ) {}
    
    /** GET technologien from the server */
    getTechnologien(): Observable<Technologie[]> {
        const url = 'http://localhost:3000/api/technologien';
        return this.http.get<Technologie[]>(this.technologienUrl).pipe(
            tap((result) => {
                console.log(result);
                this.log('fetched technologien')
            }),
            catchError(this.handleError<Technologie[]>('getTechnologien', []))
        )
    }

    /** GET technologie by id. Will 404 if id not found */
    getTechnologie(id: number): Observable<Technologie> {
        const url = `localhost:3000/api/technologien/${id}`;
        const mockUrl = `${this.technologienUrl}/${id}`;
        return this.http.get<Technologie>(mockUrl).pipe(
            tap((_) => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Technologie>(`getTechnologie id=${id}`))
        )
    }

    /** PUT: update the technologie on the server */
    updateTechnologie(technologie: Technologie): Observable<Technologie> {
        return this.http.put<Technologie>(this.technologienUrl, technologie, this.httpOptions).pipe(
            tap(_ => this.log(`updated technologie id=${technologie.id}`)),
            catchError(this.handleError<Technologie>('updateTechnologie'))
        );
    }

    /** POST: add a new technologie to the server */
    addTechnologie(technologie: Technologie): Observable<Technologie> {
        // TODO-sven: id vergeben (backend?)
        return this.http.post<Technologie>(this.technologienUrl, technologie, this.httpOptions).pipe(
            tap((newTechnologie: Technologie) => this.log(`added technologie with id=${newTechnologie.id}`)),
            catchError(this.handleError<Technologie>('addTechnologie'))
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
