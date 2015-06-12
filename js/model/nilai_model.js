
var tbNilai = localStorage.getItem("tbNilai");//Retrieve the stored data 
tbNilai = JSON.parse(tbNilai); //Converts string to object 
if(tbNilai == null || tbNilai=='') {	//If there is no data, initialize an empty array 
	tbNilai = [];
}


function addDataNilai(inp1, inp2, inp3, inp4, inp5){ 
	var data = JSON.stringify({ 
		id_nilai : inp1,
		id_siswa : inp2, 
		id_aktivitas : inp3,
		is_solve : inp4,
		nilai : inp5
	});
	tbNilai.push(data); 
	localStorage.setItem("tbNilai", JSON.stringify(tbNilai)); 
	console.log("Data berhasil disimpan."); 
	return true; 
} 

function editDataNilai(selected_index, arrayData){
	tbNilai[selected_index] = arrayData;
	localStorage.setItem("tbNilai", JSON.stringify(tbNilai)); 
	console.log("Data berhasil diperbarui.") 
	return true; 
}

function deleteDataNilai(selected_index){ 
	tbNilai.splice(selected_index, 1); 
	localStorage.setItem("tbNilai", JSON.stringify(tbNilai)); 
	console.log("Data berhasil dihapus."); 
	return true; 
}

function getAllNilai(){
	var cli= [];
	for(var i in tbNilai){ 
		cli[i]= JSON.parse(tbNilai[i]); 
		cli[i].index_table= [];
		cli[i].index_table= i;
		console.log(i+" ==> id_nilai:"+cli[i].id_nilai+
			" id_siswa:"+cli[i].id_siswa+
			" id_aktivitas:"+cli[i].id_aktivitas+
			" is_solve:"+cli[i].is_solve+
			" nilai:"+cli[i].nilai
			);
	}
	return cli;
}

function getSomeNilai(input, param){
	input= input.toLowerCase();
	var temp= []; 
	var cli= [];
	for(var i in tbNilai){
		cli[i] = JSON.parse(tbNilai[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		switch (param) {
		case 'id_nilai':
			if( cli[i].id_nilai==input ){
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
		case 'is_solve':
			if( cli[i].is_solve==input ){
				temp.push(cli[i]);
			}
		    break;
		}
	}
	return temp;
}

function getSomeAnyParam2Nilai(input1, input2, param1, param2){
	// input1= input1.toLowerCase();
	// input2= input2.toLowerCase();
	var temp= []; 
	var cli= [];
	for(var i in tbNilai){
		cli[i] = JSON.parse(tbNilai[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		if( param1=="id_nilai" && param2=="id_siswa" ){
			if( cli[i].id_nilai==input1 && cli[i].id_siswa==input2 ){
				temp.push(cli[i]);
			}
		}
	}
	return temp;
}

function getSomeAnyParam3Nilai(input1, input2, input3, param1, param2, param3){
	input1= input1.toLowerCase();
	input2= input2.toLowerCase();
	var temp= []; 
	var cli= [];
	for(var i in tbNilai){
		cli[i] = JSON.parse(tbNilai[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		if( param1=="id_nilai" && param2=="id_siswa" && param3=="id_aktivitas" ){
			if( cli[i].id_nilai==input1 && cli[i].id_siswa==input2 && cli[i].id_aktivitas==input3 ){
				temp.push(cli[i]);
			}
		}
		if( param1=="id_nilai" && param2=="id_siswa" && param3=="is_solve" ){
			if( cli[i].id_nilai==input1 && cli[i].id_siswa==input2 && cli[i].is_solve==input3 ){
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

function deleteAllNilai(){
	localStorage.removeItem("tbNilai");
}