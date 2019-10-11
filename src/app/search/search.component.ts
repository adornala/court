import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CourtData} from '../interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @Input() pageType = 'user';
  adhar = new FormControl('');
  fir = new FormControl('');
  fromDate = new FormControl('');
  toDate = new FormControl('');
  courtDate = new FormControl('');
  alert = false;
  searchInfo: CourtData = {
    id: 0,
    adhar: '',
    firNumber: '',
    filedDate: '',
    courtDate: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  search() {
    this.searchInfo = {
      id: 0,
      firNumber: this.fir.value,
      adhar: this.adhar.value,
      filedDate: this.fromDate.value + ' to ' + this.toDate.value,
      courtDate: this.courtDate.value
    };
    this.makeAlert();
  }

  makeAlert() {
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }

  ngAfterViewInit(): void {
  }
}
