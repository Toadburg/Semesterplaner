

// Globals
var dynamic_module_id = -1;


//Counter for the number of table columns
var collumnCount = 1;

//Copy of the table in its initial state after loading the app
var originalTable;

// Instantiate study course
var study_course = get_studiengaenge()["Informatik Bsc"];

// Instantiate a copy of the Study_Schedule for usage
var study_schedule = new StudySchedule(study_course);
	
//Instantiate  Study options
var study_options = new StudyOptions(study_course)



//function for the drag and drop function
function allowDrop(ev) {
  ev.preventDefault();
  if (ev.target.getAttribute("draggable") == "true")
    ev.dataTransfer.dropEffect = "none"; // dropping is not allowed
  else
    ev.dataTransfer.dropEffect = "all"; // drop it like it's hot
}

//function for the drag and drop function
function drag(ev) {
	let id = ev.target.id;
	ev.dataTransfer.setData("text", ev.target.id);
	study_options.make_unavalaible(ev.target.id);
	var source = id ? document.getElementById(ev.target.id).parentNode.id : '';
	ev.dataTransfer.setData("source", source);
}

//function for the drag and drop function inside the table
function table_drag(ev) {
	let id = ev.target.id;
	ev.dataTransfer.setData("text", ev.target.id);
	study_schedule.pop_module(ev.target.id);
	var source = id ? document.getElementById(ev.target.id).parentNode.id : '';
	ev.dataTransfer.setData("source", source);
}


//function for the drag and drop function for the side menu
function drop(ev, target) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var source = ev.dataTransfer.getData("source");
  let temp = source.split("");
  let tarID = ev.target.id;
  let mod = study_course.getModule(data).type;
  if(tarID == mod){
	study_options.make_available(data);
	update_Table();
	update_Menu();
  }
  else if(!Number.isInteger(parseInt(temp[4]))){
	study_options.make_available(data);
	alert("This module belongs to a different type.");
  }
  else{
	study_schedule.add_module(study_course.getModule(data), temp[4] - 1);
	alert("This module belongs to a different type.");
  }
  
  
  
  
}

//function for table drop
function tableDrop(ev, target) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  
  var source = ev.dataTransfer.getData("source");
  let temp_source = source.split("");
  
  let cellID = ev.target.id;
  let temp = cellID.split("");
  let semester = temp[4]%2;
  switch(study_course.getModule(data).turnus){
	case 2:
	case 3:
		study_schedule.add_module(study_course.getModule(data), temp[4] - 1);
		update_Table();
		update_Menu();
		break;
	case 0:
		if(semester == 1){
			study_schedule.add_module(study_course.getModule(data), temp[4] - 1);
			update_Table();
			update_Menu();
		}
		else if(!Number.isInteger(parseInt(temp_source[4]))){
			study_options.make_available(data);
			alert("This module is a winter module.");
			update_Table();
			update_Menu();
		}
		else{
			study_schedule.add_module(study_course.getModule(data), temp_source[4] - 1);
			//study_options.make_available(data);
			alert("This module is a winter module.");
			update_Table();
			update_Menu();
		}
		break;
	case 1:
		if(semester == 0){
			study_schedule.add_module(study_course.getModule(data), temp[4] - 1);
			update_Table();
			update_Menu();
		}
		else if(!Number.isInteger(parseInt(temp_source[4]))){
			study_options.make_available(data);
			alert("This module is a summer module.");
			update_Table();
			update_Menu();
		}
		else{
			study_schedule.add_module(study_course.getModule(data), temp_source[4] - 1);
			//study_options.make_available(data);
			alert("This module is a summer module.");
			update_Table();
			update_Menu();
		}
		break;
	default:
		alert("Äääääääääääh...ne");
		break;
  } 
    
}




//function for filling the course dropdown
function fill_dropdown() {
	let temp_dd_list = document.querySelector('.select');
	
	for (let key of Object.keys(get_studiengaenge())){
        temp_dd_list.options[temp_dd_list.options.length] = new Option(key, key);
    }
	originalTable = document.getElementById("main-table").innerHTML;

}

//function for loading the Course
function loadCourse(){
	var course = document.getElementById("select").value;
	let moduleType = document.getElementById("course");
	
	initiate_globals(course);
	// Add this module type to the dynamic module drop down:
	for(let key of Object.keys(study_course.types)){
		document.getElementById("d_type").options[document.getElementById("d_type").options.length] = new Option(key, key);
	}
	
	update_Menu();
	update_Table();
}

//function for collapsibles
function collapse(id){
	return function() {

		var modulewrapper = document.getElementById(id);
		var style = getComputedStyle(modulewrapper);

		if (modulewrapper.style.display === "block") {
		modulewrapper.style.display = "none";
		} else {
			modulewrapper.style.display = "block";
		}
	}
}



//function for adding Semesters
function addSemester() {
	var table = document.getElementById("main-table");
	study_schedule.semesters.push({});
	update_Table();
}

