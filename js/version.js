const getVersion = (repo) => {
    fetch(`https://api.github.com/repos/doesnotsitproperly/${repo}/contributors`)
        .then((result) => result.json())
        .then((result) => {
            let numberOfCommits = 0;
            for (const contributor of result) {
                numberOfCommits += contributor.contributions;
            }
            document.getElementById("version").innerHTML = `version ${numberOfCommits}`;
        });
}
