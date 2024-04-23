import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent {  
  listaUsuarios: any = [];  
  isLoading= false;  
  currentPage=1;
  itemsPerPage=10;

  toggleLoading = () => this.isLoading = !this.isLoading;
  

  constructor(private http: HttpClient) { }
  
  ngAfterViewInit() {
    this.currentPage = 1;
    this.getUsers();
  }

  getUsers() {
    this.toggleLoading();
    this.http.get('http://localhost:3000/users?_limit=10&_page=1')
    .subscribe({
      next: (data: any) => {
        this.listaUsuarios = data;
      },
      complete: () => this.toggleLoading()
    });
    
  }

  onScroll= () => {    
    this.currentPage++;
    this.getMoreUsers();
   }

  getMoreUsers() {   
    this.toggleLoading();     
    this.http.get(`http://localhost:3000/users?_page=${this.currentPage}&_limit=10`).subscribe((data: any) => {
      setTimeout(() => {      
        this.listaUsuarios = [...this.listaUsuarios, ...data];
        this.toggleLoading();
      }, 2000);     
    });
  }
}
