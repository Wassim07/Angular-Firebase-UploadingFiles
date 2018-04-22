
import { Component } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { Upload } from '../../utils/upload';

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
})
export class UploadFormComponent {

  selectedFiles: FileList | null;
  currentUpload: Upload;

  constructor(private uploadService: UploadService) { }

  detectFiles($event: Event) {
      this.selectedFiles = ($event.target as HTMLInputElement).files;
  }

  uploadOneFile() {
    const file = this.selectedFiles;
    if (file && file.length === 1) {
      this.currentUpload = new Upload(file.item(0));
      this.uploadService.pushUpload(this.currentUpload);
    } else {
      console.error(' No file found!');
    }
  }

  uploadMultipleFiles() {
    const files = this.selectedFiles;
    if (!files || files.length === 0) {
      console.error(' No Multi Files found!');
      return;
    }

    Array.from(files).forEach((file) => {
      this.currentUpload = new Upload(file);
      this.uploadService.pushUpload(this.currentUpload);
    });
  }
}