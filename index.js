// import mapboxgl from 'mapbox-gl';


let busca = document.querySelector('.busca')

busca.addEventListener('submit', async (event)=>{

    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
    console.log(input)

    if(input !== ''){
        console.log(input)
        clear()
        aviso('Carregando...');

        let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=sk.eyJ1IjoiZ290d2lsbCIsImEiOiJja3JwYXJxZXcyYmRkMzJrZHJvYmZ6a3djIn0.ODX_145CABmA7F_UXwlI3w`
        let result = await fetch(url);
        let json = await result.json();
        
        showGeocoder(json)
    }else{
        clear()
        aviso('Nada encontrado')
    }

        
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ290d2lsbCIsImEiOiJja2tzb2lseG0wYnZzMnVxZmp2aHRrMmpmIn0.TwBtDLsSy_aw1RVaef1Sew';
        var map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
        });
        
    new mapboxgl.Marker()
    .setLngLat([ -0.077, 51.533 ])
    .addTo(map);

});



function aviso(msg){
    document.querySelector('.aviso').innerHTML = msg;
}

function showGeocoder(json){
    clear()
    let p = document.querySelector('p')
    const cordenada = json.features[0].center;
    // console.log(cordenada)
    p.insertAdjacentHTML('beforeend',`${cordenada}`)
    document.querySelector('#map').style.display = 'block'


}


function clear (){
    aviso('')
    document.querySelector('#map').style.display = 'none'
}


