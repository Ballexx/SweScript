import { commands } from "./support/commands"

export class Builder{
    filecontent: string

    constructor(){
        this.filecontent = ""
    }

    build(filecontent: string) : string{
        this.filecontent = filecontent
        
        for(const [key, value] of Object.entries(commands)){
            const regex = new RegExp("\\b"+value+"\\b", "g")
            
            this.filecontent = this.filecontent.replace(regex, key)
        }
        
        return this.filecontent
    }

}