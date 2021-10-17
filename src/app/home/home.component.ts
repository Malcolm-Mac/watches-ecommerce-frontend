import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  camera:any;
  renderer :any;
  geometry:any;
  material:any;
  mesh:any;
  scene:any;

  constructor() { }

  ngOnInit(): void {
    /* this.landingPage() */
  }

  landingPage(){

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    this.camera.position.z = 1;

    this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh( this.geometry, this.material );
	  this.scene.add( this.mesh );

    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.setAnimationLoop( this.animation(9999) );
	document.body.appendChild( this.renderer.domElement );
  }

  animation( time:any ) {

    this.mesh.rotation.x = time / 2000;
    this.mesh.rotation.y = time / 1000;

    this.renderer.render( this.scene, this.camera );

  }

}
