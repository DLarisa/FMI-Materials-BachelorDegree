window.onload=function(){
	setTimeout(function(){
		for (i=0;i<10;i++){
			btn=document.createElement("button");
			document.body.appendChild(btn);
			btn.innerHTML=0;
                        btn.activ=0;
			btn.onclick=function(){
				  if(this.activ==0){
                                               	this.activ=setInterval(function(b){
                        			b.innerHTML=1+parseInt(b.innerHTML);
					},1000,this);
				}
				else{
					clearInterval(this.activ);
					this.activ=0;
				}				
			}			
		}	
	},1500);
}