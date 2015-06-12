var tbSiswa = localStorage.getItem("tbSiswa");//Retrieve the stored data 
tbSiswa = JSON.parse(tbSiswa); //Converts string to object 
if(tbSiswa == null) //If there is no data, initialize an empty array 
	tbSiswa = [];

function addDataSiswa(id_user){ 
	var id_ ;
	if (localStorage.id_siswa)
	{
		localStorage.id_siswa = Number(localStorage.id_siswa) + 1;
		id_ = localStorage.id_siswa;
	}
	else
	{
		localStorage.id_siswa = 1;
		id_ = localStorage.id_siswa;
	}
	var temp= $("#photo_siswa").val();
	if($("#photo_siswa").val()==null){
		temp= "./img/ava_default.jpg";
	}
	var client = JSON.stringify({ 
		id_siswa : localStorage.id_siswa,
		id_user : id_user, 
		nama_siswa : $("#nama_siswa").val().toLowerCase(), 
		pertanyaan : $("#pertanyaan option:selected").val(), 
		photo_siswa : temp,
		font : $("#font option:selected").val(),
		kesulitan : $("#kesulitan option:selected").val()
	}); 
	tbSiswa.push(client);
	localStorage.setItem("tbSiswa", JSON.stringify(tbSiswa)); 
	alert("Data berhasil disimpan."); 
	return id_; 
} 

function editDataSiswa(selected_index, arrayData){
	tbSiswa[selected_index] = arrayData;
	localStorage.setItem("tbSiswa", JSON.stringify(tbSiswa)); 
	alert("Data berhasil diperbarui.") 
	return true; 
}

function deleteDataSiswa(selected_index){ 
	tbSiswa.splice(selected_index, 1); 
	localStorage.setItem("tbSiswa", JSON.stringify(tbSiswa)); 
	alert("Data berhasil dihapus."); 
	return true; 
}

function getAllSiswa(){
	var cli= [];
	for(var i in tbSiswa){ 
		cli[i]= JSON.parse(tbSiswa[i]); 
		// console.log(i+" ==> id_siswa"+cli[i].id_siswa+
		// 	" id_user:"+cli[i].id_user+
		// 	" nama_siswa:"+cli[i].nama_siswa+
		// 	" pertanyaan:"+cli[i].pertanyaan+
		// 	" photo_siswa:"+cli[i].photo_siswa+
		// 	" font:"+cli[i].font+
		// 	" kesulitan:"+cli[i].kesulitan
		// 	);
	}
	return cli;
}

function getSomeSiswa(input, param){
	var temp= []; 
	var cli= [];
	for(var i in tbSiswa){
		cli[i] = JSON.parse(tbSiswa[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		switch (param) {
		case 'id_siswa':
			if( cli[i].id_siswa==input ){
				temp.push(cli[i]);
			}
		    break;
		case 'id_user':
			if( cli[i].id_user==input ){
				temp.push(cli[i]);
			}
		    break;
		}
	}
	return temp;
}

function getSomeAnyParamSiswa(input1, input2, param1, param2){
    input1= input1.toLowerCase();
    input2= input2.toLowerCase();
    var temp= []; 
    var cli= [];
    for(var i in tbSiswa){
        cli[i] = JSON.parse(tbSiswa[i]);
        cli[i].index_table= [];
        cli[i].index_table= i;
        if(param1=="nama_siswa" && param2=="pertanyaan"){
            if(cli[i].nama_siswa==input1 && cli[i].pertanyaan==input2){
                temp.push(cli[i]);
            }
        }
        if (param1 == "id_user" && param2 == "nama_siswa") {
            if (cli[i].id_user == input1 && cli[i].nama_siswa == input2) {
                temp.push(cli[i]);
            }
        }
    }
    return temp;
}

function deleteAllSiswa(){
    localStorage.removeItem("tbSiswa");
}