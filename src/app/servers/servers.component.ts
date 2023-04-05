import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  displayDetails = false;
  clicks = [];
  clickColor = false
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
  displayClicks(event: Event){
    if(event){
      this.clicks.push(this.clicks.length +1);
    }


  }
}
