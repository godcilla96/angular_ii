import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Ramschema } from '../model/ramschema';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  courseslist: Ramschema[] = [];

  constructor(private homeservice : HomeService) {}

  ngOnInit() {
    this.homeservice.getRamschema().subscribe(data => {

      this.courseslist.push(...data);
    });
  }
}