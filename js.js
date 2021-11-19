
window.addEventListener('load',function(){
	//1.顯示和隱藏向左各右
	let focus=document.querySelector('.focus');
	let arrow_l=document.querySelector('.arrow-l');
	let arrow_r=document.querySelector('.arrow-r');

		focus.addEventListener('mouseenter',function(){
		arrow_l.style.display='block';
		arrow_r.style.display='block';
		//5.
		clearInterval(timer)
		timer=null;;
		})
		
		focus.addEventListener('mouseleave',function(){
		arrow_l.style.display='none';
		arrow_r.style.display='none';
		//5.
			timer=setInterval(function(){
				arrow_r.click();
				},2000)
		})
			
	//2.動態生成小圓圈
	let ul=focus.querySelector('ul');
	let ol=focus.querySelector('.circle')
	let focusWidth=focus.offsetWidth;
	
	for(let i=0;i<ul.children.length;i++){
		let li=document.createElement('li')
	ol.appendChild(li);	
	
	li.addEventListener('click',function(){
		for(let i=0;i<ol.children.length;i++){
		ol.children[i].className='';}
		this.className='current';
		mun=i;
		//3.點擊小圓點讓圖片移動
		animate(ul,-focusWidth*i)})
	}
	ol.children[0].className='current';
	
	//4.點擊左右讓圖片移動
	let mun=0;
	let first=ul.children[0].cloneNode(true);
	ul.appendChild(first);
		function cirleChange(){
		for(let i=0;i<ol.children.length;i++){
		ol.children[i].className='';}}
	
	let flag=true;
	arrow_l.addEventListener('click',function(){
		if(flag){
		flag=false;
		mun--;
		if(mun<0){mun=ul.children.length-2;
		ul.style.left=mun*-focusWidth+'px';}
		cirleChange();
		ol.children[mun].className='current';
	animate(ul,-focusWidth*mun,function(){
		flag=true;
	})}  })
		
	arrow_r.addEventListener('click',function(){
		if(flag){
		flag=false;
		mun++;		
			if(mun==ul.children.length-1){
			ul.style.left=0;
			mun=0}
		cirleChange();
		ol.children[mun].className='current';
		animate(ul,-focusWidth*mun,function(){
		flag=true;})}})
	//5.
	let timer=setInterval(function(){
				arrow_r.click();
				},2000)
})	
			
