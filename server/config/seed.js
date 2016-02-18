/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Cine from '../api/cine/cine.model';
import User from '../api/user/user.model';
import Peliculas from '../api/pelicula/pelicula.model';

Cine.find({}).removeAsync()
    .then(() => {
        Cine.create([{
            "name": "Cinemark Alto Las Condes",
            "url": "/?id=1097&id_Ficha=633",
            "address": "Av. Kennedy 9001, local 3092. Las Condes"
        }, {
            "name": "Cinemark Plaza Norte",
            "url": "/?id=1097&id_Ficha=4020",
            "address": "Av. Américo Vespucio 1737, Local C6. Huechuraba"
        }, {
            "name": "Cinemark Plaza Oeste",
            "url": "/?id=1097&id_Ficha=635",
            "address": "Av. Américo Vespucio 1501, Local D1. Cerrillos"
        }, {
            "name": "Cinemark Plaza Tobalaba",
            "url": "/?id=1097&id_Ficha=636",
            "address": "Camilo Henríquez 3296. Puente Alto"
        }, {
            "name": "Cinemark Plaza Vespucio",
            "url": "/?id=1097&id_Ficha=637",
            "address": "Av. Vicuña Mackenna Oriente 7110, Loc. 158. La Florida"
        }, {
            "name": "Cinemark Portal Ñuñoa",
            "url": "/?id=1097&id_Ficha=7792",
            "address": "Av. José Pedro Alessandri 1166, local 4033. Portal Ñuñoa. Ñuñoa"
        }, {
            "name": "Cineplanet (Costanera Center)",
            "url": "/?id=1097&id_Ficha=8340",
            "address": "Avda. Andrés Bello 2425, Local 6600. Providencia"
        }, {
            "name": "Cineplanet (Florida Center)",
            "url": "/?id=1097&id_Ficha=4022",
            "address": "Av. Vicuña Mackenna 6100. Esquina Departamental. La Florida"
        }, {
            "name": "Cineplanet (La Dehesa)",
            "url": "/?id=1097&id_Ficha=342",
            "address": "Av. La Dehesa 1445. Mall Portal La Dehesa, esquina Comandante Malbec. Lo Barnechea"
        }, {
            "name": "Cineplanet (Paseo Quilín)",
            "url": "/?id=1097&id_Ficha=9592",
            "address": "Av. Américo Vespucio 3300. Estación Metro Quilín. Macul"
        }, {
            "name": "Cineplanet Plaza Alameda",
            "url": "/?id=1097&id_Ficha=4016",
            "address": "Av. Libertador Bernardo O`Higgins 3470. Cuarto piso del Mall Plaza Alameda. Estación Central"
        }, {
            "name": "Hoyts (Arauco Quilicura)",
            "url": "/?id=1097&id_Ficha=8833",
            "address": "Av. O´Higgins 581. En Mall Arauco Quilicura. Quilicura"
        }, {
            "name": "Hoyts (Melipilla)",
            "url": "/?id=1097&id_Ficha=8559",
            "address": "Serrano 395, Mall Vivo. Melipilla"
        }, {
            "name": "Hoyts (Paseo San Bernardo)",
            "url": "/?id=1097&id_Ficha=10115",
            "address": "Eyzaguirre 650. Mall Paseo San Bernardo. San Bernardo"
        }, {
            "name": "Hoyts Arauco Maipú",
            "url": "/?id=1097&id_Ficha=682",
            "address": "Av. Américo Vespucio 399, Local 145. Mall Arauco Maipú. Maipú"
        }, {
            "name": "Hoyts Estación Central",
            "url": "/?id=1097&id_Ficha=640",
            "address": "Exposición 155. Estación Central"
        }, {
            "name": "Hoyts La Reina",
            "url": "/?id=1097&id_Ficha=642",
            "address": "Av. Ossa 655. La Reina"
        }, {
            "name": "Hoyts Los Dominicos",
            "url": "/?id=1097&id_Ficha=1534",
            "address": "Camino El Alba 11969, Local 226. Las Condes"
        }, {
            "name": "Hoyts Los Trapenses",
            "url": "/?id=1097&id_Ficha=3880",
            "address": "Av. Los Trapenses 3515. Mall Paseo los Trapenses. Lo Barnechea"
        }, {
            "name": "Hoyts Parque Arauco",
            "url": "/?id=1097&id_Ficha=650",
            "address": "Av. Kennedy 5413, Local 250. Las Condes"
        }, {
            "name": "Hoyts Plaza Egaña",
            "url": "/?id=1097&id_Ficha=10074",
            "address": "Larraín 5862. La Reina"
        }, {
            "name": "Hoyts Puente Alto",
            "url": "/?id=1097&id_Ficha=667",
            "address": "Concha y Toro 1092. Puente Alto"
        }, {
            "name": "Hoyts San Agustín",
            "url": "/?id=1097&id_Ficha=643",
            "address": "Moneda 835. Subsuelo Paseo San Agustín. Santiago"
        }]);
    });

