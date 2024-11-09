import { Component } from '@angular/core';
import { filters, singleFilter } from './filterData';
import { menJeans } from 'src/Data/Men/menJeans';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { query } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  filterData: any;
  singleFilterData: any;
  menPants: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.menPants = menJeans;
  }

  handleMultipleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    // console.log(queryParams);

    const filterValues = queryParams[sectionId]
      ? queryParams[sectionId].split(',')
      : [];

    const valueIndex = filterValues.indexOf(value);

    if (valueIndex != -1) {
      filterValues.splice(valueIndex, 1);
    } else {
      filterValues.push(value);
    }
    if (filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(',');
    } else {
      delete queryParams[sectionId];
    }
    this.router.navigate([], queryParams);
  }
  handleSingleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams[sectionId] = value;

    this.router.navigate([], { queryParams });
    console.log(queryParams);
  }
}
