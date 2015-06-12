
var tbRank = localStorage.getItem("tbRank");//Retrieve the stored data 
tbRank = JSON.parse(tbRank); //Converts string to object 
if(tbRank == null || tbRank=='') {	//If there is no data, initialize an empty array 
	tbRank = [];
}


function addDataRank(inp1, inp2, inp3, inp4){ 
	if (localStorage.id_rank)
	{
		localStorage.id_rank = Number(localStorage.id_rank) + 1;
	}
	else
	{
		localStorage.id_rank = 1;
	}

	var data = JSON.stringify({ 
		id_rank : localStorage.id_rank,
		id_siswa : inp1,
		id_date : inp2,
		id_aktivitas : inp3,
		rank : inp4
	});
	tbRank.push(data);
	localStorage.setItem("tbRank", JSON.stringify(tbRank)); 
	console.log("Data berhasil disimpan."); 
	return true; 
} 

function editDataRank(selected_index, arrayData){
	tbRank[selected_index] = arrayData;
	localStorage.setItem("tbRank", JSON.stringify(tbRank)); 
	console.log("Data berhasil diperbarui.") 
	return true; 
}

function deleteDataRank(selected_index){ 
	tbRank.splice(selected_index, 1); 
	localStorage.setItem("tbRank", JSON.stringify(tbRank)); 
	console.log("Data berhasil dihapus."); 
	return true; 
}

function getAllRank(){
	var cli= [];
	for(var i in tbRank){ 
		cli[i]= JSON.parse(tbRank[i]); 
		cli[i].index_table= [];
		cli[i].index_table= i;
		console.log(i+" ==> id_rank:"+cli[i].id_rank+
			" id_siswa:"+cli[i].id_siswa+
			" id_date:"+cli[i].id_date+
			" id_aktivitas:"+cli[i].id_aktivitas+
			" rank:"+cli[i].rank
			);
	}
	return cli;
}

function getSomeRank(input, param){
	var temp= []; 
	var cli= [];
	for(var i in tbRank){
		cli[i] = JSON.parse(tbRank[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		switch (param) {
		case 'id_rank':
			if( cli[i].id_rank==input ){
				temp.push(cli[i]);
			}
		    break;
		case 'id_siswa':
			if( cli[i].id_siswa==input ){
				temp.push(cli[i]);
			}
		    break;
		case 'id_aktivitas':
			if( cli[i].id_aktivitas==input ){
				temp.push(cli[i]);
			}
		    break;
		}
	}
	return temp;
}

function getSomeAnyParam2Rank(input1, input2, param1, param2){
	// input1= input1.toLowerCase();
	// input2= input2.toLowerCase();
	// alert("idsiswa"+input1+" idaktivitas"+input2);
	var temp= []; 
	var cli= [];
	for(var i in tbRank){
		cli[i] = JSON.parse(tbRank[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		if( param1=="id_rank" && param2=="id_siswa" ){
			if( cli[i].id_rank==input1 && cli[i].id_siswa==input2 ){
				temp.push(cli[i]);
			}
		}
		if( param1=="id_siswa" && param2=="id_aktivitas" ){
			if( cli[i].id_siswa==input1 && cli[i].id_aktivitas==input2 ){
				temp.push(cli[i]);
			}
		}
	}
	
	if(temp.length>0){
		return temp;
	}
	else {
		return false;
	}
}

function getSomeAnyParam3Rank(input1, input2, input3, param1, param2, param3){
	input1= input1.toLowerCase();
	input2= input2.toLowerCase();
	var temp= []; 
	var cli= [];
	for(var i in tbRank){
		cli[i] = JSON.parse(tbRank[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		if( param1=="id_rank" && param2=="id_siswa" && param3=="id_aktivitas" ){
			if( cli[i].id_rank==input1 && cli[i].id_siswa==input2 && cli[i].id_aktivitas==input3 ){
				temp.push(cli[i]);
			}
		}
		if( param1=="id_rank" && param2=="id_siswa" && param3=="rank" ){
			if( cli[i].id_rank==input1 && cli[i].id_siswa==input2 && cli[i].rank==input3 ){
				temp.push(cli[i]);
			}
		}
	}
	if(temp.length>0){
		return temp;
	}
	else {
		return false;
	}
}

function deleteAllRank(){
	localStorage.removeItem("tbRank");
}