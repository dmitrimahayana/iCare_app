console.log("Number current siswa:"+row_siswa+"\n");

var columnIndex= [];
var columnUse= [];
for(var i=0; i<table_rank[row_siswa].length; i++){
	if(table_rank[row_siswa][i]>0){
		columnIndex[i]= 1;
		columnUse.push(i);
	}
}
console.log("list column must same:"+columnUse);
console.log("total column:"+columnUse.length);

var rowIndex= [];
for(var i=0; i<table_rank.length; i++){
	console.log("No."+i+" val:"+table_rank[i]); //show table rank
	rowIndex[i]= 0;
	for(var k=0; k<columnUse.length; k++){
		if(table_rank[i][columnUse[k]]>0){
			rowIndex[i]= rowIndex[i] + 1;
		}
	}
	console.log("total same column:"+rowIndex[i]);
}
console.log("\n");

var rank_maxSiswa= [];  //max rank siswa
var newTable_rank= [];
var row= 0;
var row_tmp= row_siswa;
for(var i=0; i<table_rank.length; i++){
	if(rowIndex[i]==rowIndex[row_siswa]){
		if(i==row_siswa){
			row_tmp= row;
		}
		newTable_rank[row]= [];		
		for(var j=0; j<table_rank[i].length; j++){
		 	newTable_rank[row][j]= table_rank[i][j];
			if(j==0){
				rank_maxSiswa[row]= table_rank[i][j];  //set max rank per siswa
			}
			else {
				if(rank_maxSiswa[row] < table_rank[i][j]){ //get the greatest rank per siswa
				  rank_maxSiswa[row]= table_rank[i][j];
				}
			}
		}
		row++;
	}
}
row_siswa= 	row_tmp;

for(var i=0; i<newTable_rank.length; i++){
	console.log("new row:"+i+" val:"+newTable_rank[i]+" max:"+rank_maxSiswa[i]);
}
console.log("\n");

var R_correlation= [];
var R_index= [];
var table_correlation= [];
for(var i=0; i<newTable_rank.length; i++){
	table_correlation[i]= [];
	if(row_siswa!=i){
		var count_index= 0;
		var total_x= 0;
		if(typeof table_correlation[row_siswa] == 'undefined')
			table_correlation[row_siswa]= [];
		for(var j=0; j<newTable_rank[row_siswa].length; j++){
			if(columnIndex[j]==1){
				table_correlation[row_siswa][count_index]=newTable_rank[row_siswa][j]; //x
				total_x= total_x+newTable_rank[row_siswa][j];	//sum x
				count_index++;
			}
		}

		var total_y= 0;
		for(var j=0; j<newTable_rank[i].length; j++){
			if(columnIndex[j]==1){
				table_correlation[i].push(newTable_rank[i][j]);	//y
				total_y= total_y+newTable_rank[i][j];	//sum y
				console.log("X:"+newTable_rank[row_siswa][j]+" Y:"+newTable_rank[i][j]);
			}
		}

		var cross_product= [];
		var xKuadrat= [];
		var yKuadrat= [];
		var total_cross= 0; 
		var total_xKuadrat= 0;
		var total_yKuadrat= 0;
		for(var j=0; j<table_correlation[row_siswa].length; j++){
			cross_product[j]= table_correlation[row_siswa][j]*table_correlation[i][j];	//x*p
			xKuadrat[j]= table_correlation[row_siswa][j]*table_correlation[row_siswa][j];	//x^2
			yKuadrat[j]= table_correlation[i][j]*table_correlation[i][j];	//y^2
			total_cross= total_cross+cross_product[j];	//sum x*p
			total_xKuadrat= total_xKuadrat+xKuadrat[j];	//sum x^2
			total_yKuadrat= total_yKuadrat+yKuadrat[j];	//sum y^2
			console.log("x*y:"+cross_product[j]+" x^2:"+xKuadrat[j]+" y^2:"+yKuadrat[j]+"");
		}

		var temp1= 0;
		var temp2= 0;
		temp1= table_correlation[row_siswa].length*total_cross-total_x*total_y;
		dummy1= table_correlation[row_siswa].length*total_xKuadrat;
		dummy2= total_x*total_x;
		dummy3= table_correlation[row_siswa].length*total_yKuadrat;
		dummy4= total_y*total_y;
		dummy5= dummy1-dummy2;
		dummy6= dummy3-dummy4;
		dummy7= dummy5*dummy6;
		temp2= Math.sqrt(dummy7);
		R_correlation[i]=(temp1/temp2).toFixed(2);	//R correlation
		R_index[i]= i;//R index row
		console.log("user_index:"+R_index[i]); //R index
		console.log("\n");
	}
}

