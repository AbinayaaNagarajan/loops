//console.log("hello");
//Part 1
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("Fizz buzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    }
    else if (i % 5 === 0){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}

//Part 2

let n = 11;

while(true){
    let isPrime = true;
    
    n++;
    console.log(n);

        for (let i = 2; i < n; i ++){
            if (n % i === 0){
                console.log(n);
                isPrime = false;
                break;
            }
        }

        
    if(isPrime){
     console.log(n);
        break;
    }
}

//Part 3

let data="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let ID ="";
let Name="";
let Occupation="";
let Age="";
let counter=1;

for(i=0;i<data.length;i++){
console.log(data[i]);
if(data[i]=="\n"){
    counter++;
}
if(counter==1){
    ID += data[i];
}else if(counter==2){
    Name += data[i];
}else if(counter==3){
    Occupation += data[i];
}else{
    Age += data[i]
}
}
console.log(ID,Name,Occupation,Age);


