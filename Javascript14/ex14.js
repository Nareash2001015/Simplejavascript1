var heading = document.getElementsByTagName("h2")[0];
var noteName = document.getElementsByClassName("typeField")[0];
var image = document.getElementById("record");

function changeImage(e)
{
    var imgSrc = e.target.alt;
    if(imgSrc == "record")
    {
        image.setAttribute("src", "images/pause.png");
        image.setAttribute("alt", "pause");
    }
    else
    {
        image.setAttribute("src", "images/record.png");
        image.setAttribute("alt", "record");
    }
}

function updateHeading(e)
{
    heading.textContent = noteName.value;
}

image.addEventListener("click", changeImage, false);
noteName.addEventListener("keyup", updateHeading, false);
noteName.addEventListener("keydown", updateHeading, false);

