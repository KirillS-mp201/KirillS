alert("Квадратное уравнение ax^2+bx+c");
var a = prompt ("Введите аргумент a", " ");
var b = prompt ("Введите аргумент b", " ");
var c = prompt ("Введите аргумент c", " ");
var miss = -1;
Dis = (b*b)-(4*a*c);
if (c != 0 && a != 0 && b != 0)
{	
if (Dis > 0)
		{
			res1 = (-b + Math.sqrt(Dis))/2*a;
			res2 = (-b - Math.sqrt(Dis))/2*a;
			document.write("x1 = ",res1 );
			document.write(" x2 = ",res2 );;
		}
	else if (Dis == 0)
		{
			res1 = (-b/2*a);
			document.write("x1 = ",res1 );
		
		}
	else if (Dis < 0)
		{
			Dis = Math.abs(Dis);
			g = Dis**(1/2)
			res1 = miss*b + "/" + 2*a + "+" + g.toFixed(2) + "*i" + "/" + 2*a;
			res2 = miss*b + "/" + 2*a + "-" + g .toFixed(2) + "*i" + "/" + 2*a;
			document.write("x1 = ",res1 );
			document.write(" x2 = ",res2 );
		}
}

 if (c == 0)
{
	if (Dis > 0)
		{
			res1 = (-b + Math.sqrt(Dis))/2*a;
			res2 = (-b - Math.sqrt(Dis))/2*a;
			document.write("x1 = ",res1 );
			document.write(" x2 = ",res2 );
	
		}
	else if (Dis == 0)
		{
			res1 = (-b/2*a);
			document.write("x = любое " );
			
		}
	else if (Dis < 0)
		{
			Dis = Math.abs(Dis);
			g = Dis**(1/2)
			res1 = b + "/" + 2*a + "+" + g.toFixed(2) + "*i" + "/" + 2*a;
			res2 = b + "/" + 2*a + "-" + g.toFixed(2)  + "*i" + "/" + 2*a;
			document.write("x1 = ",res1 );
			document.write(" x2 = ",res2 );
		}
	
}

 if (a == 0 && b !=0 && c != 0)
{
	x = -c / b;
	document.write("x1 = ",x );

}



if (a == 0 && b ==0 && c != 0)
{
	
	document.write("Корней нет " );

}

if (a != 0 && b == 0 && c != 0)
{	if (c < 0)
		x = Math.sqrt(-c / a);
	else
		{
			x = "("+"i^2*" +  c +"/"+ a.toFixed(2)+ ")"+"^(1/2)";
		}
		document.write("x1 = ",x ); 
		document.write(" x2 = -",x );

}



