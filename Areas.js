var area="Equalirala";
var PI=3.14,l=5,b=4,a=4,r=2,h=12;
switch(area){
    case "cricle":
        console.log("the area of the cricle " + PI*r**2);
        break;
    case "Rectangle":
        console.log("the area of the Rectangle "+ (l*b));
        break;
    case "triangle":
        console.log("the area of the triangle " + (h*b)/2);
        break;
    case "square":
        console.log("the area of the square " + a**2);
        break;
    case "Trapezoid":
        console.log("the area of the Trapezoid " + h*(a+b)/2);
        break;
    case "Ellips":
        console.log("the area of the Ellips " + PI*a*b);
        break;
    default:
        console.log("please Enter vaild number")
}