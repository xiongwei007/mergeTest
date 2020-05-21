export default function anchorLink(key){
    let domTop=document.getElementById(key).offsetTop;
    let nowTop=0;

    let setTime=setInterval(() => {
        if(nowTop<domTop){
            nowTop+=10;
            document.documentElement.scrollTop=nowTop;
            if((domTop-nowTop)<10){
                document.documentElement.scrollTop=domTop;
                clearInterval(setTime);
            }
        }else{
            nowTop-=10;
            document.documentElement.scrollTop=nowTop;
        }
    },10);
    document.addEventListener('click',()=>{
        clearInterval(setTime);
    })
    document.addEventListener('mousewheel',()=>{
        clearInterval(setTime);

    })

}