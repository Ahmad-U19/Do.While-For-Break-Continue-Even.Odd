var y=1;

do{
    
    document.write(y+") Ahmad ");
    
    document.write("<br>");
    
    if (y==4) {
    
        break;
    
    }
    
    y++;
}while(y<=6);

for (var x =1; x<=4;x++){
    
    document.write("<br>");

    if(x==2){
        continue;
    }
    document.write(x+") Ahmad ");
    
}

var num=prompt("Enter a Number: ");

if(num%2==0){
    document.write("<br>"+"Even Number");
}
else{
    document.write("<br>"+"Odd Number")
}