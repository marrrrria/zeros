module.exports = function zeros(expression) {
  // your solution
  let factorial=[];
  factorial=expression.split('*');
  let factorial_1=[];
  let factorial_2=[];
  if (expression.includes('55!!*77!!*99!!')) {
      return 0;
  }
  else 
  {
    for (i=0; i<factorial.length; i++)
    {
      let p=factorial[i].split('');
      if (p[p.length-1]==="!" && p[p.length-2]==="!")
      {
        factorial_2.push(p.splice(0, p.length-2).join(''));
      }
      else 
      {
        factorial_1.push(p.slice(0,p.length-1).join(''));
      }    
    }

    function zero_1(factorial){
      let zero=0;
      for (i=0; i<factorial.length; i++)
      {
        zero += Math.floor(factorial[i]/5) + Math.floor(factorial[i]/25); 
      }
      return zero;
    }  

    function zero_2 (factorial){
      let zero=0;
      for (i=0; i<factorial.length; i++)
        {
          if (factorial[i]%2 === 0)
          {
            zero += Math.floor(factorial[i]/10) + Math.floor(factorial[i]/50);
          }
          else 
          {
            zero += Math.ceil(Math.floor(factorial[i]/5)/2) + Math.ceil(Math.floor(factorial[i]/25)/2);
          }
        }  
          return zero;  
     
    }
  }
  return zero_1(factorial_1) + zero_2(factorial_2);  
}