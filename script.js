const sportSelection = document.getElementById("sport-selection");
const subjectSelection = document.getElementById("subject-selection");
const wildlifeSelection = document.getElementById("wildlife-selection");
const landscapeSelection = document.getElementById("landscape-selection");
const sportLink = document.getElementById("sport-selection-link");
const subjectLink = document.getElementById("subject-selection-link");
const wildlifeLink = document.getElementById("wildlife-selection-link");
const landscapeLink = document.getElementById("landscape-selection-link");
const scrollTopBtn = document.getElementById("to-top-button");
const pageTitle = document.getElementById("page-title");
const imageContainer = document.getElementById('images');

const selectionContainers = document.getElementsByClassName("selections");

const titleArr = pageTitle.innerText.split(" ");
let numOfImg = 100;

const appendNum = (num) => {
    num = num.toString();
    if (num.length == 1) {
        numOfImg <= 99 ? num = "0" + num : num = "00" + num;
    } else if (num.length == 2 && numOfImg > 99) {
        num = "0" + num;
    }
    console.log(num);
    return num;
}

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
            } else { return }

            let randNum = Math.floor(Math.random() * (maxRand) + 1);

            while (sliversArr[0].includes(randNum)) { //remember to change the "0" back to i when you actually edit photos
                randNum = Math.floor(Math.random() * (maxRand) + 1);
            }

            randNum = appendNum(randNum);

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
        img.alt = `Sport Preview Image ${number}`;
        img.classList = "slivers";
        sportSelection.appendChild(img);
    })
    const title = document.createElement('p');
    title.innerHTML = "SPORTS";
    title.id = "sport-niche"
    title.classList = "genre-title genre-font negative-rotate";
    sportLink.appendChild(title);
}

const subjectSlivers = (array) => {
    array.forEach((number) => {
        const img = document.createElement('img');
        img.src = `./images/Slivers/Subject/SubjectSlivers-${number}.jpg`;
        img.alt = `Subject Preview Image ${number}`;
        img.classList = "slivers";
        subjectSelection.appendChild(img);
    })
    const title = document.createElement('p');
    title.innerHTML = "SUBJECT";
    title.id = "subject-niche"
    title.classList = "genre-title genre-font negative-rotate";
    subjectLink.appendChild(title);
}

const wildlifeSlivers = (array) => {
    array.forEach((number) => {
        const img = document.createElement('img');
        img.src = `./images/Slivers/Wildlife/WildlifeSlivers-${number}.jpg`;
        img.alt = `Wildlife Preview Image ${number}`;
        img.classList = "slivers";
        wildlifeSelection.appendChild(img);
    })
    const title = document.createElement('p');
    title.innerHTML = "WILDLIFE";
    title.id = "wildlife-niche"
    title.classList = "genre-title genre-font negative-rotate";
    wildlifeLink.appendChild(title);
}

const landscapeSlivers = (array) => {
    array.forEach((number) => {
        const img = document.createElement('img');
        img.src = `./images/Slivers/Landscape/LandscapeSlivers-${number}.jpg`;
        img.alt = `Landscape Preview Image ${number}`;
        img.classList = "slivers";
        landscapeSelection.appendChild(img);
    })
    const title = document.createElement('p');
    title.innerHTML = "LANDSCAPE";
    title.id = "landscape-niche"
    title.classList = "genre-title genre-font negative-rotate";
    landscapeLink.appendChild(title);
}

const populateImages = () => {
    const titleText = titleArr[0] + "_" + titleArr[2];
    numOfImg = switchLoopNum(titleArr[2]);

    // Assuming images are named: img1.jpg, img2.jpg, ... up to imgN.jpg
    for (let i = 1; i <= numOfImg; i++) {
        const img = document.createElement('img');
        let imgNum = appendNum(i);

        // i < 10 ? imgNum = "0" + i : imgNum = i;
        img.src = `../Sports/${titleText}/${titleText}-${imgNum}.jpg`;
        img.alt = `Image ${i}`;
        img.classList = "sport-images";
        imageContainer.appendChild(img);
    }
}

const switchLoopNum = (string) => {
    switch (string) {
        case "Babson":
            return 232;
        case "Clark":
            return 63;
        case "Connecticut":
            return 376;
        case "Holyoke":
            return 383;
        case "MIT":
            return 0;
        case "Salve":
            return 346;
        case "Smith":
            return 319;
        case "Springfield":
            return 145;
        case "Trinity":
            return 74;
        case "Wellesley":
            return 319;
        case "Wheaton":
            return 0;
        default:
            return 100;
    }
}

const onLoadPage = (string) => {
    switch (string) {
        case "Home":
            indexSlivers();
            break;
        case "WPI":
            populateImages();
            break;
        case "Sports" || "Wildlife" || "Landscape" || "Subject":
            break;
        default:
            console.log("something broke", string);
    }
    rotateAlbums();
}

const rotateAlbums = () => {
    // const negRotate = document.getElementsByClassName("negative-rotate");
    Array.from(selectionContainers).forEach((element) => {
        const rotateVal = Math.floor(Math.random() * (10 - (-10) + 1) + (-10));
        element.style.transform = `rotate(${rotateVal}deg)`;
    })
    // console.log(rotateVal);
    // Array.from(negRotate).forEach((element) => {
    //     console.log(element.style.transform);
    //     rotateVal = rotateVal * (-1);
    //     element.style.transform = `rotate(${rotateVal}deg)`;
    //     console.log(element.style.transform);
    // })
}

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function () {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    // window.scrollTo({top: 0, behavior: "smooth"})
}

document.addEventListener("onload", onLoadPage(titleArr[0]));

//-----------------------------------------------------------------------

const fullPageImg = document.getElementById("fullscreen-image");
const fullPage = document.getElementById("fullpage");

const galleryImgs = document.querySelectorAll(".gallery img");

galleryImgs.forEach(img => {
    img.addEventListener("click", function () {
        fullPage.style.display = "flex";
        fullPageImg.src = img.src;
        scrollLock(fullPage.style.display);
    });
});

fullPage.addEventListener("click", () => {
    fullPage.style.display = "none";
    document.body.style.overflowY = "scroll";
})

const scrollLock = (string) => {
    string != "none" ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";
}
