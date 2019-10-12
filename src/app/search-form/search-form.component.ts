import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private searchService: SearchService) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchInput: ''
    });
  }

  search() {
    this.searchService.search(this.searchForm.value.searchInput);
  }
}
