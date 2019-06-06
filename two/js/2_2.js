function giveOut(){
			var table = document.createElement('table');
			table.setAttribute('border',5);
			table.setAttribute('cellpadding',15);
			table.setAttribute('id','newT');
			document.getElementById('body').appendChild(table);

			var row = table.insertRow(0);
			var col1 = row.insertCell(0);
			col1.innerHTML = "Roll No.";
			var col2 = row.insertCell(1);
			col2.innerHTML = "Name";
			var col3 = row.insertCell(2);
			col3.innerHTML = "Year";

			var j = 1;

			var string = document.getElementById('tf1').value;
			for(var i = 1; i<11; i++){
				var roll = document.getElementById('t').rows[i].cells[0].innerHTML;
				var name = document.getElementById('t').rows[i].cells[1].innerHTML;
				var year = document.getElementById('t').rows[i].cells[2].innerHTML;

				if(name.includes(string)){
					var row = table.insertRow(j);
					var col1 = row.insertCell(0);
					col1.innerHTML = roll;
					var col2 = row.insertCell(1);
					col2.innerHTML = name;
					var col3 = row.insertCell(2);
					col3.innerHTML = year;
					j++;
				}
			}
			var Parent = document.getElementById('t');
    		while(Parent.hasChildNodes()){
       			Parent.removeChild(Parent.firstChild);
    		}
		}