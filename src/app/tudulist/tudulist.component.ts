import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tudulist',
  templateUrl: './tudulist.component.html',
  styleUrls: ['./tudulist.component.css']
})
export class TudulistComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
  fetchData=()=>{
    this.myapi.viewTudus().subscribe(
      (data)=>{
        this.tuduList=data
      }
    )
  }
  
  tuduList:any=[]
  

  ngOnInit(): void {
  }

}
