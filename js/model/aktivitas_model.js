
var tbAktivitas = localStorage.getItem("tbAktivitas");//Retrieve the stored data 
tbAktivitas = JSON.parse(tbAktivitas); //Converts string to object 
if(tbAktivitas == null || tbAktivitas=='') {	//If there is no data, initialize an empty array 
	tbAktivitas = [];
	//alert("Tidak ada data aktivitas");
	generateData();
}


function addDataAktivitas(inp1, inp2, inp3, inp4){ 
	if (localStorage.id_aktivitas)
	{
		localStorage.id_aktivitas = Number(localStorage.id_aktivitas) + 1;
	}
	else
	{
		localStorage.id_aktivitas = 1;
	}

	var data = JSON.stringify({ 
		id_aktivitas : localStorage.id_aktivitas,
		nama_Aktivitas : inp1, 
		link_aktivitas : inp2, 
		ket_aktivitas : inp3,
		param_aktivitas : inp4,
	});
	tbAktivitas.push(data); 
	localStorage.setItem("tbAktivitas", JSON.stringify(tbAktivitas)); 
	console.log("Data berhasil disimpan."); 
	return true; 
} 

function editDataAktivitas(selected_index, arrayData){
	tbAktivitas[selected_index] = arrayData;
	localStorage.setItem("tbAktivitas", JSON.stringify(tbAktivitas)); 
	console.log("Data berhasil diperbarui.") 
	return true; 
}

function deleteDataAktivitas(selected_index){ 
	tbAktivitas.splice(selected_index, 1); 
	localStorage.setItem("tbAktivitas", JSON.stringify(tbAktivitas)); 
	console.log("Data berhasil dihapus."); 
	return true; 
}

function getAllAktivitas(){
	var cli= [];
	for(var i in tbAktivitas){ 
		cli[i]= JSON.parse(tbAktivitas[i]); 
		cli[i].index_table= [];
		cli[i].index_table= i;
		// console.log(i+" ==> id_aktivitas:"+cli[i].id_aktivitas+
		// 	" nama_Aktivitas:"+cli[i].nama_Aktivitas+
		// 	" link_aktivitas:"+cli[i].link_aktivitas+
		// 	" ket_aktivitas:"+cli[i].ket_aktivitas+
		// 	" param_aktivitas:"+cli[i].param_aktivitas
		// 	);
	}
	return cli;
}

