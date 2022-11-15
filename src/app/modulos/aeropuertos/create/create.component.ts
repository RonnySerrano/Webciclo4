import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AeropuertoModel } from 'src/app/modelos/aeropuerto.model';
import { AeropuertoService } from 'src/app/servicios/aeropuerto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private AeropuertoService: AeropuertoService,
    private router: Router) { }


    /*/fgValidacion = this.fb.group({
      Nombre: ['', [Validators.required]],
      Ciudad: ['', [Validators.required]],
      Pais: ['', [Validators.required ]],
      Coord_X: ['', [Validators.required]],
      Coord_Y: ['', [Validators.required]],
      Siglas: ['', [Validators.required]],
      Tipo: ['', [Validators.required]],
    });/*/

    

  ngOnInit(): void {
  }

  /*/store(){
    let aeropuerto = new AeropuertoModel();
    aeropuerto.nombre = this.fgValidacion.controls["Nombre"].value as string;
    aeropuerto.ciudad = this.fgValidacion.controls["Ciudad"].value as string;
    aeropuerto.pais = this.fgValidacion.controls["Pais"].value as string;
    aeropuerto.coord_X = this.fgValidacion.controls["Coord_X"].value as string;
    aeropuerto.coord_Y = this.fgValidacion.controls["Coord_Y"].value as string;
    aeropuerto.siglas = this.fgValidacion.controls["Siglas"].value as string;
    aeropuerto.tipo = this.fgValidacion.controls["Tipo"].value as string;

    this.AeropuertoService.store(aeropuerto).subscribe((data: AeropuertoModel)=> {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/aeropuerto/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })


  }/*/}
