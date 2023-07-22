import { Component } from '@angular/core';

@Component({
  selector: 'app-table-to-pdf',
  templateUrl: './table-to-pdf.component.html',
  styleUrls: ['./table-to-pdf.component.css']
})
export class TableToPdfComponent {
   content:any; 
   popupWindow: any;

   ngOnInit(){

   }

  exportIntoPdf(){
    this.content = document.getElementById("t")?.innerHTML;
    this.popupWindow = window.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
    this.popupWindow.document.open();
    this.popupWindow.document.write(`
  <html>
    <head>
      <title>My Pdf</title>
    </head>
  <body onload="window.print();window.close()"><table class="table table-bordered">${this.content}</table></body>
  </html>`
    );
    this.popupWindow.document.close();
  }
}
