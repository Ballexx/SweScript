import path = require("path")
import {Filemanager} from "./utils/filemanager"

export class Transpiler{
    folder: string

    constructor(folder: string){
        this.folder = folder
    }

    run(){
        Filemanager.clone_dir(this.folder)
        Filemanager.read_dir(path.join(__dirname, "../run"))
    }
}