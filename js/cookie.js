export { crearCookie };

function crearCookie(nomCookie, valorCookie) {
  //Els parametres hauren de ser l'id del usuari i la seva puntuació
  let nomIValor = nomCookie + "=" + valorCookie; //Aquí concatenem tant el nom de la cookie com el valor
  let expiracioCookie = new Date();
  expiracioCookie.setDate(expiracioCookie.getDate() + 1);

  //Ara diem que la expiració de la nostra cookie serà la data actual més un dia, el que significa que caducarà demà.
  expiracioCookie = "expires=" + expiracioCookie; //Ara passem el format adequat per tal de poder pasar-li aquest valor a la cookie
  //document.cookie = nomIValor + ";" + expiracioCookie; //Creem la nostra cookie
  //document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; SameSite=None; Secure";
  document.cookie = nomIValor + "; " + expiracioCookie + "; path=/; Secure"; //El SameSite i el Secure els haurem de posar perqué el fiddle sinó no llegeix les cookies a més a més concatenarem el path d'aquesta manera podrem portar cookies de Java Script a php
}
