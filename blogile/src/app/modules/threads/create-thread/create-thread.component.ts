import { Component, OnInit } from '@angular/core';
import { BlogData } from '../../../services/blog/blog.data.service';

@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.scss']
})
export class CreateThreadComponent implements OnInit {

  constructor(private blogDataService: BlogData) { }

  ngOnInit() {
  }
}
