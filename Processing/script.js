let projetoMarcado = false;      
let labMarcado = false;          
let mostrarPausa = false;


let tempoPausa = 0;


let corEstado = "#000000";  

function setup() {
  createCanvas(450, 450);
  background(255);
  noStroke();
  textFont("Arial");
}

const cinzaBorder = "#C3C3C3";
const textoCinza = "#6A6A6A";
const azulHora = "#0094D8";

function draw() {
  background(255);




  let agora = new Date();
  let horas = nf(agora.getHours(), 2);
  let minutos = nf(agora.getMinutes(), 2);
  let textoHora = `${horas}:${minutos}`;

  const dias = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const meses = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  let diaSemana = dias[agora.getDay()];
  let diaMes = nf(agora.getDate(), 2);
  let mes = meses[agora.getMonth()];
  let ano = String(agora.getFullYear()).slice(2);
  let textoData = `${diaSemana} ${diaMes}.${mes}.${ano}`;




  noStroke();
  fill(azulHora);
  textAlign(CENTER, CENTER);
  textSize(40);
  text(textoHora, width / 2, 80);




  fill(0);
  textSize(22);
  text(textoData, width / 2, 120);




  stroke(0);
  strokeWeight(2);
  noFill();
  rect(140, 150, 40, 22, 4);   
  rect(180, 156, 6, 10);        


  noStroke();
  fill("#0094D8");
  rect(142, 152, 22, 18, 3);    

  fill(0);
  textSize(18);
  textAlign(LEFT, CENTER);
  text("55%", 200, 161);




  stroke(0);             
  strokeWeight(3);
  fill(corEstado);       
  circle(320, 165, 38);  

  fill(0);                
  noStroke();
  circle(312, 158, 5);  
  circle(328, 158, 5);

  stroke(0);              
  strokeWeight(3);
  line(312, 175, 328, 175);




  noStroke();
  fill("#59C35E"); rect(230, 200, 70, 10);   
  fill("#E6E65A"); rect(300, 200, 70, 10);   
  fill("#B1262A"); rect(370, 200, 70, 10);   




  let cx1 = 40, cy1 = 260, cw1 = 370, ch1 = 40;
  let hover1 = mouseX > cx1 && mouseX < cx1 + cw1 &&
               mouseY > cy1 && mouseY < cy1 + ch1;

  stroke(cinzaBorder);
  strokeWeight(2);
  if (hover1 && !labMarcado) fill("#EDEDED");
  else noFill();
  rect(cx1, cy1, cw1, ch1, 12);

  noStroke();
  fill(0);
  textSize(22);

  if (labMarcado) {
    text("âœ“", 63, 283);
  } else {
    stroke(0); strokeWeight(1);
    noFill();
    rect(55, 273, 18, 18, 3);
  }

  noStroke();
  if (hover1 && !labMarcado) {
    fill(0);
    textSize(20);
  } else {
    fill(textoCinza);
    textSize(16);
  }
  textAlign(LEFT, CENTER);
  text("Trabalho de LaboratÃ³rio", 85, 280);




  let cx2 = 40, cy2 = 315, cw2 = 370, ch2 = 40;
  let hover2 = mouseX > cx2 && mouseX < cx2 + cw2 &&
               mouseY > cy2 && mouseY < cy2 + ch2;

  stroke(cinzaBorder);
  strokeWeight(2);
  if (hover2 && !projetoMarcado) fill("#EDEDED");
  else noFill();
  rect(cx2, cy2, cw2, ch2, 12);

  noStroke();
  fill(0);
  textSize(22);

  if (projetoMarcado) {
    text("âœ“", 63, 338);
  } else {
    stroke(0);
    strokeWeight(1);
    noFill();
    rect(55, 328, 18, 18, 3);
  }

  noStroke();
  if (hover2 && !projetoMarcado) {
    fill(0);
    textSize(20);
  } else {
    fill(textoCinza);
    textSize(16);
  }
  text("Trabalho de Projeto", 85, 335);




  if (mostrarPausa) {
    if (millis() - tempoPausa > 2000) {  
      mostrarPausa = false;
    }
  }




  if (mostrarPausa) {
    fill(255, 255, 255, 245);
    stroke("#C3C3C3");
    strokeWeight(3);
    rect(75, 140, 300, 130, 20);

    noStroke();
    fill("#6A6A6A");
    textAlign(CENTER, CENTER);
    textSize(26);
    text("â¸ Pausa Merecida!", width / 2, 205);
  }
}

function mousePressed() {


  if (mouseY > 200 && mouseY < 210) {


    if (mouseX > 230 && mouseX < 300) {
      corEstado = "#59C35E";
    }


    if (mouseX > 300 && mouseX < 370) {
      corEstado = "#E6E65A";
    }


    if (mouseX > 370 && mouseX < 440) {
      corEstado = "#B1262A";
    }
  }


  if (mouseX > 40 && mouseX < 410 && mouseY > 260 && mouseY < 300) {
    labMarcado = !labMarcado;

    if (labMarcado || projetoMarcado) {
      mostrarPausa = true;
      tempoPausa = millis();  
    }
  }


  if (mouseX > 40 && mouseX < 410 && mouseY > 315 && mouseY < 355) {
    projetoMarcado = !projetoMarcado;

    if (labMarcado || projetoMarcado) {
      mostrarPausa = true;
      tempoPausa = millis();  
    }
  }
}