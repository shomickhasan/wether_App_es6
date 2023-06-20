
 const  getCountryWiseWethr = async ($country_name)=>{
    const Akey="07a3673bd727b761aa62a5465a902e63"
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${$country_name}&appid=${Akey}&units=metric`
    const response = await fetch(api)
    const result = await response.json()
    showWetherData(result)
    
}
const showWetherData= (data)=>{
   console.log(data);
   if(data.cod==200){
    document.getElementById('show-result').innerHTML=(`
    <div class="card-primary m-auto">
    <div class="card-body">
        <h6>Temprature: ${data.main.temp} ℃</h6>
        <h6>Max Temprature: ${data.main.temp_max} ℃</h6>
        <h6>Min Temprature: ${data.main.temp_min} ℃</h6> 
    </div>
    </div>
    `)
   }
   else{
    alert('please enter correct country name');
   }    
}
document.getElementById('submit').addEventListener('click', function(){
    const getCountryName = document.getElementById('countryName').value
    return getCountryWiseWethr(getCountryName);         
})



