
var tbDifficult = localStorage.getItem("tbDifficult");//Retrieve the stored data 
tbDifficult = JSON.parse(tbDifficult); //Converts string to object 
if(tbDifficult == null || tbDifficult=='') {	//If there is no data, initialize an empty array 
	tbDifficult = [];
	//alert("Tunggu sebentar...\nProses pembangkitan sistem level");
	generateDataDifficult();
}


function addDataDifficult(inp1, inp2, inp3, inp4){ 
	if (localStorage.id_difficult)
	{
		localStorage.id_difficult = Number(localStorage.id_difficult) + 1;
	}
	else
	{
		localStorage.id_difficult = 1;
	}

	var data = JSON.stringify({ 
		id_difficult : localStorage.id_difficult,
		level : inp1, 
		nama_aktivitas : inp2, 
		link_aktivitas : inp3
	});
	tbDifficult.push(data); 
	localStorage.setItem("tbDifficult", JSON.stringify(tbDifficult)); 
	console.log("Data berhasil disimpan."); 
	return true; 
} 

function editDataDifficult(selected_index, arrayData){
	tbDifficult[selected_index] = arrayData;
	localStorage.setItem("tbDifficult", JSON.stringify(tbDifficult)); 
	console.log("Data berhasil diperbarui.") 
	return true; 
}

function deleteDataDifficult(selected_index){ 
	tbDifficult.splice(selected_index, 1); 
	localStorage.setItem("tbDifficult", JSON.stringify(tbDifficult)); 
	console.log("Data berhasil dihapus."); 
	return true; 
}

function getAllDifficult(){
	var cli= [];
	for(var i in tbDifficult){ 
		cli[i]= JSON.parse(tbDifficult[i]); 
		cli[i].index_table= [];
		cli[i].index_table= i;
		console.log(i+" ==> id_difficult:"+cli[i].id_difficult+
			" level:"+cli[i].level+
			" nama_aktivitas:"+cli[i].nama_aktivitas+
			" link_aktivitas:"+cli[i].link_aktivitas
			);
	}
	return cli;
}

function getSomeDifficult(input, param){
	input= input.toLowerCase();
	var temp= []; 
	var cli= [];
	for(var i in tbDifficult){
		cli[i] = JSON.parse(tbDifficult[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		switch (param) {
		case 'id_difficult':
			if( cli[i].id_difficult==input ){
				temp.push(cli[i]);
			}
		    break;
		case 'level':
			if( input=='mudah' ){
				if( cli[i].level=='mudah' ){
					temp.push(cli[i]);
				}
			}
			else if(input=='sedang'){
				if( cli[i].level=='mudah' || cli[i].level=='sedang' ){
					temp.push(cli[i]);
				}
			}
			else if(input=='sulit'){
				if( cli[i].level=='mudah' || cli[i].level=='sedang' || cli[i].level=='sulit' ){
					temp.push(cli[i]);
				}
			}
		    break;
		case 'nama_aktivitas':
			if( cli[i].nama_aktivitas==input ){
				temp.push(cli[i]);
			}
		    break;
		}
	}
	return temp;
}

function getSomeAnyParamDifficult(input1, input2, param1, param2){
	input1= input1.toLowerCase();
	input2= input2.toLowerCase();
	var temp= []; 
	var cli= [];
	for(var i in tbDifficult){
		cli[i] = JSON.parse(tbDifficult[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		if(param1=="level" && param2=="nama_aktivitas"){
			if(cli[i].level==input1 && cli[i].nama_aktivitas==input2
			 ){
				temp.push(cli[i]);
			}
		}
	}
	return temp;	
}

function generateDataDifficult(){
	/*bahasa*/
	addDataDifficult("mudah", "tebak huruf", "bahasa_tebak_huruf.html");
	addDataDifficult("mudah", "tebak suku kata", "bahasa_tebak_suku_kata.html");
	addDataDifficult("sedang", "tebak kata tanpa imbuhan", "bahasa_tebak_kata_tanpa_imbuhan.html");
	addDataDifficult("sulit", "tebak kata dengan imbuhan", "bahasa_tebak_kata_dengan_imbuhan.html");
	addDataDifficult("sulit", "acak kata", "bahasa_acak_kata.html");
	addDataDifficult("sulit", "cari kata", "bahasa_cari_kata.html");
	addDataDifficult("sulit", "susun kata", "bahasa_susun_kata.html");
	/*matematika*/
	addDataDifficult("mudah", "tebak angka", "angka_tebak.html");
	addDataDifficult("mudah", "tebak bentuk/warna", "angka_bangun_datar_warna.html");
	addDataDifficult("mudah", "berhitung (2)", "angka_hitung_v2.html");
	addDataDifficult("sedang", "berhitung (1)", "angka_hitung.html");
	addDataDifficult("sedang", "penjumlahan (1)", "angka_penjumlahan_answer_image.html");
	addDataDifficult("sedang", "tebak hari", "angka_tebak_hari.html");
	addDataDifficult("sedang", "tebak bulan", "angka_tebak_bulan.html");
	addDataDifficult("sulit", "penjumlahan (2)", "angka_penjumlahan_answer_numb.html");
	addDataDifficult("sulit", "tebak jam", "angka_tebak_jam.html");
	/*lingkungan*/
	addDataDifficult("mudah", "tebak ruangan", "lingkungan_tebak_ruangan.html");
	addDataDifficult("mudah", "tebak aktivitas", "lingkungan_tebak_aktivitas.html");
	addDataDifficult("mudah", "tebak benda", "lingkungan_tebak_benda.html");
	addDataDifficult("mudah", "tebak alat musik", "lingkungan_tebak_alat_musik.html");
	addDataDifficult("mudah", "tebak transportasi", "lingkungan_tebak_transportasi.html");
	addDataDifficult("sulit", "hubungan ruangan dengan benda", "lingkungan_hubungan_ruangan_benda.html");
	addDataDifficult("sulit", "hubungan aktivitas dengan benda", "lingkungan_hubungan_aktivitas_benda.html");
	/*mandiri*/
	addDataDifficult("sedang", "tebak anggota badan", "mandiri_tebak_anggota_badan.html");
	addDataDifficult("sulit", "tebak ekspresi", "mandiri_tebak_ekspresi.html");
	/*sosial*/
	addDataDifficult("mudah", "tebak pekerjaan", "sosial_tebak_pekerjaan.html");
	/*puzzle*/
	addDataDifficult("sulit", "puzzle", "puzzle.html");
	return true;
}

function deleteAllDifficult(){
	localStorage.removeItem("tbDifficult");
}