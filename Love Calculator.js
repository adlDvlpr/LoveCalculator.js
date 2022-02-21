prompt("LOVE CALCULATOR - Name of Lover 1 ");
prompt("LOVE CALCULATOR - Name of Lover 2 ");

var percentage= Math.random();
percentage= percentage * 100;
percentage= Math.floor(percentage) + 1;

if(percentage > 70){
 alert ("Your Love Score is " + percentage + "% " + "You Found a Keeper!");
}

if (percentage >30 && percentage <=70){
alert ("Your Love Score is " + percentage + "% " + "Maybe Friends?");
} 
if (percentage < 30) {
    alert ("Your Love Score is " + percentage + "% " + " - Like Oil and Water");
 }
