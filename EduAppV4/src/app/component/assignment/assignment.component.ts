import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { FileService } from 'src/app/service/file.service';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {
  @Input ()assignmentList: any;
  @ViewChild("expandWrapper", { read: ElementRef }) expandWrapper: ElementRef;
  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "150px";
  
  constructor( public ngFireAuth: AngularFireAuth,
    private fireservices: AngularFirestore,
    public notificationService: NotificationService,
    @Inject(FileService) private fileService: FileService,
    public toastController:ToastController,
    public renderer: Renderer2) { }

  ngOnInit() {
    this.fileService.getImageDetailList();
    console.log('assigmntlist');
    console.log(this.assignmentList)
    localStorage.setItem("AssigmentId", this.assignmentList.imgId);
  }
  async view(){
    console.log(this.assignmentList.imgId);
    await this.fileService.getImage(this.assignmentList.imgId);
    
    //alert(localStorage.getItem('dataurl').toString());
    // this.dataurl=localStorage.getItem('dataurl').toString();
    // alert(this.dataurl);
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }
}
