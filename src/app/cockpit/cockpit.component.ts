import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreate = new EventEmitter<{severName:string,serverContent:string}>();
 @Output() plueprintCreate = new EventEmitter<{severName:string,serverContent:string}>();
  newServerName = "";
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

   onAddServer() {
    this.serverCreate.emit({
      severName:this.newServerName,
      serverContent:this.newServerContent
    })
  }

  onAddBlueprint() {
    this.plueprintCreate.emit({
      severName:this.newServerName,
      serverContent:this.newServerContent
    })
  } 

}
