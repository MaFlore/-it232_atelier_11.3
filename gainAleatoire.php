<?php
header("Content-Type: text/plain; charset=utf-8");
header("Cache-Control: no-cache . private");
header("Pragma: no-cache");
sleep(2);

$parametresXml = file_get_contents('php://input');

$objetSimpleXml = simplexml_load_string($parametresXml);

$nomJoueur = $objetSimpleXml->nom;

$prenomJoueur = $objetSimpleXml->prenom;

$gain = rand(0,100);

$nom = $prenomJoueur." ".$nomJoueur;

$resultat = $nom.':'.$gain;


echo $resultat;

?>