Peliculas.find({}).removeAsync()
    .then(() => {
        Peliculas.create(
            [{
                "name": "Alvin y las Ardillas. Aventura sobre Ruedas",
                "link": "/?id=1101&id_Ficha=4096",
                "img": "http://adm.1.cl/galeriasitios/Z33/2016/1/15/Z33__Fp-Alvin-y-las-Ardilla.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Doblada:   1320\t1540\t1800\t2020"
                }, {
                    "name": "Cinemark Plaza Norte",
                    "infoCine": "Doblada : 1110\t1325\t1540\t1800"
                }, {
                    "name": "Cinemark Plaza Oeste",
                    "infoCine": "Doblada: Fin de semana:  1020   1155\t1345\t1615\t1840"
                }, {
                    "name": "Cinemark Plaza Tobalaba",
                    "infoCine": "Doblada:  1100\t1310\t1530\t1750\t2010"
                }, {
                    "name": "Cinemark Plaza Vespucio",
                    "infoCine": "Doblada:  1215\t1435\t1650\t1910"
                }, {
                    "name": "Cinemark Portal Ñuñoa",
                    "infoCine": "Doblada:  1150\t1420\t1640"
                }, {
                    "name": "Cineplanet (Costanera Center)",
                    "infoCine": "Doblada: 11:40\t14:00\t16:15\t18:30"
                }, {
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Doblada:  11:00\t13:15\t15:25\t17:35\t19:40"
                }, {
                    "name": "Cineplanet (La Dehesa)",
                    "infoCine": "Doblada: 11:40\t13:50\t16:10\t18:20\t20:30"
                }, {
                    "name": "Cineplanet (Paseo Quilín)",
                    "infoCine": "Doblada:  12:00\t14:10\t16:20"
                }, {
                    "name": "Cineplanet Plaza Alameda",
                    "infoCine": "Doblada: 11:10\t12:20\t13:20\t14:30 \t15:30\t17:40\t19:50"
                }, {
                    "name": "Hoyts (Arauco Quilicura)",
                    "infoCine": "Doblada : 12:50; 15:00; 17:10; 19:20"
                }, {
                    "name": "Hoyts (Melipilla)",
                    "infoCine": "Doblada: 12:40; 14:55; 17:15"
                }, {
                    "name": "Hoyts (Paseo San Bernardo)",
                    "infoCine": "Doblada:  11:40; 13:50; 16:00; 18:20"
                }, {
                    "name": "Hoyts Arauco Maipú",
                    "infoCine": "Doblada:  10:50; 13:00; 15:10"
                }, {
                    "name": "Hoyts Estación Central",
                    "infoCine": "Doblada: 10:30;  11:30; 12:50; 15:10; 17:30; 19:45  13:50; 16:10"
                }, {
                    "name": "Hoyts La Reina",
                    "infoCine": "Doblada: 10:10, 11:20; 12:20; 13:30; 14:30; 15:40; 16:40;  17:50; 20:00"
                }, {
                    "name": "Hoyts Los Dominicos",
                    "infoCine": "Dobalda:  11:50;   12:40; 13:50; 14:50; 16:00;  17:00; 19:10"
                }, {
                    "name": "Hoyts Los Trapenses",
                    "infoCine": "Doblada: 12:00; 13:10; 14:10;15:25; 17:35;  16:20"
                }, {
                    "name": "Hoyts Parque Arauco",
                    "infoCine": "Doblada: 11:20;  12:20; 13:30; 14:30;  15:45; 18:00; 20:10"
                }, {
                    "name": "Hoyts Plaza Egaña",
                    "infoCine": "Doblada: 11:10; 13:20; 15:30; 17:40; 19:50"
                }, {
                    "name": "Hoyts Puente Alto",
                    "infoCine": "Doblada: 10:40; 11:10;    13:00; 13:20; 15:10; 15:30;  17:20; 19:30"
                }, {
                    "name": "Hoyts San Agustín",
                    "infoCine": "Doblada: 11:00; 13:20; 15:35; 17:50; 20:10"
                }]
            }, {
                "name": "Cómo ser Soltera",
                "link": "/?id=1101&id_Ficha=4104",
                "img": "http://adm.1.cl/galeriasitios/Z33/2016/1/25/Z33__Fp-Como-Ser-Soltera.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Subtitulada: 1130\t1400\t1630\t1900\t2130\t   Viernes y Sábado:   0005"
                }, {
                    "name": "Cinemark Plaza Norte",
                    "infoCine": "Subtitulada: 1130\t1410\t1910\t2150\tViernes y Sábado:\t0030"
                }, {
                    "name": "Cinemark Plaza Oeste",
                    "infoCine": "Subtitulada:  1140\t1420\t1705\t1940\t2215  Viernes y Sábado:  0050"
                }, {
                    "name": "Cinemark Plaza Vespucio",
                    "infoCine": "Subtitulada:  1130\t1420\t1710\t1940\t2230"
                }, {
                    "name": "Cinemark Portal Ñuñoa",
                    "infoCine": "Subtitulada: 1110\t1350\t1630\t1920\t2200"
                }, {
                    "name": "Cineplanet (Costanera Center)",
                    "infoCine": "Subtitulada:  15:40\t\t18:00\t20:20\t22:40"
                }, {
                    "name": "Cineplanet (Costanera Center)",
                    "infoCine": "Subtitulada Prime: 19:20"
                }, {
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Doblada: 12:20\t14:40\t17:00\t\t19:20   21:40"
                }, {
                    "name": "Cineplanet (La Dehesa)",
                    "infoCine": "Subtitulada:  12:30\t\t14:50\t17:10\t19:30\t21:50"
                }, {
                    "name": "Cineplanet (La Dehesa)",
                    "infoCine": "Subtitulada: 22:40(***)"
                }, {
                    "name": "Cineplanet (Paseo Quilín)",
                    "infoCine": "Subtitulada:  12:30\t\t14:40\t17:00\t19:30\t22:00"
                }, {
                    "name": "Hoyts Los Dominicos",
                    "infoCine": "Subtitulada :  13:10; 15:40; 18:15; 20:45"
                }, {
                    "name": "Hoyts Los Trapenses",
                    "infoCine": "Subtitulada:  13:30; 16:00; 18:40; 21:15"
                }, {
                    "name": "Hoyts Parque Arauco",
                    "infoCine": "Subtitulada:   12:10; 14:40; 17:10; 19:40; 22:15"
                }, {
                    "name": "Hoyts Plaza Egaña",
                    "infoCine": "Subtitulada: 19:10; 21:40"
                }, {
                    "name": "Hoyts San Agustín",
                    "infoCine": "Subtitulada:  14:10; 19:30"
                }]
            }, {
                "name": "Conspiración y Poder",
                "link": "/?id=1101&id_Ficha=4097",
                "img": "http://adm.1.cl/galeriasitios/Z33/2016/1/22/Z33__Fp-Truth.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Subtitulada:     Viernes y Sábado:   0015"
                }]
            }, {
                "name": "Deadpool",
                "link": "/?id=1101&id_Ficha=4045",
                "img": "http://adm.1.cl/galeriasitios/Z33/2015/11/25/Z33__FP-Deadpool.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Subtitulada:  \t 1150\t1330   1430\t1600   1710\t1830\t1950\t2100    2230       Viernes y Sábado:   0015"
                }, {
                    "name": "Cinemark Plaza Norte",
                    "infoCine": "Doblada: 1100 \t1340\t\t1900    Subtitulada: 1620\t\t2140   Viernes y Sábado:  0020"
                }, {
                    "name": "Cinemark Plaza Oeste",
                    "infoCine": "Doblada: 1730     Subtitulada:  1200\t    1430\t1700\t1930\t2110\t2205  Viernes y Sábado: \t2355      0040"
                }, {
                    "name": "Cinemark Plaza Tobalaba",
                    "infoCine": "Subtitulada: 1140\t1420\t1700\t1940\t2220      Viernes y Sábado: 2350"
                }, {
                    "name": "Cinemark Plaza Vespucio",
                    "infoCine": "Doblada:  1200\t\t1720\t\t2000    Subtitulada: 1100\t1340 1440\t1620\t1900\t2140   \t2240 \t  Viernes y Sábado: \t0020"
                }, {
                    "name": "Cinemark Portal Ñuñoa",
                    "infoCine": "Doblada:  1130\t1410\t1650\t1930\t2210 Subtitulada:  Viernes y Sábado:    0035"
                }, {
                    "name": "Cineplanet (Costanera Center)",
                    "infoCine": "Doblada:   10:40\t13:10    Subtitulada:   11:20\t13:50\t16:20\t18:50\t21:20\t23:50(***)  Doblada Prime: 12:20    Subtitulada POrime: 15:00\t\t17:30\t20:00\t22:30"
                }, {
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Doblada: 11:10\t12:30   13:40\t16:10\t18:40\t21:10\t23:40(***)   Subtitulada: 15:00\t\t17:30\t\t\t20:00\t\t22:30"
                }, {
                    "name": "Cineplanet (La Dehesa)",
                    "infoCine": "Doblada:  13:10\t15:30"
                }, {
                    "name": "Cineplanet (Paseo Quilín)",
                    "infoCine": "Doblada:11:30\t\t  13:00  \t14:00\t16:30\t19:00    Subtitulada:  15:30\t18:00\t20:30    21:30"
                }, {
                    "name": "Cineplanet Plaza Alameda",
                    "infoCine": "Doblada: 11:30\t14:00\t16:30\t19:00\t 20:00\t21:30   \t22:20"
                }, {
                    "name": "Hoyts (Arauco Quilicura)",
                    "infoCine": "Doblada:  11:00; 13:30; 16:00; 18:30; 21:00   Doblada 4DX: 12:00; 14:30; 17:00; 19:30   Subtitulada 4DX: 22:00"
                }, {
                    "name": "Hoyts (Melipilla)",
                    "infoCine": "Doblada: 11:30; 14:00; 16:30; 19:00  Subtitulada:  21:30"
                }, {
                    "name": "Hoyts (Paseo San Bernardo)",
                    "infoCine": "Doblada: 11:30; 14:00; 16:30; 19:00; 21:30"
                }, {
                    "name": "Hoyts Arauco Maipú",
                    "infoCine": "Doblada.: 11:00;  12:00; 13:30;  14:30; 16:00; 17:00;  18:30; 21:00; (23:30)    Subtitulada: 22:00; (00:20)  Doblada 4DX: 10:00; 12:30; 15:00; 17:30  Subtitulada 4DX: 20:00; 22:30"
                }, {
                    "name": "Hoyts Estación Central",
                    "infoCine": "Doblada.:  11:00; 13:30; 16:00; 18:30; 21:00  Subtitulada 4DX: 19:20; 21:40"
                }, {
                    "name": "Hoyts La Reina",
                    "infoCine": "Doblada:  11:00; 13:30; 16:00; 18:30; 21:00; (23:30)    Subtitulada: 12:00; 14:30; 17:00; 19:30; 22:00; (00:30)   Doblada 4DX: 11:30; 14:00; 16:30    Subtitulada 4DX: 19:00; 21:30; (00:00)"
                }, {
                    "name": "Hoyts Los Dominicos",
                    "infoCine": "Subtitulada: 11:30; 14:00; 16:30; 19:00; 21:30"
                }, {
                    "name": "Hoyts Los Trapenses",
                    "infoCine": "Subtitulada: 12:20; 14:45; 17:10; 19:30; 21:50"
                }, {
                    "name": "Hoyts Parque Arauco",
                    "infoCine": "Subtitulada: 11:30; 14:00; 16:30; 19:00; 21:30; (00:00)    Doblada 4DX: 12:30; 17:30   Subtitulada 4DX: 15:00; 20:00    Subtitulada Premium: [12:00]; 14:30; 17:00; 19:30; 22:00"
                }, {
                    "name": "Hoyts Plaza Egaña",
                    "infoCine": "Doblada: 11:30; 16:30   Subtitulada: 14:00; 19:00; 21:30      Subtitulada Premium: [13:00]; 18:30  Doblada 4DX: 12:00; 14:30     Subtitulada 4DX: 17:00; 19:30; 22:00   Doblada Imax: 10:20; 15:00    Subtitulada Imax:  12:40; 17:30; 20:00; 22:30"
                }, {
                    "name": "Hoyts Puente Alto",
                    "infoCine": "Doblada:  11:00; 13:30; 16:00; 18:30; 21:00       Subtitulada:    21:50"
                }, {
                    "name": "Hoyts San Agustín",
                    "infoCine": "Doblada: 11:30; 16:30  Subtitulada:  14:00; 19:00; 21:30"
                }]
            }, {
                "name": "El Niño",
                "link": "/?id=1101&id_Ficha=4074",
                "img": "http://adm.1.cl/galeriasitios/Z33/2016/1/27/Z33__Fp-El-Nino.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Subtitulada:  1700\t1920\t2200\t Viernes y Sábado:    0010"
                }, {
                    "name": "Cinemark Plaza Norte",
                    "infoCine": "Doblada:  1650       2250"
                }, {
                    "name": "Cinemark Plaza Oeste",
                    "infoCine": "Doblada:\t\t 1245\t\t1725  Subtitulada: 1505\t\t1950\t2230    Viernes y Sábado: 0055"
                }, {
                    "name": "Cinemark Plaza Tobalaba",
                    "infoCine": "Subtitulada: 1630     2230"
                }, {
                    "name": "Cinemark Plaza Vespucio",
                    "infoCine": "Subtitulada:   1140\t1410\t1635\t1850\t2120\t2340   Subtitulada:  1440\t\t2240  Viernes y Sábado:    0100"
                }, {
                    "name": "Cineplanet (Costanera Center)",
                    "infoCine": "Subtitulada:  12:00\t\t14:20\t\t16:50\t19:10\t21:30\t23:40(***)"
                }, {
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Subtitulada:  12:00\t\t14:20\t16:40\t19:00\t21:20\t23:50(***)"
                }, {
                    "name": "Cineplanet Plaza Alameda",
                    "infoCine": "Doblada:   17:00\t\t19:20\t\t21:40"
                }, {
                    "name": "Hoyts (Arauco Quilicura)",
                    "infoCine": "Subtitulada: 21:50"
                }, {
                    "name": "Hoyts (Paseo San Bernardo)",
                    "infoCine": "Doblada: 19:30; 21:50"
                }, {
                    "name": "Hoyts Arauco Maipú",
                    "infoCine": "Doblada: 15:30; 17:45     Subtitulada:  20:00; 22:15; (00:30)"
                }, {
                    "name": "Hoyts Estación Central",
                    "infoCine": "Doblada: 15:40; 18:00; 20:15"
                }, {
                    "name": "Hoyts La Reina",
                    "infoCine": "Subtitulada: 17:15; 22:00; (00:10)"
                }, {
                    "name": "Hoyts Parque Arauco",
                    "infoCine": "Subtitulada: 19:20; (00:20)"
                }, {
                    "name": "Hoyts Plaza Egaña",
                    "infoCine": "Subtitulada:  13:30; 18:20"
                }, {
                    "name": "Hoyts Puente Alto",
                    "infoCine": "Doblada: 17:50; 20:10     Subtitulada:  22:30"
                }, {
                    "name": "Hoyts San Agustín",
                    "infoCine": "Doblada:    14:35; 17:00    Subtitulada:  19:20; 21:40"
                }]
            }, {
                "name": "El Renacido",
                "link": "/?id=1101&id_Ficha=4042",
                "img": "http://adm.1.cl/galeriasitios/Z33/2015/11/25/Z33__Fp-el-Renaciod.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Subtitulada:   1140\t1500   1550\t1820\t  1910\t2150    2230     Viernes y Sábado:  2330"
                }, {
                    "name": "Cinemark Plaza Norte",
                    "infoCine": "Subtitulada: 1920"
                }, {
                    "name": "Cinemark Plaza Oeste",
                    "infoCine": "Subtitulada: 1220\t1540\t1900\t2220"
                }, {
                    "name": "Cinemark Plaza Tobalaba",
                    "infoCine": "Doblada:  1600\t1920      Subtitulada:  2240"
                }, {
                    "name": "Cinemark Plaza Vespucio",
                    "infoCine": "Subtitulada: 1150\t1520\t1845\t2210"
                }, {
                    "name": "Cinemark Portal Ñuñoa",
                    "infoCine": "Subtitulada:  1210\t1530\t1900\t2220"
                }, {
                    "name": "Cineplanet (Costanera Center)",
                    "infoCine": "Subtitulada: 12:40\t\t15:50\t19:00\t20:40\t22:20   Subtitulada Prime: 13:30"
                }, {
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Subtitulada: 12:10\t15:20\t18:20\t   20:20\t21:30"
                }, {
                    "name": "Cineplanet (La Dehesa)",
                    "infoCine": "Subtitulada: 15:20\t18:30\t21:40"
                }, {
                    "name": "Cineplanet (Paseo Quilín)",
                    "infoCine": "Subtitulada:  18:30\t\t21:40"
                }, {
                    "name": "Cineplanet Plaza Alameda",
                    "infoCine": "Doblada:  16:50"
                }, {
                    "name": "Hoyts (Arauco Quilicura)",
                    "infoCine": "Subtitulada: 21:30"
                }, {
                    "name": "Hoyts (Melipilla)",
                    "infoCine": "Subtitulada:  20:40"
                }, {
                    "name": "Hoyts (Paseo San Bernardo)",
                    "infoCine": "Doblada: 17:45; 21:10"
                }, {
                    "name": "Hoyts Arauco Maipú",
                    "infoCine": "Doblada: 14:50; 18:00"
                }, {
                    "name": "Hoyts La Reina",
                    "infoCine": "Subtitulada: 12:20; 15:30;  17:30; 18:40;  20:50; 21:50  (00:00)"
                }, {
                    "name": "Hoyts Los Dominicos",
                    "infoCine": "Subtitulada:  18:00; 21:10"
                }, {
                    "name": "Hoyts Los Trapenses",
                    "infoCine": "Subtitulada:  18:30; 21:40"
                }, {
                    "name": "Hoyts Parque Arauco",
                    "infoCine": "Subtitulada :12:20; 15:30; 18:50; 22:00   Subtitulada Premium: 14:00; 17:30; 21:00"
                }, {
                    "name": "Hoyts Plaza Egaña",
                    "infoCine": "Subtitulada:  12:10; 15:30; 18:40; 21:55     Subtitulada Premium: 14:00; 17:30; 21:00"
                }, {
                    "name": "Hoyts Puente Alto",
                    "infoCine": "Doblada: 18:20; 21:40"
                }, {
                    "name": "Hoyts San Agustín",
                    "infoCine": "Subtitulada: 11:20; 14:40; 18:00; 21:15"
                }]
            }, {
                "name": "En Primera Plana",
                "link": "/?id=1101&id_Ficha=4076",
                "img": "http://adm.1.cl/galeriasitios/Z33/2016/1/22/Z33__Fp-Spotlight.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Subtitulada:  1350\t1640\t1930\t2220"
                }, {
                    "name": "Cinemark Portal Ñuñoa",
                    "infoCine": "Subtitulada: 1240\t1540\t1840\t2140"
                }, {
                    "name": "Cineplanet (Costanera Center)",
                    "infoCine": "Subtitulada:  14:40\t\t17:20\t20:10\t22:50   Subtitulada Prime:  16:40"
                }, {
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Subtitulada: 16:30\t19:30\t22:20"
                }, {
                    "name": "Hoyts La Reina",
                    "infoCine": "Subtitulada: 10:20; 13:00; 15:45; 18:25; 21:15; (00:00)"
                }, {
                    "name": "Hoyts Los Dominicos",
                    "infoCine": "Subtitulada:  15:50; 21:00"
                }, {
                    "name": "Hoyts Los Trapenses",
                    "infoCine": "Subtitulada: 12:15; 15:10; 18:10; 21:00"
                }, {
                    "name": "Hoyts Parque Arauco",
                    "infoCine": "Subtitulada Premium: [12:30]; 15:30; 18:30; 21:30"
                }, {
                    "name": "Hoyts Plaza Egaña",
                    "infoCine": "Subtitulada Premium: 15:30; 21:30"
                }, {
                    "name": "Hoyts San Agustín",
                    "infoCine": "Subtitulada: 11:15; 16:40; 22:00"
                }]
            }, {
                "name": "Joy: El Nombre del Éxito",
                "link": "/?id=1101&id_Ficha=4044",
                "img": "http://adm.1.cl/galeriasitios/Z33/2015/11/25/Z33__Fp-Joy.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Subtitulada:  1250\t1540\t1830\t2120"
                }, {
                    "name": "Cineplanet (La Dehesa)",
                    "infoCine": "Subtitulada:  11:30\t14:00\t16:30\t19:00\t21:30"
                }, {
                    "name": "Cineplanet (La Dehesa)",
                    "infoCine": "Subtitulada:  12:40"
                }, {
                    "name": "Hoyts Arauco Maipú",
                    "infoCine": "Subtitulada:  19:40; 22:15"
                }, {
                    "name": "Hoyts Los Dominicos",
                    "infoCine": "Subtitulada:  21:20"
                }, {
                    "name": "Hoyts Los Trapenses",
                    "infoCine": "Subtitulada: 21:30"
                }, {
                    "name": "Hoyts Parque Arauco",
                    "infoCine": "Subtitulada: 16:40; 21:40"
                }]
            }, {
                "name": "La Quinta Ola",
                "link": "/?id=1101&id_Ficha=4022",
                "img": "http://adm.1.cl/galeriasitios/Z33/2016/1/22/Z33__Fp-La-Quinta-Ola.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Subtitulada:  1330\t1610\t1850\t2140"
                }, {
                    "name": "Cinemark Plaza Norte",
                    "infoCine": "Doblada:   1120\t1400\t1640"
                }, {
                    "name": "Cinemark Plaza Oeste",
                    "infoCine": "Doblada: Fin de semana  1125\t  1400\t1635\t1910\t2145\t  Viernes y Sábado: 0025"
                }, {
                    "name": "Cinemark Plaza Tobalaba",
                    "infoCine": "Doblada :  1110\t1350\t\t1900    Subtitulada:  2150"
                }, {
                    "name": "Cinemark Plaza Vespucio",
                    "infoCine": "Doblada: 1220\t1450\t1725\t2250\t    Subtitulada:  2010            2130"
                }, {
                    "name": "Cinemark Portal Ñuñoa",
                    "infoCine": "Subtitulada: 1910 \t2150  Viernes y Sábado:   0030"
                }, {
                    "name": "Cineplanet (Costanera Center)",
                    "infoCine": "Subtitulada:  12:10\t\t14:30\t17:00\t19:40\t22:10"
                }, {
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Doblada.  11:30\t12:40\t14:00\t15:10\t17:50\t20:10\t22:40"
                }, {
                    "name": "Cineplanet (La Dehesa)",
                    "infoCine": "Subtitulada:  22:30"
                }, {
                    "name": "Cineplanet Plaza Alameda",
                    "infoCine": "Doblada: 13:10\t15:40\t18:10\t20:40"
                }, {
                    "name": "Hoyts (Arauco Quilicura)",
                    "infoCine": "Doblada: 12:10; 14:35; 17:00; 19:25"
                }, {
                    "name": "Hoyts (Melipilla)",
                    "infoCine": "Doblada: 19:30; 22:00"
                }, {
                    "name": "Hoyts (Paseo San Bernardo)",
                    "infoCine": "Doblada: 11:00; 13:30; 16:10; 18:40; 21:10"
                }, {
                    "name": "Hoyts Arauco Maipú",
                    "infoCine": "Doblada: 11:10; 13:40; 16:10; 18:40; 21:10   Subtitulada:  (23:40)"
                }, {
                    "name": "Hoyts Estación Central",
                    "infoCine": "Doblada: 11:40; 14:15; 16:45; 19:15; 21:45"
                }, {
                    "name": "Hoyts La Reina",
                    "infoCine": "Doblada: 12:10; 14:40; 17:10     Subtitulada: 19:40; 22:15"
                }, {
                    "name": "Hoyts Los Trapenses",
                    "infoCine": "Subtitulada: 14:00; 16:30; 19:00"
                }, {
                    "name": "Hoyts Parque Arauco",
                    "infoCine": "Doblada: 10:50; 13:20     Subtitulada: 15:50; 18:20; 20:50; (23:20)"
                }, {
                    "name": "Hoyts Plaza Egaña",
                    "infoCine": "Subtitulada: 11:00; 15:45; 20:40"
                }, {
                    "name": "Hoyts Puente Alto",
                    "infoCine": "Doblada:  12:10; 14:40; 17:10; 19:40; 22:10"
                }, {
                    "name": "Hoyts San Agustín",
                    "infoCine": "Doblada: 10:50; 16:00    Subtitulada :  13:30; 18:40; 21:20"
                }]
            }, {
                "name": "Punto de Quiebre",
                "link": "/?id=1101&id_Ficha=3976",
                "img": "http://adm.1.cl/galeriasitios/Z33/2015/10/13/Z33__Fp-Punto-de-Quiebre.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Subtitulada:   2240"
                }]
            }, {
                "name": "Sin Filtro",
                "link": "/?id=1101&id_Ficha=4087",
                "img": "http://adm.1.cl/galeriasitios/Z33/2016/1/13/Z33__Fp-Sin-Filtro.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "1240\t1500\t1720\t1940\t2210\t Viernes y Sábado:  0035"
                }, {
                    "name": "Cinemark Plaza Norte",
                    "infoCine": "1150\t1420\t1700\t1930\t2200"
                }, {
                    "name": "Cinemark Plaza Oeste",
                    "infoCine": "1215\t1435\t1655\t 1830\t1920\t 2100\t2150\t2325\t  Viernes y Sábado:   0020"
                }, {
                    "name": "Cinemark Plaza Tobalaba",
                    "infoCine": "1120\t1400\t1620\t1850\t2120"
                }, {
                    "name": "Cinemark Plaza Vespucio",
                    "infoCine": "1120  1210\t1330    1430\t1550    1700\t1830    1930\t\t2110    2200 Viernes y Sábado: 0040"
                }, {
                    "name": "Cinemark Portal Ñuñoa",
                    "infoCine": "1230\t1500\t1730\t2000\t2230        Viernes y Sábado:   0045"
                }, {
                    "name": "Cineplanet (Costanera Center)",
                    "infoCine": "11:10\t13:20\t14:10\t15:30\t16:30\t17:40\t18:40\t19:50\t21:00   22:00   23:10(***)"
                }, {
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "11:50\t13:00\t14:10\t15:15\t16:20\t17:20\t18:30\t19:35\t20:50\t21:45  \t23:00(***)"
                }, {
                    "name": "Cineplanet (La Dehesa)",
                    "infoCine": "12:00\t14:10\t16:20\t18:40\t20:50"
                }, {
                    "name": "Cineplanet (Paseo Quilín)",
                    "infoCine": "12:50\t17:30\t\t19:40"
                }, {
                    "name": "Cineplanet Plaza Alameda",
                    "infoCine": "12:30\t14:40      16:40      22:00"
                }, {
                    "name": "Hoyts (Arauco Quilicura)",
                    "infoCine": "Doblada: 11:50; 14:20; 16:45; 19:10; 21:40"
                }, {
                    "name": "Hoyts (Melipilla)",
                    "infoCine": "15:50; 18:15"
                }, {
                    "name": "Hoyts (Paseo San Bernardo)",
                    "infoCine": "Doblada: 12:10; 14:30; 16:50; 19:20; 21:40"
                }, {
                    "name": "Hoyts Arauco Maipú",
                    "infoCine": "Doblada : 10:10; 12:20; 14:40; 16:55; 19:10; 21:30; (23:50)"
                }, {
                    "name": "Hoyts Estación Central",
                    "infoCine": "10:40; 13:00; 15:20; 17:40; 20:00; 22:20"
                }, {
                    "name": "Hoyts La Reina",
                    "infoCine": "10:50;  11:40;13:00; 14:00; 15:20;  16:20;17:40;  18:40; 20:00; 22:20;  21:00; ((23:20)00:30)"
                }, {
                    "name": "Hoyts Los Dominicos",
                    "infoCine": "Doblada: 17:20; 17:30; 19:30; 19:40; 21:40;  21:50"
                }, {
                    "name": "Hoyts Los Trapenses",
                    "infoCine": "Subtitulada:  19:45; 22:00"
                }, {
                    "name": "Hoyts Parque Arauco",
                    "infoCine": "11:40; 13:50; 16:10; 17:30;   18:30; 19:50;  21:00;22:10;  (23:30)   (00:30)    Subtitulada Premium: [13:30]; 16:30; 22:30"
                }, {
                    "name": "Hoyts Plaza Egaña",
                    "infoCine": "Doblada: 11:20; 13:50; 16:20; 18:50; 21:15"
                }, {
                    "name": "Hoyts San Agustín",
                    "infoCine": "10:30; 12:50; 15:15; 17:40; 20:00; 22:20"
                }]
            }, {
                "name": "Snoopy y Charlie Brown: Peanuts la Película",
                "link": "/?id=1101&id_Ficha=3705",
                "img": "http://adm.1.cl/galeriasitios/Z33/2015/10/13/Z33__Fp-Snoopy-1.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Doblada:  1230\t1450"
                }, {
                    "name": "Cinemark Plaza Oeste",
                    "infoCine": "Doblada: Fin de semana :  1000     1135  \t1350\t1610"
                }, {
                    "name": "Cinemark Plaza Tobalaba",
                    "infoCine": "Doblada:  1130\t1340"
                }, {
                    "name": "Cineplanet (Costanera Center)",
                    "infoCine": "Doblada:  11:50"
                }, {
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Doblada: 11:40\t13:50\t16:00\t18:10"
                }, {
                    "name": "Cineplanet Plaza Alameda",
                    "infoCine": "Doblada:  11:40\t13:50\t16:00\t18:10"
                }, {
                    "name": "Hoyts (Melipilla)",
                    "infoCine": "Doblada: 11:10; 13:30"
                }, {
                    "name": "Hoyts (Paseo San Bernardo)",
                    "infoCine": "Doblada:  13:00; 15:10; 17:20"
                }, {
                    "name": "Hoyts Arauco Maipú",
                    "infoCine": "Doblada: 11:15; 13:20"
                }, {
                    "name": "Hoyts Estación Central",
                    "infoCine": "Doblada: 11:10; 13:20"
                }, {
                    "name": "Hoyts La Reina",
                    "infoCine": "Doblada: 10:40; 12:50; 15:00"
                }, {
                    "name": "Hoyts Los Dominicos",
                    "infoCine": "Doblada:  11:20; 13:20; 15:25"
                }, {
                    "name": "Hoyts Parque Arauco",
                    "infoCine": "Doblada: 11:00; 13:10; 15:20"
                }, {
                    "name": "Hoyts Plaza Egaña",
                    "infoCine": "Doblada:  12:25; 14:40; 16:50"
                }, {
                    "name": "Hoyts Puente Alto",
                    "infoCine": "Doblada: 11:40; 14:00; 16:10"
                }, {
                    "name": "Hoyts San Agustín",
                    "infoCine": "Doblada:  10:00; 12:20"
                }]
            }, {
                "name": "Transportador El Legado",
                "link": "/?id=1101&id_Ficha=4098",
                "img": "http://adm.1.cl/galeriasitios/Z33/2016/1/22/Z33__Fp-Transporter-Legacy.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Subtitulada:  1300\t1520\t1730\t1940\t2210\tViernes y Sábado:  0030"
                }, {
                    "name": "Cinemark Plaza Oeste",
                    "infoCine": "Subtitulada:     Viernes y Sábado:     0005"
                }, {
                    "name": "Cinemark Plaza Vespucio",
                    "infoCine": "Doblada: 2345"
                }, {
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Subtitulada:  23:35(***)"
                }]
            }, {
                "name": "Zoolander 2",
                "link": "/?id=1101&id_Ficha=4038",
                "img": "http://adm.1.cl/galeriasitios/Z33/2015/11/23/Z33__Fp-Zoolander-2.jpg",
                "cines": [{
                    "name": "Cinemark Alto Las Condes",
                    "infoCine": "Doblada: 1200\t   1410\t1620    Subtitulada: 1840  \t2110\t  Viernes y Sábado: 2340"
                }, {
                    "name": "Cinemark Plaza Norte",
                    "infoCine": "Doblada: 1210  \t1440\t1940      Subtitulada:  1710\t2210\t0040"
                }, {
                    "name": "Cinemark Plaza Oeste",
                    "infoCine": "Doblada: 1120  \t1355\t1850      Subtitulada:  1620\t2120"
                }, {
                    "name": "Cinemark Plaza Tobalaba",
                    "infoCine": "Doblada: 1150\t1410\t1640   Subtitulada: 1910\t2140    Viernes y Sábado: 2430"
                }, {
                    "name": "Cinemark Plaza Vespucio",
                    "infoCine": "Doblada:  1110\t1350\t1610     Subtitulada: 1920 \t2150 Viernes y Sábado: \t0030"
                }, {
                    "name": "Cinemark Portal Ñuñoa",
                    "infoCine": "Subtitulada:  1250\t1520\t1750\t2020\t2250      Viernes y Sábado:     0040"
                }, {
                    "name": "Cineplanet (Costanera Center)",
                    "infoCine": "Subtitulada:  11:15\t\t13:40\t16:00\t18:15\t20:30\t22:45"
                }, {
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Doblada: 13:10\t15:40\t18:00\t20:30  Subtitulada:  22:50"
                }, {
                    "name": "Cineplanet (La Dehesa)",
                    "infoCine": "Subtitulada: 12:50\t15:10\t17:30\t19:50\t22:20"
                }, {
                    "name": "Cineplanet (Paseo Quilín)",
                    "infoCine": "Doblada:  11:00\t13:10\t15:20\t17:40   Subtitulada: 20:00\t\t22:20"
                }, {
                    "name": "Cineplanet Plaza Alameda",
                    "infoCine": "Doblada: 11:20\t13:40\t16:10\t18:30\t20:50"
                }, {
                    "name": "Hoyts (Arauco Quilicura)",
                    "infoCine": "Doblada: 11:40; 14:00; 16:20; 18:45   Subtitulada:  21:10"
                }, {
                    "name": "Hoyts Arauco Maipú",
                    "infoCine": "Doblada:  11:50; 14:15; 16:40   Subtitulada: 19:00; 21:20; (23:45)"
                }, {
                    "name": "Hoyts Estación Central",
                    "infoCine": "Doblada: 11:50; 14:10; 16:30; 18:50"
                }, {
                    "name": "Hoyts La Reina",
                    "infoCine": "Doblada:  11:50; 16:40      Subtitulada: 14:15; 19:00; 21:20; (23:40)"
                }, {
                    "name": "Hoyts Los Dominicos",
                    "infoCine": "Subtitulada:  13:30; 18:40"
                }, {
                    "name": "Hoyts Parque Arauco",
                    "infoCine": "Subtitulada:  12:30; 14:50; 17:10; 19:30; 21:50; (00:10)"
                }, {
                    "name": "Hoyts Plaza Egaña",
                    "infoCine": "Doblada: 10:30; 12:45; 15:10      Subtitulada:   17:30; 19:55; 22:15"
                }, {
                    "name": "Hoyts Puente Alto",
                    "infoCine": "Doblada:  12:00; 14:20; 16:40; 19:00     Subtitulada: 21:20"
                }, {
                    "name": "Hoyts San Agustín",
                    "infoCine": "Doblada: 10:10; 12:30; 17:20       Subtitulada:  15:00; 19:40; 22:05"
                }]
            }, {
                "name": "Los Hijos del Diablo",
                "link": "/?id=1101&id_Ficha=4102",
                "img": "http://adm.1.cl/galeriasitios/Z33/2016/1/25/Z33__Fp-Los-Hijos-del-Diablo.jpg",
                "cines": [{
                    "name": "Cinemark Plaza Norte",
                    "infoCine": "Doblada: 2020      Subtitulada: 2240"
                }, {
                    "name": "Cinemark Plaza Oeste",
                    "infoCine": "Subtitulada: 1030\t1250\t1510\t2000\t2225\t Viernes y Sábado: \t0100"
                }, {
                    "name": "Cinemark Plaza Vespucio",
                    "infoCine": "Doblada:  1250\t\t1730   Subtitulada:  1510\t\t1950\t2220\tViernes y Sábado: \t0050"
                }, {
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Doblada : 11:05\t13:20\t15:30\t17:40\t19:50\t22:00"
                }, {
                    "name": "Cineplanet Plaza Alameda",
                    "infoCine": "Doblada: 12:10\t14:20\t18:50\t21:00"
                }, {
                    "name": "Hoyts (Paseo San Bernardo)",
                    "infoCine": "Doblada:  12:30; 14:50; 17:00; 19:10   Subtitulada: 21:20"
                }, {
                    "name": "Hoyts Arauco Maipú",
                    "infoCine": "Doblada: 17:20; 19:40  Subtitulada:  21:50; (00:00)"
                }, {
                    "name": "Hoyts La Reina",
                    "infoCine": "Subtitulada:  11:30; 13:40; 15:50; 18:00; 20:15; 22:30"
                }, {
                    "name": "Hoyts Puente Alto",
                    "infoCine": "Doblada:  10:30; 12:40; 14:50; 17:00; 19:10    Subtitulada:  21:30"
                }]
            }, {
                "name": "Star Wars: Episode VII - The Force Awakens",
                "link": "/?id=1101&id_Ficha=3933",
                "img": "http://adm.1.cl/galeriasitios/Z33/2015/7/27/Z33__Fp-The-Force-Awakes.jpg",
                "cines": [{
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Doblada:   15:50\t\t21:00"
                }, {
                    "name": "Hoyts La Reina",
                    "infoCine": "Doblada: 10:30; 13:20; 16:10      Subtitulada: 19:00; 21:50"
                }]
            }, {
                "name": "Un Gran Dinosaurio",
                "link": "/?id=1101&id_Ficha=3982",
                "img": "http://adm.1.cl/galeriasitios/Z33/2015/10/14/Z33__Fp-un-Gran-Dinosaurio.jpg",
                "cines": [{
                    "name": "Cineplanet (Florida Center)",
                    "infoCine": "Doblada: 11:20\t13:30\t18:50"
                }, {
                    "name": "Cineplanet Plaza Alameda",
                    "infoCine": "Doblada : 11:00"
                }, {
                    "name": "Hoyts Arauco Maipú",
                    "infoCine": "Doblada:  10:25; 12:40"
                }]
            }, {
                "name": "Buenos Vecinos 2",
                "link": "/?id=1101&id_Ficha=4101",
                "img": "http://adm.1.cl/galeriasitios/Z33/2016/1/25/Z33__Fp-Neighbors-2.jpg",
                "cines": [{
                    "name": "Hoyts La Reina",
                    "infoCine": "Subtitulada: 12:25; 14:50; 17:20; 19:50; 22:20"
                }]
            }, {
                "name": "Truman",
                "link": "/?id=1101&id_Ficha=4089",
                "img": "http://adm.1.cl/galeriasitios/Z33/2016/1/13/Z33__Fp-truman-poster.jpg",
                "cines": [{
                    "name": "Hoyts La Reina",
                    "infoCine": "Doblada: 21:30; (23:50)"
                }]
            }])
            .then(() => {
                console.log('finished populating users');
            });
    });
User.find({}).removeAsync()
    .then(() => {
        User.createAsync({
            provider: 'local',
            name: 'Test User',
            email: 'test@test.com',
            password: 'test'
        }, {
            provider: 'local',
            role: 'admin',
            name: 'Admin',
            email: 'admin@admin.com',
            password: 'admin'
        })
            .then(() => {
                console.log('finished populating users');
            });
    });