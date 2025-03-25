   function Climbing(n){
         const now = [1,2];
          for (i=2;i<=n;i++){
            now[i] = now[i-1]+now[i-2];
          }
         return now[n-1]
   }
   console.log(Climbing(5));
   console.log(Climbing(6));