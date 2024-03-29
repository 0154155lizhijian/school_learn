self.addEventListener('message',(event)=>{
    // 不可以引用dom，window
    const data = event.data;
    console.log(data)
    for (let item of data.pics){
        // src 得到img  使用xmlhttprequest发起请求
        let xhr = new XMLHttpRequest();
        xhr.open('GET',item.src,true);
        xhr.responseType = 'blob';
        xhr.onreadystatechange = () => {
            if (xhr.readyState ==4){
                self.postMessage({
                    id:item.id,
                    result:xhr.response
                });
            }
        }
        xhr.send();
    }
})