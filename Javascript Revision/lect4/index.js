//LOOP
        let arr =[1,2,3,4,5]
        //           FOR EACH LOOP
        // => doesnt create a new array in return and modifies in the original 
        // let data1= arr.forEach((a,b,c) => {
            // console.log(a);
            // console.log(b);
            // console.log(c);
            // return c;
        // });
        // console.log(data1);
        
        //a => first position points to array values
        //b => second points to indexes of array
        //c => third points to array itself


        //      MAP FUNCTION
        // => same as for each but creates a new array 
        // => doesnt return data in return

        // let data2= arr.map((a,b,c)=>{
        //     // console.log(a);
        //     return a*2
        // })
        // console.log(data2);


        // //IT GIVES THE OUTPUT WITH VALUES WHICH ARE NOT GREATER THAN 3 BY "TRUE" AND "FALSE"
        // let data3=arr.map((a,b,c)=>{
        //     return a
        // })
        // console.log(data3)
        

        //      FILTER FUNCTION
        
        // let data4= arr.filter((a,b,c)=>{
        //     return a>3
        // })
        // console.log(data4)
         // //IT ONLY GIVES VALUE GREATER THAN 3



        //      REDUCE FUNCTION
        // Syntax
        // array.reduce(function(total, currentValue, currentIndex, arr), initialValue) => a,b,c,d points respectively

        // => returns a single value, does not change the original array
        // => same as filter,has 4 parameters by default
        // => value of first parameter could be chnged by giving manually in return type
        // eg: given 10 here so first 10 then sum of rest

        // let sum =  arr.reduce((a,b,c,d)=>{
        //  return a+b   
        //  },10) //a=10 & b=arr
        // console.log(sum);   

        

        //GREATEST VALUE
        //  let arr =[1,2,3,4,5,6,7,8]
        // let data5=arr.reduce((a,b,c)=>{
        //     return a>b?a:b
        // })
        // console.log("Greatest value in arr is "+data5);
        
        
        // //LOWEST VALUE
        // let data6=arr.reduce((a,b,c)=>{
        //     return a<b?a:b
        // })
        // console.log("Lowest value in arr is "+data6)

        //question
        // let arr =[2,3,2,3,42,4,32,5,2,5,7]

        // let grData =arr.filter((a)=>{
        //     return a>3
        // })

        // let  modData=arr.filter((a)=>{
        //     return a%2==0
        // })let sumData =arr.filter((a)=>{
        //     return a>3
        // })

        // chained way of it
        // let data = arr.filter((a)=>{
        //     return a>3
        // }).filter((b)=>{
        //     return b%2==0
        // }).reduce((a,b)=>{
        //     return a+b
        // })
        // console.log(data);
        

        