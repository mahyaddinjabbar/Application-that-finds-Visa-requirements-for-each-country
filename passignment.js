/*
 Mahyaddin Jabbarli-mj21068
*/

window.addEventListener('DOMContentLoaded', (event) => {
    var country_s = document.getElementById("country");

    var lookup = {};

    for( let i in data){
        let country = data[i].country;
        if (country && !(country in lookup)) {
            lookup[country] = {};
        }
        lookup[country] = 1;
    }

    var countries = Object.keys(lookup).sort();

    for (let i in countries) {
        let opt = document.createElement('option');
        opt.innerHTML = countries[i];
        opt.value = countries[i];
        country_s.appendChild(opt);
    }

    function filterRequirements(country, type) {
        let output = document.getElementById("output")
        for(let i in data){
            let item = data[i]
            if (item.country===country && item.indicator===type){
                output.textContent = item.requirements
            }
        }
    }

    function processData(){
        let selectedCountry = country_s[country_s.selectedIndex].value
        let selectedIndicator = document.querySelectorAll('input[name="indicator"]:checked')[0].value;
        filterRequirements(selectedCountry,selectedIndicator)
    }




    document.getElementById("show").addEventListener('click',processData );

});