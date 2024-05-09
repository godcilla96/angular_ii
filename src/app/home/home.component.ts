import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Ramschema } from '../model/ramschema';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  courseslist: Ramschema[] = [];
  filteredCoursesList: Ramschema[] = [];
  searchTerm: string = '';
  sortKey: string = '';
  sortAsc: boolean = true;

  constructor(private homeservice : HomeService) {}

  ngOnInit(): void {
    this.homeservice.getRamschema().subscribe(data => {
      this.courseslist = data;
      this.filteredCoursesList = [...this.courseslist];
    });
  }

  sortData(key: keyof Ramschema) {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortKey = key;
      this.sortAsc = true;
    }
  
    this.filteredCoursesList.sort((a, b) => {
      const valueA = (a[key] as string).toLowerCase();
      const valueB = (b[key] as string).toLowerCase();
  
      if (valueA < valueB) {
        return this.sortAsc ? -1 : 1;
      } else if (valueA > valueB) {
        return this.sortAsc ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  applyFilter() {
    this.filteredCoursesList = this.courseslist.filter(course =>
      course.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      course.coursename.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

