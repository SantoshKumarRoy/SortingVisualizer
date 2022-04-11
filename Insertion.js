

async function InsertionMain()
    {const elem = document.querySelectorAll(".bar");
    var sizebar=document.querySelector("#BarSize").value;
        var n = sizebar;
        for (let i = 1; i <= n; ++i) {
            var greenColor=i; //this i use to store the no of selected bar
           var key =elem[i].innerHTML;
           elem[i].style.background = 'red';
           await waitforme(timeSpeed);
            var j = i - 1;
 
            while (j >= 0 && (parseInt(elem[j].innerHTML )>parseInt(key))) {
                elem[j+1].style.background = 'red'; 
                await waitforme(timeSpeed); 
              elem[j+1].innerHTML=elem[j].innerHTML;
              elem[j+1].style.background='yellow';
              
                j = j - 1;
               
            }
            for(let b=0;b<=greenColor;b++) // this loop i used ti make all yellow bar into green color due to previous while loop
            {
                elem[b].style.background='#054027'; 
            }
          
            elem[j + 1].innerHTML= key;
            elem[j + 1].style.background = '#054027';
            
        }
       
        
    }
    async function Insertion()
{
    await InsertionMain();
}
