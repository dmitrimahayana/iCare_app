var nilai_now= [];
var count_nilai_now_pertype= [];
var nilai_last= [];
var count_nilai_last_pertype= [];

function getListByJenis(id_siswa, tipeAktivitas, act, id_date, stats){
  for (var i in act) {
    var list_act= JSON.parse(act[i]);
    var dummy3 = getSomeAktivitas(list_act.id_aktivitas, 'id_aktivitas');  
    var type_aktivitas=dummy3[0].link_aktivitas.split('_');
    if(type_aktivitas[0].split(".h")[1])
      type_aktivitas[0]= type_aktivitas[0].split(".h")[0];
    else 
      type_aktivitas[0]= type_aktivitas[0];

    var getNilaiSiswa= getSomeAnyParam3Nilai(id_date, id_siswa, list_act.id_aktivitas, 'id_nilai', 'id_siswa', 'id_aktivitas');
    if(getNilaiSiswa[0].is_solve){
      checkSolve= '<i class="icon-large icon-ok" style="color:Green;"></i>';
    }
    else {
      checkSolve= '<i class="icon-large icon-remove" style="color:red;"></i>';
    } 

    if(type_aktivitas[0]==tipeAktivitas){
      if(stats=="now"){ //if nilai current
        if(typeof nilai_now[tipeAktivitas]=='undefined') { //fist index
          count_nilai_now_pertype[tipeAktivitas]= 0;  //set count nilai type per aktivitas
          nilai_now[tipeAktivitas]= Number(getNilaiSiswa[0].nilai); //set nilai type per aktivitas
          count_nilai_now_pertype[tipeAktivitas]= count_nilai_now_pertype[tipeAktivitas]+1; //count nilai type per aktivitas increament
        }
        else {  //other index
          nilai_now[tipeAktivitas]= Number(nilai_now[tipeAktivitas])+Number(getNilaiSiswa[0].nilai); //set nilai type per aktivitas
          count_nilai_now_pertype[tipeAktivitas]= count_nilai_now_pertype[tipeAktivitas]+1; //count nilai type per aktivitas increament
        }
        // console.log("``"+tipeAktivitas+" "+nilai_now[tipeAktivitas]+" "+count_nilai_now_pertype[tipeAktivitas]);
      }
      else {  //if other nilai
        if(typeof nilai_last[list_act.id_aktivitas]=='undefined') { //first index
          nilai_last[list_act.id_aktivitas]= []; //initialize
          nilai_last[list_act.id_aktivitas].push(getNilaiSiswa[0].nilai); //set nilai aktivitas per id_aktivitas
        }
        else {
          nilai_last[list_act.id_aktivitas].push(getNilaiSiswa[0].nilai); //set nilai aktivitas per id_aktivitas
        }
        // console.log(tipeAktivitas+" "+nilai_last[list_act.id_aktivitas]);
      }
      // console.log(id_date+" "+stats+" calc: "+tipeAktivitas+" "+toTitleCase(dummy3[0].nama_Aktivitas) + " "+getNilaiSiswa[0].is_solve+" "+getNilaiSiswa[0].nilai+" "+nilai_last[list_act.id_aktivitas]);
    }
  }
}

