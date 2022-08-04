let arr = [12,423,42,44,656,75,3];

let max = Math.max();
let max2 = Math.max();

for (let i = 0; i<arr.length;i++){

 if(arr[i]>max){
    max2 = max;
    max = arr[i]
 }

 if(arr[i] < max  && arr[i] > max2){
    max2 = arr[i]
 }

}


console.log(max2)