import { Component, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoader = false;
  constructor(
    public loaderService: LoaderService,
    private changeDetectionRef: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
    this.changeDetectionRef.detectChanges();
  }
}
