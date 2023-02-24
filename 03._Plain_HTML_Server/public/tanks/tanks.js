
fetch("/api/tanks")
    .then(response => response.json())
    .then(result => {
        const tanksWrapperDiv = document.getElementById("tanks-wrapper");

        result.data.forEach(tank => {
            const tankDiv = document.createElement("div");

            const tankName = document.createElement("p");
            tankName.innerText = tank.name;
            tankDiv.appendChild(tankName);

            const tankNationality = document.createElement("p");
            tankNationality.innerText = tank.tankNationality;
            tankDiv.appendChild(tankNationality);

            const brakeBr = document.createElement("br")


            tanksWrapperDiv.appendChild(tankDiv);
        })

    });
