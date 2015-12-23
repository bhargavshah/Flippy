// JS escaped version of the JSON created in 3
var jsonob = '{\r\n\t\"name\" : \"root\",\r\n\t\"children\" : [{\"name\" : \"child1\",\r\n\t\t\t\t\t\"children\" : [{\"name\" : \"child11\"}]},\r\n\t\t\t\t  {\"name\" : \"child2\",\r\n\t\t\t\t  \t\"children\" : [{\"name\" : \"child21\"}, {\"name\" : \"child22\"}, { \"name\" : \"child23\"}]},\r\n\t\t\t\t  {\"name\" : \"child3\",\r\n\t\t\t\t  \t\"children\" : [{\"name\" : \"child31\"}]}]\r\n}';

var jsob = JSON.parse(jsonob);

var searchInObject = function(nodeName, object) {
	if (object.hasOwnProperty('name') && object.name === nodeName) {
		return true;
	}
	if (object.hasOwnProperty('children')) {
		var i;
		var wasFoundInThisObject = false;
		for (i = 0; i < object.children.length; i++ ) {
			if (searchInObject(nodeName, object.children[i]) ) {
				wasFoundInThisObject = true;
				return true;
			}
		}
		if(!wasFoundInThisObject) {
			return false;
		}
	} else {
		return false;
	}
}


console.log(searchInObject('root', jsob));