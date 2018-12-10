import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
confirmBox: string = "none";
  constructor() { }

  ngOnInit() {
  }

  frmsubmit(data){
    console.log(data.value.name);
    console.log(data.value.age);
    this.confirmBox = 'block';

}
onCloseHandled(){


  this.confirmBox='none'; 


}
}
