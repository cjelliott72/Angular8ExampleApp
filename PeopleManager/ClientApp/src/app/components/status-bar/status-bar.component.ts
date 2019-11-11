import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../services/message.service';

@Component({
    selector: 'app-status-bar',
    templateUrl: './status-bar.component.html',
    styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
    constructor(public messageService: MessageService) { }

    ngOnInit() { }
}
