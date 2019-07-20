var items=['item1','item2','item3','item4'];


var list=document.querySelector('#myList');
var html='';


items.forEach(function(item){
    
    html+='<li class="list-group-item">'+item+'<span class="close">x</span>  </li>';
});

list.innerHTML=html;

list.addEventListener('click',function(item){
   var deg=true;
    deg=(item.target.tagName='li');
    if(deg){
       item.target.classList.toggle('checked');
       }
});
var close=document.getElementsByClassName('close');


for(var i=0;i<close.length;i++){
    close[i].onclick=function(){
    var li=this.parentElement;
    li.style.display='none';
}
}


document.querySelector('#btnCreate').onclick=function(){
    

    html='';
    
    var item=document.querySelector('#txtItem').value;
    
    if(item==''){
       alert('boşluğu doldurunuz...');
       
       }
    else{
      html='<li class="list-group-item">'+item+'<span class="close">x</span>  </li>';
    }
    
list.innerHTML+=html;
    list.addEventListener('click',function(item){
   var deg=true;
    deg=(item.target.tagName='li');
    if(deg){
       item.target.classList.toggle('checked');
       }
});
var close=document.getElementsByClassName('close');


for(var i=0;i<close.length;i++){
    close[i].onclick=function(){
    var li=this.parentElement;
    li.style.display='none';
}
}

    
};


function CreateItem(item){
    var li=document.createElement('li');
    var t=document.createTextNode(item);
    li.className='list-group-item';
    li.appendChild(t);
    list.appendChild(li);
    
    var span=document.createElement('span');
    var text=document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild();
    
}