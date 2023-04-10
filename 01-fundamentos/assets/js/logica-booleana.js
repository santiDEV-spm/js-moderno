const regresaTrue = ()=>{
    console.log('Regresa true');
    return true;
};

const regresaFalse = ()=>{
    console.log('Regresa false');
    return false;
};

console.warn('Not o la negacion');
console.log(!regresaFalse());

console.error('And');
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaTrue());

console.warn('OR');
console.log(regresaFalse() || regresaFalse());
console.log(regresaTrue() || regresaFalse());

console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse && true;

const a3 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a4 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;


console.log({a1, a2, a3, a4});
