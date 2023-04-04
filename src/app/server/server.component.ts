import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline"
  }

  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === "online"?  "1px solid green" : "1px solid red"
  }
  getClass(){
    return this.serverStatus === "online"?  "text-success" : "text-danger"
  }
}
