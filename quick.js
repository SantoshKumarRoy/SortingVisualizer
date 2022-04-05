 function partition(arr,low,high)
{
	pivot = parseInt(arr[high].style.height);
    arr[high].style.background="red";
   // await waitforme(timeSpeed);
    var k=(low - 1);
	for(let j = low; j <= high - 1; j++)
	{
		
        
		if (parseInt(arr[j].style.height) < pivot)
		{
            arr[j].style.background="yellow";
           // await waitforme(timeSpeed);
			k++;
			swap(arr[k],arr[j]);

		}
	}
	swap(arr[k + 1], arr[high]);
    arr[high].style.background="yellow";
    arr[k+1].style.background="yellow";
	return (k + 1);
}

async function quickSort(arr,low,high)
{
	if (low < high)
	{
		
		var pi = partition(arr, low, high);
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}

// Driver Code
async function Quickmain()
{
    var arr = document.querySelectorAll(".bar");
	var n =parseInt(arr.length) - 1;
    var s=0;
	 quickSort(arr,s, n);	
}



