// window.onload=function()
// {    
//     //document.write("HelloJavaScript");
// };

$(function(){
    $("input").on("click",function(){
        // alert("Hi");
        $("h1").text("Hello");
    });
});

let imageUR_Array = [
    "https://i.pinimg.com/474x/d0/38/b5/d038b597fdca1e6e73ab6e659ab89874.jpg",
    "https://i.pinimg.com/474x/e9/94/57/e994579626190821e3d2e9302dbc5a7a.jpg",
    "https://i.pinimg.com/474x/00/49/33/004933aaa8b97039ad39411158c19ed9.jpg",
    "https://i.pinimg.com/474x/41/c7/ff/41c7ff9610af3dadb4df711d78733718.jpg",
    "https://i.pinimg.com/474x/68/29/71/682971f23d90192276a00f3adb51025a.jpg",
    "https://i.pinimg.com/474x/de/eb/14/deeb14358042b9f77581e923740c1b4c.jpg",
    "https://i.pinimg.com/474x/d3/07/8b/d3078b65b03f4422c788792091396de6.jpg",
    "https://i.pinimg.com/474x/e4/ce/92/e4ce9211714fe92f48daa5ce2f8f0f84.jpg",
    "https://i.pinimg.com/474x/ac/3f/de/ac3fde0786eaeeba74b22a9ef79d2e94.jpg",
    "https://i.pinimg.com/474x/00/82/62/008262a360db80bbd16ffe6beda193c8.jpg"
];
let save = 0
$(function(){  
    $("input").on("click",function(){
        // alert("Hi");
        // $("h1").text($("li").eq(1).text());
        var numberOfListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        while(save == randomChildNumber)
            randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        save = randomChildNumber;
        console.log(randomChildNumber); //放到console
        $("h1").text($("li").eq(randomChildNumber).text());
        //change img -> change img element's src
        $("img").attr("src",imageUR_Array[randomChildNumber]) //數字對應圖片
    });
});
