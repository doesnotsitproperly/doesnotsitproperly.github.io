fetch("https://api.github.com/repos/doesnotsitproperly/doesnotsitproperly.github.io/contributors")
    .then(result => result.json())
    .then(result => {
        let numberOfCommits = 0;
        result.forEach((contributor) => {
            numberOfCommits += contributor.contributions;
        });
        document.getElementById("version").innerHTML = `version ${numberOfCommits}`;
    });
