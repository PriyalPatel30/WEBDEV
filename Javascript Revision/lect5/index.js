        //FIND METHOD 
// => same as filter but returns a single value rather than array
// let arr=[1,2,3,4,5,6,7,3]
// let data = arr.find((a,b,c)=>{
//     return a==3
// })
// console.log(data);

// //Comparatively, filter returns the array of the value "3"
// let data1=arr.filter((a,b,c)=>{
//     return a==3
// })
// console.log(data1);


        //INCLUDES AND INDEXOF METHOD

// console.log(arr.includes(3));
//gives true as 3 is included, & single value to be passed at a time

// console.log(arr.indexOf(100));
//gives -1 as there is no value "100" in array


//QUESTION  : 2ND MAX VALUE
// let arr=[1,2,3,4,5,6,7,3]
//         let maxValue=arr.reduce((a,b)=>{
//             return a>b?a:b
//         })
//         let newArr=arr.filter((a,)=>{
//             return a!==maxValue
//         })
//         let secondMax=arr.reduce((a,b)=>{
//             return a>b?a:b
//         })
//         // console.log(newArr);
//         let secondMaxValue=newArr.reduce((a,b)=>{
//             return a>b?a:b
//         })
//         console.log(secondMaxValue);
        

        // MERGE TWO ARRAYS
        // let arr=[1,2,3,4,5,6,7,3]
        // let arr1=[33,77]
        // let mergedArr=[]
        // for(let i of arr){
        //     tempArr.push(i)
        // }
        
        // for(let j of arr1){
        //     tempArr.push(j)
        // }
        // console.log(mergedArr);
        
        // => MATH.RANDOM AND FLOOR, CEILING
        // let myLuckyNum = 11
        // let lucky=(Math.random()*10)
        // if(lucky==myLuckyNum){
        //     console.log(lucky+" Yay, its lucky!");
            
        // }
        // else if(lucky>myLuckyNum){
        //     console.log(lucky+" Its greater ");
            
        // }
        // else if(lucky<myLuckyNum) {
        //     console.log(lucky+" Its lesser");
        // }

        //Question
        // find the maximum of this array using 3 nums (duplicates allowed)
        
        let arr=[-3,0,3,5,5,2,0,1]

        let maxValue=arr.reduce((a,b)=>{ 
            return a>b?a:b
        })
        //return max value

        let arr1=arr.filter((a)=>{
            return a!==maxValue //return that value i.e after max
        })
        //remove max value and return array

        let maxValue1=arr1.reduce((a,b)=>{
            return a>b?a:b
        })
        //return second max value

        console.log(maxValue1); //3
        
        let arr2=newArr.reduce((a,b)=>{
            return a!==maxValue1 //return that value i.e after second max
        })
        //remove second max value

        let maxValue2=arr.reduce((a,b)=>{
            return a>b?a:b
        })
      
    