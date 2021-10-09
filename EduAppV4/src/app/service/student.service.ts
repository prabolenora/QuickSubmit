import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router'
import {AngularFireAuthModule,AngularFireAuth,} from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { FileService } from './file.service';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  dataSet: Data = {
    id:'',
    url:''
  };

 student = {
    firstName: '',
    lastName: '',
    studentId: '',
    path: '',
    createdDate: '',
    updatedDate: '',
    email: '',
    password: '',
    userToken: '',
    stream: ''
  };
  testSubscription: any;
  
  studentDetail: any;
  constructor(
    public fireservices: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    private router: Router,
    public alertController: AlertController,
    @Inject(AngularFireStorage) private storage: AngularFireStorage, 
    @Inject(FileService) private fileService: FileService
  ) { }

  
  async displayAlert(header, subHeader, msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      subHeader: subHeader,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  SearchId(id) {
    // var ref=this.fireservices.collection('student');
    // ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
    //   console.log(snapshot.key);
    // });
    return this.fireservices.doc('/studentIdList/' + id).valueChanges();
  }

  // save() {
  //   var name = this.selectedImage.name;
  //   const fileRef = this.storage.ref(name);
  //   this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
  //     finalize(() => {
  //       fileRef.getDownloadURL().subscribe((url) => {
  //         this.url = url;
  //         this.fileService.insertImageDetails(this.id,this.url);
  //         alert('Upload Successful');
  //       })
  //     })
  //   ).subscribe();
  // }


  async RegisterUserLogin(student) {
    console.log('studentservice');
    this.testSubscription=await this.ngFireAuth
      .createUserWithEmailAndPassword(student.email, student.password)
      .then((userCredential) => {
        student.userToken = userCredential.user.uid;
        student.createdDate = Date.now().toString();
        this.fireservices
          .collection('student')
          .add(student)
          .then(async (res) => {           
            this.save(student.email,student.path);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch(async (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Error!',
          //subHeader: 'Subtitle',
          message: 'This user is already exist',
          buttons: ['OK']
        });    
        await alert.present();    
        const { role } = await alert.onDidDismiss();
      });
  }

  async save(email,path) {
    const fileRef = this.storage.ref(email);
    this.storage.upload(email, path).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(async (url) => {
          let url1 = url;
          //this.fileService.insertImageDetails(email,url1);
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Success!',
            //subHeader: 'Subtitle',
            message: 'User successfully registered',
            buttons: ['OK']
          });       
          await alert.present();       
          const { role } = await alert.onDidDismiss();            
          this.router.navigate(['/login'])
        })
      })
    ).subscribe();


  }

  create_student(student) {
    console.log(student);
    return this.fireservices.collection('student').add(student);
  }

  getAllstudent() {
    console.log('getAllstudent');
    return this.fireservices.collection('student').snapshotChanges().subscribe((data) => {
      this.studentDetail = data.map((e) => {
        return {         
          id: e.payload.doc.id,
          studentEmail: e.payload.doc.data()['email'],
          studentId: e.payload.doc.data()['studentId'],
          firstName: e.payload.doc.data()['firstName'],
          lastName: e.payload.doc.data()['lastName'],
          stream: e.payload.doc.data()['stream'],  
          imgPath: e.payload.doc.data()['path'],   
          createdDate: e.payload.doc.data()['createdDate'],
          userToken:e.payload.doc.data()['userToken'],
        };       
      });
      this.studentDetail.forEach(element => {
              if(element.studentEmail==localStorage.getItem("StudentEmail").toString()){
              localStorage.setItem("StudentId", element.studentId);
              localStorage.setItem("Name", element.firstName+' '+element.lastName);
              localStorage.setItem("stream", element.stream),
              localStorage.setItem("path", element.imgPath),
              localStorage.setItem("iId", element.id),
              console.log('Student ID');
              console.log(localStorage.getItem("StudentId").toString());

             this.student.firstName=element.firstName;
             this.student.lastName=element.lastName
             this.student.studentId=element.studentId
             this.student.path=element.imgPath
             this.student.createdDate=element.createdDate
             this.student.updatedDate=element.createdDate
             this.student.email=element.studentEmail
             this.student.userToken=element.userToken
             this.student.stream=element.stream

             localStorage.setItem("StudentData", JSON.stringify(this.student));
              //student.password=element.


            }
      });
    });   
  }


  /**
   * Represents a book.
   * @param {string} recordid - The title of the book.
   * @param {object} record - The author of the book.
   */
  async update_employee(recordid, record) {
    await this.fireservices.doc('student/' + recordid).update(record);
    this.displayAlert('Success','','Your profile is updated.Please login again to refresh.');
   // this.fireservices.
  }

  sendResetMail(email){
    return this.ngFireAuth.sendPasswordResetEmail(email);
  }
}

export interface Data{
  id:string;
  url:string;
}


