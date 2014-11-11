function fetchParties() {
    $.ajax({
        url: "https://familynestwork.herokuapp.com/services/ops/parties?start=".concat($("#searchtext").val())
    }).then(function(data) {
		var myNode = document.getElementById("rellist");
		myNode.innerHTML = "";
		
		for (var i in data)
		{
		var element = document.createElement("a");
		element.setAttribute("class", "list-group-item");
		element.innerHTML = data[i].partyName;
		myNode.appendChild(element);
		}
	});
};

function fetchPartyDetails() {
    $.ajax({
        url: "https://familynestwork.herokuapp.com/services/ops/parties?start=".concat($("#searchtext").val())
    }).then(function(data) {
		var myNode = document.getElementById("rellist");
		myNode.innerHTML = "";
		
		for (var i in data)
		{
		var element = document.createElement("a");
		element.setAttribute("class", "list-group-item");
		element.innerHTML = data[i].partyName;
		myNode.appendChild(element);
		}
	});
};