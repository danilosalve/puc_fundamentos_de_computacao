var novoMap = new Map();

// Cria um Mapa, o mapa não duplica um dado.
novoMap.set('11/11/2011 - 23:30', {title: 'Titulo do Site'});
novoMap.set('11/11/2011 - 23:30', {title: 'Titulo do Site'});
novoMap.set('11/11/2011 - 23:31', {title: 'Titulo do Site'});

console.log(novoMap);

var resultado = novoMap.get('11/11/2011 - 23:31');
console.log(resultado);

var texto = 'olá pessoinha';
console.log(texto);

var novoSet = new Set();
novoSet.add('frontend');
novoSet.add('backend');
novoSet.add('full');
novoSet.add('full');
console.log(novoSet);