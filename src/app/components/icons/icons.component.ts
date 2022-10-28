import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  icons: any[] = [];
  filteredIcons: any[] = [];

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
    this.iconService.getIcons().subscribe((data) => {
      data = (data as any[]).filter((value) => {
          return value.icon.tags.indexOf('deprecate') === -1;
      });

      let icons = data;
      icons.sort((icon1, icon2) => {
          if (icon1.properties.name < icon2.properties.name) return -1;
          else if (icon1.properties.name < icon2.properties.name) return 1;
          else return 0;
      });

      this.icons = icons;
      this.filteredIcons = data;
    });
  }

  onFilter(event: any): void {
    let searchText = (<HTMLInputElement>event.target).value;

    if (!searchText) {
        this.filteredIcons = this.icons;
    } else {
        this.filteredIcons = this.icons.filter((it) => {
            return it.icon.tags[0].includes(searchText);
        });
    }
  }  
}
