var c = document.getElementById('logoCanvas');
var ctx = c.getContext('2d');

//Texte
ctx.font = '30px Serif';
ctx.fillStyle = '#959595';
ctx.fillText('École du numérique',210,280);
ctx.fillText('du Noyonnais',210,310);
// E
ctx.beginPath();
 ctx.moveTo(100, 100);
 ctx.lineTo(50, 100);
 ctx.lineTo(50, 175);
 ctx.moveTo(50, 175);
 ctx.lineTo(75, 175);
 ctx.moveTo(50, 175);
 ctx.lineTo(50, 250);
 ctx.lineTo(100, 250);
 ctx.lineWidth='3';
 ctx.stroke();
// 2
//bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) cp=> poignées
ctx.beginPath();
ctx.lineWidth='8';
ctx.strokeStyle='#EA4E1D';
ctx.moveTo(100,100);
ctx.bezierCurveTo(370,-80,90,280,80,290);
ctx.moveTo(80,290);
ctx.bezierCurveTo(220,255,200,265,200,269);
ctx.moveTo(80,290);
ctx.bezierCurveTo(160,275,185,265,185,275);
ctx.stroke();
// N
ctx.beginPath();
ctx.moveTo(213, 100);
ctx.lineTo(213, 250);
ctx.moveTo(213, 100);
ctx.lineTo(313, 250);
ctx.moveTo(313, 100);
ctx.lineTo(313, 250);
ctx.lineWidth='3';
ctx.strokeStyle='black';
ctx.stroke();

// hexagone haut
ctx.beginPath();
ctx.lineTo(350, 100);//pt de départ haut gauche
ctx.lineTo(350, 115);//côté gauche
ctx.lineTo(365, 130);//bas gauche
ctx.lineTo(380, 115);//bas droite
ctx.lineTo(380, 100);//côté droit
ctx.lineTo(365, 85);//pointe du haut
ctx.fillStyle = "#EBEBEB";
ctx.fill();
// hexagone haut droite
ctx.beginPath();
ctx.translate(30,30);
ctx.lineTo(350, 100);//pt de départ haut gauche
ctx.lineTo(350, 115);//côté gauche
ctx.lineTo(365, 130);//bas gauche
ctx.lineTo(380, 115);//bas droite
ctx.lineTo(380, 100);//côté droit
ctx.lineTo(365, 85);//pointe du haut
ctx.fillStyle = "#595656";
ctx.fill();
// hexagone haut gauche
ctx.beginPath();
ctx.translate(-55,0);
ctx.lineTo(350, 100);//pt de départ haut gauche
ctx.lineTo(350, 115);//côté gauche
ctx.lineTo(365, 130);//bas gauche
ctx.lineTo(380, 115);//bas droite
ctx.lineTo(380, 100);//côté droit
ctx.lineTo(365, 85);//pointe du haut
ctx.fillStyle = "#DEDDDE";
ctx.fill();
// hexagone milieu
ctx.beginPath();
ctx.translate(25,30);
ctx.lineTo(350, 100);//pt de départ haut gauche
ctx.lineTo(350, 115);//côté gauche
ctx.lineTo(365, 130);//bas gauche
ctx.lineTo(380, 115);//bas droite
ctx.lineTo(380, 100);//côté droit
ctx.lineTo(365, 85);//pointe du haut
ctx.fillStyle = "#EA4E1A";
ctx.fill();
// hexagone bas gauche
ctx.beginPath();
ctx.translate(-25,30);
ctx.lineTo(350, 100);//pt de départ haut gauche
ctx.lineTo(350, 115);//côté gauche
ctx.lineTo(365, 130);//bas gauche
ctx.lineTo(380, 115);//bas droite
ctx.lineTo(380, 100);//côté droit
ctx.lineTo(365, 85);//pointe du haut
ctx.fillStyle = "#878787";
ctx.fill();
// hexagone bas droite
ctx.beginPath();
ctx.translate(55,0);
ctx.lineTo(350, 100);//pt de départ haut gauche
ctx.lineTo(350, 115);//côté gauche
ctx.lineTo(365, 130);//bas gauche
ctx.lineTo(380, 115);//bas droite
ctx.lineTo(380, 100);//côté droit
ctx.lineTo(365, 85);//pointe du haut
ctx.fillStyle = "#ECECEC";
ctx.fill();
//reset
ctx.setTransform(1, 0, 0, 1, 0, 0);
// hexagone miniatures haut
ctx.beginPath();
ctx.translate(30,40);
ctx.lineTo(385, 100);//pt de départ haut gauche
ctx.lineTo(385, 107);//côté gauche
ctx.lineTo(392, 114);//bas gauche
ctx.lineTo(399, 107);//bas droite
ctx.lineTo(399, 100);//côté droit
ctx.lineTo(392, 93);//pointe du haut
ctx.fillStyle = "#DEDDDE";
ctx.fill();
// hexagone miniatures bas
ctx.beginPath();
ctx.translate(10,15);
ctx.lineTo(385, 100);//pt de départ haut gauche
ctx.lineTo(385, 107);//côté gauche
ctx.lineTo(392, 114);//bas gauche
ctx.lineTo(399, 107);//bas droite
ctx.lineTo(399, 100);//côté droit
ctx.lineTo(392, 93);//pointe du haut
ctx.fillStyle = "#878787";
ctx.fill();
// losange miniatures droite
ctx.beginPath();
ctx.translate(15,-15);
ctx.lineTo(385, 107);//pt de départ gauche
ctx.lineTo(392, 114);//bas
ctx.lineTo(399, 107);//droite
ctx.lineTo(392, 100);//pointe du haut
ctx.fillStyle = "#EA4E1A";
ctx.fill();

//bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) cp=> poignées
// ctx.arc(x, y, rayon, angleInitial, angleFinal, antihoraire);
