import * as THREE from 'three';


// GROUND

var groundGeo = new THREE.PlaneBufferGeometry( 1000,1000 );
var groundMat = new THREE.MeshLambertMaterial( { color: 0xffffff } );
groundMat.color.setHSL( 203, 0.140, 0.225 );

var ground = new THREE.Mesh( groundGeo, groundMat );
ground.position.y = - 33;
ground.rotation.x = - Math.PI / 2;
ground.receiveShadow = true;

export {
    ground,
}