function first()
{
    var id=document.getElementsByClassName("search_input")[0].value;
    var obj;
    var tab = document.getElementById("tab1");

    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function ()
    {
            if(this.readyState==4 && this.status==200)
            {
                obj=JSON.parse(this.responseText);
                var div=document.getElementsByClassName("div6")[0];
                div.innerHTML=obj.name;               
                var div8=document.getElementsByClassName("div8")[0];
                div8.innerHTML=obj.effect_entries[0].effect;
                while(tab.firstChild)
                {
                    tab.removeChild(tab.firstChild);
                }
                var c=0,row,col,f=0;
                for(var i=0;i<obj.pokemon.length;i++)
                {
                    var xhttp1 = new XMLHttpRequest();
                    var obj1;
                    xhttp1.onreadystatechange = function()
                    {
                       if(this.readyState==4 && this.status==200)
                       {
                            obj1 = JSON.parse(this.responseText);
                            if(c==0)
                            {
                                row = document.createElement('tr');
                                //console.log(i);
                                f=0; 
                            }
                            else
                            {
                                if(c==3)
                                {
                                    tab.appendChild(row);
                                    c=0;
                                    f=1;
                                }
                                else
                                {
                                    f=0;
                                }
                            }
                            if(f!=1 && obj1.sprites.front_default)
                            {
                                col = document.createElement('td');
                                col.setAttribute("style","background-color:rgba(255,255,255,0.7);align:center;border-radius:50%;");
                                col.innerHTML = `<img src=${obj1.sprites.front_default} class="app" style="filter: blur(20px);animation: hd-quality 1s;animation-delay: 3s;
                                animation-fill-mode: forwards;">`;
                                row.appendChild(col);
                                c=c+1;
                            }
                
                       }
                    };
                   xhttp1.open("GET",obj.pokemon[i].pokemon.url);
                   xhttp1.send();
                }
            
            }
    };
    xhttp.open("GET","https://pokeapi.co/api/v2/ability/"+id,true);
    xhttp.send();
}