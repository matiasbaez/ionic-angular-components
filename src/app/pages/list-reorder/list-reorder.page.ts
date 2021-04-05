import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Personaje 1', 'Personaje 2', 'Personaje 3', 'Personaje 4'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    const mover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, mover);

    event.detail.complete();
  }

}