function getSomeAktivitas(input, param){
	input= input.toLowerCase();
	var temp= []; 
	var cli= [];
	for(var i in tbAktivitas){
		cli[i] = JSON.parse(tbAktivitas[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		switch (param) {
		case 'id_aktivitas':
			if( cli[i].id_aktivitas==input ){
				temp.push(cli[i]);
			}
		    break;
		case 'nama_Aktivitas':
			if( cli[i].nama_Aktivitas==input ){
				temp.push(cli[i]);
			}
		    break;
		}
	}
	return temp;
}

function getSomeAnyParamAktivitas(input1, input2, param1, param2){
	input1= input1.toLowerCase();
	input2= input2.toLowerCase();
	var temp= []; 
	var cli= [];
	for(var i in tbAktivitas){
		cli[i] = JSON.parse(tbAktivitas[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		if(param1=="nama_Aktivitas" && param2=="link_aktivitas"){
			if(cli[i].nama_Aktivitas==input1 && cli[i].link_aktivitas==input2
			 ){
				temp.push(cli[i]);
			}
		}
	}
	return temp;	
}

function generateData(){
	/*bahasa*/
	addDataAktivitas("tebak huruf", "bahasa_tebak_huruf.html", "Menebak huruf dari a hingga z", "start,end,isBig");
	addDataAktivitas("tebak suku kata", "bahasa_tebak_suku_kata.html", "Menebak suku kata", "start,end,isBig");
	addDataAktivitas("tebak kata tanpa imbuhan", "bahasa_tebak_kata_tanpa_imbuhan.html", "mencari kata yang tepat", "start,end,isBig,countSuku,isShuffle");
	addDataAktivitas("tebak kata dengan imbuhan", "bahasa_tebak_kata_dengan_imbuhan.html", "mencari kata yang tepat", "isBig");
	addDataAktivitas("acak kata", "bahasa_acak_kata.html", "mencari kata yang benar dari huruf acak", "isBig");
	addDataAktivitas("cari kata", "bahasa_cari_kata.html", "mencari kata yang benar dari banyak pilihan kata", "isBig,text1,text2,text3,text4");
	addDataAktivitas("susun kata", "bahasa_susun_kata.html", "menyusun kata menjadi kalimat", "isBig,imageName1,imageName2,imageName3");
	/*matematika*/
	addDataAktivitas("tebak angka", "angka_tebak.html", "mencari angka sesuai soal", "start,end,isBig");
	addDataAktivitas("berhitung (1)", "angka_hitung.html", "menghitung benda dengan jawaban angka", "start,end,isBig");
	addDataAktivitas("berhitung (2)", "angka_hitung_v2.html", "menghitung benda dengan jawaban gambar", "start,end,isBig");
	addDataAktivitas("penjumlahan (1)", "angka_penjumlahan_answer_image.html", "menjumlahkan benda dengan jawaban gambar", "isBig");
	addDataAktivitas("penjumlahan (2)", "angka_penjumlahan_answer_numb.html", "menjumlahkan benda dengan jawaban angka", "isBig");
	addDataAktivitas("tebak bentuk/warna", "angka_bangun_datar_warna.html", "menebak bentuk bidang datar atau warna dengan tipe: 1(warna) dan 2 (bidang)", "isBig,tipe");
	addDataAktivitas("tebak jam", "angka_tebak_jam.html", "menebak jam","isBig,per30min,per15min,per5min,is24hour");
	addDataAktivitas("tebak hari", "angka_tebak_hari.html", "menebak hari", "isBig");
	addDataAktivitas("tebak bulan", "angka_tebak_bulan.html", "menebak bulan", "isBig");
	/*lingkungan*/
	addDataAktivitas("tebak ruangan", "lingkungan_tebak_ruangan.html", "menebak nama ruangan", "isBig,imageName1,urlImage1,imageName2,urlImage2,imageName3,urlImage3,imageName4,urlImage4");
	addDataAktivitas("tebak aktivitas", "lingkungan_tebak_aktivitas.html", "menebak jenis aktivitas", "isBig,imageName1,urlImage1,imageName2,urlImage2,imageName3,urlImage3,imageName4,urlImage4");
	addDataAktivitas("tebak benda", "lingkungan_tebak_benda.html", "menebak nama benda", "isBig,imageName1,urlImage1,imageName2,urlImage2,imageName3,urlImage3,imageName4,urlImage4");
	addDataAktivitas("hubungan ruangan dengan benda", "lingkungan_hubungan_ruangan_benda.html", "menghubungkan ruangan dengan benda", "isBig,ruangan1,benda1,ruangan2,benda2");
	addDataAktivitas("hubungan aktivitas dengan benda", "lingkungan_hubungan_aktivitas_benda.html", "menghubungkan aktivitas dengan benda", "isBig,aktivitas1,benda1,aktivitas2,benda2");
	addDataAktivitas("tebak alat musik", "lingkungan_tebak_alat_musik.html", "menebak nama alat musik", "isBig,imageName1,urlImage1,imageName2,urlImage2,imageName3,urlImage3,imageName4,urlImage4");
	addDataAktivitas("tebak transportasi", "lingkungan_tebak_transportasi.html", "menebak nama transportasi", "isBig,imageName1,urlImage1,imageName2,urlImage2,imageName3,urlImage3,imageName4,urlImage4");
	/*mandiri*/
	addDataAktivitas("tebak ekspresi", "mandiri_tebak_ekspresi.html", "menebak jenis ekspresi", "isBig,imageName1,urlImage1,imageName2,urlImage2,imageName3,urlImage3,imageName4,urlImage4");
	addDataAktivitas("tebak anggota badan", "mandiri_tebak_anggota_badan.html", "menebak nama anggota badan", "isBig");
	/*sosial*/
	addDataAktivitas("tebak pekerjaan", "sosial_tebak_pekerjaan.html", "menebak nama pekerjaan", "isBig,imageName1,urlImage1,imageName2,urlImage2,imageName3,urlImage3,imageName4,urlImage4");
	/*puzzle*/
	addDataAktivitas("puzzle", "puzzle.html", "menyusun puzzle", "isBig,puzzle_full,puzzle1,puzzle2,puzzle3,puzzle4");
	return true;
}

function deleteAllAktivitas(){
	localStorage.removeItem("tbAktivitas");
}