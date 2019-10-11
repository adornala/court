import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CourtData} from '../interfaces';
import {DATA} from '../mockups';

@Component({
  selector: 'app-results',
  templateUrl: 'search-result.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchResultsComponent implements OnInit, OnChanges {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Input() search = null;
  displayedColumns = ['id', 'name', 'firNumber', 'fieldDate', 'nextDate'];
  displayTitle = {
    id: 'ID',
    name: 'Name',
    firNumber: 'FIR Number',
    fieldDate: 'Filed Date',
    nextDate: 'Court Date'
  };
  datasource = new MatTableDataSource<CourtData>(DATA);

  ngOnInit(): void {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.search) {
      if (changes.search.currentValue.firNumber) {
        this.datasource.filter = changes.search.currentValue.firNumber.trim().toLowerCase();
      } else if (changes.search.currentValue.name) {
        this.datasource.filter = changes.search.currentValue.name.trim().toLowerCase();
      } else if (changes.search.currentValue.filedDate) {
        this.datasource.filter = changes.search.currentValue.filedDate.trim().toLowerCase();
      }

      if (this.datasource.paginator) {
        this.datasource.paginator.firstPage();
      }
    }
  }

}
