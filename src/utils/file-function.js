import fs from 'fs'
import path from 'path'
export const deleteFile = (filePath) =>{
let fullpath = path.resolve(filePath)
fs.unlinkSync(fullpath)
}
