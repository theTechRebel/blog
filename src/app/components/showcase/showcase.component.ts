import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { IDapp } from 'src/app/models/profile-models';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  dapps: IDapp[] = [];
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getAllDapps().subscribe(data => {
      this.dapps = data;
    });
  }
}
