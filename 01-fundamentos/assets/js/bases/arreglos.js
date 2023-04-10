
const arr0 = new Array(10);
const arr = [];
console.log(arr);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];

console.log(videoJuegos);
console.log({videoJuegos});

console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    'Santiago',
    1 + 2,
    function(){
        console.log('1234')
    },
    ()=>{},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. light',
        ['Dr. Willy', 
          'Woodman',
        ],
    ]
];

console.log({arregloCosas});

console.log(arregloCosas[0]);
console.log(arregloCosas[2]);
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);


