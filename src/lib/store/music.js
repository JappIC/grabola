import { writable } from 'svelte/store';

export const openMusic = writable("P3EgPi-PDyc");

// Tipo de divisa
export const musicList = writable([
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Django_Reinhardt_%28Gottlieb_07301%29.jpg/220px-Django_Reinhardt_%28Gottlieb_07301%29.jpg",
        title:"Jattendrai Swing 1939",
        author:"Django Reinhardt & Stéphane Grappelli",
        video:"Qj8lhweSIM8",
        category:"Gypsy Jazz & Swing",
        seen: false
    },
    {
        img:"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/11/11/16366244812189.jpg",
        title:"Alma Mia",
        author:"Pedro Guerra",
        video:"bovT25akWSo",
        category:"Cantautor",
        seen: false
    },
    {
        img:"https://i.pinimg.com/originals/5b/b9/b6/5bb9b6e574396d68fb776db98b43e958.jpg",
        title:"Diz que fui por aí",
        author:"Nara Leao",
        video:"7lkDuC5S2aQ",
        category:"Bossa",
        seen: false
    },
    {
        img:"https://media.admagazine.com/photos/6359b4fea1d016d0ed7af93c/4:3/w_615,h_461,c_limit/gettyimages-1395823452_720.jpg",
        title:"It Ain't Over 'Til It's Over",
        author:"Lenny Kravitz",
        video:"TmENMZFUU_0",
        category:"Pop",
        seen: false
    },
    {
        img:"https://www.diariojaen.es/binrepository/600x400/0c0/600d346/none/10717/XAKL/la-almendrita-ii_14310758_20200107114434.jpg",
        title:"Las cosas que nunca te dije",
        author:"El Jose ft. Blanca Almendrita",
        video:"jCRzCGmy50Y",
        category:"Rumba",
        seen: false
    },
    {
        img:"https://vimusen.com/wp-content/uploads/2019/08/zaz-coloe.jpg",
        title:"La Vie En Rose",
        author:"Zaz",
        video:"1sTcGHbjVyE",
        category:"Gypsy Jazz & Swing",
        seen: false
    },
    {
        img:"https://f4.bcbits.com/img/0020301454_23.jpg",
        title:"Vida Parrandera",
        author:"Kiki Valera",
        video:"lCMQ8HAXC-M",
        category:"Latino",
        seen: false
    },
    {
        img:"https://www.inbestme.com/blog/wp-content/uploads/2017/02/glb.jpg",
        title:"Words of Wonder",
        author:"Song Around The World",
        video:"biGm7nUgisA",
        category:"Reggae",
        seen: false
    },
    {
        img:"https://oncubanews.com/wp-content/uploads/2020/03/silvio-rodriguez.jpg",
        title:"Óleo de Mujer Con Sombrero",
        author:"Silvio Rodríguez",
        video:"ZQwp-qmbwaE",
        category:"Cantautor",
        seen: false
    },
    {
        img:"https://i.pinimg.com/474x/e2/62/55/e26255fc6fa8a4ee6676f628554a142d--hoagy-carmichael-classic-singers.jpg",
        title:"Stardust",
        author:"Hoagy Carmichael",
        video:"j2fbOAyNOpM",
        category:"Jazz",
        seen: false
    },
    {
        img:"https://www.inbestme.com/blog/wp-content/uploads/2017/02/glb.jpg",
        title:"Africa Mokili Mobimba",
        author:"Song Around The World",
        video:"0tpj505RZxA",
        category:"Afrolatino",
        seen: false
    },
    {
        img:"https://gacetinmadrid.com/wp-content/uploads/2019/11/img-0370_1100xauto.jpeg",
        title:"Historia de un amor",
        author:"Tonina Saputo",
        video:"aPR6Cn7z-4Q",
        category:"Bolero Jazz",
        seen: false
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Facundo_Cabral.jpg",
        title:"Me Gusta la Gente Simple",
        author:"Facundo Cabral",
        video:"Y4-BgApYcGg",
        category:"Cantautor",
        seen: false
    },
    {
        img:"https://akamai.sscdn.co/uploadfile/letras/fotos/0/3/e/9/03e9a48d833c0cdfa89c31319fb272df.jpg",
        title:"Djobi, Djoba",
        author:"Gipsy Kings",
        video:"znxb6KtOo_c",
        category:"Rumba Pop",
        seen: false
    },
    {
        img:"https://d10j3mvrs1suex.cloudfront.net/u/274974/5e6925c31d75bcd57c7c1f50d0a5ddda0d083f1a/original/alta-patax-fotos-grupo-189.jpg/!!/b%3AW1sicmVzaXplIiwxODAwXSxbIm1heCJdLFsid2UiXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
        title:"Billie Jean",
        author:"Patax",
        video:"iHD7_TU8PK4",
        category:"Flamenco Jazz",
        seen: false
    },
    {
        img:"https://media.vogue.mx/photos/5f31ef8b4e756da900fc2d86/3:2/w_1996,h_1331,c_limit/natalia-lafourcade.jpg",
        title:"Soy lo Prohibido",
        author:"Natalia Lafourcade",
        video:"iVzb_74gibk",
        category:"Bolero",
        seen: false
    },
    {
        img:"https://www.totalisimo.com/wp-content/uploads/2018/08/oscarleon-portada.jpg",
        title:"LLorarás",
        author:"Oscar D'Leon",
        video:"Obv4rk5Xs3s",
        category:"Salsa",
        seen: false
    },
    {
        img:"https://www.lanacion.com.ar/resizer/6Ix8M1EuPXDqnZd0tlbncq8HvwQ=/309x206/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/KJGQQEHHUNB7JJBAG4HSZL7QSA.jpg",
        title:"Can't Take My Eyes Off Of You",
        author:"Lauryn Hill",
        video:"wVzvXW9bo5U",
        category:"Hip Hop",
        seen: false
    },
    {
        img:"https://pyxis.nymag.com/v1/imgs/eab/557/3a388bd614bd947d2bc815c48e18810e2c-05-dave-brubek-2.rsquare.w700.jpg",
        title:"Take Five",
        author:"Dave Brubeck",
        video:"tT9Eh8wNMkw",
        category:"Jazz",
        seen: false
    },
    {
        img:"https://mui.kitchen/__export/1663879658317/sites/muikitchen/img/2022/09/22/cher-versace-pride.jpg_718887415.jpg",
        title:"Strong Enough",
        author:"Cher",
        video:"_bLuU4KpL4U",
        category:"Disco",
        seen: false
    },
    {
        img:"https://www.inbestme.com/blog/wp-content/uploads/2017/02/glb.jpg",
        title:"What's Going On",
        author:"Song Around The World",
        video:"JEp7QrOBxyQ",
        category:"Soul",
        seen: false
    },
    {
        img:"https://imagenes.elpais.com/resizer/jtf1HRdkj_Y2EpHgAA2fkrNzO2U=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/BQM5X447KXE4Z54VKHFI6HSSHQ.jpg",
        title:"Clair de Lune",
        author:"Rousseau",
        video:"WNcsUNKlAKw",
        category:"Clásica",
        seen: false
    },
    {
        img:"http://www.cronicajalisco.com/nimagenes/9/2017-01-11_10-01-12___8986.jpg",
        title:"Me And Bobby McGee",
        author:"Janis Joplin",
        video:"sfjon-ZTqzU",
        category:"Rock",
        seen: false
    },
    {
        img:"https://i.discogs.com/KGmnfelWAHcprC8lFr4s2P1YT6qHujPgh6_OzqMr04k/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIzMjE1/Ny0xNDUxNjYxMDcx/LTY0NjAuanBlZw.jpeg",
        title:"Bridge Over Troubled Water",
        author:"Simon & Garfunkel",
        video:"4G-YQA_bsOU",
        category:"Cantautor",
        seen: false
    },
    {
        img:"https://imagenes.heraldo.es/files/image_654_v1/uploads/imagenes/2022/07/15/15214590552-71ddad163d-k.jpeg",
        title:"Romance De Rosabella Y Domingo",
        author:"Celtas Cortos",
        video:"tmU2uRjcCv4",
        category:"Latino",
        seen: false
    },
    {
        img:"https://imagenes.heraldo.es/files/image_654_v1/uploads/imagenes/2022/07/15/15214590552-71ddad163d-k.jpeg",
        title:"Irlandalusi",
        author:"Celtas Cortos",
        video:"Ii0XgCZBKZE",
        category:"Fusión Flamenco Celta",
        seen: false
    },
    {
        img:"https://img2.rtve.es/i/?w=1200&i=https://img2.rtve.es/imagenes/rebobinando-berlin-03-12-14/1417598533880.jpg",
        title:"Take My Breath Away",
        author:"Berlin ",
        video:"WyJxAXnTs-s",
        category:"Pop",
        seen: false
    },
    {
        img:"https://m.media-amazon.com/images/M/MV5BOTI2YTI3YjctYzQ0OS00YmE5LWE1OTgtOTY2MjYxMDYwY2E1XkEyXkFqcGdeQXVyNTUyMTMyMDg@._V1_.jpg",
        title:"La flor de la canela",
        author:"María Dolores Pradera",
        video:"Q6RqgRfoAVs",
        category:"Chacarera",
        seen: false
    },
    {
        img:"https://i.ytimg.com/vi/O7TklQTeuSE/hqdefault.jpg",
        title:"Wicked Wicked",
        author:"Jungle Is Massive",
        video:"mL2Bgj-za5k",
        category:"Jungle ",
        seen: false
    },
    {
        img:"https://s3.ppllstatics.com/elcorreo/www/multimedia/202201/22/media/cortadas/jackson22-k91C-U160619260112jRE-1248x770@El%20Correo.jpg",
        title:"Bad",
        author:"Michael Jackson",
        video:"dsUXAEzaC3Q",
        category:"Pop",
        seen: false
    },
    {
        img:"http://ekladata.com/16Zf5vDi1UbfkLmDi60_vL7VzEQ@650x622.jpg",
        title:"Rama Lama Ding Dong",
        author:"The Edsels",
        video:"KStsPPgeka4",
        category:"Twister",
        seen: false
    },
    {
        img:"https://images.ecestaticos.com/CHZPtIXw6_9JnxUyH6O57HjX358=/51x17:830x601/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffb3%2F8f3%2Fc88%2Ffb38f3c88d838345f944fc30408bb26f.jpg",
        title:"Nunca vas a comprender",
        author:"Rita Payés",
        video:"AySBPCkGyyY",
        category:"Bolero",
        seen: false
    },
    {
        img:"https://media.pitchfork.com/photos/5d8ba80d09b36e000989a1c6/1:1/w_2175,h_2175,c_limit/Billy-Joel.jpg",
        title:"Uptown Girl",
        author:"Billy Joel",
        video:"hCuMWrfXG4E",
        category:"Pop",
        seen: false
    },
    {
        img:"https://lastfm.freetls.fastly.net/i/u/ar0/20763e14ff3144cc868be7dc86c06c10.jpg",
        title:"Willie the Weeper",
        author:"Tuba Skinny",
        video:"FnRs0dyYhbk",
        category:"Jazz",
        seen: false
    },
    {
        img:"https://i.discogs.com/4_VtcZT0FyMH-vqKXJh6vyk6hgKN9BaEk1jA5lQ5BkM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTMzNDUw/Ny0xNjQ0NTU0MTA0/LTM2MjMuanBlZw.jpeg",
        title:"I'm Sorry",
        author:"Brenda Lee",
        video:"BGLR25EJtfE",
        category:"Nashville",
        seen: false
    },
    {
        img:"https://i.ytimg.com/vi/F6LxBYXlMvM/0.jpg",
        title:"Never Ending Story",
        author:"Limahl",
        video:"Gf1WT8VEZxk",
        category:"Pop",
        seen: false
    },
    {
        img:"https://static.diariovasco.com/www/pre2017/multimedia/noticias/201407/24/media/mcferrin--490x490.jpg",
        title:"Don't Worry Be Happy",
        author:"Bobby McFerrin",
        video:"d-diB65scQU",
        category:"Soul",
        seen: false
    },
    {
        img:"https://3.bp.blogspot.com/-KZqa0SgU8EI/UK0UXKyTUKI/AAAAAAAAjO4/F8SIPV2qszw/s1600/Coleman-Hawkins-WC-9331743-1-402.jpg",
        title:"Body and Soul",
        author:"Coleman Hawkins",
        video:"zUFg6HvljDE",
        category:"Jazz",
        seen: false
    },
    {
        img:"https://lastfm.freetls.fastly.net/i/u/ar0/8722efd0d164e1fb15923b8b81c6d247.jpg",
        title:"Sixpence None The Richer",
        author:"Kiss Me",
        video:"8N-qO3sPMjc",
        category:"Rock",
        seen: false
    },
    {
        img:"https://ca-times.brightspotcdn.com/dims4/default/c942c81/2147483647/strip/true/crop/5662x5740+0+0/resize/1200x1217!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2c%2Fe5%2F1356cbbb4ea384a649a133d29e9c%2Fla-ca-carole-king-tapestry-r-300.JPG",
        title:"Carole King",
        author:"You've Got a Friend",
        video:"eAR_Ff5A8Rk",
        category:"Pop",
        seen: false
    },
    {
        img:"https://cdn.lemiaunoir.com/wp-content/uploads/2017/07/29193804/Tammi-Terrell-y-Marvin-Gaye.jpg",
        title:"Ain't No Mountain High Enough ",
        author:"Marvin Gaye & Tammi Terrell",
        video:"IC5PL0XImjw",
        category:"Soul",
        seen: false
    },
    {
        img:"https://images.indulgexpress.com/uploads/user/imagelibrary/2018/8/17/original/Big_Mountain_-_Image_1_1.jpeg",
        title:"Baby I Love Your Way",
        author:"Big Mountain",
        video:"IWIxA7M_-ZA",
        category:"Reggae",
        seen: false
    },
    {
        img:"https://lastfm.freetls.fastly.net/i/u/ar0/dba49b47f4534263c2a6e833aba3b8e1.jpg",
        title:"There Must Be An Angel",
        author:"Eurythmics",
        video:"RCdneDxFRYQ",
        category:"Pop",
        seen: false
    },
    {
        img:"https://akamai.sscdn.co/uploadfile/letras/fotos/0/f/d/e/0fde9a6649f58f74f5d5489c78c067d4.jpg",
        title:"More Than A Woman",
        author:"Bee Gees",
        video:"fy0rYUvn7To",
        category:"Funky",
        seen: false
    },
    {
        img:"https://www.biografiasyvidas.com/biografia/h/fotos/houston.jpg",
        title:"I Wanna Dance With Somebody",
        author:"Whitney Houston ",
        video:"eH3giaIzONA",
        category:"Pop",
        seen: false
    },
    {
        img:"https://lastfm.freetls.fastly.net/i/u/770x0/e6b7c99dd7eb44c42bba974bd892cd5e.jpg",
        title:"Walk Like an Egyptian",
        author:"The Bangles",
        video:"Cv6tuzHUuuk",
        category:"Rock",
        seen: false
    },
    {
        img:"https://cdns-images.dzcdn.net/images/artist/9d18886e3f768e9b1f05be42a6653909/500x500.jpg",
        title:"Higher Ground",
        author:"UB40",
        video:"zj6jgvYNnYI",
        category:"Reggae Pop",
        seen: false
    },
    {
        img:"https://i.discogs.com/kWg7fjOKYB-prgfHcxV4qs1vKOKsVnbRe51d0Ig1lHY/rs:fit/g:sm/q:90/h:458/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0NDU3/LTE2MzU3Mjk2NDkt/OTgxMS5wbmc.jpeg",
        title:"Pump Up The Jam",
        author:"Technotronic",
        video:"9EcjWd-O4jI",
        category:"Disco Rap",
        seen: false
    },
    {
        img:"https://www.loudandquiet.com/files/2021/07/HarryNilsson.jpeg",
        title:"Everybody's Talking",
        author:"Harry Nilsson",
        video:"55xQu9eIPIA",
        category:"Rock",
        seen: false
    },
    {
        img:"https://2.bp.blogspot.com/-_Jys6ayoj78/V5r_gDXB81I/AAAAAAAAIPM/XjtFh2VJ1eMULSdJR1-mDAO3LYFo3mvkQCEw/s1600/Cyndi%2BLauper.jpg",
        title:"Girls Just Want To Have Fun",
        author:"Cyndi Lauper",
        video:"PIb6AZdTr-A",
        category:"Pop",
        seen: false
    },
    {
        img:"https://media.vanityfair.com/photos/624dbd6c88fcf914e1a594c0/1:1/w_1333,h_1333,c_limit/nina-simone-portrait-1969-tout.jpg",
        title:"My baby just cares for me",
        author:"Nina Simone",
        video:"eYSbUOoq4Vg",
        category:"Soul",
        seen: false
    },
    {
        img:"https://www.ibanez.com/common/product_artist_file/file/a_main_GeorgeBenson.jpg",
        title:"Give Me The Night",
        author:"George Benson",
        video:"FIF7wKJb2iU",
        category:"Funky",
        seen: false
    },
    {
        img:"https://media.revistavanityfair.es/photos/60e84d164f9acb6a2f6ddf27/master/w_1600%2Cc_limit/28054.jpg",
        title:"Dancing Queen",
        author:"Abba",
        video:"xFrGuyw1V8s",
        category:"Disco",
        seen: false
    },
    {
        img:"https://akamai.sscdn.co/letras/215x215/fotos/9/f/4/d/9f4d48b438fc085378d1eef66bc45b11.jpg",
        title:"Get down saturday night",
        author:"Oliver Cheatham",
        video:"JdY10c_ZwQU",
        category:"Disco Funk",
        seen: false
    },
    {
        img:"https://www.naiz.eus/media/asset_publics/resources/000/691/992/article_main_landscape/miles-davis-gettyimages-2696066-scaled.jpg",
        title:"Stella by Starlight",
        author:"Miles Davis",
        video:"XGx1HvLV_NQ",
        category:"Jazz",
        seen: false
    },
    {
        img:"https://ih1.redbubble.net/image.2581318723.9786/st,small,507x507-pad,600x600,f8f8f8.jpg",
        title:"Hay Que Venir Al Sur",
        author:"Raffaella Carrà",
        video:"0xvUdyVKZg4",
        category:"Pop",
        seen: false
    },
    {
        img:"https://www.lavanguardia.com/files/content_image_mobile_filter/files/fp/uploads/2020/01/19/5fa44f12bf368.r_d.320-275.jpeg",
        title:"You're The One That I Want",
        author:"John Travolta And Olivia Newton John",
        video:"itRFjzQICJU",
        category:"Pop Rock",
        seen: false
    },
    {
        img:"https://akamai.sscdn.co/uploadfile/letras/fotos/0/f/d/e/0fde9a6649f58f74f5d5489c78c067d4.jpg",
        title:"You Should Be Dancing",
        author:"Bee Gees",
        video:"fT42ocqmI9s",
        category:"Funky",
        seen: false
    },
    {
        img:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-74271305.jpg",
        title:"Chain of Fools",
        author:"Aretha Franklin",
        video:"kmKZ5v1D778",
        category:"Soul",
        seen: false
    },
    {
        img:"https://i.discogs.com/cqpMA3slArbwf2WIYE8GrzeN-YD6DMD4Vy0gyqHvkWU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4Mjk0/LTE2NDkxNDc4MTgt/NjgyNC5qcGVn.jpeg",
        title:"Teardrops",
        author:"Lovestation",
        video:"7OOYgMivvuM",
        category:"Hardcore",
        seen: false
    },
    {
        img:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-74271305.jpg",
        title:"Think",
        author:"Aretha Franklin",
        video:"Vet6AHmq3_s",
        category:"Blues",
        seen: false
    },
    {
        img:"https://img.sheetmusic.direct/catalogue/product/lipps-inc-funkytown-lg.jpg",
        title:"Lipps Inc",
        author:"Funkytown",
        video:"aOT2VxBQoE8",
        category:"Disco",
        seen: false
    },
    {
        img:"https://sacharts.files.wordpress.com/2022/02/fairground_attraction.jpg",
        title:"Perfect",
        author:"Fairground Attraction",
        video:"txapREGWHp0",
        category:"Pop",
        seen: false
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/6/6e/John_Coltrane_in_1963.jpg",
        title:"Wise One",
        author:"John Coltrane",
        video:"yrqb0373cVs",
        category:"Jazz",
        seen: false
    },
    {
        img:"https://akamai.sscdn.co/letras/500x500/fotos/8/a/6/e/8a6e86fdf0eb53e923710e246da859c3.jpg",
        title:"Caballo Viejo",
        author:"Roberto Torres",
        video:"UMhfulZu8r",
        category:"Salsa",
        seen: false
    },
    {
        img:"https://cdns-images.dzcdn.net/images/artist/821d3771ab4cdb29a92e5cc11725c246/500x500.jpg",
        title:"Broken Hearted Melody",
        author:"Sarah Vaughan",
        video:"K9I_clmG8Eo",
        category:"Twister",
        seen: false
    },
    {
        img:"https://i1.sndcdn.com/avatars-000229132315-g1xjem-t500x500.jpg",
        title:"Les Yeux Noirs",
        author:"The Vignes Rooftop Revival",
        video:"gfiqW1WaGbw",
        category:"Gypsy Jazz & Swing",
        seen: false
    },
    {
        img:"https://guaydelparaguay.blogcindario.com/ficheros/piratasmandragora.jpg",
        title:"La Tormenta",
        author:"Javier Krahe y Alberto Perez",
        video:"m1Lo2MgGeog",
        category:"Cantautor",
        seen: false
    },
    {
        img:"https://media.wnyc.org/i/800/0/l/85/1/katedavis2.jpg",
        title:"All About That Base",
        author:"Kate Davis",
        video:"iyTTX6Wlf1Y",
        category:"Jazz",
        seen: false
    },
    {
        img:"https://lastfm.freetls.fastly.net/i/u/770x0/27290e5130487c44cf278083d2266d4f.jpg",
        title:"Karma Chameleon",
        author:"Culture Club",
        video:"JmcA9LIIXWw",
        category:"Pop",
        seen: false
    },
    {
        img:"https://jazz9-mazy.org/wp-content/uploads/2021/11/Fapy-Lafertin-New-Quartet-2021-2990-%C2%A9-Dominique-Houcmant-scaled.jpg",
        title:"Stardust",
        author:"Fapy Lafertin & Tim Kliphuis",
        video:"Wqrx48rgu6k",
        category:"Gypsy Jazz & Swing",
        seen: false
    },
    {
        img:"https://imagenes.elpais.com/resizer/ps2MGSMFoY8r8jCNVPXxDaqY6R4=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/YUOZLCGHYXD2TCRTUU4WYCHX6E.jpg",
        title:"Temes",
        author:"iLe",
        video:"LCQpUnKe97w",
        category:"Bolero",
        seen: false
    },
    {
        img:"https://lastfm.freetls.fastly.net/i/u/770x0/27376b88714d4168ad7d9e7c3841de2d.jpg",
        title:"Moliendo Café",
        author:"José Feliciano",
        video:"LHkuJ0ceJdc",
        category:"Cantautor",
        seen: false
    },
    {
        img:"https://www.biografiasyvidas.com/biografia/c/fotos/compay_segundo_3.jpg",
        title:"Guajira Guantanamera",
        author:"Compay Segundo",
        video:"gdYIpvnzoW8",
        category:"Latino",
        seen: false
    },
    {
        img:"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/10/04/15701853972264.jpg",
        title:"Alfoncina y el mar",
        author:"Mercedes Sosa",
        video:"cNMhgC1yg_U",
        category:"Latino",
        seen: false
    },
    {
        img:"https://image.tmdb.org/t/p/w235_and_h235_face/duvzX47Bj25h1YQCP1OE8tfOHYP.jpg",
        title:"Let's twist again",
        author:"Chubby Checker",
        video:"v1caxuEPeok",
        category:"Twister",
        seen: false
    },
    {
        img:"https://yofuiaegb.com/wp-content/uploads/2015/08/desireless.jpg",
        title:"Voyage Voyage",
        author:"Desireless",
        video:"6PDmZnG8KsM",
        category:"Pop",
        seen: false
    },
    {
        img:"https://i.ytimg.com/vi/_yigr2f9H_Q/hqdefault.jpg",
        title:"Ela Desatinou",
        author:"Chico Buarque",
        video:"BM0SU0HyDAk",
        category:"Bossa",
        seen: false
    },
    {
        img:"https://www.lanacion.com.ar/resizer/6Ix8M1EuPXDqnZd0tlbncq8HvwQ=/309x206/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/KJGQQEHHUNB7JJBAG4HSZL7QSA.jpg",
        title:"Turn your lights down low",
        author:"Bob Marley & Lauryn Hill",
        video:"VitKvID-uvY",
        category:"Reggae Hip Hop",
        seen: false
    },
    {
        img:"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/10/04/15701853972264.jpg",
        title:"Como La Cigarra",
        author:"Mercedes Sosa",
        video:"ArcS3QeYR8s",
        category:"Cantautora",
        seen: false
    },
    {
        img:"https://www.inbestme.com/blog/wp-content/uploads/2017/02/glb.jpg",
        title:"Chan Chan",
        author:"Song Around The World",
        video:"WAjRmHODjyQ",
        category:"Latino",
        seen: false
    },
    {
        img:"https://indiehoy.com/wp-content/uploads/2022/08/sting.jpg",
        title:"Englishman In New York",
        author:"Sting",
        video:"d27gTrPPAyk",
        category:"Pop",
        seen: false
    },
    {
        img:"https://i.discogs.com/4_VtcZT0FyMH-vqKXJh6vyk6hgKN9BaEk1jA5lQ5BkM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTMzNDUw/Ny0xNjQ0NTU0MTA0/LTM2MjMuanBlZw.jpeg",
        title:"You Can Depend on Me",
        author:"Brenda Lee",
        video:"UdRBWLDDvQw",
        category:"Nashville",
        seen: false
    },
    {
        img:"https://www.eyescreamproductions.com/allaccess/wp-content/uploads/2020/09/Prodigy-4-696x442-1.jpg",
        title:"TITULO",
        author:"Prodigy",
        video:"",
        category:"Electrónica",
        seen: false
    }
]);


