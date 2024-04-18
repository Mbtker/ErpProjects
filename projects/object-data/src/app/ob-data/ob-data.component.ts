import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
import { ObjectTypeObject } from '../../../../object-type/src/app/ob-type/ob-type.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-ob-data',
  standalone: true,
  imports: [FormsModule, MatIconModule],
  templateUrl: './ob-data.component.html',
  styleUrl: './ob-data.component.css'
})
export class ObDataComponent implements OnInit {

  ObjectData: ObjectData;
  ObjectDataEdit: ObjectData;

  ObjectTypeArray = [];
  ObjectTypeArrayToCeate = [];
  ListArray = [];

  constructor(private MyService: SharedService, private router: Router) {
    this.ObjectData = new ObjectData();
    this.ObjectDataEdit = new ObjectData();
   }

  ngOnInit(): void {
    this.onGetObjectType();
    this.onGetList();
  }

  onGetObjectType() {
    this.MyService.getObjectTypeList().subscribe((data:any) => {
      this.ObjectTypeArray = data;
      this.ObjectTypeArrayToCeate = data;
    });
  }
  
  ChangeObjectType(e: any) {
    this.ObjectData.objectType.id = e.target.value;
  }

  ChangeObjectTypeToCeate(e: any) {
    this.ObjectData.objectType.id = e.target.value;
  }

  onGetList() {
    this.MyService.getObjectDataList().subscribe((data:any) => {
      this.onLoading(false);
      this.ListArray = data;
    });
  }

  onCreate() {
    
    if (this.ObjectData.objectType.id == 0) {
      alert('Select the object type!');
      return;
    }

    if (this.ObjectData.objectArDescription == '') {
      alert('Enter the arabic name!');
      return;
    }
    if (this.ObjectData.objectEnDescription == '') {
      alert('Enter the english name!');
      return;
    }

    this.MyService.createObjectData(this.ObjectData).subscribe((res:any) => {
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
  this.MyService.editObjectData(this.ObjectDataEdit).subscribe((res:any) => {
    let status = res['status'];
    if (status) {
      window.location.reload();
      this.onGetList()
    } else {
      alert('error occurred!');
    }
  });
}


onSelectRow(cell: ObjectData) {
  this.ObjectDataEdit = new ObjectData();
  this.ObjectDataEdit.id = cell.id;
  this.ObjectDataEdit.objectType = cell.objectType;
  this.ObjectDataEdit.objectEnDescription = cell.objectEnDescription;
  this.ObjectDataEdit.objectArDescription = cell.objectArDescription;
  this.ObjectDataEdit.objectArShortDescription = cell.objectArShortDescription;
}

onClear() {

  if (this.ObjectData.objectType.id == 0 && this.ObjectData.objectArDescription == '' && this.ObjectData.objectEnDescription == '') {
    return;
  }

  this.ObjectData = new ObjectData();
  this.onGetObjectType();
  this.onGetList();
}

onSearch() {
  if (this.ObjectData.objectType.id == 0 && this.ObjectData.objectArDescription == '' && this.ObjectData.objectEnDescription == '') {
    return;
  }
  console.log(this.ObjectData);
  this.MyService.searchObjectData(this.ObjectData).subscribe((res:any) => {
    this.ListArray = res;
  });
}

onLoading(value: boolean) {
  const event = new CustomEvent('Loading', { detail: value});
  dispatchEvent(event);
}

}

export class ObjectData {
  id: number;
  objectType: ObjectTypeObject;
  objectUserCode: string;
  objectEnDescription: string;
  objectArDescription: string;
  objectArShortDescription: string;
  constructor() {
    this.id = 0;
    this.objectType = new ObjectTypeObject();
    this.objectUserCode = '';
    this.objectEnDescription = '';
    this.objectArDescription = '';
    this.objectArShortDescription = '';
  }
}