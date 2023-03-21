import * as fs from 'fs'
import * as path from "path"
import { Builder } from "./builder"

export class Filemanager{
    static read_file(filename: string) : string{
        const file_content: string = fs.readFileSync(filename, "utf-8")
        return file_content
    }
    
    static write_file(filename: string, content: string){
        fs.unlinkSync(filename)
        filename = filename.replace("swescript", "js")
        fs.writeFileSync(filename, content)
    }

    static clone_dir(folder: string){
        let dir = path.join(__dirname, "../..")

        fs.readdirSync(path.join(dir, "/run")).forEach(file=>{
            fs.rmSync(path.join(dir, `/run/${file}`), {recursive:true})
        })
        fs.cpSync(path.join(dir, `/${folder}`), path.join(dir, "/run"), {recursive: true}) 
    }

    static isDir(file: string) {
        try {
            fs.lstatSync(file).isDirectory
            return true    
        } catch (e) {
            return false
        }
    }

    static read_dir(folder: string){
        fs.readdirSync(folder).forEach(file=>{
            if(file.endsWith(".swescript")){
                let read_content = this.read_file(path.join(folder, file))
                let converted = new Builder().build(read_content)
                this.write_file(path.join(folder, file),converted)
            }
            if(this.isDir(path.join(folder, file))){
                this.read_dir(path.join(folder, file))
            }
        })
    }

     
}