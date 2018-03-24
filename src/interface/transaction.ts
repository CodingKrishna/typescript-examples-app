interface Transaction {
    amountlimit:number,
    doTransaction: (fromAcc:number, toAcc:number, amount:number)=> boolean
}

var NEFTTransaction:Transaction = {
    amountlimit: 1000,
    doTransaction: (fromAcc, toAcc, amount):boolean => {
        console.log('fromAcc:', fromAcc,'toAcc:',toAcc, 'amount:',amount);
        return true;
    }
} 
NEFTTransaction.doTransaction(12345,123123,100);