import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss']
})
export class SpeedDialComponent implements OnInit {
  items: MenuItem[];
  tooltipItems: MenuItem[];
  leftTooltipItems: MenuItem[];

  constructor(private messageService: MessageService) {
    this.items = [
      {
          icon: 'pi pi-pencil',
          command: () => {
              this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          }
      },
      {
          icon: 'pi pi-refresh',
          command: () => {
              this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
          }
      },
      {
          icon: 'pi pi-trash',
          command: () => {
              this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
          }
      },
      {
          icon: 'pi pi-upload',
          command: () => {
            this.messageService.add({ severity: 'info', summary: 'Upload', detail: 'File Uploaded' });
          }
      },
      {
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
      }
    ];

    this.tooltipItems = [
      {
          tooltip: 'Add',
          icon: 'pi pi-pencil',
          command: () => {
              this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          }
      },
      {
          tooltip: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
          }
      },
      {
          tooltip: 'Delete',
          icon: 'pi pi-trash',
          command: () => {
              this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
          }
      },
      {
          tooltip: 'Upload',
          icon: 'pi pi-upload',
          routerLink: ['/fileupload']
      },
      {
          tooltip: 'Angular Website',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
      }
    ];

    this.leftTooltipItems = [
      {
          tooltip: 'Add',
          icon: 'pi pi-pencil',
          tooltipPosition: 'left',
          command: () => {
              this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          }
      },
      {
          tooltip: 'Update',
          icon: 'pi pi-refresh',
          tooltipPosition: 'left',
          command: () => {
              this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
          }
      },
      {
          tooltip: 'Delete',
          icon: 'pi pi-trash',
          tooltipPosition: 'left',
          command: () => {
              this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
          }
      },
      {
          tooltip: 'Upload',
          icon: 'pi pi-upload',
          tooltipPosition: 'left',
          routerLink: ['/fileupload']
      },
      {
          tooltip: 'Angular Website',
          icon: 'pi pi-external-link',
          tooltipPosition: 'left',
          url: 'http://angular.io'
      }
    ];
  }

  ngOnInit(): void {
  }

}
