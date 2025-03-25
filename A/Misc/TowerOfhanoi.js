function Towerhan(n,fromRod,toRod,usingRod){
        if( n === 1 ) {
            console.log(`Move disc 1 from ${fromRod} to ${toRod}`);
            return 
        }
        Towerhan(n-1,fromRod,usingRod,toRod);
        console.log(`Move disc ${n} from ${fromRod} to ${toRod}`);

        Towerhan(n-1,usingRod,toRod,fromRod)
}

Towerhan(3,'A','C','B')       