$(function(){
    $("#ja-textarea").on('keyup paste', function() {
        if($("#autoTranslate").prop("checked")){
            translate();
        }
    });

    $("#btn-translate").on("click", function() {
        translate();
    })
});

function translate(){
    const text = $("#ja-textarea").val();
    if(text!==""){
        const formatText = encodeURI(text.replace(/\//g,"／").replace(/#/g,"＃").replace(/\r?\n/g," "));
        const url = "https://www.deepl.com/translator#en/ja/"+formatText
        // console.log(url)
        window.open(url);
        setTimeout(function(){
            $("#ja-textarea").val("");
        },1000);
    }
}