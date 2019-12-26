import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as d3 from 'd3';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  public donutChartData = [
    {
      id: 0,
      label: 'water',
      value: 20,
      color: 'red'
    },
    {
      id: 1,
      label: 'land',
      value: 20,
      color: 'blue'
    },
    {
      id: 2,
      label: 'sand',
      value: 30,
      color: 'green'
    },
    {
      id: 3,
      label: 'grass',
      value: 20,
      color: 'yellow'
    },
    {
      id: 4,
      label: 'earth',
      value: 10,
      color: 'pink'
    }
  ];
  chartData: any[];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.loadAllUsers();
    this.generateData();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.loadAllUsers();
      });
  }

  public generateData() {
    this.chartData = [];
    for (let i = 0; i < 8 + Math.floor(Math.random() * 10); i++) {
      this.chartData.push([`Index ${i}`, Math.floor(Math.random() * 100)]);
      // console.log(this.chartData);
    }
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }
}
