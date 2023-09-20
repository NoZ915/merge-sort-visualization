function removeAll(){
    $('div.array-container').remove();
}

function displayArr(arr){
    removeAll();

    let $arrayContainer = $("<div></div>").addClass("array-container");
    arr.map(i => {
        let $value = $("<p></p>").text(i);
        let $arrayElement = $("<div></div>").addClass("array-element");
        $arrayContainer.append($arrayElement.append($value));
    });

    $("section.animation-area").append($arrayContainer);

    function center() {
		$arrayContainer.css(
			"left",
			$("section.animation-zone").width() / 2 -
				$arrayContainer.width() / 2 +
				"px"
		);
	}
	center();
    $(window).resize(center);
    
    return $arrayContainer;
}

//把使用者輸入的陣列字串，從string轉成array
function parse(str){
    let newStr = str.split(", ")
    let newNum = newStr.map(i => {
        return parseInt(i, 10);
    });
    return newNum;
}