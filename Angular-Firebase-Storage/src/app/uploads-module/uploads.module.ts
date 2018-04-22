import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule, MatButtonModule } from '@angular/material';
import { UploadService } from './services/upload.service';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { UploadsListComponent } from './uploads/uploads-list/uploads-list.component';
import { UploadDetailComponent } from './uploads/upload-detail/upload-detail.component';
import { UploadsComponent } from './uploads/uploads.component';

@NgModule({
    imports: [
        CommonModule,
        MatProgressBarModule, 
        MatButtonModule
    ],
    exports: [
        UploadsComponent,
        UploadFormComponent,
        UploadsListComponent,
        UploadDetailComponent
    ],
    declarations: [
        UploadsComponent,
        UploadFormComponent,
        UploadsListComponent,
        UploadDetailComponent
    ],
    providers: [
        UploadService,
    ],
})
export class UploadsModule { }