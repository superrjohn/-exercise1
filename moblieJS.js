
	window.addEventListener('load',function(){
		let focus=document.querySelector('.focus');
		let ul=focus.children[0];
		let ol=focus.children[1];
		let w=focus.offsetWidth;
		let index=0;
		
		  let timer=setInterval(function(){
			  index++;
			  let translatex= -index *w;
			  ul.style.transition='all .3s';
			  ul.style.transform='translatex('+translatex+'px)';
		  },2000)
		
		ul.addEventListener('transitionend',function(){
		if(index>=3)
			{index=0;
		let translatex= -index *w;
			  ul.style.transition='none';
			  ul.style.transform='translatex('+translatex+'px)';}
		
		else if(index<0){index=2;
		let translatex= -index *w;
			  ul.style.transition='none';
		ul.style.transform='translatex('+translatex+'px)';}
		
		ol.querySelector('.current').classList.remove('current');
		ol.children[index].classList.add('current');
		})
		
		let startX=0;
		let moveX=0;
		let flag=false;
		ul.addEventListener('touchstart',function(e){
			startX=e.targetTouches[0].pageX;
			clearInterval(timer);
		})
		
		ul.addEventListener('touchmove',function(e){
			moveX=e.targetTouches[0].pageX-startX;
			let translatex= -index *w+moveX;
			  ul.style.transition='none';
		ul.style.transform='translatex('+translatex+'px)';
		flag=true;
		})
		
		ul.addEventListener('touchend',function(e){
			if(flag){
			if(Math.abs(moveX)>50){
				if(moveX>0){index--}
				else{index++}
			let translatex= -index *w;
			  ul.style.transition='all .3s';
		ul.style.transform='translatex('+translatex+'px)';
			}else{let translatex= -index *w;
			  ul.style.transition='all .1s';
			ul.style.transform='translatex('+translatex+'px)';}}
			
			timer=setInterval(function(){
			  index++;
			  let translatex= -index *w;
			  ul.style.transition='all .3s';
			  ul.style.transform='translatex('+translatex+'px)';
		  },2000)
		})
	})