var nilai_last_akhir= [];  
var count_nilai_last_akhir= []; 
function filterJenis(id_siswa_inp, id_test, stats){
  var dummy2 = getSomeAnyParamTestSiswa(id_test, id_siswa_inp, 'id_test', 'id_siswa')
  var tmp= dummy2[0].list_rangkaian;

  var temp_aktivitas= [];
  var jenis= new Array();
  jenis[0]= 'bahasa';
  jenis[1]= 'angka';
  jenis[2]= 'lingkungan';
  jenis[3]= 'mandiri';
  jenis[4]= 'sosial';
  jenis[5]= 'puzzle';

  for (var i in tmp) {
    var list_act= JSON.parse(tmp[i]);
    var dummy3 = getSomeAktivitas(list_act.id_aktivitas, 'id_aktivitas');
    var type_aktivitas=dummy3[0].link_aktivitas.split('_');
    if(type_aktivitas[0].split(".h")[1])
      type_aktivitas[0]= type_aktivitas[0].split(".h")[0];
    else 
      type_aktivitas[0]= type_aktivitas[0];
    
    switch (type_aktivitas[0]){
      case jenis[0]:
        temp_aktivitas[0]= 1;
        break;
      case jenis[1]:
        temp_aktivitas[1]= 1;
        break;
      case jenis[2]:
        temp_aktivitas[2]= 1;
        break;
      case jenis[3]:
        temp_aktivitas[3]= 1;
        break;
      case jenis[4]:
        temp_aktivitas[4]= 1;
        break;
      case jenis[5]:
        temp_aktivitas[5]= 1;
        break;
    }
  }

  for(var j=0; j<6; j++){
    if(temp_aktivitas[j]){
      getListByJenis(id_siswa_inp, jenis[j], tmp, id_test, stats)
    }
  }

  if(stats=="now"){ //if nilai now
    // console.log("now:"+id_test);
    for(var j=0; j<6; j++){
      if(temp_aktivitas[j]){  //if true
        // console.log(temp_aktivitas[j]+" "+jenis[j]+" "+nilai_now[jenis[j]]+" "+count_nilai_now_pertype[jenis[j]]);
        nilai_now[jenis[j]]= Number(nilai_now[jenis[j]])/Number(count_nilai_now_pertype[jenis[j]]); //rate it
        // console.log(id_test+" "+temp_aktivitas[j]+" "+jenis[j]+" "+nilai_now[jenis[j]]+" "+count_nilai_now_pertype[jenis[j]]);
      }
      else {
        nilai_now[jenis[j]]= 0;
        count_nilai_now_pertype[jenis[j]]= 0;
        // console.log(id_test+" gak ada "+temp_aktivitas[j]+" "+jenis[j]+" "+nilai_now[jenis[j]]+" "+count_nilai_now_pertype[jenis[j]]);
      }
    }
  }
  else {  //if other nilai
    // console.log("else:"+id_test);
    var testNow= getSomeAnyParam2Nilai(id_test, id_siswa_inp, 'id_nilai', 'id_siswa');

    for(var x=0; x<testNow.length; x++){
      var getIdAkt= getSomeAktivitas(testNow[x].id_aktivitas ,'id_aktivitas');
    // var allAkt= getAllAktivitas();  //get all aktivitas
    // for(var i=0; i<allAkt.length; i++){

      id_allAkt= testNow[x].id_aktivitas;  //get id aktivitas
      // console.log(testNow[x].id_nilai+" "+testNow[x].id_aktivitas+" "+type_aktivitas[0]+" nilai:"+nilai_last[id_allAkt]);

      if(nilai_last[id_allAkt]){  //if nilai per id_aktivatas true
        var type_aktivitas=getIdAkt[0].link_aktivitas.split('_'); // split link
        if(type_aktivitas[0].split(".h")[1])
          type_aktivitas[0]= type_aktivitas[0].split(".h")[0];
        else 
          type_aktivitas[0]= type_aktivitas[0];
        
        var nilai_dumm= 0;
        for(var j=0; j<nilai_last[id_allAkt].length; j++){
          // console.log(testNow[x].id_nilai+" "+type_aktivitas[0]+" "+dummy_nilai+"+"+nilai_dumm);
          var dummy_nilai= nilai_last[id_allAkt];
          nilai_dumm= Number(nilai_dumm)+Number(dummy_nilai[j]);  //sum all nilai per id_aktivitas
        }
        var nilai_dumm2= Number(nilai_dumm)/nilai_last[id_allAkt].length; //rate same id_aktivitas
        // console.log(testNow[x].id_aktivitas+" "+nilai_dumm+" "+nilai_last[id_allAkt].length+" "+nilai_dumm2);


        if(typeof nilai_last_akhir[type_aktivitas[0]]=='undefined') { //if first
          nilai_last_akhir[type_aktivitas[0]]=nilai_dumm2;  //set nilai
          count_nilai_last_akhir[type_aktivitas[0]]=1;  //set count nilai
          // console.log(testNow[x].id_aktivitas+" "+getIdAkt[0].link_aktivitas+" nilai:"+nilai_last[id_allAkt]+" "+nilai_last_akhir[type_aktivitas[0]]+" "+count_nilai_last_akhir[type_aktivitas[0]]);
        }
        else { //if other
          nilai_last_akhir[type_aktivitas[0]]= Number(nilai_last_akhir[type_aktivitas[0]])+Number(nilai_dumm2); //nilai increament
          count_nilai_last_akhir[type_aktivitas[0]]= Number(count_nilai_last_akhir[type_aktivitas[0]])+1; //count nilai increament
        }
      // console.log("masih kemarin:"+testNow[x].id_nilai+" "+testNow[x].id_aktivitas+" "+type_aktivitas[0]+" nilai:"+nilai_last[id_allAkt]+" "+nilai_last_akhir[type_aktivitas[0]]+" "+count_nilai_last_akhir[type_aktivitas[0]]);
      }
    }
    //get list all id_aktivitas
    for(var j=0; j<6; j++){
      var tmp_jenis= jenis[j];
      if(!nilai_last_akhir[jenis[j]]){ //if first
        nilai_last_akhir[jenis[j]]= 0;  //set nilai per tipe
        count_nilai_last_akhir[jenis[j]]= 0;  //set count nilai per tipe
      }
      else {
        nilai_last_akhir[jenis[j]]= Number(nilai_last_akhir[jenis[j]])/Number(count_nilai_last_akhir[jenis[j]]);  //rate it\
      }
      // console.log(id_test+" "+j+" "+jenis[j]+" "+nilai_last_akhir[jenis[j]]+" "+count_nilai_last_akhir[jenis[j]]);
    }
  }
}


