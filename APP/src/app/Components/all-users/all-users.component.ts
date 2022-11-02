import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.less']
})
export class AllUsersComponent implements OnInit {
  public users!: any[];
  public isFirstPage: boolean = false;
  public ngUnsubscribe = new Subject<void>();
  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.GetAllUsers(1)
  }

  GetAllUsers(id: number, previous = false) {
    if(id == 1 && previous) {
      this.isFirstPage = true;
    } else {
      this.isFirstPage = false;
      previous ? id = id - 16 : null;
      this._sharedService.GetAllUsers(id.toString()).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (response: any) => {
          this.users = response;
        }
      )
    }
  }  
}
