
var tbAAC = localStorage.getItem("tbAAC");//Retrieve the stored data 
tbAAC = JSON.parse(tbAAC); //Converts string to object 
if(tbAAC == null || tbAAC=='') {	//If there is no data, initialize an empty array 
	tbAAC = [];
	if(generateDataAAC())
		location.reload();
}


function addDataAAC(inp1, inp2){ 
	if (localStorage.id_AAC)
	{
		localStorage.id_AAC = Number(localStorage.id_AAC) + 1;
	}
	else
	{
		localStorage.id_AAC = 1;
	}

	var data = JSON.stringify({ 
		id_AAC : localStorage.id_AAC,
		nama_AAC : inp1,
		link_AAC : inp2
	});
	tbAAC.push(data); 
	localStorage.setItem("tbAAC", JSON.stringify(tbAAC)); 
	console.log("Data berhasil disimpan."); 
	return true; 
} 

function editDataAAC(selected_index, arrayData){
	tbAAC[selected_index] = arrayData;
	localStorage.setItem("tbAAC", JSON.stringify(tbAAC)); 
	console.log("Data berhasil diperbarui.") 
	return true; 
}

function deleteDataAAC(selected_index){ 
	tbAAC.splice(selected_index, 1); 
	localStorage.setItem("tbAAC", JSON.stringify(tbAAC)); 
	console.log("Data berhasil dihapus.");  
	return true; 
}

function getAllAAC(){
	var cli= [];
	for(var i in tbAAC){ 
		cli[i]= JSON.parse(tbAAC[i]); 
		cli[i].index_table= [];
		cli[i].index_table= i;
		// console.log(i+" ==> id_AAC:"+cli[i].id_AAC+
		// 	" nama_AAC:"+cli[i].nama_AAC+
		// 	" link_AAC:"+cli[i].link_AAC
		// 	);
	}
	return cli;
}

function getSomeAAC(input, param){
	input= input.toLowerCase();
	var temp= []; 
	var cli= [];
	for(var i in tbAAC){
		cli[i] = JSON.parse(tbAAC[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		switch (param) {
		case 'id_AAC':
			if( cli[i].id_AAC==input ){
				temp.push(cli[i]);
			}
		    break;
		case 'nama_AAC':
			if( cli[i].nama_AAC==input ){
				temp.push(cli[i]);
			}
		    break;
		case 'link_AAC':
			if( cli[i].link_AAC==input ){
				temp.push(cli[i]);
			}
		    break;
		}
	}
	return temp;
}

function getSomeAnyParamAAC(input1, input2, param1, param2){
	input1= input1.toLowerCase();
	input2= input2.toLowerCase();
	var temp= []; 
	var cli= [];
	for(var i in tbAAC){
		cli[i] = JSON.parse(tbAAC[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		if(param1=="nama_AAC" && param2=="link_AAC"){
			if(cli[i].nama_AAC==input1 && cli[i].link_AAC==input2
			 ){
				temp.push(cli[i]);
			}
		}
	}
	return temp;	
}

function generateDataAAC(){
	addDataAAC("apa", "assets/aac/apa.jpg");
	addDataAAC("atas", "assets/aac/atas.jpg");
	addDataAAC("baik", "assets/aac/baik.jpg");
	addDataAAC("bangun", "assets/aac/bangun.jpg");
	addDataAAC("bantu", "assets/aac/bantu.jpg");
	addDataAAC("bawa", "assets/aac/bawa.jpg");
	addDataAAC("bawah", "assets/aac/bawah.jpg");
	addDataAAC("beberapa", "assets/aac/beberapa.jpg");
	addDataAAC("berbeda", "assets/aac/berbeda.jpg");
	addDataAAC("berhenti", "assets/aac/berhenti.jpg");
	addDataAAC("buat", "assets/aac/buat.jpg");
	addDataAAC("buruk", "assets/aac/buruk.jpg");
	addDataAAC("butuh", "assets/aac/butuh.jpg");
	addDataAAC("cuci wajah", "assets/aac/cuci wajah.jpg");
	addDataAAC("dan", "assets/aac/dan.jpg");
	addDataAAC("dapat", "assets/aac/dapat.jpg");
	addDataAAC("datang", "assets/aac/datang.jpg");
	addDataAAC("di atas", "assets/aac/di atas.jpg");
	addDataAAC("di dalam", "assets/aac/di dalam.jpg");
	addDataAAC("di luar", "assets/aac/di luar.jpg");
	addDataAAC("dimana", "assets/aac/dimana.jpg");
	addDataAAC("disana", "assets/aac/disana.jpg");
	addDataAAC("disini", "assets/aac/disini.jpg");
	addDataAAC("hai", "assets/aac/hai.jpg");
	addDataAAC("ingin", "assets/aac/ingin.jpg");
	addDataAAC("ini", "assets/aac/ini.jpg");
	addDataAAC("itu", "assets/aac/itu.jpg");
	addDataAAC("kamu", "assets/aac/kamu.jpg");
	addDataAAC("karena", "assets/aac/karena.jpg");
	addDataAAC("ke", "assets/aac/ke.jpg");
	addDataAAC("lagi", "assets/aac/lagi.jpg");
	addDataAAC("letakkan", "assets/aac/letakkan.jpg");
	addDataAAC("lihat", "assets/aac/lihat.jpg");
	addDataAAC("main", "assets/aac/main.jpg");
	addDataAAC("makan", "assets/aac/makan.jpg");
	addDataAAC("makanan", "assets/aac/makanan.jpg");
	addDataAAC("malam hari", "assets/aac/malam hari.jpg");
	addDataAAC("memakai baju", "assets/aac/memakai baju.jpg");
	addDataAAC("minum", "assets/aac/minum.jpg");
	addDataAAC("orang-orang", "assets/aac/orang-orang.jpg");
	addDataAAC("pagi hari", "assets/aac/pagi hari.jpg");
	addDataAAC("pergi", "assets/aac/pergi.jpg");
	addDataAAC("punya", "assets/aac/punya.jpg");
	addDataAAC("rasa", "assets/aac/rasa.jpg");
	addDataAAC("rumah", "assets/aac/rumah.jpg");
	addDataAAC("saya", "assets/aac/saya.jpg");
	addDataAAC("saya tidak tahu", "assets/aac/saya tidak tahu.jpg");
	addDataAAC("sekarang", "assets/aac/sekarang.jpg");
	addDataAAC("sekolah", "assets/aac/sekolah.jpg");
	addDataAAC("selamat tinggal", "assets/aac/selamat tinggal.jpg");
	addDataAAC("selesai semua", "assets/aac/selesai semua.jpg");
	addDataAAC("semua", "assets/aac/semua.jpg");
	addDataAAC("senang", "assets/aac/senang.jpg");
	addDataAAC("siapa", "assets/aac/siapa.jpg");
	addDataAAC("suka", "assets/aac/suka.jpg");
	addDataAAC("tentang saya", "assets/aac/tentang saya.jpg");
	addDataAAC("tidak", "assets/aac/tidak.jpg");
	addDataAAC("tidur", "assets/aac/tidur.jpg");
	addDataAAC("toko", "assets/aac/toko.jpg");
	addDataAAC("tugas sekolah", "assets/aac/tugas sekolah.jpg");
	addDataAAC("waktu", "assets/aac/waktu.jpg");
	return true;
}

function deleteAllAAC(){
	localStorage.removeItem("tbAAC");
}