function getNilai(id_test_now, id){

  var countNumberLine= 0;
  filterJenis(id, id_test_now, "now"); //now
  var id_test_now_dumm= id_test_now.split("_");
  if(id_test_now_dumm[0]<10){
    id_test_now_dumm[0]= '0'+id_test_now_dumm[0];
  }
  if(id_test_now_dumm[1]<10){
    id_test_now_dumm[1]= '0'+id_test_now_dumm[1];
  }
  var tempel= id_test_now_dumm[2]+id_test_now_dumm[1]+id_test_now_dumm[0];
      tempel= Number(tempel);
  var int_id_test_now= tempel;  //create number from date now

  var temp = getSomeTestSiswa(id, 'id_siswa');
  var src_id_test= [];
  var id_temp= [];
  for(var i = 0; i < temp.length; i++){
    var tmp_test = getSomeAnyParamTestSiswa(temp[i].id_test, id, 'id_test', 'id_siswa')
    var id_test_dumm= tmp_test[0].id_test.split("_");
    if(Number(id_test_dumm[0])<10){
      id_test_dumm[0]= '0'+id_test_dumm[0];
    }
    if(Number(id_test_dumm[1])<10){
      id_test_dumm[1]= '0'+id_test_dumm[1];
    }
    var tempel= id_test_dumm[2]+id_test_dumm[1]+id_test_dumm[0];
        tempel= Number(tempel);
    src_id_test[tempel]= tmp_test[0].id_test;
    id_temp[i]= tempel; //create number from all date students
  }

  var tmp_ress = quickSort(id_temp, 0, id_temp.length - 1);  //do quicksort
  var resultnilai= [];
  var tmp_count= tmp_ress.length-1;
  for(var i=0; i<tmp_ress.length; i++){
    resultnilai[i]= tmp_ress[tmp_count];
    tmp_count--;
  }
  var indexNow = resultnilai.indexOf(int_id_test_now);
  // console.log("test_now:"+resultnilai+" index:"+indexNow);

  resultnilai.splice(indexNow, 1);  //remove the current result from array
  for(var i=0; i<indexNow; i++){
    resultnilai.splice(0, 1); //remove  from array
    // console.log(i+" new:"+resultnilai+" until i="+indexNow);
  }
  // console.log("new:"+resultnilai);
  
  if(resultnilai.length>0){
    for(var i=0; i<resultnilai.length; i++){
      countNumberLine= 0;
      index_test_id= resultnilai[i]
      filterJenis(id, src_id_test[index_test_id], "last");
      // console.log("==========");
    }
  }
  
}