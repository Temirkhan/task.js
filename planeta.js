var i;
t=20;
g=9.8;

z=200;
console.log("ZEMLYA:");
function rass()
{


  h=(g*t*t)/2;


return(h);

}
var r=rass();

console.log("Rasstoyanie:",r);


function skor()

{
  s=(g*t);

return(s); 
}

 function all()
{
  a=(g*10/t*3600);
    
  return(a);
}
	
	var s=skor();
   
	var a=all(skor());
console.log("Skorost`:",s,a );


function vre()// Vremya padeniya
{
  d= Math.sqrt(h*2/g);
return(d);

}
	
	var t=vre();


console.log("Vremya padeniya:",t);




function pad()//Skorost` posle padeniya
{
  p= Math.sqrt(2*g*z);
return(p);

}
	
	var h=pad();


console.log("posle padeniya:",h,"\n");


function alls1()
{
g=3.71;

console.log("MARS:");
var r=rass();

console.log("Rasstoyanie:",r);
var s=skor();
   
	var a=all(skor());
console.log("Skorost`:",s,a );

var t=vre();


console.log("Vremya padeniya:",t);

	var h=pad();


console.log("posle padeniya:",h,"\n");

}

alls1();


function alls2()
{
g=0.4;

console.log("PLUTON:");
var r=rass();

console.log("Rasstoyanie:",r);
var s=skor();
   
	var a=all(skor());
console.log("Skorost`:",s,a );

var t=vre();


console.log("Vremya padeniya:",t);

	var h=pad();


console.log("posle padeniya:",h,"\n");

}

alls2();


function alls3()
{
g=6.7;

console.log("VENERA:");
var r=rass();

console.log("Rasstoyanie:",r);
var s=skor();
   
	var a=all(skor());
console.log("Skorost`:",s,a );

var t=vre();


console.log("Vremya padeniya:",t);

	var h=pad();


console.log("posle padeniya:",h);

}

alls3();