class ToDoTask {
    constructor(id, title, description) {
        this._id = id;
        this._title = title;
        this._description = description;
    }

    get id(){
        return this._id;
    }
    get title(){
        return this._title.value;
    }
    get description(){
        return this._description.value;
    }

    set id(taskID){
        if(typeof taskID === 'number'){
            this.id = taskID;
        }
        else{
            console.log('Error: Invalid ID.');
        }
    }

    logTask() {
        console.log(`Task with title "${this.title}" added.`);
    };
}

export { ToDoTask }