for(var i=0; i<R_correlation.length; i++){
	console.log(i+" "+R_correlation[i]);	//print R correlation
}
console.log("\n");

var temp= [];
var index_temp= [];
var x= 0;
var y= 0;
for(var j=0; j<newTable_rank[row_siswa].length; j++ ){
	temp[x]= [];
	index_temp[x]= [];
	y= 0;
	for(var i=0; i<newTable_rank.length; i++){
		if(R_index[i]==i){
			if(columnIndex[j]!=1 && newTable_rank[i][j]>0){
				temp[x][y]= newTable_rank[i][j];	//table list value rank that can be recommended
				index_temp[x][y]= i;	//index value rank that can be recommended
				console.log(j+" val_rec:"+temp[x][y]+" index_val_rec:"+index_temp[x][y]+" user_index:"+R_index[i]);
				y++;
			}
		}
	}
	x++;
}
console.log("\n");

var recomm_indexAct= [];
var recomm_list= [];
for(var i=0; i<temp.length; i++){
	recomm_list[i]= [];
	for(var j=0; j<temp[i].length; j++){
		for(var k=j+1; k<temp[i].length; k++){
			console.log("("+i+","+j+")="+temp[i][j]+"=>index:"+index_temp[i][j]+" ("+i+","+k+")="+temp[i][k]+"=>index:"+index_temp[i][k]);
			var index_recomm= index_temp[i][j];
			var index_recomm2= index_temp[i][k];
			if(typeof index_recomm!='undefined' || R_correlation[index_recomm-1]>0 && typeof index_recomm2!='undefined' || R_correlation[index_recomm2-1]>0){
				console.log("Rx:"+R_correlation[index_recomm]+" Ry:"+R_correlation[index_recomm2]);
				var ress1= Number(R_correlation[index_recomm]*temp[i][j])+Number(R_correlation[index_recomm2]*temp[i][k]);
				var ress2= Number(R_correlation[index_recomm])+Number(R_correlation[index_recomm2]);
				ress1= ress1.toFixed(2);
				ress2= ress2.toFixed(2);
				var dummy= (ress1/ress2).toFixed(2);
				if(dummy>rank_maxSiswa[row_siswa])	//if recommendation > max rank
					dummy= rank_maxSiswa[row_siswa];	//recommendation for activity (index i)
				else if(dummy<0)
					dummy= 0;
				console.log(ress1+"/"+ress2+" = "+dummy);
				dummy= ((dummy/rank_maxSiswa[row_siswa])*100).toFixed(2);				
				recomm_indexAct[i]= i;	//get column activity
				recomm_list[i].push(dummy);	//list of recommendation per activity column
				console.log("column:"+i+" prosentase:"+dummy+" index:"+recomm_indexAct[i]);
				console.log("---------------");
			}
		}
	}
}
console.log("\n");

var recomm= [];
var resultnilai= [];
for(var i=0; i<recomm_list.length; i++){
	var temp= [];
	for(var j=0; j<recomm_list[i].length; j++){
		temp.push(Number(recomm_list[i][j]));
	}
	if(temp.length>0){
		console.log("old:"+temp);
		var data= quickSort(temp, 0, temp.length - 1);	//sort value recomendation per activity column
		console.log("new:"+data);
		var last= data.length-1;	//get the last number array
		recomm[i]= data[last];
	}
}
console.log("\n");