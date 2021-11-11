import { JsonCreate } from '@/types/json'

export default class Json {

    // @ts-ignore
    fs : object = window['fs']
    defaultPath = './src/json/';
    options = {
        encoding: 'utf8'
    }

    constructor() {
        // console.log(this.fs)
        this.init()
    }



    public getFilesByDir(path: string) : void {
        // this.fs.readdir(testFolder, (err, files) => {
        //     files.forEach(file => {
        //         console.log(file);
        //     });
        // });
    }

    private init() : void{

    }

    public async getReadDir(path : string, resp : (p: { data: object[]; status: boolean }) => object|void )  {
        // @ts-ignore
        await this.fs.readdir(path, (err : any, files : Array<string>) => {

            // if (err) resp({
            //     data: err, status: false
            // });


            // описать все поля в арме
            // @ts-ignore

            const data : object[] = files.slice(0, 50).reduce((app: Array<object>, el: string): Array<object> => {
                // @ts-ignore
                if (el.split('.')[el.split('.').length-1] === 'json'){
                    app.push(this.getFileByName(el, path));
                }

                return app;
            }, [])

            resp ({
                data,
                status: true
            })
        });
    }

    getFileByName(name : string, path : string = '') : JsonCreate{

        if (path){
            return JSON.parse(
                // @ts-ignore
                this.fs.readFileSync(path+name, this.options.encoding)
            )
        }

        return JSON.parse(
            // @ts-ignore
            this.fs.readFileSync(this.filepath(name), this.options.encoding)
        )
    }

    create(data : JsonCreate, resp : (p: { data: any; status: boolean }) => any) : any {

        // @ts-ignore
        this.fs.writeFile<object>(this.filepath(data.name), JSON.stringify(data), this.options.encoding, (err : any) => {
            if (err) resp({data: err, status: false})

            resp ({
                data: data,
                status: true
            })
        });
    }

    filepath(fileName : string, path : string = '') : string {
        return this.defaultPath + path + fileName + '.json'
    }


}