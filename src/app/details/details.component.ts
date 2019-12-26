import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import  data from '../periodictabledata.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentItem: string;
  example: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //  const navigation = this.router.getCurrentNavigation();
    //  const state = navigation.extras.state as { example: string };
    //  this.example = state.example;
    console.log(data);

    this.currentItem = this.route.snapshot.paramMap.get('id');
  }
}
