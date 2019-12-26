import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Sort } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import  data from '../periodictabledata.json';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

const ELEMENT_DATA_COLLECTIONS = data.elements;
@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name',  'symbol','summary', 'source'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_COLLECTIONS);
  periodicElementCollections: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private router: Router) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA_COLLECTIONS);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   // this.periodicElementCollections = data;
  }

  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public sortData(sort: Sort) {
    console.log(sort);
    // this.sort = sort;
  }

  /**
   * sendSelectedDataObject
   *
   *    [routerLink]="['/details', row.name]"
   */
  // public sendSelectedDataObject(row) {
  //   const navigationExtras: NavigationExtras = { state: { example: 'This is an example' } };
  //   this.router.navigate(['details'], navigationExtras);
  // }
}
