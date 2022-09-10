// Function for Bubble Sort
function Bubble(){
    c_delay=0;

    for(var i=0; i<array_size-1; i++){
        for(var j=0; j<array_size-1-i; j++){
            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j], div_sizes[j], "#980000"); //red
                div_update(divs[j+1], div_sizes[j+1], "#980000");//red

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j+1];
                div_sizes[j+1] = temp;
                div_update(divs[j], div_sizes[j], "#980000");//red
                div_update(divs[j+1], div_sizes[j+1], "#980000");//red

                
            }
            div_update(divs[j], div_sizes[j], "#344966");//blue
        }
        div_update(divs[j], div_sizes[j], "#208B3A");//green

    }
    div_update(divs[0], div_sizes[0], "#208B3A");//green

    enable_buttons();
}
