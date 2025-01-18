function fectchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('Data Fetched! Student Name: Moeun Samphorsmonydeth'), 1000)
    });
}

async function fetchAndProcessData(){
    try{
        console.log('Student Name: Moeun Samphorsmonydeth')
        console.log('Using async/await: ');

        const data = await fectchData();
        console.log(data);

        const processed = "Processing Data..."
        console.log(processed);
    } catch (e){
        console.error('Error', e);
    }
}

fetchAndProcessData();