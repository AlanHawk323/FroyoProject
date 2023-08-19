//console.log("testing testing")
//six default flavours for testing: vanilla,vanilla,vanilla,strawberry,coffee,coffee
alert("Give us up to six of these Froyo flavours.")
//one normal alert because of how much text there was
const userFlavours = prompt ("Separated only by commas please:",
"vanilla,vanilla,vanilla,strawberry,coffee,coffee");
//will set up an array to split the flavours when I get back
const array = userFlavours.split ( "," );
const stats = {};
for(let i = 0; i < array.length; i++)
{const flavours = array[i];
if(stats[flavours] === undefined)
{stats[flavours] =0;}
stats[flavours] = stats[flavours] +1;}
//Activate the loop with a console log
console.log(stats);
