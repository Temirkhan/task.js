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
   console.log("����� ���������� �������� �� 20 ������=",i1.toFixed(1),"�");

 var i2=speed()
   console.log("����� �������� �� ���������� 20 ������=",i2.toFixed(1),"�/c","���",con(speed(i2)).toFixed(1),"��.�");

 var i3=high()
   console.log("������� ������ ��������� ������� � ������ 200�=", i3.toFixed(1),"c");  
    
 var i4=fall2()
   console.log("������ �������� ����� ������� � ������ 200�=",i4.toFixed(1),"�/c","���",con(fall2(i4)).toFixed(1),"��/�");

}
allinPlanet ("�����",g=9.8);
allinPlanet ("MARS",g=3.71);

