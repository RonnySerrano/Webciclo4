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


      fgValidacion = this.fb.group({
      nombre: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      pais: ['', [Validators.required ]],
      coord_X: ['', [Validators.required]],
      coord_Y: ['', [Validators.required]],
      siglas: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });

    

  ngOnInit(): void {
  }

    store(){
    let aeropuerto = new AeropuertoModel();
    aeropuerto.nombre = this.fgValidacion.controls["nombre"].value as string;
    aeropuerto.ciudad = this.fgValidacion.controls["ciudad"].value as string;
    aeropuerto.pais = this.fgValidacion.controls["pais"].value as string;
    aeropuerto.coord_X = this.fgValidacion.controls["coord_X"].value as string;
    aeropuerto.coord_Y = this.fgValidacion.controls["coord_Y"].value as string;
    aeropuerto.siglas = this.fgValidacion.controls["siglas"].value as string;
    aeropuerto.tipo = this.fgValidacion.controls["tipo"].value as string;

    this.AeropuertoService.store(aeropuerto).subscribe((data: AeropuertoModel)=> {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/aeropuerto/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })


  }}
