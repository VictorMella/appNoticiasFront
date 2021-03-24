import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainFactoryService {
  private loadingGlobalData = new BehaviorSubject<boolean>(false);
  public loadingGlobalData$ = this.loadingGlobalData.asObservable();
  private loadingReloadData = new BehaviorSubject<boolean>(false);
  public loadingReloadData$ = this.loadingReloadData.asObservable();

  public activeLoadingGlobalData(active: boolean): void {
    this.loadingGlobalData.next(active);
  }

  public activeLoadingReloadData(active: boolean): void {
    this.loadingReloadData.next(active);
  }
}
