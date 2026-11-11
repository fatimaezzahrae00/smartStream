const dataApi = "https://6af4319a55a1de7dcf03b0c3.mockapi.io/chaine/data"
   export async function getData(){
   try {
   const res = await fetch(dataApi)
   if(!res.ok){
    throw new Error(`HTTP Error! : ${res.status}`)
   }
   const data = await res.json()
   console.log(data)
   return data
   }
   catch(error) {
    console.error("Filled to fetch channels : " ,error)
    throw error;
   }
   console.log(data);
}