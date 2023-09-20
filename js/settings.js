const defaultArr = [1, 8, 3, 5];
let $container = displayArr(defaultArr);
let speed = {value: 500};

function unsort(){
    $container = displayArr(arr);
}

function getArrayValue() {
    return $container;
}

function getTimeout() {
    return speed;
}

$(document).ready(() => {
    $(".setting-button").click(() => {
        try{
            if($("#arr").val() !== ""){
                let arr = parse($("#arr").val());
                $container = displayArr(arr);
                sorted = false;
            }
            if($("#speed").val() < 0){
                $(".error-text").text("速度不能小於0！");
                return;
            }
            speed.value = $("#speed").val() !== 0 ? $("#speed").val() : speed.value;
        }
        catch(e){
            $(".error-text").text(e);
            console.log(e);
        }
    })
})