import '../css/componentes.css';

export const saludar = ( nombre )=> {

    console.log('Creando etiqueta H1');

    const h1= document.createElement('h1');
    h1.innerHTML= `Hola, ${ nombre }, Como estas`;
    document.body.append( h1 );


}

export const history = ( his )=> {

    console.log('Creando etiqueta P');

    const p= document.createElement('p');
    p.innerHTML= `Mi historia, ${ his }`;
    document.body.append( p );


}