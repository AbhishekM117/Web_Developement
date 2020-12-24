class EasyHTTP {

    getData(url) {
        fetch(url)
            .then(res => res.json())
            .then(function(data) {
                console.log(data);

                let output = '';
                data.sports.forEach((element) => {

                    output += `  <div class="row">
                <div class="col">
                    <div class="card mx-auto" id="img-display">
                        <img src="${element.strSportThumb}" class="card-img-top img-fluid">
                    </div>
                </div>
                <div class="col">
                    <div class="card mx-auto">
                        <div id="output" class="m-2 p-3">  <li>Name: ${element.strSport}</li> <li>Format: ${element.strSportDescription}</li></div>
                    </div>
                </div>
            </div>`
                });

                document.getElementById('output').innerHTML = output;

            })
            .catch(err => console.log(err))
    }
}


const http = new EasyHTTP;

http.getData('https://www.thesportsdb.com/api/v1/json/1/all_sports.php');