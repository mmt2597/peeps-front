import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public collapseSubject: BehaviorSubject<Boolean>;
  public isCollapse: Observable<Boolean>;

  constructor(
    private deviceService: DeviceDetectorService
  ) {
    this.collapseSubject = new BehaviorSubject<Boolean>(false);
    this.isCollapse = this.collapseSubject.asObservable();

    this.checkDevice();
  }

  checkDevice() {
    if(this.deviceService.isMobile()) {
      this.collapseSubject.next(true);
    }

    if(this.deviceService.isDesktop()) {
      this.collapseSubject.next(false);
    }
  }
}
