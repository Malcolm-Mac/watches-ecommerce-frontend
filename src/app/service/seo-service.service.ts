import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoServiceService {

  constructor(private title:Title, private meta_tags: Meta) { }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateOgUrl(url: string) {
    this.meta_tags.updateTag({ name: 'og:url', content: url })
  }

  updateDescription(desc: string) {
    this.meta_tags.updateTag({ name: 'description', content: desc })
  }


}
