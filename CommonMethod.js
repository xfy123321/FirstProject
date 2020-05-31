

function requestmethod(par1,par2,par3,callback) {
    //第一步：闯将一个请求对象，负责去服务器要值
    var xhr = new XMLHttpRequest();

//第二步：建立与服务端的链接（找到哪个服务器去要数据）
    xhr.open(par1,'url'+par2);
//设置头信息，告诉服务器让数据以表单的形式传递过去
    xhr.setRequestHeader("content-type","application");
//第三步：向服务端发送请求
    xhr.send(par3);

//第四步：接受服务端返回的数据
    xhr.onreadystatechange = function () {
        //xhr.readyState == 4代表数据请求完成
        //
        if (xhr.readyState == 4 && xhr.status == 200){
            var responseData = JSON.parse(xhr.responseText);
            var str = responseData.data;
            callback(str);
        }


    }
}
