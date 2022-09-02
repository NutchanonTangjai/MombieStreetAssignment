var board = "";

//define a variable size here
var size = 8; 

for (let i = 1; i <= size*size ; i++) {
    board += "# ";
    //new line charaters
    if(i%size==0)board +="\n";
}

//according to the assignment it's says 8*8 grid but in the console.log example are 4*8
//so please use this line if you want the 4*8 example result.

/*for (let i = 1; i <= size*(size/2) ; i++) {
    board += "# ";
    //new line charaters
    if(i%(size/2)==0)board +="\n";
}*/

console.log(board);