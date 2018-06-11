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

function make_about_window()
{
    var introwindow = addWindow(
	"About",
	800);
    var widgetSpace = makeWidgetSpace();
    setWidgetSpace(
	introwindow,
	widgetSpace);
    makeLabel(
	widgetSpace,
	"<h2>About</h2>"+
	    "The CannonContraption");
    makeRule(
	widgetSpace);
    makeLabel(
	widgetSpace,
	"Hello! I'm Jim Read, a computer science student in Massachusetts.<br>"+
	    "I have a passion for odd and unusual (espeically unix-ey) utilities and programs that can streamline my work as a developer, and still not get in the way of using my computer for basic browsing and email. I was at one point a real subscriber to the app life, until I realized two things:");
    var points_section = makeSection(widgetSpace);
    makeLabel(
	points_section,
	"<b>1)</b> The best software is (usually) bespoke software.");
    makeLabel(
	points_section,
	"<b>2)</b> There's more satisfaction to be had from stringing together a bunch of scripts and watching it work than plugging something into the notification tray and running a setup wizard.");;
    makeLabel(
	widgetSpace,
	"This site is where I document some of my more interesting adventures in UNIX/Linux goodness, as well as a few other bits and bobs of being a nerd.");
    makeRule(
	widgetSpace);
    makeLabel(
	widgetSpace,
	"<h3>Find me somewhere else in the tubez!</h3>");
    makeTableWithData(
	widgetSpace,
	true,
	[["Github!", "github.com/CannonContraption", "Older projects live here."],
	 ["Gitlab!", "gitlab.com/CannonContraption", "My goto, issue tracking is nicer :D"],
	 ["YouTube!", "https://www.youtube.com/channel/UC5Yt2D-FPphO4fjQix-S05Q", "I make videos once in a blue moon!"],
	 ["SoundCloud!", "https://soundcloud.com/jimmydean886", "I write music!"]]);
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
	    "</h2>"+
	    date_string);
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
    var lisprglory_icon = makeIcon(
	browser_section,
	"lisprglory",
	"blogpost");
    var codestyle_post_icon = makeIcon(
	browser_section,
	"codestyle",
	"blogpost");
    var ansi_block_graphics = makeIcon(
	browser_section,
	"ansiblock",
	"blogpost");
    var web_desk_programming = makeIcon(
	browser_section,
	"webdesk",
	"blogpost");
    var bash_prompt_icon = makeIcon(
	browser_section,
	"bashprompt",
	"blogpost");
    setClickAction(
	latestButton.button,
	function()
	{
	    load_post(
		lisprglory,
		"lisprglory",
		"(describe Lisp): Recursive Glory",
		"6/8/2018");
	});
    setDblClickAction(
	lisprglory_icon,
	function()
	{
	    load_post(
		lisprglory,
		"lisprglory",
		"(describe Lisp): Recursive Glory",
		"6/8/2018");
	});
    setDblClickAction(
	codestyle_post_icon,
	function()
	{
	    load_post(
		codestyle,
		"codestyle",
		"Code Style, and How To Write for Reading",
		"9/3/2017");
	});
    setDblClickAction(
	ansi_block_graphics,
	function()
	{
	    load_post(
		ansiblock,
		"ansiblock",
		"ANSI Color Block Graphics",
		"6/22/2017");
	});
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
    setDblClickAction(
	web_desk_programming,
	function()
	{
	    load_post(
		webdesk,
		"webdesk",
		"Web Programming a Desktop with Javascript",
		"2/25/2017");
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
    var about_button = makeButton(
	menu_space,
	"menubutton",
	"about");
    setClickAction(
	blog_button.button,
	function(){
	    menuexec(blog_window);
	});
    setClickAction(
	about_button.button,
	function(){
	    menuexec(make_about_window);
	});
}

addStartupHook(make_menu_buttons);
addStartupHook(make_introduction_window);
