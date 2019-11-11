import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { People } from '../../models/people';
import { PeopleService } from '../../services/people.service';

@Component({
    selector: 'app-people-detail',
    templateUrl: './people-detail.component.html'
})
export class PeopleDetailComponent implements OnInit {
    private person: People;
    @ViewChild('detailForm', null) detailForm: NgForm;

    constructor(
        private route: ActivatedRoute,
        private peopleService: PeopleService,
        private location: Location,
    ) { }

    ngOnInit() {
        this.getPerson();
    }

    getPerson(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        if (id == 0) {
            this.person = new People();
            this.person.id = 0;
                
        } else {
            this.peopleService.getPerson(id).subscribe(person => this.person = person);
        }
    }

    goBack(): void {
        this.detailForm.reset();
        this.location.back();
    }

    save(): void {
        if (this.person.id == 0) {
            this.peopleService.addPerson(this.person)
                .subscribe(() => this.goBack());
        } else {
            this.peopleService.updatePerson(this.person)
                .subscribe(() => this.goBack());
        }     
    }
}
