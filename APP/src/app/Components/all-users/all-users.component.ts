import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.less']
})
export class AllUsersComponent implements OnInit {

  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

}
