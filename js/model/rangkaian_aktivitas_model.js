
var tbRangkaianAktivitas = localStorage.getItem("tbRangkaianAktivitas");//Retrieve the stored data 
tbRangkaianAktivitas = JSON.parse(tbRangkaianAktivitas); //Converts string to object 
if(tbRangkaianAktivitas == null || tbRangkaianAktivitas=='') {	//If there is no data, initialize an empty array 
	tbRangkaianAktivitas = [];
}

function addDataRangkaianAktivitas(data){ 

	// var data = JSON.stringify({ 
	// 	id_siswa : id_siswa,
	// 	id_aktivitas : id_aktivitas,  
	// 	param_siswa : param_siswa, 
	// 	answer_siswa : answer_siswa, 
	// 	rating : rating,
	// 	is_active : is_active
	// });
	tbRangkaianAktivitas.push(data); 
	localStorage.setItem("tbRangkaianAktivitas", JSON.stringify(tbRangkaianAktivitas)); 
	console.log("Data berhasil disimpan."); 
	return true; 
} 

function editDataRangkaianAktivitas(selected_index, arrayData){
	tbRangkaianAktivitas[selected_index] = arrayData;
	localStorage.setItem("tbRangkaianAktivitas", JSON.stringify(tbRangkaianAktivitas)); 
	alert("Data berhasil diperbarui.") 
	return true; 
}

function deleteDataRangkaianAktivitas(selected_index){ 
	tbRangkaianAktivitas.splice(selected_index, 1); 
	localStorage.setItem("tbRangkaianAktivitas", JSON.stringify(tbRangkaianAktivitas)); 
	alert("Data berhasil dihapus."); 
	return true; 
}

function getAllRangkaianAktivitas(){
	var cli= [];
	for(var i in tbRangkaianAktivitas){ 
		cli[i]= JSON.parse(tbRangkaianAktivitas[i]); 
		// console.log(i+" ==> id_siswa:"+cli[i].id_siswa+
		// 	" id_aktivitas:"+cli[i].id_aktivitas+
		// 	" param_siswa:"+cli[i].param_siswa+
		// 	" answer_siswa:"+cli[i].answer_siswa+
		// 	"rating :" +cli[i].rating+
		// 	"is_active :" +cli[i].is_active
		// 	);
	}
	return cli;
}

function getSomeRangkaianAktivitas(input, param){
	input= input.toLowerCase();
	var temp= []; 
	var cli= [];
	var countLine=0;
	for(var i in tbRangkaianAktivitas){
		cli[i] = JSON.parse(tbRangkaianAktivitas[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		switch (param) {
		case 'id_siswa':
			if( cli[i].id_siswa==input ){
                countLine++;
				cli[i].numbLine= [];
		        cli[i].numbLine= countLine;
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

function getSomeAnyParamRangkaianAktivitas(input1, input2, param1, param2){
    // input1= input1.toLowerCase();
    // input2= input2.toLowerCase();
    var temp= []; 
    var cli= [];
    for(var i in tbRangkaianAktivitas){
        cli[i] = JSON.parse(tbRangkaianAktivitas[i]);
        cli[i].index_table= [];
        cli[i].index_table= i;
        if(param1=="id_siswa" && param2=="id_aktivitas"){
            if(cli[i].id_siswa==input1 && cli[i].id_aktivitas==input2){
                temp.push(cli[i]);
            }
        }
        else if (param1 == "id_siswa" && param2 == "is_active") {
            if (cli[i].id_siswa == input1 && cli[i].is_active == input2) {
                temp.push(cli[i]);
            }
        }
    }
    return temp;
}

function generateData(){
	return true;
}

function deleteAllRangkaianAktivitas(){
	localStorage.removeItem("tbRangkaianAktivitas");
}
