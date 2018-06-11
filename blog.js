function make_introduction_window()
{
    var introwindow = addWindow(
	"Intro",
	600);
    var widgetSpace = makeWidgetSpace();
    setWidgetSpace(
	introwindow,
	widgetSpace);
    makeLabel(
	widgetSpace,
	"<h2>Welcome to #!/bin/bash it 'till it works</h2>"+
	    "The blog of CannonContraption");
    makeRule(
	widgetSpace);
    makeLabel(
	widgetSpace,
	"Click on the menu at the bottom to start."+
	    " There you'll find blog posts, general information, and "+
	    "eventually other goodies too.");
}

function load_post(
    post_function_name,
    post_title,
    long_post_title,
    date_string)
{
    var post_window = addWindow(
	"blog/"+post_title,
	700);
    var widgetSpace = makeWidgetSpace();
    setWidgetSpace(
	post_window,
	widgetSpace);
    var post_title = makeLabel(
	widgetSpace,
	"<h2>"+
	    long_post_title +
	    "</h2>");
    makeRule(widgetSpace);
    var text = makeLabel(
	widgetSpace,
	post_function_name());
    widgetSpace.style.height=500;
    post_window.resizeEvent.push(
	function(
	    cwindow,
	    deltax,
	    deltay)
	{
	    var widgetSpace = cwindow.body.getElementsByClassName(
		"widgetSpace")[0];
	    var height = widgetSpace.style.height;
	    height = height.substring(0,height.length-2);
	    widgetSpace.style.height = parseInt(height)+deltay;
	});
    widgetSpace.style.overflowY="auto";
}

function blog_window()
{
    var blog_browser_window = addWindow(
	"blog",
	500);
    var widgetSpace = makeWidgetSpace();
    setWidgetSpace(
	blog_browser_window,
	widgetSpace);
    var toolbar = makeToolbar(
	widgetSpace);
    var latestButton = makeButton(
	toolbar,
	"tbutton",
	"Latest post");
    var browser_section = makeSection(
	widgetSpace);
    var bash_prompt_icon = makeIcon(
	browser_section,
	"bashprompt",
	"blogpost");
    setDblClickAction(
	bash_prompt_icon,
	function()
	{
	    load_post(
		bashprompt,
		"bashprompt",
		"Making Bash Prompt you with Information",
		"2/20/2017");
	});
}

function make_menu_buttons()
{
    var menu_space = makeWidgetSpace();
    addMenuElement(menu_space);
    makeLabel(
	makeSection(menu_space),
	"cannoncontraption.github.io/");
    var blog_button = makeButton(
	menu_space,
	"menubutton",
	"blog");
    setClickAction(
	blog_button.button,
	function(){
	    menuexec(blog_window);
	});
}

addStartupHook(make_menu_buttons);
addStartupHook(make_introduction_window);
