function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function callthisfunc()
{
    for(let i=0; i<3; i++)
    {
        let z =1;
    
        num = num + [(randomNumber(1,3))*z]
    
        z = z*10;
    
    }
}
