generateArray();

function swap(el1, el2) {
   
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
function deleteChild() {
    const bar1 = document.querySelector("#bars");
    bar1.innerHTML ='';
}
function generateArray()
{
	var BarNO=document.querySelector("#BarSize").value;
	deleteChild();
	var arr=new Array(50);
	var bar=new Array(50);
	for (let i = 0; i < BarNO; i++) 
	{
		arr[i]=Math.floor(Math.random() * 250) + 1;
	}
	 console.log(arr);
	 var element=document.querySelector("#bars");
	for(let j=0;j<BarNO;j++)
	{
	
		 bar[j]= document.createElement("div");

            bar[j].classList.add('bar');
            bar[j].classList.add('flex-item');
			bar[j].classList.add('barNo${j}');
			bar[j].style.height =`${arr[j]}`;
		
			//bar.style.height = "50";
			element.appendChild(bar[j]);
	
		
	}

}
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
let timeSpeed=30;
var slider = document.getElementById("speed_input");
slider.oninput = function() {
  timeSpeed =320 -  (this.value);
}