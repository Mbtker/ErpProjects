import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-ob-type',
  standalone: true,
  imports: [FormsModule, MatIconModule],
  templateUrl: './ob-type.component.html',
  styleUrl: './ob-type.component.css'
})
export class ObTypeComponent implements OnInit  {

  ObjectTObject: ObjectTypeObject;
  ObjectTObjectEdit: ObjectTypeObject;
  myArray = [];

  constructor(private MyService: SharedService, private router: Router) {
    this.ObjectTObject = new ObjectTypeObject();
    this.ObjectTObjectEdit = new ObjectTypeObject();
   }
  
  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.MyService.getObjectTypeList().subscribe((data:any) => {
      this.onLoading(false);
      this.myArray = data;
    });
  }

  onCreate() {
    
    if (this.ObjectTObject.objectTypeArDesc == '') {
      alert('Enter the arabic name!');
      return;
    }
    if (this.ObjectTObject.objectTypeEnDesc == '') {
      alert('Enter the english name!');
      return;
    }

    this.MyService.createObjectType(this.ObjectTObject).subscribe((res:any) => {
      let status = res['status'];
      if (status) {
        window.location.reload();
        this.onGetList()
      } else {
        alert('error occurred!');
      }
    });
}

onEdit() {
  this.MyService.editObjectType(this.ObjectTObjectEdit).subscribe((res:any) => {
    let status = res['status'];
    if (status) {
      window.location.reload();
      this.onGetList()
    } else {
      alert('error occurred!');
    }
  });
}


onSelectRow(cell: ObjectTypeObject) {
  this.ObjectTObjectEdit = new ObjectTypeObject();
  this.ObjectTObjectEdit.id = cell.id;
  this.ObjectTObjectEdit.objectTypeArDesc = cell.objectTypeArDesc;
  this.ObjectTObjectEdit.objectTypeEnDesc = cell.objectTypeEnDesc;
  this.ObjectTObjectEdit.securityDataType = cell.securityDataType;
}

onClear() {

  if (this.ObjectTObject.objectTypeArDesc == '' && this.ObjectTObject.objectTypeEnDesc == '') {
    return;
  }

  this.ObjectTObject = new ObjectTypeObject();
  this.onGetList();
}

onSearch() {
    
  if (this.ObjectTObject.objectTypeArDesc == '' && this.ObjectTObject.objectTypeEnDesc == '') {
    return;
  }

  this.MyService.searchObjectType(this.ObjectTObject).subscribe((res:any) => {
    this.myArray = res;
  });
}

onLoading(value: boolean) {
  const event = new CustomEvent('Loading', { detail: value});
  dispatchEvent(event);
}

}


export class ObjectTypeObject {
  id: number;
  objectTypeEnDesc: string;
  objectTypeArDesc: string;
  securityDataType: string;
  constructor() {
    this.id = 0;
    this.objectTypeEnDesc = '';
    this.objectTypeArDesc = '';
    this.securityDataType = '';
  }
}
