const sportSelection = document.getElementById("sport-selection");
const subjectSelection = document.getElementById("subject-selection");
const wildlifeSelection = document.getElementById("wildlife-selection");
const landscapeSelection = document.getElementById("landscape-selection");

const selectionContainers = document.getElementsByClassName("genre-selection-container");

const sportLink = document.getElementById("sport-selection-link");
const subjectLink = document.getElementById("subject-selection-link");
const wildlifeLink = document.getElementById("wildlife-selection-link");
const landscapeLink = document.getElementById("landscape-selection-link");


const indexSlivers = () => {
    let sportsArr = [];
    let subjectArr = [];
    let wildlifeArr = [];
    let landscapeArr = [];
    const sliversArr = [sportsArr, subjectArr, wildlifeArr, landscapeArr];
    let maxRand = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i == 0) {
                maxRand = 201;
            } else if (i == 1) {
                maxRand = 1;
            } else if (i == 2) {
                maxRand = 1;
            } else if (i == 3) {
                maxRand = 1;
            } else {return}
            // const randNum = 1;
            let randNum = Math.floor(Math.random() * maxRand) + 1;
            randNum = randNum.toString();
            if (randNum.length == 1) {
                randNum = "00" + randNum;

            } else if (randNum.length == 2) {
                randNum = "0" + randNum;
            }
            sliversArr[i][j] = randNum;
        }
    }

    sportSlivers(sportsArr);
    subjectSlivers(subjectArr);
    wildlifeSlivers(wildlifeArr);
    landscapeSlivers(landscapeArr);

}

const sportSlivers = (array) => {
    array.forEach((number) => {
        const img = document.createElement('img');
        img.src = `./images/Slivers/Sports/SportSlivers-${number}.jpg`;
        img.alt = `Image ${number}`;
        img.classList = "slivers";
        sportSelection.appendChild(img);
    })
    const title = document.createElement('p');
    title.innerHTML = "SPORTS";
    title.classList = "genre-title";
    sportLink.appendChild(title);
}

const subjectSlivers = (array) => {
    array.forEach((number) => {
        const img = document.createElement('img');
        img.src = `./images/Slivers/Subject/SubjectSlivers-${number}.jpg`;
        img.alt = `Image ${number}`;
        img.classList = "slivers";
        subjectSelection.appendChild(img);
    })
    const title = document.createElement('p');
    title.innerHTML = "SUBJECT";
    title.classList = "genre-title";
    subjectLink.appendChild(title);
}

const wildlifeSlivers = (array) => {
    array.forEach((number) => {
        const img = document.createElement('img');
        img.src = `./images/Slivers/Wildlife/WildlifeSlivers-${number}.jpg`;
        img.alt = `Image ${number}`;
        img.classList = "slivers";
        wildlifeSelection.appendChild(img);
    })
    const title = document.createElement('p');
    title.innerHTML = "WILDLIFE";
    title.classList = "genre-title";
    wildlifeLink.appendChild(title);
}

const landscapeSlivers = (array) => {
    array.forEach((number) => {
        const img = document.createElement('img');
        img.src = `./images/Slivers/Landscape/LandscapeSlivers-${number}.jpg`;
        img.alt = `Image ${number}`;
        img.classList = "slivers";
        landscapeSelection.appendChild(img);
    })
    const title = document.createElement('p');
    title.innerHTML = "LANDSCAPE";
    title.classList = "genre-title";
    landscapeLink.appendChild(title);
}

selectionContainers[0].addEventListener("mouseover", () => {
    const rotateVal = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10);
    console.log(rotateVal);
    selectionContainers[0].style.transform = `rotate(${rotateVal}deg)`
})
selectionContainers[1].addEventListener("mouseover", () => {
    const rotateVal = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10);
    console.log(rotateVal);
    selectionContainers[1].style.transform = `rotate(${rotateVal}deg)`
})
selectionContainers[2].addEventListener("mouseover", () => {
    const rotateVal = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10);
    console.log(rotateVal);
    selectionContainers[2].style.transform = `rotate(${rotateVal}deg)`
})
selectionContainers[3].addEventListener("mouseover", () => {
    const rotateVal = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10);
    console.log(rotateVal);
    selectionContainers[3].style.transform = `rotate(${rotateVal}deg)`
})

document.addEventListener("onload", indexSlivers());