function add_Semester_onload(monkey) {
	var table = document.getElementById("main-table");
	let row = table.insertRow(-1);
	let cell1 = row.insertCell(0);
	let cell2 = row.insertCell(1);
	
	cell1.id = "cell" + (monkey + 1) + "." + collumnCount;
	cell1.innerHTML = monkey + 1 + ".";
	
	cell2.id = "cell" + (monkey + 1) + "." + (collumnCount + 1);
	cell2.ondrop = tableDrop;
	cell2.ondragover = allowDrop;
}
	

//function to delete Semesters
function removeSemester() {
	//var table = document.getElementById("main-table");
	//table.deleteRow(-1);
	study_schedule.remove();
	update_Table();
	update_Menu();
}

// Study schedule prototype
function StudySchedule(study_course){
    // Object that saves the necessary amount of lp for each module type
    this.restriction = study_course.types;
    // List of semesters
    this.semesters = [];
    // Add default number of semesters to the List:
    for(let i = 0; i < study_course.default_semester; i++){
        this.semesters.push({});
    }
    // Place obligatory modules into the semester list by default:
    for(let module of study_course.modules["Pflicht"]){
        this.semesters[module.semester - 1][module.modulnr] = module;
    }
    
    
    // Functions:
    
    // Add a module to the schedule
    this.add_module = function(module, semester)
    {
        this.semesters[semester][module.modulnr] = module
    }
    
    // Remove a module from the schedule based on it's id
    // Also return it
    this.pop_module = function(modulnr)
    {
        for(semester of this.semesters){
            if (semester.hasOwnProperty(modulnr)){
                let temp_module = semester[modulnr];
				delete semester[modulnr];
				return temp_module;
				
            }
        }
    }
    
    // Find the longest semesters lp
    this.get_max_semester_lp = function(){
        let max = 0
        for(semester of this.semesters){
            sum = 0
            for([key, module] of Object.entries(semester)){
                sum += parseInt(module.lp);
            }
            if(sum > max){
                max = sum;
            }
        }
        return max;
    }
    
    this.get_lp_of_type = function(module_type)
        {
            sum = 0;
            for(let semester of this.semesters){
                
                for(let [key, value] of Object.entries(semester)){
                    if(value.type == module_type){
                        sum += value.lp;
                    }
                }
            }
            return sum;
        }

    // Removes the last semester and make all modules in it available
    this.remove = function()
        {
			console.log(this.semesters[this.semesters.length - 1]);
            for(let key of Object.keys(this.semesters[this.semesters.length - 1])){
                study_options.make_available(key);
            }
            this.semesters.pop(this.semesters.length);
        }

    this.get_module_specifications_string = function()
        {   
            let specifications = [];
            for(let semester of this.semesters){
                for(let [key, value] of Object.entries(semester)){
                    if(value.hasOwnProperty("specification")){
                        for(let s of value.specification){
                            if(!specifications.includes(s)){
                                specifications.push(s);
                            }
                        }
                    }
                }
            }
            
            temp_str = "";
            for(let str of specifications){
                temp_str += "("+str+")  ";
            }
            return temp_str;
        }
    
}


// Study options prototype
// Manages the modules that can be selected via drag and drop
function StudyOptions(study_course){
    // Object that saves ids of currently available modules
    this.modules = [];
    // Fill the array by default with all ids
    for(let key of Object.keys(study_course.modules)){
        for(let module of study_course.modules[key]){
            if(module.type != "Pflicht"){
                this.modules.push(module.modulnr)
            }
        }
    }
    
    
    // Functions:
    
    // Add an id to the list of available ids
    this.make_available = function(modulnr)
    {
        this.modules.push(modulnr);
    }
    
    // Remove an id from the list of available ids
    this.make_unavalaible = function(modulnr)
    {
        for(let i = 0; i < this.modules.length; i++){
            if(this.modules[i] == modulnr){
				this.modules.splice(i, 1);
            }
        }
    }
    
    // Check if module is available
    this.is_available = function(modulnr){
        return this.modules.some(id => id == modulnr);
    }
}

//initiates the objects
function initiate_globals(study_course_key){
    // Instantiate study course
    study_course = get_studiengaenge()[study_course_key];
	
	study_course["getModule"] = function(modulenr)
	{
		for(let [key, value] of Object.entries(this.modules)){
			for(let monkey of value){
				if(monkey.modulnr == modulenr){
					return monkey;
				}
			}
		}
	}
	
    // Instantiate a copy of the Study_Schedule for usage
    study_schedule = new StudySchedule(study_course);


    // Instantiate  Study options
    study_options = new StudyOptions(study_course)
    
    // Reset dynamic module dropdown
    document.getElementById("d_type").options.length = 1;
}

