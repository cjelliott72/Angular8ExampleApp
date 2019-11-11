import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { People } from '../models/people';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService,
        @Inject('BASE_URL') private baseUrl: string) { }

    /** GET list of people from the server */
    getPeople(): Observable<People[]> {
        return this.http.get<People[]>(this.baseUrl + 'api/people')
            .pipe(
                tap(_ => this.log('fetched people')),
                catchError(this.handleError<People[]>('getPeople', []))
            );
    }

    /** GET person by id. Will 404 if id not found */
    getPerson(id: number): Observable<People> {
        return this.http.get<People>(this.baseUrl + 'api/people/' + id)
            .pipe(
                tap(_ => this.log(`fetched person id=${id}`)),
                catchError(this.handleError<People>(`getPerson id=${id}`))
            );
    }

    /** PUT: update the person on the server */
    updatePerson(person: People): Observable<any> {
        return this.http.put(this.baseUrl + 'api/people/' + person.id, person, this.httpOptions)
            .pipe(
                tap(_ => this.log(`updated person id=${person.id}`)),
                catchError(this.handleError<any>('updateHero'))
            );
    }

    /** POST: add a new person on the server */
    addPerson(person: People): Observable<People> {
        return this.http.post<People>(this.baseUrl + 'api/people', person, this.httpOptions)
            .pipe(
                tap((newPerson: People) => this.log(`added new person id=${newPerson.id}`)),
                catchError(this.handleError<People>('addPerson'))
            );
    }

    /** DELETE: delete the person from the server */
    deletePerson(person: People | number): Observable<People> {
        const id = typeof person === 'number' ? person : person.id;
        return this.http.delete<People>(this.baseUrl + 'api/people/' + id, this.httpOptions)
            .pipe(
                tap(_ => this.log(`deleted person id=${id}`)),
                catchError(this.handleError<People>(`deletePerson id=${id}`))
            );
    }

    private log(message: string) {
        this.messageService.add(`PeopleService: ${message}`);
    }

    /*
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
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
}
