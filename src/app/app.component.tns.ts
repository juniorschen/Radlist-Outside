import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { StackLayout, Enums } from '@nativescript/core';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {

  @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;

  title = 'NativeScript';
  cnt = 3;
  private messageLayout: StackLayout;
  private successLayout: StackLayout;

  ngAfterViewInit() {
    this.drawerComponent.sideDrawer.drawerContent.width = 160;
    this.drawerComponent.sideDrawer.drawerContentSize = 200;
    this.drawerComponent.sideDrawer.drawerContent.horizontalAlignment = 'right';
  }

  tapMe() {
    this.drawerComponent.sideDrawer.getIsOpen() ? this.drawerComponent.sideDrawer.closeDrawer() : this.drawerComponent.sideDrawer.showDrawer();
  }

  loadedContainer(args) {
    this.messageLayout = args.object;
  }

  loadedSuccess(args) {
    this.successLayout = args.object;
  }

}
