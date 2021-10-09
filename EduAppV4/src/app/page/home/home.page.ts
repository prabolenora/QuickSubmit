import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../service/student.service'
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { NotificationService } from '../../service/notification.service';
import { NgCalendarModule, CalendarComponent } from 'ionic2-calendar';
import { hostViewClassName } from '@angular/compiler';
import { Network } from '@ionic-native/network/ngx';
import { NetworkService } from 'src/app/service/network.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  student: any;
  importantNotifications: any;
  viewTitle: any;
  eventSource = [];
  selectedDate = new Date();
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  public static loading;
  @ViewChild(CalendarComponent, null) myCalendar: CalendarComponent;

  constructor(
    public ngFireAuth: AngularFireAuth,
    private fireservices: AngularFirestore,
    public studentService: StudentService,
    public networkService: NetworkService,
    private menu: MenuController,
    public laodingController: LoadingController,
    public network: Network,
    public notificationService: NotificationService,
    public alertController: AlertController,) {
    console.log('home');
    this.networkService.ConnectionStatus();
    if (localStorage.getItem('networkConnection') == 'false') {

      this.importantNotifications = JSON.parse(localStorage.getItem('ImportantNotification'));
      //this.eventSource=angular.fromJson(localStorage.getItem('CalanderEvents'));;

      var json_data = JSON.parse(localStorage.getItem('CalanderEvents'));
      var result = [];

      for (var i in json_data)
        result.push(json_data[i]);
      this.eventSource = result;
    }

  }

  async ngOnInit() {
    //let imNot1 =  JSON.parse(localStorage.getItem('ImportantNotification'))
    HomePage.loading = await this.laodingController.create({
      message: 'Loading...',
      showBackdrop: false,

    })

    HomePage.loading.present();

    this.openFirst();
    await this.fireservices
      .collection(`events`)
      .snapshotChanges()
      .subscribe((colSnap) => {
        this.eventSource = [];
        colSnap.forEach((snap) => {
          let event: any = snap.payload.doc.data();
          event.id = snap.payload.doc.id;
          event.startTime = event.startTime.toDate();
          event.endTime = event.endTime.toDate();
          //console.log(event);
          this.eventSource.push(event);
        });
        localStorage.setItem("CalanderEvents", JSON.stringify(this.eventSource));

        var json_data = JSON.parse(localStorage.getItem('CalanderEvents'));
        var result = [];

        for (var i in json_data)
          result.push(json_data[i]);
      });

    await this.notificationService.getAllImportantNotification().subscribe((data) => {
      this.importantNotifications = data.map((e) => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          description: e.payload.doc.data()['description'],
        };
      });
      localStorage.setItem("ImportantNotification", JSON.stringify(this.importantNotifications));
    });

    HomePage.loading.dismiss();

  }

  //bind the menu
  openFirst() {
    //alert('test');
    this.menu.enable(true, 'first');
  }

  addNewEvent() {
    let start = this.selectedDate;
    let end = this.selectedDate;
    end.setMinutes(end.getMinutes() + 60);

    let event = {
      title: 'Maths test',
      startTime: start,
      endTime: end,
      allDay: false,
    };

    this.fireservices.collection(`events`).add(event);
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    // console.log(
    //   'Event selected:' +
    //   event.startTime +
    //   '-' +
    //   event.endTime +
    //   ',' +
    //   event.title
    // );
  }

  onTimeSelected(ev) {
    // console.log(
    //   'Selected time: ' +
    //   ev.selectedTime +
    //   ', hasEvents: ' +
    //   (ev.events !== undefined && ev.events.length !== 0) +
    //   ', disabled: ' +
    //   ev.disabled
    // );
    this.selectedDate = ev.selectedTime;
  }

  onCurrentDateChanged(event: Date) {
    //console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    // console.log(
    //   'range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime
    // );
  }

  UpdateUser(Record) {
    Record.isedit = true;
    Record.editname = Record.firstname;
    Record.editage = Record.lastname;
    Record.editaddress = Record.id;
  }

  back() {
    this.myCalendar.slidePrev();
  }

  next() {
    this.myCalendar.slideNext();
  }

  Updatarecord(recorddata) {
    let record = {};
    record['firstName'] = recorddata.editname;
    record['lastName'] = recorddata.editage;

    this.studentService.update_employee(recorddata.id, record);
    recorddata.isedit = false;
  }




}
