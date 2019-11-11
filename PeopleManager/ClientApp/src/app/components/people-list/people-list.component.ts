import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
    public peopleList: People[];

    constructor(private peopleService: PeopleService) { }

    ngOnInit() {
        this.getPeople();
    }

    getPeople(): void {
        this.peopleService.getPeople().subscribe(people => this.peopleList = people);
    }

    delete(person: People): void {
        if (confirm(`Are you sure you want to delete ${person.name}?`)) {
            this.peopleList = this.peopleList.filter(h => h !== person);
            this.peopleService.deletePerson(person).subscribe();
        }
    }
}
