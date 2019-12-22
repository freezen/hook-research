
export async function ajax(url:string,method:string,callback:any,param?:any,credentials?:any){
    let headers = new Headers();
    headers.append("csrfid", "vi");

    let propertires=[]
    if(method=='get'&&param!=null){
        for(let key in param){
            propertires.push(`${key}=${ param[key]}`)
        }
        url+=`?`+propertires.join('&')
    }

    let tf=()=>{
        let f=new Promise((resolve,reject)=>{
            console.log('fetch')
            fetch('http://localhost:3000'+url,{
                headers: headers,
                credentials: "include",
                method: 'GET',
                body: method == "get" ? undefined : param
            }).then((d)=>{
                return d.json()
            }).then(dd=>{
                console.log('resolved')
                resolve(dd)
            })
        })
        let timeout=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('Gateway timeout error.')
            },30*60*1000)
        })
        return Promise.race([f,timeout])
    }

   
    let rs:any= await tf()
    callback(rs)
  
}