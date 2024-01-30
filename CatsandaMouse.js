function catAndMouse(x, y, z) {
if(Math.abs(z-x)<Math.abs(z-y)){
return 'Cat A';
}else if (Math.abs(z-x)>Math.abs(z-y)) {
return 'Cat B';
}else {
    return 'Mouse C';
}
}
catAndMouse(x, y, z);