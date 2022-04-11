async function bubbleSort()
{
    const ele = document.querySelectorAll(".bar");
    var sizeBar=document.querySelector("#BarSize").value;
    
    for(let i = 0; i <sizeBar-1; i++){
       
        for(let j = 0; j <sizeBar-i-1; j++){
          
            ele[j].style.background = 'red';
            ele[j+1].style.background = 'red';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
               
                await waitforme(timeSpeed);
                swap(ele[j], ele[j+1]);
            }
           ele[j].style.background = 'yellow';
              
        }
        ele[sizeBar-1-i].style.background = '#054027';
    }
    ele[0].style.background = '#054027'
}
async function bubble()
{
    await bubbleSort();
}