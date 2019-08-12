var banner = document.querySelector('.banner-destaque img');
var banners = [
    'img/destaque-home.png',
    'img/destaque-home-2.png'
];
var bannerAtual = 0; // primeiro banner

function trocaBanner(){
    //alert('testando...');
    bannerAtual++;
    if (bannerAtual == banners.length){
        bannerAtual = 0;
    }
    banner.src = banners [bannerAtual]
}
//executa uma função qualquer a cada x milissegundos
setInterval(trocaBanner, 2000);