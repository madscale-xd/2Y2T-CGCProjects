//Scene, camera, renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Box Geometry
const cubeGeometry = new THREE.BoxGeometry( 5, 5, 5 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xFFFF00 } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );

//Cone Geometry
const coneGeometry = new THREE.ConeGeometry( 3, 7, 5 ); 
const coneMaterial = new THREE.MeshBasicMaterial( {color: 0x800000} );
const cone = new THREE.Mesh(coneGeometry, coneMaterial ); 
scene.add( cone );

//Cylinder Geometry
const cylinderGeometry = new THREE.CylinderGeometry( 2, 1, 7, 32 ); 
const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x006400} ); 
const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial ); 
scene.add( cylinder );

//Sphere Geometry
const sphereGeometry = new THREE.SphereGeometry( 2.8, 32, 10 ); 
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xFFC0CB } ); 
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial ); 
scene.add( sphere );

//Torus Geometry
const torusGeometry = new THREE.TorusGeometry(4.5, 2.5, 16, 40 ); 
const torusMaterial = new THREE.MeshNormalMaterial( { color: 0xFFC0CB } ); 
const torus = new THREE.Mesh( torusGeometry, torusMaterial ); 
scene.add( torus );

//Camera Placement
camera.position.z = 15;

//Define the animations of Geometries
function animate() {
	requestAnimationFrame( animate );

    //cubeAnim
	cube.rotation.x += 0;
	cube.rotation.y += 0.05;
    cube.rotation.z += 0.05;
    cube.position.x = 17.5;
    cube.position.y = 6 + 1.5 * Math.sin(3 * Date.now() * 0.001);;
    cube.position.z = -2.5;

    //coneAnim
    cone.rotation.x += 0.08;
	cone.rotation.y += 0.08;
    cone.rotation.z += 0;
    cone.position.x = 17.5;
    cone.position.y = -6;
    cone.position.z = -2.5;

    //cylinderAnim
    cylinder.rotation.x += 0.02;
	cylinder.rotation.y += 0.01;
    cylinder.rotation.z += -0.03;
    cylinder.position.x = -15;
    cylinder.position.y = 5.4;
    cylinder.position.z = 0;

    //sphereAnim
    sphere.rotation.x += 0.1;
	sphere.rotation.y += 0.1;
    sphere.rotation.z += 0.1;
    sphere.position.x = -15 + 2 * Math.sin(10 * Date.now() * 0.001);
    sphere.position.y = -5.2;
    sphere.position.z = 0;

    //torusAnim
    torus.rotation.x += 0;
	torus.rotation.y += -0.05;
    torus.rotation.z += 0.1;
    torus.position.x = 0;
    torus.position.y = 0;
    torus.position.z = 2.5 * Math.sin(2 * Date.now() * 0.001);

    //Render the Scene and Animations
	renderer.render( scene, camera );
}

//Execute the animate() function
animate();