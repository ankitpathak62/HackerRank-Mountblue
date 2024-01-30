function processData(input) {
    lines = input.split("\n");
    for(var i=1; i<lines.length; i++){
        if(lines[i].length > 0){
            var height=1;
            for(var j=0; j<lines[i]; j++){
                if(j%2==0){
                  height = height*2;  
                }else{
                  height = height+1;    
                } 
            }
            console.log(height);
            height=0;
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
