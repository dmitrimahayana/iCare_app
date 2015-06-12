
var tbTestSiswa = localStorage.getItem("tbTestSiswa");//Retrieve the stored data 
tbTestSiswa = JSON.parse(tbTestSiswa); //Converts string to object 
if(tbTestSiswa == null || tbTestSiswa=='') {	//If there is no data, initialize an empty array 
	tbTestSiswa = [];
}

function addDataTestSiswa(data){ 
	tbTestSiswa.push(data); 
	localStorage.setItem("tbTestSiswa", JSON.stringify(tbTestSiswa)); 
	console.log("Data berhasil disimpan."); 
	return true; 
} 

function editDataTestSiswa(selected_index, arrayData){
	tbTestSiswa[selected_index] = arrayData;
	localStorage.setItem("tbTestSiswa", JSON.stringify(tbTestSiswa)); 
	console.log("Data berhasil diperbarui.") 
	return true; 
}

function deleteDataTestSiswa(selected_index){ 
	tbTestSiswa.splice(selected_index, 1); 
	localStorage.setItem("tbTestSiswa", JSON.stringify(tbTestSiswa)); 
	console.log("Data berhasil dihapus."); 
	return true; 
}

function getAllTestSiswa(){
	var cli= [];
	for(var i in tbTestSiswa){ 
		cli[i]= JSON.parse(tbTestSiswa[i]); 
		cli[i].index_table= [];
		cli[i].index_table= i;
		console.log(i+" ==> id_test:"+cli[i].id_test+
			" id_siswa:"+cli[i].id_siswa+
			" list_rangkaian:"+cli[i].list_rangkaian
			);
	}
	return cli;
}

function getSomeTestSiswa(input, param){
	input= input.toLowerCase();
	var temp= []; 
	var cli= [];
	for(var i in tbTestSiswa){
		cli[i] = JSON.parse(tbTestSiswa[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		switch (param) {
		case 'id_test':
			if( cli[i].id_test==input ){
				temp.push(cli[i]);
			}
		    break;
		case 'id_siswa':
			if( cli[i].id_siswa==input ){
				temp.push(cli[i]);
			}
		    break;
		}
	}
	// return temp;
	if(temp.length)
		return temp;
	else return false;
}

function getSomeAnyParamTestSiswa(input1, input2, param1, param2){
	var temp= []; 
	var cli= [];
	for(var i in tbTestSiswa){
		cli[i] = JSON.parse(tbTestSiswa[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		if(param1=="id_test" && param2=="id_siswa"){
			if(cli[i].id_test==input1 && cli[i].id_siswa==input2
			 ){
				temp.push(cli[i]);
			}
		}
	}
	if(temp.length)
		return temp;
	else return false;	
}

function deleteAllTestSiswa(){
	localStorage.removeItem("tbTestSiswa");
}