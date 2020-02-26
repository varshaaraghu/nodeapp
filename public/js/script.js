
$(document).ready(
	function(){
        $.get("http://localhost:4050/cities/countries",function(countries){
            let code="";
            for(let x in countries){
                code+="<option value ='"+countries[x].code+"'>"+countries[x].name+"</option>";
            }
            $("#country").html(code);
        });
		$('#city').keyup(
				function(){
						
					let pattern=$('#city').val();
					$.get("http://localhost:4050/cities/all/"+pattern,function(cities){
						let code="";
						for(let x in cities){
						 code+="<tr>";
						 code+="<td>"+cities[x].name+"</td>";
						 code+="<td>"+cities[x].district+"</td>";
						 code+="<td>"+cities[x].population+"</td>";
						 code+="</tr>"
						}
						$('#tdata').html(code);
					});
								
				}
		
		);
		$('#country').change(
				function(){
						
					let code=$('#country').val();
					$.get("http://localhost:4050/cities/allcities/"+code,function(cities){
						let code="";
						for(let x in cities){
						 code+="<tr>";
						 code+="<td>"+cities[x].name+"</td>";
						 code+="<td>"+cities[x].district+"</td>";
						 code+="<td>"+cities[x].population+"</td>";
						 code+="</tr>"
						}
						$('#tdata').html(code);
					});
								
				}
		
		);
	}	
);