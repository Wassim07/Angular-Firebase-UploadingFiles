import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { Upload } from '../../utils/upload';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'uploads-list',
  templateUrl: './uploads-list.component.html',
  styleUrls: ['./uploads-list.component.css'],
})
export class UploadsListComponent implements OnInit {

  uploads: Observable<Upload[]>;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    this.uploads = this.uploadService.getUploads();
  }
}