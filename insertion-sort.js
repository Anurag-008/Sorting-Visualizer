//Function for insertion sort
function Insertion()
{
    c_delay=0;

    for(var i=0; i<array_size; i++){

        var key  = div_sizes[i];

        div_update(divs[i], div_sizes[i], "#ffcb69");//yellow
        
        var j = i-1;

        while(j>=0 && div_sizes[j]>key)
        {

            div_update(divs[j], div_sizes[j], "#980000");//red
            div_update(divs[j+1], div_sizes[j+1], "#980000");//red

            div_sizes[j+1] = div_sizes[j];

            div_update(divs[j+1], div_sizes[j+1], "#980000");//red
            div_update(divs[j], div_sizes[j], "#344966");//blue

            if(j==i-1){
                div_update(divs[j+1], div_sizes[j+1], "#ffcb69");//yellow
            }

            else{
                div_update(divs[j+1], div_sizes[j+1], "#344966");//blue
            }

            j-=1;
        }

        div_sizes[j+1] = key;

       for(var t = 0; t<i; t++){
           div_update(divs[t], div_sizes[t], "#208B3A");//green
       }

    }

    div_update(divs[i-1], div_sizes[i-1], "#208B3A");//green
    
    enable_buttons();
}
