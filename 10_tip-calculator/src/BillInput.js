function BillInput({bill, onSetBill}) {
    function handleOnInput(e){
        onSetBill(Number(e.target.value));
        console.log(bill);  // Debugging purposes to see the bill amount being updated.
    }
    return <div>
        <label>What was the bill amount?</label>
        <input type="number" placeholder="Bill Amount" value={bill} onChange={handleOnInput}></input>
    </div>
}
export default BillInput;
