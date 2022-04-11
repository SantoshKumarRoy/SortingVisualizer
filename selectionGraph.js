async function selectionMain()
{
    const arr = document.querySelectorAll(".bar");
    var n=document.querySelector("#BarSize").value;
     
    for (let i = 0; i < n-1; i++)
    {
        
        var  min_idx = i;
        arr[min_idx].style.background='red';
       await waitforme(timeSpeed);
        for (let j = i+1; j < n; j++)
        {
            
            
            if (parseInt(arr[j].style.height) < parseInt(arr[min_idx].style.height))
                {
                     min_idx = j;   
                }
                arr[j].style.background='yellow';

        }
        arr[min_idx].style.background='red';
        await waitforme(timeSpeed);
        
        swap(arr[min_idx],arr[i]);
       
        arr[i].style.background='green';
       
    } arr[n-1].style.background='green';
   

}
async function selection()
{
    await selectionMain();
}