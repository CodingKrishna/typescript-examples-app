var NEFTTransaction = {
    amountlimit: 1000,
    doTransaction: function (fromAcc, toAcc, amount) {
        console.log('fromAcc:', fromAcc, 'toAcc:', toAcc, 'amount:', amount);
        return true;
    }
};
NEFTTransaction.doTransaction(12345, 123123, 100);
