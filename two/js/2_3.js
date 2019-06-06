function giveOut(){

			var string = document.getElementById('tf1').value;

			$("#body")
			.append(
				$("<table>").attr('border','5').attr('cellpadding','15').attr('id','newT')
				.append(
					$("<tr>")
					.append($("<th>").text("Roll No."))
					.append($("<th>").text("Name"))
					.append($("<th>").text("Year"))
				)
			)
			for(var i = 1; i<11; i++){

				var roll = document.getElementById('t').rows[i].cells[0].innerHTML;
				var name = document.getElementById('t').rows[i].cells[1].innerHTML;
				var year = document.getElementById('t').rows[i].cells[2].innerHTML;

				if(name.includes(string)){
					$("#newT")
					.append(
						$("<tr>")
						.append($("<td>").text(roll))
						.append($("<td>").text(name))
						.append($("<td>").text(year))
					)
				}
			}
			$("#t").hide()
		}