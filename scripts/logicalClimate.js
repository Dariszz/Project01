export default function logicalClimate() {
    fetch('https://api.weatherapi.com/v1/current.json?key=5628e8747a1742339b911437221002&q=Santos_Dumont&aqi=no')
    .then(answer => answer.json())
    .then(data => {
        const $ = document.querySelector.bind(document);
        const locale = $('#locale');
        const degree = $('#degree');
        const iconClimate = $('#iconClimate');

        let addIconClimate = '';
        let icons = data.current.condition.text;

        if (icons.includes('thunder') && icons.includes('rain')){
            addIconClimate = "../assets/icons/storm.png";            
        }else if (icons.includes('thunder')) {
            addIconClimate = "../assets/icons/thunder.png";
        }else if (icons.includes('rain') || icons.includes('drizzle')) {
            addIconClimate = "../assets/icons/raining.png";
        }else if (icons.includes('Fog') || icons.includes('Misty')) {
            addIconClimate = "../assets/icons/cloud.png";
        }else if (icons.includes('Cloudy') || icons.includes('Overcast')) {
            addIconClimate = "../assets/icons/cloudy.png";
        }else if (icons.includes('Sunny')) {
            addIconClimate = "../assets/icons/sun.png";
        } 

        iconClimate.src = addIconClimate;


        locale.textContent = `${data.location.name} - MG`
        degree.textContent = `${data.current.temp_c.toFixed()}°`

        
    })
}