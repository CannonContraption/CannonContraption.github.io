function menuButtonMouseHover()
{
    document.getElementById("menubutton").src =
        "windowTools/beta-start-button-3-hover.png";
}

function menuButtonMouseLeave()
{
    document.getElementById("menubutton").src =
        "windowTools/beta-start-button-3.png";
}

var menuopen = false;

function openmenu()
{
    dom_menu = document.getElementById("menu");
    dom_mbackground = document.getElementById("menubackground");
    dom_mbutton = document.getElementById("menubutton");
    if(menuopen == false)
    {
	dom_mbackground.style.display='block';
	dom_menu.style.height='500px';
	dom_menu.style.padding='5px';
	menuopen = true;
	dom_mbutton.style.transform='rotate(180deg)';
    }
    else
    {
	dom_mbackground.style.display='none';
	menuopen = false
	dom_menu.style.height='0px';
	dom_menu.style.padding='0px';
	dom_mbutton.style.transform='rotate(0deg)';
    }
}
