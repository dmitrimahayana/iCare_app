for(var i=0; i<param_aktivitas.length; i++){
  if(param_aktivitas[i]=="isBig"){
        $("#resultData").append(
          '<tr>'+
            '<td>Ukuran Tulisan</td>'+
            '<td>'+
                '<select id="isBig" name="isBig">'+
                    '<option value="1">Besar</option>'+
                    '<option value="0">Kecil</option>'+
                '</select>'+
            '</td>'+
        '</tr>');
      }
}

var countImageName=0;
switch(type_aktivitas[0]) {
case 'bahasa':
    for(var i=0; i<param_aktivitas.length; i++){
      if(param_aktivitas[i]=="start"){
        $("#resultData").append(
          '<tr>'+
            '<td>Mulai Huruf</td>'+
            '<td>'+
                '<select id="start" name="start">'+
                '</select>'+
            '</td>'+
        '</tr>');
        for(var j=0; j<26; j++){
          $('#start').append(
            '<option value="'+j+'">'+String.fromCharCode(j+65)+'</option>'
            );
        }
      }
      else if(param_aktivitas[i]=="end"){
        $("#resultData").append(
          '<tr>'+
            '<td>Akhir Huruf</td>'+
            '<td>'+
                '<select id="end" name="end">'+
                '</select>'+
            '</td>'+
        '</tr>');
        for(var j=0; j<26; j++){
          $('#end').append(
            '<option value="'+j+'">'+String.fromCharCode(j+65)+'</option>'
            );
        }
      }
      else if(param_aktivitas[i]=="countSuku"){
        $("#resultData").append(
          '<tr>'+
            '<td>Jumlah Suku Kata</td>'+
            '<td>'+
                '<select id="countSuku" name="countSuku">'+
                    '<option value="1">1</option>'+
                    '<option value="2">2</option>'+
                    '<option value="3">3</option>'+
                    '<option value="4">4</option>'+
                    '<option value="5">5</option>'+
                '</select>'+
            ' <p class="help-block">Jumlah suku kata.</p>'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="isShuffle"){
        $("#resultData").append(
          '<tr>'+
            '<td>Besar Tulisan</td>'+
            '<td>'+
                '<select id="isShuffle" name="isShuffle">'+
                    '<option value="0">Suku Kata Berulang</option>'+
                    '<option value="1">Suku Kata Tidak Berulang</option>'+
                '</select>'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="text1"){
        $("#resultData").append(
          '<tr>'+
            '<td>Teks Pertama</td>'+
            '<td>'+
                '<input type="text" id="text1" name="text1" value="saya">'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="text2"){
        $("#resultData").append(
          '<tr>'+
            '<td>Teks Kedua</td>'+
            '<td>'+
                '<input type="text" id="text2" name="text2" value="ingin">'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="text3"){
        $("#resultData").append(
          '<tr>'+
            '<td>Teks Ketiga</td>'+
            '<td>'+
                '<input type="text" id="text3" name="text3" value="mobil">'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="text4"){
        $("#resultData").append(
          '<tr>'+
            '<td>Teks Keempat</td>'+
            '<td>'+
                '<input type="text" id="text4" name="text4" value="banyak">'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="imageName1"){
        $("#resultData").append(
          '<tr>'+
            '<td>Gambar Pertama</td>'+
            '<td>'+
                '<select id="imageName1" name="imageName1">'+
              '</select>'+
            '</td>'+
        '</tr>');
        var temp_all= getAllAAC();
        for(var j=0; j<temp_all.length; j++){
          $('#imageName1').append(
            '<option value="'+temp_all[j].nama_AAC+'">'+temp_all[j].nama_AAC+'</option>'
          );
        }
      }
      else if(param_aktivitas[i]=="imageName2"){
        $("#resultData").append(
          '<tr>'+
            '<td>Gambar Kedua</td>'+
            '<td>'+
                '<select id="imageName2" name="imageName2">'+
              '</select>'+
            '</td>'+
        '</tr>');
        var temp_all= getAllAAC();
        for(var j=0; j<temp_all.length; j++){
          $('#imageName2').append(
            '<option value="'+temp_all[j].nama_AAC+'">'+temp_all[j].nama_AAC+'</option>'
          );
        }
      }
      else if(param_aktivitas[i]=="imageName3"){
        $("#resultData").append(
          '<tr>'+
            '<td>Gambar Ketiga</td>'+
            '<td>'+
                '<select id="imageName3" name="imageName3">'+
              '</select>'+
            '</td>'+
        '</tr>');
        var temp_all= getAllAAC();
        for(var j=0; j<temp_all.length; j++){
          $('#imageName3').append(
            '<option value="'+temp_all[j].nama_AAC+'">'+temp_all[j].nama_AAC+'</option>'
          );
        }
      }
    }

    /*set input answer*/
    if(dummy2[0].nama_Aktivitas=="tebak huruf"){
      $("#resultData").append(
        "<tr>"+
            "<td>Pertanyaan Penyortiran</td>"+
            "<td>"+
              '<select id="sort" name="sort">'+
                '<option value="0">Tidak</option>'+
                '<option value="1">Ya</option>'+
              '</select>'+
            "</td>"+
        "</tr>"
        );
      $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<select id="answer_siswa" name="answer_siswa">'+
              '</select>'+
              ' <p class="help-block">Jawaban benar untuk aktivitas ini,<br/>jika penyortiran maka mulai huruf dari "C"</p>'+
            "</td>"+
        "</tr>"
        );

      $("#sort").change(function(){ //change answer when click sort again
        if(( $("#answer_siswa option:selected").val()==0 || $("#answer_siswa option:selected").val()==1 || $("#answer_siswa option:selected").val()==2 ) && $("#sort option:selected").val()==1){
            var tmp= $("#answer_siswa option:selected").val();
            tmp= Number(tmp)+3;
            $('#answer_siswa option[value="'+tmp+'"]').attr("selected",true);
        }
      });
      $("#answer_siswa").change(function(){ //change answer when click input again
        if(( $("#answer_siswa option:selected").val()==0 || $("#answer_siswa option:selected").val()==1 || $("#answer_siswa option:selected").val()==2 ) && $("#sort option:selected").val()==1){
            var tmp= $("#answer_siswa option:selected").val();
            tmp= Number(tmp)+3;
            $('#answer_siswa option[value="'+tmp+'"]').attr("selected",true);
        }
      });
      for(var j=0; j<26; j++){
        $('#answer_siswa').append(
          '<option value="'+j+'">'+String.fromCharCode(j+65)+'</option>'
          );
      }
      if(dummy[0].answer_siswa){
        $('#answer_siswa option[value="'+dummy[0].answer_siswa+'"]').attr("selected",true);
      }
      else {
        $('#start option[value="0"]').attr("selected",true); 
        $('#end option[value="9"]').attr("selected",true);      
        $('#answer_siswa option[value="2"]').attr("selected",true);
      }
    }
    else if(dummy2[0].nama_Aktivitas=="cari kata"){
      $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<select id="answer_siswa" name="answer_siswa">'+
              '</select>'+
              ' <p class="help-block">Jawaban benar untuk aktivitas ini.</p>'+
            "</td>"+
        "</tr>"
        );
      for(var j=1; j<=4; j++){
        $('#answer_siswa').append(
          '<option value="'+$('#text'+j).val()+'">'+$('#text'+j).val()+'</option>'
          );
      }
      $("input").change(function(){ //change answer when input again
        $('#answer_siswa').html("");
        for(var j=1; j<=4; j++){
          $('#answer_siswa').append(
            '<option value="'+$('#text'+j).val()+'">'+$('#text'+j).val()+'</option>'
            );
        }
      });
      $('#answer_siswa option[value="'+dummy[0].answer_siswa+'"]').attr("selected",true);
    }
    else if(dummy2[0].nama_Aktivitas=="susun kata"){
      $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<input type="text" id="answer_siswa" name="answer_siswa" value="saya ingin makan" disabled>'+
              ' <p class="help-block">Jawaban benar untuk aktivitas ini.</p>'+
            "</td>"+
        "</tr>"
        );

      $('#imageName1 option[value="saya"]').attr("selected",true); 
      $('#imageName2 option[value="ingin"]').attr("selected",true); 
      $('#imageName3 option[value="makan"]').attr("selected",true); 
      $('#answer_siswa').val($("#imageName1 option:selected").val()+' '+$("#imageName2 option:selected").val()+' '+$("#imageName3 option:selected").val());
      $("select").change(function(){ //change answer when input again
        $('#answer_siswa').val($("#imageName1 option:selected").val()+' '+$("#imageName2 option:selected").val()+' '+$("#imageName3 option:selected").val());
      });
      if(dummy[0].answer_siswa)
        $('#answer_siswa').val(dummy[0].answer_siswa);
    }
    else if(dummy2[0].nama_Aktivitas=="tebak suku kata"){
      $("#resultData").append(
          "<tr>"+
              "<td>Jawaban Benar</td>"+
              "<td>"+
                '<input type="text" id="answer_siswa" name="answer_siswa" value="ba" placeholder="Masukkan jawaban yang benar">'+
              ' <p class="help-block">Jawaban benar untuk aktivitas ini.</p>'+
              "</td>"+
          "</tr>"
          );
      if(dummy[0].answer_siswa){
        $('#answer_siswa').val(dummy[0].answer_siswa);
      }
      else {
        $('#start option[value="0"]').attr("selected",true); 
        $('#end option[value="9"]').attr("selected",true);      
        // $('#answer_siswa option[value="2"]').attr("selected",true);
      }
    }
    else if(dummy2[0].nama_Aktivitas=="tebak kata tanpa imbuhan"){
      $("#resultData").append(
          "<tr>"+
              "<td>Jawaban Benar</td>"+
              "<td>"+
                '<input type="text" id="answer_siswa" name="answer_siswa" value="baba" placeholder="Masukkan jawaban yang benar">'+
              ' <p class="help-block">Jawaban benar untuk aktivitas ini, contoh:<br/>suku kata berulang <br/> baba dan tidak berulang => babi</p>'+
              "</td>"+
          "</tr>"
          );
      if(dummy[0].answer_siswa){
        $('#answer_siswa').val(dummy[0].answer_siswa);
      }
      else {
        $('#start option[value="0"]').attr("selected",true); 
        $('#end option[value="9"]').attr("selected",true);
        $('#countSuku option[value="2"]').attr("selected",true); 
        // $('#answer_siswa option[value="2"]').attr("selected",true);
      }
    }
    else if(dummy2[0].nama_Aktivitas=="tebak kata dengan imbuhan" || dummy2[0].nama_Aktivitas=="acak kata"){
      $("#resultData").append(
          "<tr>"+
              "<td>Jawaban Benar</td>"+
              "<td>"+
                '<input type="text" id="answer_siswa" name="answer_siswa" value="mobil" placeholder="Masukkan jawaban yang benar">'+
              ' <p class="help-block">Jawaban benar untuk aktivitas ini</p>'+
              "</td>"+
          "</tr>"
          );
      if(dummy[0].answer_siswa){
        $('#answer_siswa').val(dummy[0].answer_siswa);
      }
    }
    else {
      $("#resultData").append(
          "<tr>"+
              "<td>Jawaban Benar</td>"+
              "<td>"+
                '<input type="text" id="answer_siswa" name="answer_siswa" value="" placeholder="Masukkan jawaban yang benar">'+
              ' <p class="help-block">Jawaban benar untuk aktivitas ini.</p>'+
              "</td>"+
          "</tr>"
          );
      if(dummy[0].answer_siswa)
        $('#answer_siswa').val(dummy[0].answer_siswa);
    }
    break;
case 'angka':
    for(var i=0; i<param_aktivitas.length; i++){
      if(param_aktivitas[i]=="start"){
        $("#resultData").append(
          '<tr>'+
            '<td>Mulai Angka</td>'+
            '<td>'+
                '<input type="text" id="start" name="start" value="1">'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="end"){
        $("#resultData").append(
          '<tr>'+
            '<td>Akhir Angka</td>'+
            '<td>'+
                '<input type="text" id="end" name="end" value="5">'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="tipe"){
        $("#resultData").append(
          '<tr>'+
            '<td>Jenis</td>'+
            '<td>'+
                '<select id="tipe" name="tipe">'+
                    '<option value="1">Warna</option>'+
                    '<option value="2">Bangun Datar</option>'+
                '</select>'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="is24hour"){
        $("#resultData").append(
          '<tr>'+
            '<td>Satuan Jam</td>'+
            '<td>'+
                '<select id="is24hour" name="is24hour">'+
                    '<option value="0">12 jam</option>'+
                    '<option value="1">24 jam</option>'+
                '</select>'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="per30min"){
        $("#resultData").append(
          '<tr>'+
            '<td>Satuan 30 menit</td>'+
            '<td>'+
                '<select id="per30min" name="per30min">'+
                    '<option value="0">Tidak</option>'+
                    '<option value="1">Ya</option>'+
                '</select>'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="per15min"){
        $("#resultData").append(
          '<tr>'+
            '<td>Satuan 15 menit</td>'+
            '<td>'+
                '<select id="per15min" name="per15min">'+
                    '<option value="0">Tidak</option>'+
                    '<option value="1">Ya</option>'+
                '</select>'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="per5min"){
        $("#resultData").append(
          '<tr>'+
            '<td>Satuan 5 menit</td>'+
            '<td>'+
                '<select id="per5min" name="per5min">'+
                    '<option value="0">Tidak</option>'+
                    '<option value="1">Ya</option>'+
                '</select>'+
            '</td>'+
        '</tr>');
      }
    }

    /*set input answer*/
    if(dummy2[0].nama_Aktivitas=="tebak bentuk/warna"){
      $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<select id="answer_siswa" name="answer_siswa">'+
              '</select>'+
              ' <p class="help-block">Jawaban benar untuk aktivitas ini.</p>'+
            "</td>"+
        "</tr>"
        );
    }
    else if(dummy2[0].nama_Aktivitas=="tebak angka"){
      $("#resultData").append(
        "<tr>"+
            "<td>Pertanyaan Penyortiran</td>"+
            "<td>"+
              '<select id="sort" name="sort">'+
                '<option value="0">Tidak</option>'+
                '<option value="1">Ya</option>'+
              '</select>'+
            "</td>"+
        "</tr>"
        );
      $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<input type="text" id="answer_siswa" name="answer_siswa" value="3">'+
            ' <p class="help-block">Jawaban benar untuk aktivitas ini.</p>'+
            "</td>"+
        "</tr>"
        );

      $("#sort").change(function(){ //change answer when click sort again
        if(( $("#answer_siswa").val()==0 || $("#answer_siswa").val()==1 || $("#answer_siswa").val()==2 ) && $("#sort option:selected").val()==1){
            var tmp= $("#answer_siswa").val();
            tmp= Number(tmp)+3;
            $('#answer_siswa').val(tmp);
        }
      });
      $("#answer_siswa").change(function(){ //change answer when click input again
        if(( $("#answer_siswa").val()==0 || $("#answer_siswa").val()==1 || $("#answer_siswa").val()==2 ) && $("#sort option:selected").val()==1){
            var tmp= $("#answer_siswa").val();
            tmp= Number(tmp)+3;
            $('#answer_siswa').val(tmp);
        }
      });
      if(dummy[0].answer_siswa){
        $('#answer_siswa').val(dummy[0].answer_siswa);
      }
    }
    else if(dummy2[0].nama_Aktivitas=="berhitung (1)"){
      $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<input type="text" id="answer_siswa" name="answer_siswa" value="3">'+
            ' <p class="help-block">Jawaban untuk aktivitas ini maksimum 5, <br/>dengan maksimum akhir angka 5</p>'+
            "</td>"+
        "</tr>"
        );
      if(dummy[0].answer_siswa){
        $('#answer_siswa').val(dummy[0].answer_siswa);
      }

      $("#start").change(function(){
        if($("#start").val()<=0 || $("#start").val()>=5){
          $("#start").val(1);
        }
      });
      $("#end").change(function(){
        if($("#end").val()<=0 || $("#end").val()>5){
          $("#end").val(5);
        }
      });
      $("#answer_siswa").change(function(){
        if($("#answer_siswa").val()<=0 || $("#answer_siswa").val()>5){
          $("#answer_siswa").val(2);
        }
      });
    }
    else if(dummy2[0].nama_Aktivitas=="berhitung (2)"){
      $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<input type="text" id="answer_siswa" name="answer_siswa" value="5">'+
            ' <p class="help-block">Jawaban untuk aktivitas ini maksimum 9, <br/>dengan maksimum akhir angka 9</p>'+
            "</td>"+
        "</tr>"
        );
      if(dummy[0].answer_siswa){
        $('#answer_siswa').val(dummy[0].answer_siswa);
      }

      $("#start").change(function(){
        if($("#start").val()<=0 || $("#start").val()>9){
          $("#start").val(1);
        }
      });
      $("#end").change(function(){
        if($("#end").val()<=0 || $("#end").val()>9){
          $("#end").val(9);
        }
      });
      $("#answer_siswa").change(function(){
        if($("#answer_siswa").val()<=0 || $("#answer_siswa").val()>9){
          $("#answer_siswa").val(2);
        }
      });
    }
    else if(dummy2[0].nama_Aktivitas=="penjumlahan (1)" || dummy2[0].nama_Aktivitas=="penjumlahan (2)"){
      $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<input type="text" id="answer_siswa" name="answer_siswa" value="5">'+
            ' <p class="help-block">Jawaban untuk aktivitas ini maksimum penjumlahan 9</p>'+
            "</td>"+
        "</tr>"
        );
      if(dummy[0].answer_siswa){
        $('#answer_siswa').val(dummy[0].answer_siswa);
      }
    }
    else if(dummy2[0].nama_Aktivitas=="tebak jam"){
      $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<input type="text" id="answer_siswa" name="answer_siswa" value="08:30">'+
              ' <p class="help-block">Jawaban benar untuk aktivitas ini [JAM:MENIT], contoh :<br/>'+
              'satuan 30min : 08:30<br/>'+
              'satuan 15min : 20:15<br/>'+
              'satuan  5min : 07:05<br/>'+
              '12 jam dari jam 01.00-12.00<br/>'+
              '24 jam dari jam 01.00-24.00<br/>'+
              '</p>'+
            "</td>"+
        "</tr>"
        );
      $('#per30min option[value="1"]').attr("selected",true);
      if(dummy[0].answer_siswa)
        $('#answer_siswa').val(dummy[0].answer_siswa);
      $("#per30min").change(function(){
        $('#per15min option[value="0"]').attr("selected",true);
        $('#per5min option[value="0"]').attr("selected",true);
      });
      $("#per15min").change(function(){
        $('#per30min option[value="0"]').attr("selected",true);
        $('#per5min option[value="0"]').attr("selected",true);
      });
      $("#per5min").change(function(){
        $('#per30min option[value="0"]').attr("selected",true);
        $('#per15min option[value="0"]').attr("selected",true);
      });
    }
    else if(dummy2[0].nama_Aktivitas=="tebak hari"){
      $("#resultData").append(
        "<tr>"+
            "<td>Pertanyaan Penyortiran</td>"+
            "<td>"+
              '<select id="sort" name="sort">'+
                '<option value="0">Tidak</option>'+
                '<option value="1">Ya</option>'+
              '</select>'+
            "</td>"+
        "</tr>"
        );
      $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<select id="answer_siswa" name="answer_siswa">'+
                    '<option value="senin">senin</option>'+
                    '<option value="selasa">selasa</option>'+
                    '<option value="rabu">rabu</option>'+
                    '<option value="kamis">kamis</option>'+
                    '<option value="jumat">jumat</option>'+
                    '<option value="sabtu">sabtu</option>'+
                    '<option value="minggu">minggu</option>'+
              '</select>'+
              ' <p class="help-block">Jawaban benar untuk aktivitas ini.</p>'+
            "</td>"+
        "</tr>"
        );
      $('#answer_siswa option[value="'+dummy[0].answer_siswa+'"]').attr("selected",true);

      $("#sort").change(function(){ //change answer when click sort again
        if(( $("#answer_siswa option:selected").val()=='senin' || $("#answer_siswa option:selected").val()=='selasa' || $("#answer_siswa option:selected").val()=='rabu' ) && $("#sort option:selected").val()==1){
            $('#answer_siswa option[value="kamis"]').attr("selected",true);
        }
      });
      $("#answer_siswa").change(function(){ //change answer when click input again
        if(( $("#answer_siswa option:selected").val()=='senin' || $("#answer_siswa option:selected").val()=='selasa' || $("#answer_siswa option:selected").val()=='rabu' ) && $("#sort option:selected").val()==1){
            $('#answer_siswa option[value="kamis"]').attr("selected",true);
        }
      });
    }
    else if(dummy2[0].nama_Aktivitas=="tebak bulan"){
      $("#resultData").append(
        "<tr>"+
            "<td>Pertanyaan Penyortiran</td>"+
            "<td>"+
              '<select id="sort" name="sort">'+
                '<option value="0">Tidak</option>'+
                '<option value="1">Ya</option>'+
              '</select>'+
            "</td>"+
        "</tr>"
        );
      $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<select id="answer_siswa" name="answer_siswa">'+
                    '<option value="januari">januari</option>'+
                    '<option value="februari">februari</option>'+
                    '<option value="maret">maret</option>'+
                    '<option value="april">april</option>'+
                    '<option value="mei">mei</option>'+
                    '<option value="juni">juni</option>'+
                    '<option value="juli">juli</option>'+
                    '<option value="agustus">agustus</option>'+
                    '<option value="september">september</option>'+
                    '<option value="oktober">oktober</option>'+
                    '<option value="nopember">nopember</option>'+
                    '<option value="desember">desember</option>'+
              '</select>'+
              ' <p class="help-block">Jawaban benar untuk aktivitas ini.</p>'+
            "</td>"+
        "</tr>"
        );
      $('#answer_siswa option[value="'+dummy[0].answer_siswa+'"]').attr("selected",true);

      $("#sort").change(function(){ //change answer when click sort again
        if(( $("#answer_siswa option:selected").val()=='januari' || $("#answer_siswa option:selected").val()=='februari' || $("#answer_siswa option:selected").val()=='maret' ) && $("#sort option:selected").val()==1){
            $('#answer_siswa option[value="april"]').attr("selected",true);
        }
      });
      $("#answer_siswa").change(function(){ //change answer when click input again
        if(( $("#answer_siswa option:selected").val()=='januari' || $("#answer_siswa option:selected").val()=='februari' || $("#answer_siswa option:selected").val()=='maret' ) && $("#sort option:selected").val()==1){
            $('#answer_siswa option[value="april"]').attr("selected",true);
        }
      });
    }
    else {
      $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<input type="text" id="answer_siswa" name="answer_siswa" value="">'+
            ' <p class="help-block">Jawaban benar untuk aktivitas ini.</p>'+
            "</td>"+
        "</tr>"
        );
      if(dummy[0].answer_siswa)
        $('#answer_siswa').val(dummy[0].answer_siswa);
    }
    break;
case 'lingkungan':
    $("#resultData").append(
        '<tr>'+
          '<td>Default Gambar</td>'+
          '<td>'+
              '<select id="default_image" name="default_image">'+
                  '<option value="1">Ya</option>'+
                  '<option value="0">Tidak</option>'+
              '</select>'+
          '</td>'+
      '</tr>');
    $("#default_image").change(function(){
      default_image();
    });
    for(var i=0; i<param_aktivitas.length; i++){
      if(param_aktivitas[i]=="imageName1"){
        $("#resultData").append(
            '<tr>'+
              '<td>Nama Gambar 1</td>'+
              '<td>'+
                  '<input class="img_" type="text" id="imageName1" name="imageName1" value="" placeholder="Nama Gambar 1">'+
              '</td>'+
          '</tr>');
        countImageName++;
      }
      else if(param_aktivitas[i]=="imageName2"){
        $("#resultData").append(
            '<tr>'+
              '<td>Nama Gambar 2</td>'+
              '<td>'+
                  '<input class="img_" type="text" id="imageName2" name="imageName2" value="" placeholder="Nama Gambar 2">'+
              '</td>'+
          '</tr>');
        countImageName++;
      }
      else if(param_aktivitas[i]=="imageName3"){
        $("#resultData").append(
            '<tr>'+
              '<td>Nama Gambar 3</td>'+
              '<td>'+
                  '<input class="img_" type="text" id="imageName3" name="imageName3" value="" placeholder="Nama Gambar 3">'+
              '</td>'+
          '</tr>');
        countImageName++;
      }
      else if(param_aktivitas[i]=="imageName4"){
        $("#resultData").append(
            '<tr>'+
              '<td>Nama Gambar 4</td>'+
              '<td>'+
                  '<input class="img_" type="text" id="imageName4" name="imageName4" value="" placeholder="Nama Gambar 4">'+
              '</td>'+
          '</tr>');
        countImageName++;
      }
      else if(param_aktivitas[i]=="urlImage1"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar 1</td>'+
              '<td class="urlImage1">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="urlImage1" name="urlImage1" value="" disabled>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="urlImage2"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar 2</td>'+
              '<td class="urlImage2">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="urlImage2" name="urlImage2" value="" disabled>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="urlImage3"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar 3</td>'+
              '<td class="urlImage3">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="urlImage3" name="urlImage3" value="" disabled>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="urlImage4"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar 4</td>'+
              '<td class="urlImage4">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="urlImage4" name="urlImage4" value="" disabled>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="benda1"){
        $("#resultData").append(
          '<tr>'+
            '<td>Benda Pertama</td>'+
            '<td class="benda1">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                '<input type="hidden" id="benda1" name="benda1" value="" disabled>'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="benda2"){
        $("#resultData").append(
          '<tr>'+
            '<td>Benda Kedua</td>'+
            '<td class="benda2">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                '<input type="hidden" id="benda2" name="benda2" value="" disabled>'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="ruangan1"){
        $("#resultData").append(
          '<tr>'+
            '<td>Ruangan Pertama</td>'+
            '<td class="ruangan1">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                '<input type="hidden" id="ruangan1" name="ruangan1" value="" disabled>'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="ruangan2"){
        $("#resultData").append(
          '<tr>'+
            '<td>Ruangan Kedua</td>'+
            '<td class="ruangan2">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                '<input type="hidden" id="ruangan2" name="ruangan2" value="" disabled>'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="aktivitas1"){
        $("#resultData").append(
          '<tr>'+
            '<td>Aktivitas Pertama</td>'+
            '<td class="aktivitas1">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                '<input type="hidden" id="aktivitas1" name="aktivitas1" value="" disabled>'+
            '</td>'+
        '</tr>');
      }
      else if(param_aktivitas[i]=="aktivitas2"){
        $("#resultData").append(
          '<tr>'+
            '<td>Aktivitas Kedua</td>'+
            '<td class="aktivitas2">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                '<input type="hidden" id="aktivitas2" name="aktivitas2" value="" disabled>'+
            '</td>'+
        '</tr>');
      }
    }
    // default_image();
    break;
case 'mandiri':
  if(dummy2[0].nama_Aktivitas=="tebak ekspresi"){
    $("#resultData").append(
        '<tr>'+
          '<td>Default Gambar</td>'+
          '<td>'+
              '<select id="default_image" name="default_image">'+
                  '<option value="1">Ya</option>'+
                  '<option value="0">Tidak</option>'+
              '</select>'+
          '</td>'+
      '</tr>');
    $("#default_image").change(function(){
      default_image();
    });
  }
  else {
    $("#resultData").append(
        '<tr>'+
          '<td>Acak Gambar</td>'+
          '<td>'+
              '<select id="default_image" name="default_image">'+
                  '<option value="1">Ya</option>'+
                  '<option value="0">Tidak</option>'+
              '</select>'+
          '</td>'+
      '</tr>');
    $("#resultData").append(
        "<tr>"+
            "<td>Jawaban Benar</td>"+
            "<td>"+
              '<select id="answer_siswa" name="answer_siswa">'+
              '</select>'+
              ' <p class="help-block">Jawaban benar untuk aktivitas ini.</p>'+
            "</td>"+
        "</tr>"
        );
  }
    for(var i=0; i<param_aktivitas.length; i++){
      if(param_aktivitas[i]=="imageName1"){
        $("#resultData").append(
            '<tr>'+
              '<td>Nama Gambar 1</td>'+
              '<td>'+
                  '<input class="img_" type="text" id="imageName1" name="imageName1" value="" placeholder="Nama Gambar 1">'+
              '</td>'+
          '</tr>');
        countImageName++;
      }
      else if(param_aktivitas[i]=="imageName2"){
        $("#resultData").append(
            '<tr>'+
              '<td>Nama Gambar 2</td>'+
              '<td>'+
                  '<input class="img_" type="text" id="imageName2" name="imageName2" value="" placeholder="Nama Gambar 2">'+
              '</td>'+
          '</tr>');
        countImageName++;
      }
      else if(param_aktivitas[i]=="imageName3"){
        $("#resultData").append(
            '<tr>'+
              '<td>Nama Gambar 3</td>'+
              '<td>'+
                  '<input class="img_" type="text" id="imageName3" name="imageName3" value="" placeholder="Nama Gambar 3">'+
              '</td>'+
          '</tr>');
        countImageName++;
      }
      else if(param_aktivitas[i]=="imageName4"){
        $("#resultData").append(
            '<tr>'+
              '<td>Nama Gambar 4</td>'+
              '<td>'+
                  '<input class="img_" type="text" id="imageName4" name="imageName4" value="" placeholder="Nama Gambar 4">'+
              '</td>'+
          '</tr>');
        countImageName++;
      }
      else if(param_aktivitas[i]=="urlImage1"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar 1</td>'+
              '<td class="urlImage1">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="urlImage1" name="urlImage1" value="" disabled>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="urlImage2"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar 2</td>'+
              '<td class="urlImage2">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="urlImage2" name="urlImage2" value="" disabled>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="urlImage3"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar 3</td>'+
              '<td class="urlImage3">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="urlImage3" name="urlImage3" value="" disabled>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="urlImage4"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar 4</td>'+
              '<td class="urlImage4">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="urlImage4" name="urlImage4" value="" disabled>'+
              '</td>'+
          '</tr>');
      }
    } 
    break;
case 'sosial':
    $("#resultData").append(
        '<tr>'+
          '<td>Default Gambar</td>'+
          '<td>'+
              '<select id="default_image" name="default_image">'+
                  '<option value="1">Ya</option>'+
                  '<option value="0">Tidak</option>'+
              '</select>'+
          '</td>'+
      '</tr>');
    $("#default_image").change(function(){
      default_image();
    });
    for(var i=0; i<param_aktivitas.length; i++){
      if(param_aktivitas[i]=="imageName1"){
        $("#resultData").append(
            '<tr>'+
              '<td>Nama Gambar 1</td>'+
              '<td>'+
                  '<input class="img_" type="text" id="imageName1" name="imageName1" value="" placeholder="Nama Gambar 1">'+
              '</td>'+
          '</tr>');
        countImageName++;
      }
      else if(param_aktivitas[i]=="imageName2"){
        $("#resultData").append(
            '<tr>'+
              '<td>Nama Gambar 2</td>'+
              '<td>'+
                  '<input class="img_" type="text" id="imageName2" name="imageName2" value="" placeholder="Nama Gambar 2">'+
              '</td>'+
          '</tr>');
        countImageName++;
      }
      else if(param_aktivitas[i]=="imageName3"){
        $("#resultData").append(
            '<tr>'+
              '<td>Nama Gambar 3</td>'+
              '<td>'+
                  '<input class="img_" type="text" id="imageName3" name="imageName3" value="" placeholder="Nama Gambar 3">'+
              '</td>'+
          '</tr>');
        countImageName++;
      }
      else if(param_aktivitas[i]=="imageName4"){
        $("#resultData").append(
            '<tr>'+
              '<td>Nama Gambar 4</td>'+
              '<td>'+
                  '<input class="img_" type="text" id="imageName4" name="imageName4" value="" placeholder="Nama Gambar 4">'+
              '</td>'+
          '</tr>');
        countImageName++;
      }
      else if(param_aktivitas[i]=="urlImage1"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar 1</td>'+
              '<td class="urlImage1">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="urlImage1" name="urlImage1" value="" disabled>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="urlImage2"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar 2</td>'+
              '<td class="urlImage2">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="urlImage2" name="urlImage2" value="" disabled>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="urlImage3"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar 3</td>'+
              '<td class="urlImage3">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="urlImage3" name="urlImage3" value="" disabled>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="urlImage4"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar 4</td>'+
              '<td class="urlImage4">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="urlImage4" name="urlImage4" value="" disabled>'+
              '</td>'+
          '</tr>');
      }
    }
    break;
case 'puzzle':
    $("#resultData").append(
        '<tr>'+
          '<td>Default Gambar</td>'+
          '<td>'+
              '<select id="default_image" name="default_image">'+
                  '<option value="1">Ya</option>'+
                  '<option value="0">Tidak</option>'+
              '</select>'+
          '</td>'+
      '</tr>');
    $("#default_image").change(function(){
      default_image();
    });
    for(var i=0; i<param_aktivitas.length; i++){
      if(param_aktivitas[i]=="puzzle_full"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar Puzzle Penuh</td>'+
              '<td class="puzzle_full">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="puzzle_full" name="puzzle_full" value="" disabled>'+
                  ' <p class="help-block" style="color:red">Gambar belakang puzzle</p>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="puzzle1"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar Puzzle Bagian 1</td>'+
              '<td class="puzzle1">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="puzzle1" name="puzzle1" value="" disabled>'+
                  ' <p class="help-block" style="color:red">Potongan gambar kiri atas </p>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="puzzle2"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar Puzzle Bagian 2</td>'+
              '<td class="puzzle2">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="puzzle2" name="puzzle2" value="" disabled>'+
                  ' <p class="help-block" style="color:red">Potongan gambar kiri bawah </p>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="puzzle3"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar Puzzle Bagian 3</td>'+
              '<td class="puzzle3">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="puzzle3" name="puzzle3" value="" disabled>'+
                  ' <p class="help-block" style="color:red">Potongan gambar kanan atas </p>'+
              '</td>'+
          '</tr>');
      }
      else if(param_aktivitas[i]=="puzzle4"){
        $("#resultData").append(
            '<tr>'+
              '<td>Gambar Puzzle Bagian 4</td>'+
              '<td class="puzzle4">'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td colspan="2">'+
                  '<input type="hidden" id="puzzle4" name="puzzle4" value="" disabled>'+
                  ' <p class="help-block" style="color:red">Potongan gambar kanan bawah </p>'+
              '</td>'+
          '</tr>');
      }
    }
    break;
}

if(param_siswa){
    if(type_aktivitas[0]=='lingkungan' || type_aktivitas[0]=='mandiri' || type_aktivitas[0]=='sosial' || type_aktivitas[0]=='puzzle'){
      for(var i=0; i<param_siswa.length; i++){
        var tmp= param_siswa[i].split('=>');
        if($('#'+tmp[0]).is('input')){
          if(tmp[0]=='urlImage1' || tmp[0]=='urlImage2' || tmp[0]=='urlImage3' || tmp[0]=='urlImage4'
          || tmp[0]=='benda1' || tmp[0]=='benda2' || tmp[0]=='aktivitas1'
          || tmp[0]=='aktivitas2' || tmp[0]=='ruangan1' || tmp[0]=='ruangan2'
          || tmp[0]=='puzzle_full' || tmp[0]=='puzzle1' || tmp[0]=='puzzle2' || tmp[0]=='puzzle3' || tmp[0]=='puzzle4'
          ){
            $('#'+tmp[0]).val(tmp[1]);
            $('.'+tmp[0]).html(
              "<img id='img_"+tmp[0]+"' src='"+tmp[1]+"' width='120px' height='120px'><br/><br/>"+
              '<button class="btn btn-primary" onclick="getAlbum(\'img_'+tmp[0]+'\',\''+tmp[0]+'\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
            );
          }
          else {
            $('#'+tmp[0]).val(tmp[1]);
          }
        }
        else {
          $('#'+tmp[0]+' option[value="'+tmp[1]+'"]').attr("selected",true);
        }
      }
    }
    else {
      for(var i=0; i<param_siswa.length; i++){
        var tmp= param_siswa[i].split('=>');
        if($('#'+tmp[0]).is('input')){
          $('#'+tmp[0]).val(tmp[1]);
        }
        else {
          $('#'+tmp[0]+' option[value="'+tmp[1]+'"]').attr("selected",true);
        }
      }
    }
}
else {
  if(type_aktivitas[0]=='lingkungan' || type_aktivitas[0]=='mandiri' || type_aktivitas[0]=='sosial' || type_aktivitas[0]=='puzzle'){
    default_image();
  } 
}

if(dummy2[0].nama_Aktivitas=="tebak pekerjaan" || dummy2[0].nama_Aktivitas=="tebak ekspresi" || 
   dummy2[0].nama_Aktivitas=="tebak ruangan" || dummy2[0].nama_Aktivitas=="tebak aktivitas" || 
   dummy2[0].nama_Aktivitas=="tebak benda" || dummy2[0].nama_Aktivitas=="tebak alat musik" || 
   dummy2[0].nama_Aktivitas=="tebak transportasi"
  ){
  $("#resultData").append(
    "<tr>"+
        "<td>Jawaban Benar</td>"+
        "<td>"+
          '<select id="answer_siswa" name="answer_siswa">'+
          '</select>'+
          ' <p class="help-block">Jawaban benar untuk aktivitas ini.</p>'+
        "</td>"+
    "</tr>"
    );
  set_answerImage();
  $(".img_").change(function(){
    set_answerImage();
  });
}
else if(dummy2[0].nama_Aktivitas=="tebak bentuk/warna"){
  if($("#tipe option:selected").val()==1){
    $('#answer_siswa').append(
      '<option value="merah">merah</option>'+
      '<option value="hijau">hijau</option>'+
      '<option value="biru">biru</option>'+
      '<option value="jingga">jingga</option>'
      );
  }
  else {
    $('#answer_siswa').append(
      '<option value="lingkaran">lingkaran</option>'+
      '<option value="segi empat">segi empat</option>'+
      '<option value="segi lima">segi lima</option>'+
      '<option value="segi tiga">segi tiga</option>'
      );
  }
  $("#tipe").change(function(){
    $('#answer_siswa').html("");
    if($("#tipe option:selected").val()==1){
      $('#answer_siswa').append(
        '<option value="merah">merah</option>'+
        '<option value="hijau">hijau</option>'+
        '<option value="biru">biru</option>'+
        '<option value="jingga">jingga</option>'
        );
    }
    else {
      $('#answer_siswa').append(
        '<option value="lingkaran">lingkaran</option>'+
        '<option value="segi empat">segi empat</option>'+
        '<option value="segi lima">segi lima</option>'+
        '<option value="segi tiga">segi tiga</option>'
        );
    }
  });
  $('#answer_siswa option[value="'+dummy[0].answer_siswa+'"]').attr("selected",true);
}
else if(dummy2[0].nama_Aktivitas=="tebak anggota badan"){
  if($("#default_image option:selected").val()==0){
    $('#answer_siswa').append(
      '<option value="0">pundak</option>'+
      '<option value="1">leher</option>'+
      '<option value="2">rambut</option>'+
      '<option value="3">telinga</option>'+
      '<option value="4">pipi</option>'+
      '<option value="5">dahi</option>'+
      '<option value="6">mata</option>'+
      '<option value="7">hidung</option>'+
      '<option value="8">dagu</option>'+
      '<option value="9">mulut</option>'+
      '<option value="10">dada</option>'+
      '<option value="11">perut</option>'+
      '<option value="12">kepala</option>'
      );
  }
  else {
      $('#answer_siswa').append(
        '<option value="0">pundak</option>'+
        '<option value="1">leher</option>'+
        '<option value="2">rambut</option>'+
        '<option value="3">telinga</option>'+
        '<option value="4">pipi</option>'+
        '<option value="5">dahi</option>'+
        '<option value="6">mata</option>'+
        '<option value="7">hidung</option>'+
        '<option value="8">dagu</option>'+
        '<option value="9">mulut</option>'+
        '<option value="10">dada</option>'+
        '<option value="11">perut</option>'+
        '<option value="12">kepala</option>'
        );
      var rndmBody= Math.floor(Math.random() * 12) + 0;
      $('#answer_siswa option[value="'+rndmBody+'"]').attr("selected",true);
  }
  $("#default_image").change(function(){
    $('#answer_siswa').html("");
    if($("#default_image option:selected").val()==0){
      $('#answer_siswa').append(
        '<option value="0">pundak</option>'+
        '<option value="1">leher</option>'+
        '<option value="2">rambut</option>'+
        '<option value="3">telinga</option>'+
        '<option value="4">pipi</option>'+
        '<option value="5">dahi</option>'+
        '<option value="6">mata</option>'+
        '<option value="7">hidung</option>'+
        '<option value="8">dagu</option>'+
        '<option value="9">mulut</option>'+
        '<option value="10">dada</option>'+
        '<option value="11">perut</option>'+
        '<option value="12">kepala</option>'
        );
    }
    else {
      $('#answer_siswa').append(
        '<option value="0">pundak</option>'+
        '<option value="1">leher</option>'+
        '<option value="2">rambut</option>'+
        '<option value="3">telinga</option>'+
        '<option value="4">pipi</option>'+
        '<option value="5">dahi</option>'+
        '<option value="6">mata</option>'+
        '<option value="7">hidung</option>'+
        '<option value="8">dagu</option>'+
        '<option value="9">mulut</option>'+
        '<option value="10">dada</option>'+
        '<option value="11">perut</option>'+
        '<option value="12">kepala</option>'
        );
      var rndmBody= Math.floor(Math.random() * 12) + 0;
      $('#answer_siswa option[value="'+rndmBody+'"]').attr("selected",true);
    }
  });
  $('#answer_siswa option[value="'+dummy[0].answer_siswa+'"]').attr("selected",true);
}

if(dummy3[0].pertanyaan=='suara_teks' || dummy3[0].pertanyaan=='suara'){
  $("#resultData").append(
    "<tr>"+
        "<td>Masukan Suara</td>"+
        "<td>"+
          '<button id="record" class="btn btn-success" onclick="recordAudio(\'' + id+"_"+id_aktivitas + '\')"><i class="btn-icon-only icon-music"></i> Rekam</button> '+
          '<button id="stop" class="btn btn-danger" onclick="stopAudio()" disabled><i class="btn-icon-only icon-stop"></i> Stop</button> '+
          '<button id="play" class="btn btn-info" onclick="playAudio(\'' + id+"_"+id_aktivitas + '\')"><i class="btn-icon-only icon-play"></i> Play</button> '+
        "</td>"+
    "</tr>"
  );
}

$("#resultData").append(
  "<tr>"+
      "<td>Status</td>"+
      '<td>'+
          '<select id="is_active" name="is_active">'+
              '<option value="1">Aktif</option>'+
              '<option value="0">Tidak Aktif</option>'+
          '</select>'+
      '</td>'+
  "</tr>"
  );

$('#is_active option[value="'+dummy[0].is_active+'"]').attr("selected",true);

function set_answerImage(){
  $("#answer_siswa").html("");
  for(var i=1; i<=countImageName; i++){
    $("#answer_siswa").append(
        '<option value="'+$("#imageName"+i).val()+'">'+$("#imageName"+i).val()+'</option>'
      );
  }
  if(dummy[0].answer_siswa){
    $('#answer_siswa option[value="'+dummy[0].answer_siswa+'"]').attr("selected",true);
  }
}

function default_image(){
  if($('#default_image option:selected').val()==1){
      if(dummy2[0].nama_Aktivitas=="tebak ruangan"){
        $('#imageName1').val("taman bermain");
        $('#urlImage1').val("./aktivities/assets/lingkungan/lingkungan_ruangan_bermain.jpg");
        $('#imageName2').val("kamar mandi");
        $('#urlImage2').val("./aktivities/assets/lingkungan/lingkungan_ruangan_kamarMandi.jpg");
        $('#imageName3').val("kamar tidur");
        $('#urlImage3').val("./aktivities/assets/lingkungan/lingkungan_ruangan_kamarTidur.jpg");
        $('#imageName4').val("kelas");
        $('#urlImage4').val("./aktivities/assets/lingkungan/lingkungan_ruangan_kelas.jpg");
      }
      else if(dummy2[0].nama_Aktivitas=="tebak aktivitas"){
        $('#imageName1').val("main");
        $('#urlImage1').val("./aktivities/assets/lingkungan/lingkungan_aktivitas_main.jpg");
        $('#imageName2').val("makan");
        $('#urlImage2').val("./aktivities/assets/lingkungan/lingkungan_aktivitas_makan.jpg");
        $('#imageName3').val("mandi");
        $('#urlImage3').val("./aktivities/assets/lingkungan/lingkungan_aktivitas_mandi.jpg");
        $('#imageName4').val("minum");
        $('#urlImage4').val("./aktivities/assets/lingkungan/lingkungan_aktivitas_minum.jpg");
      }
      else if(dummy2[0].nama_Aktivitas=="tebak benda"){
        $('#imageName1').val("gelas");
        $('#urlImage1').val("./aktivities/assets/lingkungan/lingkungan_benda_gelas.jpg");
        $('#imageName2').val("sendok");
        $('#urlImage2').val("./aktivities/assets/lingkungan/lingkungan_benda_sendok.jpg");
        $('#imageName3').val("Sabun");
        $('#urlImage3').val("./aktivities/assets/lingkungan/lingkungan_benda_alatMandi.jpg");
        $('#imageName4').val("pensil");
        $('#urlImage4').val("./aktivities/assets/lingkungan/lingkungan_benda_pensil.jpg");
      }
      else if(dummy2[0].nama_Aktivitas=="tebak alat musik"){
        $('#imageName1').val("drum");
        $('#urlImage1').val("./aktivities/assets/lingkungan/lingkungan_musik_drum.jpg");
        $('#imageName2').val("gitar");
        $('#urlImage2').val("./aktivities/assets/lingkungan/lingkungan_musik_gitar.jpg");
        $('#imageName3').val("piano");
        $('#urlImage3').val("./aktivities/assets/lingkungan/lingkungan_musik_piano.jpg");
        $('#imageName4').val("seruling");
        $('#urlImage4').val("./aktivities/assets/lingkungan/lingkungan_musik_seruling.jpg");
      }
      else if(dummy2[0].nama_Aktivitas=="tebak transportasi"){
        $('#imageName1').val("mobil");
        $('#urlImage1').val("./aktivities/assets/lingkungan/lingkungan_transportasi_mobil.jpg");
        $('#imageName2').val("sepeda");
        $('#urlImage2').val("./aktivities/assets/lingkungan/lingkungan_transportasi_sepeda.jpg");
        $('#imageName3').val("perahu");
        $('#urlImage3').val("./aktivities/assets/lingkungan/lingkungan_transportasi_perahu.jpg");
        $('#imageName4').val("pesawat");
        $('#urlImage4').val("./aktivities/assets/lingkungan/lingkungan_transportasi_pesawat.jpg");
      }
      else if(dummy2[0].nama_Aktivitas=="tebak ekspresi"){
        $('#imageName1').val("senang");
        $('#urlImage1').val("./aktivities/assets/mandiri/mandiri_ekspresi_senang.jpg");
        $('#imageName2').val("sedih");
        $('#urlImage2').val("./aktivities/assets/mandiri/mandiri_ekspresi_sedih.jpg");
        $('#imageName3').val("marah");
        $('#urlImage3').val("./aktivities/assets/mandiri/mandiri_ekspresi_marah.jpg");
        $('#imageName4').val("terkejut");
        $('#urlImage4').val("./aktivities/assets/mandiri/mandiri_ekspresi_kaget.jpg");
      }
      else if(dummy2[0].nama_Aktivitas=="tebak pekerjaan"){
        $('#imageName1').val("dokter");
        $('#urlImage1').val("./aktivities/assets/sosial/sosial_pekerjaan_dokter.jpg");
        $('#imageName2').val("guru");
        $('#urlImage2').val("./aktivities/assets/sosial/sosial_pekerjaan_guru.jpg");
        $('#imageName3').val("pilot");
        $('#urlImage3').val("./aktivities/assets/sosial/sosial_pekerjaan_pilot.jpg");
        $('#imageName4').val("polisi");
        $('#urlImage4').val("./aktivities/assets/sosial/sosial_pekerjaan_polisi.jpg");
      }
      else if(dummy2[0].nama_Aktivitas=="puzzle"){
        $('#puzzle_full').val("./aktivities/assets/black_puzzle.jpg");
        $('#puzzle1').val("./aktivities/assets/lingkungan/lingkungan_puzzle1.jpg");
        $('#puzzle2').val("./aktivities/assets/lingkungan/lingkungan_puzzle2.jpg");
        $('#puzzle3').val("./aktivities/assets/lingkungan/lingkungan_puzzle3.jpg");
        $('#puzzle4').val("./aktivities/assets/lingkungan/lingkungan_puzzle4.jpg");
      }
      else if(dummy2[0].nama_Aktivitas=="hubungan ruangan dengan benda"){
        $('#ruangan1').val("./aktivities/assets/lingkungan/lingkungan_hubungan_toko_benda_tokoBaju.jpg");
        $('#benda1').val("./aktivities/assets/lingkungan/lingkungan_hubungan_toko_benda_baju.jpg");
        $('#ruangan2').val("./aktivities/assets/lingkungan/lingkungan_hubungan_toko_benda_tokoBuku.jpg");
        $('#benda2').val("./aktivities/assets/lingkungan/lingkungan_hubungan_toko_benda_buku.jpg");
      }
      else if(dummy2[0].nama_Aktivitas=="hubungan aktivitas dengan benda"){
        $('#aktivitas1').val("./aktivities/assets/lingkungan/lingkungan_hubungan_aktivitas_benda_kelas.jpg");
        $('#benda1').val("./aktivities/assets/lingkungan/lingkungan_hubungan_aktivitas_benda_buku.jpg");
        $('#aktivitas2').val("./aktivities/assets/lingkungan/lingkungan_hubungan_aktivitas_benda_mandi.jpg");
        $('#benda2').val("./aktivities/assets/lingkungan/lingkungan_hubungan_aktivitas_benda_alatMandi.jpg");
      }
      $('.urlImage1').html("<img src='"+$('#urlImage1').val()+"' width='120px' height='120px'>");
      $('.urlImage2').html("<img src='"+$('#urlImage2').val()+"' width='120px' height='120px'>");
      $('.urlImage3').html("<img src='"+$('#urlImage3').val()+"' width='120px' height='120px'>");
      $('.urlImage4').html("<img src='"+$('#urlImage4').val()+"' width='120px' height='120px'>");
      $('.benda1').html("<img src='"+$('#benda1').val()+"' width='120px' height='120px'>");
      $('.benda2').html("<img src='"+$('#benda2').val()+"' width='120px' height='120px'>");
      $('.ruangan1').html("<img src='"+$('#ruangan1').val()+"' width='120px' height='120px'>");
      $('.ruangan2').html("<img src='"+$('#ruangan2').val()+"' width='120px' height='120px'>");
      $('.aktivitas1').html("<img src='"+$('#aktivitas1').val()+"' width='120px' height='120px'>");
      $('.aktivitas2').html("<img src='"+$('#aktivitas2').val()+"' width='120px' height='120px'>");
      $('.puzzle_full').html("<img src='"+$('#puzzle_full').val()+"' width='120px' height='120px'>");
      $('.puzzle1').html("<img src='"+$('#puzzle1').val()+"' width='120px' height='120px'>");
      $('.puzzle2').html("<img src='"+$('#puzzle2').val()+"' width='120px' height='120px'>");
      $('.puzzle3').html("<img src='"+$('#puzzle3').val()+"' width='120px' height='120px'>");
      $('.puzzle4').html("<img src='"+$('#puzzle4').val()+"' width='120px' height='120px'>");
      set_answerImage();
    }
    else {
      $('.urlImage1').html(
        "<img id='img_urlImage1' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_urlImage1\',\'urlImage1\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.urlImage2').html(
        "<img id='img_urlImage2' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_urlImage2\',\'urlImage2\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.urlImage3').html(
        "<img id='img_urlImage3' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_urlImage3\',\'urlImage3\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.urlImage4').html(
        "<img id='img_urlImage4' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_urlImage4\',\'urlImage4\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.benda1').html(
        "<img id='img_benda1' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_benda1\',\'benda1\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.benda2').html(
        "<img id='img_benda2' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_benda2\',\'benda2\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.ruangan1').html(
        "<img id='img_ruangan1' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_ruangan1\',\'ruangan1\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.ruangan2').html(
        "<img id='img_ruangan2' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_ruangan2\',\'ruangan2\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.aktivitas1').html(
        "<img id='img_aktivitas1' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_aktivitas1\',\'aktivitas1\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.aktivitas2').html(
        "<img id='img_aktivitas2' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_aktivitas2\',\'aktivitas2\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.puzzle_full').html(
        "<img id='img_puzzle_full' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_puzzle_full\',\'puzzle_full\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.puzzle1').html(
        "<img id='img_puzzle1' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_puzzle1\',\'puzzle1\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.puzzle2').html(
        "<img id='img_puzzle2' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_puzzle2\',\'puzzle2\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.puzzle3').html(
        "<img id='img_puzzle3' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_puzzle3\',\'puzzle3\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('.puzzle4').html(
        "<img id='img_puzzle4' src='./img/ava_default.jpg' width='120px' height='120px'><br/><br/>"+
        '<button class="btn btn-primary" onclick="getAlbum(\'img_puzzle4\',\'puzzle4\')"><i class="btn-icon-only icon-picture"></i> Ambil dari Album</button>'
        );
      $('#imageName1').val("");
      $('#urlImage1').val($('#img_urlImage1').attr("src"));
      $('#imageName2').val("");
      $('#urlImage2').val($('#img_urlImage2').attr("src"));
      $('#imageName3').val("");
      $('#urlImage3').val($('#img_urlImage3').attr("src"));
      $('#imageName4').val("");
      $('#urlImage4').val($('#img_urlImage4').attr("src"));
      $('#benda1').val($('#img_benda1').attr("src"));
      $('#benda2').val($('#img_benda2').attr("src"));
      $('#aktivitas1').val($('#img_aktivitas1').attr("src"));
      $('#aktivitas2').val($('#img_aktivitas2').attr("src"));
      $('#ruangan1').val($('#img_ruangan1').attr("src"));
      $('#ruangan2').val($('#img_ruangan2').attr("src"));
      $('#puzzle_full').val($('#img_puzzle_full').attr("src"));
      $('#puzzle1').val($('#img_puzzle1').attr("src"));
      $('#puzzle2').val($('#img_puzzle2').attr("src"));
      $('#puzzle3').val($('#img_puzzle3').attr("src"));
      $('#puzzle4').val($('#img_puzzle4').attr("src"));
      set_answerImage();
    }
}