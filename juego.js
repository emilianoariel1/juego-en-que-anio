var nivel = [
    {año: 2010, img: "https://ichef.bbci.co.uk/news/800/cpsprodpb/924C/production/_113825473_gettyimages-105231830.jpg", titulo: "Rescate de los 33 Mineros de Chile"},
    {año: 1963, img: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/HIGKMB7WKVNWZOKT6TQ4RFXOUM.jpg", titulo: "Asesinato de Kennedy"},
    {año: 1986, img: "https://static.dw.com/image/37152732_401.jpg", titulo: "La mano de Dios"},
    {año: 1912, img: "https://historia.nationalgeographic.com.es/medio/2022/05/02/titanic_93d5fe46_800x577.jpg", titulo: "Hundimiento del Titanic"},
    {año: 2000, img: "https://bocaadherentes.com.ar/wp-content/uploads/2020/03/img_rruano_20181129-002725_imagenes_md_getty_gettyimages-72545986-k3VD-U4532194758703sC-980x554@MundoDeportivo-Web.jpg", titulo: "Boca le gana el Mundial al Real Madrid"},
    {año: 1986, img: "https://cnnespanol.cnn.com/wp-content/uploads/2022/04/GettyImages-57392087-e1650915527340.jpg?quality=100&strip=info", titulo: "Accidente de Chernobyl"},
    {año: 2022, img: "https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2023/01/63d143f53cdf4_450.jpg", titulo: "Atajada del Dibu Martinez a Kolo Muani"},
    {año: 1989, img: "https://www.telesurtv.net/__export/1573185731022/sites/telesur/img/2019/11/07/muro-apertura--400x600.jpg", titulo: "Cae el Muro de Berlin"},
    {año: 2016, img: "http://c.files.bbci.co.uk/15431/production/_126298078_donaldtrump-3.jpg", titulo: "Donald Trump gana las Elecciones Presidenciales"},
    {año: 2018, img: "https://img.lagaceta.com.ar/fotos/notas/2018/03/14/764143_20180314011018.jpg", titulo: "Fallece Stephen Hawking"},
    {año: 1914, img: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/11/08/5fa45291b5f5c.jpeg", titulo: "Comienza la Primera Guerra Mundial"},
    {año: 1944, img: "https://static3.abc.es/Media/201406/06/desembarco-normandia-dia-d%20(1)--644x362.jpg", titulo: "Desembarco de Normandia"},
    {año: 2014, img: "https://stadium-azteca.underdog.gs/soccerly/1.5/2020/07/08/1594221869.jpg", titulo: "Alemania 7 - Brasil 1"},
    {año: 2001, img: "https://ichef.bbci.co.uk/news/640/cpsprodpb/B0FA/production/_97260354_gettyimages-1161124.jpg", titulo: "Atentado a las Torres Gemelas"},
    {año: 2006, img: "https://www.quepasaweb.com.ar/wp-content/uploads/2020/01/robo-banco-rio-3.jpg", titulo: "Robo del Siglo"},
    {año: 2013, img: "https://es.web.img3.acsta.net/r_654_368/medias/nmedia/19/00/22/87/20628375.jpg", titulo: "Termina Breaking Bad"},
    {año: 2011, img: "https://media.ambito.com/p/40b22182d192d27c5ed79fb9d022d03c/adjuntos/239/imagenes/039/037/0039037627/1200x675/smart/river-descenso-monumentaljpg.jpg", titulo: "Desciende River"},
    {año: 2013, img: "https://img.youtube.com/vi/tV95N0TIltc/maxresdefault.jpg", titulo: "Sale a la venta GTA 5"},
    {año: 2016, img: "https://static.dw.com/image/19081260_303.jpg", titulo: "DiCaprio gana su primer Oscar"},
    {año: 2021, img: "https://tntsports.com.ar/__export/1651762530457/sites/tntsports/img/2022/04/23/messi-psg-port.png", titulo: "Messi se va al PSG"},
    {año: 2010, img: "https://imagekit.androidphoria.com/wp-content/uploads/Instagram-1.jpg", titulo: "Lanzamiento de Instagram"},
    {año: 1989, img: "https://pbs.twimg.com/media/D5HL3DNXkAA_b-R.jpg", titulo: "Sale el primer capitulo de Dragon Ball Z"},
    {año: 1945, img: "https://historia.nationalgeographic.com.es/medio/2019/05/03/adolf-hitler_004e6872_1280x720.jpg", titulo: "Muere Hitler"},
    {año: 2006, img: "https://imagenes.20minutos.es/files/image_656_370/files/fp/uploads/imagenes/2018/07/19/177109.r_d.300-169.jpg", titulo: "Cabezazo de Zidane"},
    {año: 2020, img: "https://media.cnnchile.com/sites/4/2022/05/220501202711-covid-long-hauler-symptoms-gupta-dnt-vpx-exlarge-169.jpg", titulo: "Comienza la Cuarentena"},
    {año: 2015, img: "https://ep00.epimg.net/elpais/imagenes/2015/12/10/album/1449761807_601099_1449771508_album_normal.jpg", titulo: "Macri gana las Elecciones Presidenciales"},
    {año: 2013, img: "https://ichef.bbci.co.uk/news/640/cpsprodpb/C23D/production/_106652794_conclavebergoglio.jpg", titulo: "Eligen al Papa Francisco"},
    {año: 2009, img: "https://images.ole.com.ar/2018/10/08/x-lKRwk_o_720x0.jpg", titulo: "Argentina clasifica al Mundial en el ultimo minuto"},
    {año: 2009, img: "https://phantom-marca.unidadeditorial.es/ccb0a7831774f286749cd96ccdc5adba/resize/1320/f/jpg/assets/multimedia/imagenes/2022/06/25/16561618662230.jpg", titulo: "Fallece Michael Jackson"},
    {año: 2011, img: "https://www.cronista.com/files/image/504/504529/63c147495b2c4.jpg", titulo: "Fallece Steve Jobs"},
    {año: 2018, img: "https://images.ole.com.ar/2020/12/08/PznvmzbSf_720x0__1.jpg", titulo: "Final de Madrid"},
    {año: 1969, img: "https://www.caracteristicas.co/wp-content/uploads/2017/07/luna-e1571522155734.jpg", titulo: "El Hombre llega a la Luna"},
    {año: 2021, img: "https://elonce-media.elonce.com/fotos-super/2021/07/12/n_1626134077.jpg", titulo: "Argentina Campeon en Brasil"},
    {año: 1982, img: "https://fotos.perfil.com/2022/03/05/trim/950/534/malvinas-1321407.jpg", titulo: "Guerra de Malvinas"},
    {año: 1994, img: "https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2016/06/577148d4ed20f_900.jpg", titulo: `Mundial de Estados Unidos`},
    {año: 1995, img: "https://golpepolitico.com/wp-content/uploads/2020/11/toy-story-salio-luz-anos.jpg", titulo: `Se estrena Toy Story`},
    {año: 1994, img: "https://rockfm-cdnmed.agilecontent.com/resources/jpg/2/0/1562671551302.jpg", titulo: `Fallece Kurt Cobain`},
    {año: 2011, img: "https://gcdn.lanetaneta.com/wp-content/uploads/2019/09/10-hechos-detr%C3%A1s-de-la-realizaci%C3%B3n-de-la-pel%C3%ADcula-final-780x405.jpg", titulo: `Se estrena la ultima pelicula de Harry Potter`},
    {año: 2012, img: "https://fotos.perfil.com/2022/02/20/trim/950/534/tragedia-sarmiento-once-1315412.jpg", titulo: `Tragedia de Once`},
    {año: 1994, img: "https://fotos.perfil.com//2021/07/14/900/0/amia-20210714-1204378.jpg", titulo: `Atentado a la AMIA`},
    {año: 1905, img: "https://www.bbva.com/wp-content/uploads/2017/11/apertura-boca.jpg", titulo: `Se funda Boca Juniors`},

  ];
var vida = 40;
var record = 0;
var aciertos = 0;
var partida = [];

function iniciar() {
    for (var i = 0; i < 30; i++) {
        var p = Math.floor(Math.random() * nivel.length);
        partida.push(nivel[p]);
        nivel.splice(p, 1);
    }
    jugar();
}

function jugar() {
    if (partida.length > 0){
    var j = Math.floor(Math.random() * partida.length);
    document.getElementById("panel").innerHTML = `<div class="col">
    <h2 class="text-center">${partida[j]["titulo"]}</h2>
    <br>
    <img class="" style="width: 600px; height: 325px" src="${partida[j]["img"]}">
    </div>

    <div class="col text-center my-auto">
    <input type="hidden" id="indice" value="${j}"><div class="input-group input-group-lg py-5 px-5">
    <span class="input-group-text" id="inputGroup-sizing-lg">Año</span>
    <input type="text" id="anio" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
    </div>
    <h2 class="mx-4">Nivel ${record + 1}/30</h2>
    <h2 class="pt-3" style="color: red;">${vida}💖</h2>
    </div>
    </div>
    <h3 class="text-center pt-5" style="color: green;">Hecho por Emiliano Ariel</h3>`;
    document.getElementById("play").innerHTML = "";

    var enter = document.getElementById("anio");
    enter.addEventListener("keydown", function (e) {
       if (e.code === "Enter") { 
           calcular();
        }
       });
    
    } else {
        victoria();
    }
    
}

function calcular() {
    var resp = parseFloat(document.getElementById("anio").value);
    var j = parseFloat(document.getElementById("indice").value);

    if (resp != partida[j]["año"]){
        var diff = (Math.max(resp, partida[j]["año"])) - (Math.min(resp, partida[j]["año"]));
        incorrecto(diff, j);
    } else {
        record++;
        aciertos++;
        quitar(j);

        if (partida.length == 0){
            victoria();
        } else {
            document.getElementById("panel").innerHTML = `<h2 class="text-center" style="color: green;">Correcto!!!</h2>
            <br>
            <img class="mx-auto" style="width: 600px; height: 325px" src="https://i.blogs.es/a66e28/vault-boy/1366_2000.jpeg">
            <a><button class="btn btn-success btn-lg" onclick="jugar()">Siguiente</button></a>
            <h3 class="text-center pt-5" style="color: green;">Hecho por Emiliano Ariel</h3>`;
        }
    }
}

function incorrecto(danio, j) {
    if (danio >= vida){
        derrota();
    }else {
        vida -= danio;
        record++;
        document.getElementById("panel").innerHTML = `<h2 class="text-center" style="color: darkred;">Incorrecto, Respuesta: ${partida[j]["año"]}</h2>
        <h2 class="pt-3 text-center" style="color: darkred;">Perdes ${danio} vida/s</h2>
        <img class="mx-auto" style="width: 600px; height: 325px" src="https://t4.ftcdn.net/jpg/04/99/61/61/360_F_499616159_lZOjC2KvEVqomCZquyODoLtwE1uZ9MLP.jpg">
        <a><button class="btn btn-danger btn-lg" id="caca" onclick="jugar()">Siguiente</button></a>
        <h3 class="text-center pt-5" style="color: green;">Hecho por Emiliano Ariel</h3>`;
        quitar(j);
    }
}

function victoria() {
    var punt = 200 + (record * 2) + (vida * 3) + (aciertos * 12);
    document.getElementById("panel").innerHTML = `<h2 class="text-center" style="color: green;">GANASTE!!!, Puntaje Final: ${punt}</h2>
    <img class="mx-auto" style="width: 600px; height: 325px" src="https://pbs.twimg.com/media/DyhgiTzVsAAPCsS.jpg">
    <a href="index.html" class="text-center"><button class="btn btn-success btn-lg" id="caca" onclick="">Volver a Jugar</button></a>
    <h3 class="text-center pt-1">Vidas Restantes: ${vida} <br> Pasaste ${record} nivel/es  <br> ${aciertos} acierto/s</h3>`;
    
}


function derrota() {
        var punt = (record * 2) + (aciertos * 12);
        var j = parseFloat(document.getElementById("indice").value);
        document.getElementById("panel").innerHTML = `<h2 class="text-center" style="color: darkred;">Perdiste, Respuesta: ${partida[j]["año"]}</h2>
        <h2 class="text-center" style="color: darkred;">Puntaje Final: ${punt}</h2>
        <img class="mx-auto" style="width: 600px; height: 325px" src="https://1.bp.blogspot.com/-ReW81q1n9BI/VlSgHdQy44I/AAAAAAAAEiE/iaMQR5dg90g/s1600/game-over.jpg">
        <a href="index.html" class="text-center"><button class="btn btn-danger btn-lg" id="caca" onclick="">Volver a Jugar</button></a>
        <h3 class="text-center pt-1">Pasaste ${record} nivel/es  <br> ${aciertos} acierto/s</h3>`;
        
}

function quitar(j) {
    partida.splice(j, 1);
}