//reloads the table based on the study_schedule Object
function update_Table(){
	let table = document.getElementById("main-table");
	table.innerHTML = originalTable;
	
	for (let [monkey, element] of study_schedule.semesters.entries()){
		if(monkey >= table.rows.length - 1){
			add_Semester_onload(monkey);
		}
		for (let [key, value] of Object.entries(element)){
			
			let module = document.createElement("p");
			module.innerHTML = value.name;
			module.classList.add("module");
			if(value.hasOwnProperty("color")){
                module.style.backgroundColor = value.color;
            }
			
			module.id = value.modulnr;
			module.draggable = "true";
			module.ondragstart = table_drag;
			table.rows[monkey + 1].cells[collumnCount].appendChild(module);
			
			table.rows[monkey + 1].cells[collumnCount].colSpan = value.lp/5;
			
			collumnCount += 1;
			let cell = table.rows[monkey + 1].insertCell(collumnCount);			
			cell.id = "cell" + (monkey + 1) + "." + (collumnCount + 1);
			cell.ondrop = tableDrop;
			cell.ondragover = allowDrop;
			
			
		}
		
		collumnCount = 1;
	}
	for(let i = 0; i < study_schedule.get_max_semester_lp()/5; i++){
		let collumnHead = table.tHead.children[0];
		let th = document.createElement("th");
		th.innerHTML = "5 LP";
		collumnHead.appendChild(th);	
	}
	
	update_module_status_tables();
	
}

//loads the side menu new
function update_Menu(){
	let moduleType = document.getElementById("course");
	
	if (moduleType.innerHTML.trim().length != 0){
		moduleType.innerHTML = "";	
	}
	
	for (let key of Object.keys(study_course.types)){
		
		
		let moduleTypeButton = document.createElement("button");
		moduleTypeButton.innerHTML = key;
		moduleTypeButton.type = "button";
		moduleTypeButton.classList.add("collapsible");
			
		moduleTypeButton.onclick = 
			function() {
				var modulewrapper = document.getElementById(key);
				var style = getComputedStyle(modulewrapper);

				if (modulewrapper.style.display === "block") {
					modulewrapper.style.display = "none";
				} else {
					modulewrapper.style.display = "block";
				}
			}
		
		let moduleTypeDiv = document.createElement("div");
		moduleTypeDiv.classList.add("modulewrapper");
		moduleTypeDiv.id = key;
		moduleTypeDiv.ondrop = drop;
		moduleTypeDiv.ondragover = allowDrop;
		
		let hiddenP = document.createElement("p");
		hiddenP.classList.add("placeholder");
		moduleTypeDiv.appendChild(hiddenP);
		
		if(study_course.hasOwnProperty("colors")){
            moduleTypeDiv.style.backgroundColor = study_course.colors[key];
			moduleTypeButton.style.backgroundColor = study_course.colors[key];
        }
		
		
		//creates the modules inside the menu
		for (let monkey of study_course.modules[key]){
			if(study_options.is_available(monkey.modulnr)){
				let module = document.createElement("p");
				module.innerHTML = monkey["name"];
				module.classList.add("module");
            
				// Read color from module properties (if they exist) and apply them to module
				if(monkey.hasOwnProperty("color")){
					module.style.backgroundColor = monkey.color;
				}
            
				module.id = monkey["modulnr"];
				module.draggable = "true";
				module.ondragstart = drag;
				moduleTypeDiv.appendChild(module);
			}
		}
		
		moduleTypeButton.appendChild(moduleTypeDiv);
		moduleType.appendChild(moduleTypeButton);
		
    }
	
}


function add_module_dynamically(){
    
    if(document.getElementById("d_type").value == ""){
        alert("Bitte wählen Sie einen Modultypen aus.");
        return
    }
    
    let temp_module = {
        "name": document.getElementById("d_module_name").value, 
        "modulnr": dynamic_module_id, 
        "lp": parseInt(document.getElementById("d_lp").value), 
        "color": study_course.colors[document.getElementById("d_type").value],
        "turnus": 3, 
        "type": document.getElementById("d_type").value, 
    }
    
    
    study_course.modules[document.getElementById("d_type").value].push(temp_module);
    document.getElementById('d_module_name').value = '';
    study_options.make_available(dynamic_module_id);
    dynamic_module_id--;
    
    alert(`Modul wurde zur Kategorie ${temp_module.type} hinzugefügt.`)
	console.log(study_course);
	console.log(study_options);
	update_Menu();
}


function update_module_status_tables(){
    
    document.getElementById("status_table").remove();
    let table = document.createElement("table");
    table.id = "status_table";
    let header_row = document.createElement("tr");
    let row = document.createElement("tr");
    
    // Iterate through module types
    for(let [key, value] of Object.entries(study_course.types)){
        
        // create header element
        let temp_header = document.createElement("th");
        temp_header.append(document.createTextNode(key));
        header_row.append(temp_header);
        
        // create row element (contains current status of the module types lp)
        let temp_cell = document.createElement("td");
        temp_cell.append(document.createTextNode(`${study_schedule.get_lp_of_type(key)}/${value}`));
        if(study_schedule.get_lp_of_type(key) < value){
            temp_cell.style.color = "Crimson";
        }
        else{
            temp_cell.style.color = "DarkGreen";
        }
        row.append(temp_cell);
    }
    
    // Specifications column
    let temp_header = document.createElement("th");
    temp_header.append(document.createTextNode("Spezifikationen"));
    header_row.append(temp_header);
    let temp_cell = document.createElement("td");
    temp_cell.append(document.createTextNode(study_schedule.get_module_specifications_string()));
    row.append(temp_cell);
    
    table.append(header_row);
    table.append(row);
    document.getElementById("module_status").append(table);
}
