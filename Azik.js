t=20;
h=200;


function con(th){
    
  b=th*10/36;
  return b;}


function fall(){

   x=(g*t*t)/2;
   return x;}


function speed(){
  
    x1=g*t;
    return x1;}


function high(){

    t=Math.sqrt(2*h/g);
    return t;}

function fall2(){

    f=Math.sqrt(2*g*h);
    return f;} 



function allinPlanet(name,g){
 var i1=fall()
   console.log("Какое расстояние пролетит за 20 секунд=",i1.toFixed(1),"м");

 var i2=speed()
   console.log("Какая скорость по прошествии 20 секунд=",i2.toFixed(1),"м/c","или",con(speed(i2)).toFixed(1),"км.ч");

 var i3=high()
   console.log("Сколько длится свободное падение с высоты 200м=", i3.toFixed(1),"c");  
    
 var i4=fall2()
   console.log("Какова скорость после падения с высоты 200м=",i4.toFixed(1),"м/c","или",con(fall2(i4)).toFixed(1),"км/ч");

}
allinPlanet ("ЗЕМЛЯ",g=9.8);
allinPlanet ("MARS",g=3.71);

