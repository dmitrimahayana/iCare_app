

var tbUser = localStorage.getItem("tbUser");//Retrieve the stored data 
tbUser = JSON.parse(tbUser); //Converts string to object 
if(tbUser == null) //If there is no data, initialize an empty array 
	tbUser = [];



function addData(){ 
	if (localStorage.id_user)
	{
		localStorage.id_user = Number(localStorage.id_user) + 1;
		// alert("no null:"+localStorage.id_user);
	}
	else
	{
		localStorage.id_user = 1;
		// alert("null:"+localStorage.id_user);
	}
	var client = JSON.stringify({ 
		id_user : localStorage.id_user, 
		username : $("#username").val().toLowerCase(), 
		password : $("#password").val().toLowerCase(), 
		photo_user : $("#photo_user").val(),
		is_terapist : $("#is_terapist option:selected").val(),
		email : $("#email").val().toLowerCase()
	}); 
	tbUser.push(client); 
	localStorage.setItem("tbUser", JSON.stringify(tbUser)); 
	alert("Data berhasil disimpan."); 
	return true; 
} 

function editData(selected_index, arrayData){
	tbUser[selected_index] = arrayData;
	localStorage.setItem("tbUser", JSON.stringify(tbUser)); 
	alert("Data berhasil diperbarui.") 
	return true; 
}

function deleteData(selected_index){ 
	tbUser.splice(selected_index, 1); 
	localStorage.setItem("tbUser", JSON.stringify(tbUser)); 
	console.log("Data berhasil dihapus."); 
	return true; 
}

function getAll(){
	var cli= [];
	for(var i in tbUser){ 
		cli[i] = JSON.parse(tbUser[i]); 
		cli[i].index_table= [];
		cli[i].index_table= i;
		/*console.log(i+" ==> idUser "+cli[i].id_user+
		" username "+cli[i].username+
		" pass "+cli[i].password+
		" photo "+cli[i].photo_user+
		" sebagai "+cli[i].is_terapist+
		" email "+cli[i].email);*/
	}
	return cli;
}

function getSome(input, param){
	input= input.toLowerCase();
	var temp; 
	var cli= [];
	for(var i in tbUser){
		cli[i] = JSON.parse(tbUser[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		switch (param) {
		case 'all':
			if( //cli[i].id_user==input
				cli[i].username==input
			 || cli[i].password==input
			 || cli[i].photo_user==input
			 || cli[i].email==input
			 ){
				temp= cli[i];
			}
		    break;
		case 'id_user':
			if(cli[i].id_user==input){
				temp= cli[i];
			}
		case 'username':
			if(cli[i].username==input){
				temp= cli[i];
			}
		    break;
		case 'password':
			if(cli[i].password==input){
				temp= cli[i];
			}
		    break;
		case 'email':
			if(cli[i].email==input){
				temp= cli[i];
			}
		    break;
		}
	}
	return temp;
}

function getSomeAnyParam(input1, input2, param1, param2){
	input1= input1.toLowerCase();
	input2= input2.toLowerCase();
	var temp; 
	var cli= [];
	for(var i in tbUser){
		cli[i] = JSON.parse(tbUser[i]);
		cli[i].index_table= [];
		cli[i].index_table= i;
		if(param1=="username" && param2=="password"){
			if(cli[i].username==input1 && cli[i].password==input2
			 ){
				temp= cli[i]
			}
		}
	}
	return temp;	
}