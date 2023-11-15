$(function(){

    $("#ja-textarea").on('keyup paste', function() {
        if($("#autoTranslate").prop("checked")){
            translate();
        }
    });

    $("#btn-translate").on("click", function() {
        translate();
    })


    $(window).keydown(function(e) {
        if(e.ctrlKey){
            if(e.code==="Enter"){ //Ctrl + Enter
                translate();
            }else if(e.code==="KeyB"){ //Ctrl + b
                $("#autoTranslate").prop("checked", !$("#autoTranslate").prop("checked"))
            }
        }
    })

});

function translate(){
    const text = $("#ja-textarea").val();
    if(text!==""){
        const formatText = encodeURI(text.replace(/\//g,"／").replace(/#/g,"＃").replace(/\r?\n/g," "));
        const url = "https://www.deepl.com/translator#en/ja/"+formatText
        window.open(url);
        setTimeout(function(){
            $("#autoTranslate").prop("checked", true)
            $("#ja-textarea").val("");
        },1000);
    }else{

    }
}