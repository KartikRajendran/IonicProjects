import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DummyResolveService implements Resolve<any> {

  constructor(private httpClient: HttpClient, private loadingController: LoadingController) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');

    this.loadingController.create({
      message: 'Please hold the line ...'
    }).then(res => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    this.loadingController.dismiss();

    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }
}
