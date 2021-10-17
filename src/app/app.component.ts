import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SeoServiceService } from './service/seo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router, private activatedRoute: ActivatedRoute,
    private _seoService:SeoServiceService){}

  ngOnInit() {
    this.router.events.pipe(
       filter((event) => event instanceof NavigationEnd),
       map(() => this.activatedRoute),
       map((route) => {
         while (route.firstChild) route = route.firstChild;
         return route;
       }),
       filter((route) => route.outlet === 'primary'),
       mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        this._seoService.updateTitle(event['title']);
        this._seoService.updateOgUrl(event['ogUrl']);
        //Updating Description tag dynamically with title
        this._seoService.updateDescription(event['title'] + event['description'])
      });
    }
}
