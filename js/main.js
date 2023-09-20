let sorted = false;

$(document).ready(() => {
    $("#sort").click(() => {
        if (sorted) {
            $('section.errors p').text('Already sorted!');
            return;
        }
        $("section.errors p").text("");
        let $array = getArrayValue();
        console.log($array)
        sort($array[0]);
        sorted = true;
    });
})