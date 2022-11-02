import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {
  public user: any;
  public repos!: any[];
  public ngUnsubscribe = new Subject<void>();
  public colDefs = [
    {
      field: "id",
      header: "Repository ID",
    },
    {
      field: "name",
      header: "Repository Name",
    },
    {
      field: "html_url",
      header: "Repository Link",
    }
  ];
  constructor(
    private _sharedService: SharedService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (params: any) => {
        this.GetUserDetails(Object(params).login);
        this.GetUserRepos(Object(params).login);
      }
    );
  }

  GetUserDetails(login: string) {
    this._sharedService.GetUserDetails(login).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (response: any) => {
        this.user = response;
      }
    )
  }

  GetUserRepos(login: string) {
    this._sharedService.GetUserRepos(login).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (response: any) => {
        this.repos = response;
      }
    )
  }
}
