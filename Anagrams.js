module.exports = { 
 //param A : array of strings
 //return a array of array of integers
    anagrams : function(A){
        
        var resultArray = [];
        var indexArray = [];
        var sortedArray = A.map(v=>{return v.split("").sort().join("")})

        for(var i=0;i<A.length;i++)
        {
            if(!indexArray.includes(i))
            {
                var resultIndexArray = [];
                var temp = sortedArray[i];
                for(var j=i+1;j<sortedArray.length;j++)
                {
                    if(sortedArray[j]===temp)
                    {
                    indexArray.push(j);
                    resultIndexArray.push(j+1)

                    }
                }
                            
                resultArray.push([i+1,...resultIndexArray]);
                
                
            }
        }
        return resultArray

    }
};