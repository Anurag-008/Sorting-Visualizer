//Function for selection sort
function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"#980000");//red

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"#ffcb69");//Color yellow

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"#344966");//blue
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"#980000");//red
            }
            else
            {
                div_update(divs[j],div_sizes[j],"#344966");//blue
            }
        }
        
        if(index_min!=i)
        {
            
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"#980000");//red
            div_update(divs[i],div_sizes[i],"#980000");//red
            div_update(divs[index_min],div_sizes[index_min],"#344966");//blue
        }
        div_update(divs[i],div_sizes[i],"#208B3A");//green
    }
    div_update(divs[i],div_sizes[i],"#208B3A");//green

    enable_buttons();
}