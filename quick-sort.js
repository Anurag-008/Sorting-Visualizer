//Quick Sort Function
function Quick()
{
    c_delay=0;

    quickSort(0,array_size-1);

    enable_buttons();
}

function quick_part(start, end)
{
    var i = start + 1;
    var piv = div_sizes[start] ;
    div_update(divs[start],div_sizes[start],"#ffcb69");// #ffcb69

        for(var j =start + 1; j <= end ; j++ )
        {
           
            if (div_sizes[ j ] < piv)
            {
                div_update(divs[j],div_sizes[j],"#ffcb69");// #ffcb69

                div_update(divs[i],div_sizes[i],"#980000");//red
                div_update(divs[j],div_sizes[j],"#980000");//red

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"#980000");//red
                div_update(divs[j],div_sizes[j],"#980000");//red

                div_update(divs[i],div_sizes[i],"#344966");//blue
                div_update(divs[j],div_sizes[j],"#344966");//blue

                i += 1;
            }
    }
    div_update(divs[start],div_sizes[start],"#980000");//red
    div_update(divs[i-1],div_sizes[i-1],"#980000");//red
    
    var temp=div_sizes[start];
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],"#980000");//red
    div_update(divs[i-1],div_sizes[i-1],"#980000");//red

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"#208B3A");//green
    }

    return i-1;
}

function quickSort (start, end )
{
    if( start < end )
    {
        var piv_pos = quick_part(start, end ) ;     
        quickSort (start, piv_pos -1);
        quickSort (piv_pos +1, end) ;
    }
 }