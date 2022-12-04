function jouer() {

    objet_xml_http_request = creation_objet_xml_http_request();

    var objetSerializer = new XMLSerializer();

    var parametresXml = objetSerializer.serializeToString(elementJoueur)

    objet_xml_http_request.open('post', 'gainAleatoire.php', true);

    objet_xml_http_request.onreadystatechange = actualiserPage;

    objet_xml_http_request.setRequestHeader("Content-Type", "text/xml");

    document.getElementById('button').disabled = true;
    document.getElementById('charge').style.visibility = "visible";

    objet_xml_http_request.send(parametresXml);
}

function testerNavigateur() {
    objet_xml_http_request = creation_objet_xml_http_request();
    if (objet_xml_http_request == null) {
        document.getElementById('button').disabled = true;
        var erreurNavigateur = "Erreur du navigateur : Impossible de créer l'objet XML_HTTP_REQUEST";
        document.getElementById('info').innerHTML = erreurNavigateur;
        document.getElementById('info').style.visibility = "visble";
    }

    document.getElementById('nom1').onclick = function() { ajouteNom("Florent", "FALL") };
    document.getElementById('nom2').onclick = function() { ajouteNom("Mathis", "TALL") };

}