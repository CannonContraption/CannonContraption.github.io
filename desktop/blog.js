var colorScheme = {
	activepanelcolor: "#8b8889",
	lowerpanelcolor: "#d1ad79",
	lowerwindowborder: 'black',
	minipanelcolor: '#333c4f',
}

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
    makeRule(
        widgetSpace);
    makeLabel(
        widgetSpace,
        "If you're on a phone, you may want to go back and choose the \"classic site\".<br>Unfortunately, touch-only interfaces are somewhat awkward with the desktop interface for the moment.");
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
	    "CannonContraption");
    makeRule(
	widgetSpace);
    makeLabel(
	widgetSpace,
	"Hello! I'm Jim Read, a software engineer in Massachusetts, currently working for Dell EMC.<br>"+
	    "I have a passion for odd and unusual (espeically unix-ey) utilities and programs that can streamline my work as a developer.");
    makeRule(
	widgetSpace);
    makeLabel(
	widgetSpace,
	"<h3>Find me somewhere else in the tubez!</h3>");
    makeTableWithData(
	widgetSpace,
	true,
	[["Github!", "<a href=https://github.com/CannonContraption>github.com/CannonContraption</a>", "My contributions to Microsoft's AI training."],
	 ["Gitlab!", "<a href=https://gitlab.com/CannonContraption>gitlab.com/CannonContraption</a>", "Most of my projects live here now, I found the issue tracker slightly nicer at one point."],
	 ["YouTube!", "<a href=https://www.youtube.com/channel/UC5Yt2D-FPphO4fjQix-S05Q>https://www.youtube.com/channel/UC5Yt2D-FPphO4fjQix-S05Q</a>", "I sometimes make videos"],
	 ["SoundCloud!", "<a href=https://soundcloud.com/jimmydean886>https://soundcloud.com/jimmydean886</a>", "I write music!"]]);
}

function frame_post(
    post_name,
    post_fname,
    category)
{
    var blogwd = addWindow(
        category + "/" + post_name,
        800);
    setWindowContents(
        blogwd,
        "<iframe src='../posts/"+category+"/"+post_fname+"' style='width:100%;height:100%;' frameborder=0></iframe>");
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
    post_window.maximizeEvent.push(
        function(
            cwindow,
            windowWidth,
            windowHeight)
        {
            var widgetSpace = cwindow.body.getElementsByClassName(
		"widgetSpace")[0];
	    var height = widgetSpace.style.height;
	    height = height.substring(0,height.length-2);
	    widgetSpace.style.height = windowHeight;
        });
    widgetSpace.style.overflowY="auto";
    return post_window;
}

function blog_window(
    category)
{
    var blog_browser_window = addWindow(
	category + " blog",
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
    if(category == "oldfood")
    {
        var instantpot_icon = makeIcon(
            browser_section,
            "instantpot",
            "blogpost");
        var intro_icon = makeIcon(
            browser_section,
            "foodintro",
            "blogpost");
        setDblClickAction(
            instantpot_icon,
            function(){
                load_post(
                    instantpot,
                    "instantpot",
                    "An instant pot is not a slow cooker!",
                    "5/14/2019");
            });
        setDblClickAction(
            intro_icon,
            function(){
                load_post(
                    food_intro,
                    "foodintro",
                    "Food!",
                    "5/14/2019");
            });
        setClickAction(
            latestButton,
            function(){
                load_post(
                    instantpot,
                    "instantpot",
                    "An instant pot is not a slow cooker!",
                    "5/14/2019");
            });
    }
    if(category == "food")
    {
        setClickAction(
            latestButton,
            function(){
                load_post(
                    instantpot,
                    "instantpot",
                    "An instant pot is not a slow cooker!",
                    "5/14/2019");
            });
        var instantpot_icon = makeIcon(
            browser_section,
            "instantpot",
            "blogpost");
        var intro_icon = makeIcon(
            browser_section,
            "foodintro",
            "blogpost");
        setDblClickAction(
            instantpot_icon,
            function() {
                frame_post(
                    "instantpot",
                    "instantpot.html",
                    "food")});
        setDblClickAction(
            intro_icon,
            function() {
                frame_post(
                    "intro",
                    "intro.html",
                    "food")});
    }
    if(category == "keyboards")
    {
        setClickAction(
            latestButton,
            function(){
                frame_post(
                    "intro",
                    "intro.html",
                    "keyboard")});
        let introicon = makeIcon(
            browser_section,
            "intro",
            "blogpost");
        setDblClickAction(
            introicon,
            function(){
                frame_post(
                    "intro",
                    "intro.html",
                    "keyboard")});
    }
    if (category == "games")
    {
        setClickAction(
            latestButton,
            function(){
                frame_post(
                    "rnc1",
                    "rnc1.html",
                    "game")});
        let rnc1icon = makeIcon(
            browser_section,
            "rnc1",
            "blogpost");
        let introicon = makeIcon(
            browser_section,
            "intro",
            "blogpost");
        setDblClickAction(
            rnc1icon,
            function(){
                frame_post(
                    "rnc1",
                    "rnc1.html",
                    "game")});
        setDblClickAction(
            introicon,
            function(){
                frame_post(
                    "intro",
                    "intro.html",
                    "game")});
    }
    if(category == "tech")
    {
        setClickAction(
	    latestButton,
	    function()
	    {
	        frame_post(
                    "blogtech",
                    "blogtech.html",
                    "tech");
	    });
         var blogtech_icon = makeIcon(
            browser_section,
            "blogtech",
            "blogpost");
        var zshdumb_icon = makeIcon(
            browser_section,
            "zshdumb",
            "blogpost");
        var lisprglory_icon = makeIcon(
	    browser_section,
	    "lisprglory",
	    "blogpost");
        var codestyle_icon = makeIcon(
	    browser_section,
	    "codestyle",
	    "blogpost");
        var ansi_block_graphics_icon = makeIcon(
	    browser_section,
	    "ansiblock",
	    "blogpost");
        var webdesk_icon = makeIcon(
	    browser_section,
	    "webdesk",
	    "blogpost");
        var bashprompt_icon = makeIcon(
	    browser_section,
	    "bashprompt",
	    "blogpost");
        setDblClickAction(
            blogtech_icon,
            function() {
                frame_post(
                    "blogtech",
                    "blogtech.html",
                    "tech");
            });
        setDblClickAction(
            zshdumb_icon,
            function() {
                frame_post(
                    "zshdumb",
                    "zshdumb.html",
                    "tech");
            });
        setDblClickAction(
            lisprglory_icon,
            function() {
                frame_post(
                    "lisprglory",
                    "lisprglory.html",
                    "tech");
            });
        setDblClickAction(
            codestyle_icon,
            function() {
                frame_post(
                    "codestyle",
                    "codestyle.html",
                    "tech");
            });
        setDblClickAction(
            ansi_block_graphics_icon,
            function() {
                frame_post(
                    "ansiblock",
                    "ansiblock.html",
                    "tech");
            });
        setDblClickAction(
            webdesk_icon,
            function() {
                frame_post(
                    "webdesk",
                    "webdesk.html",
                    "tech");
            });
        setDblClickAction(
            bashprompt_icon,
            function() {
                frame_post(
                    "bashprompt",
                    "bashprompt.html",
                    "tech");
            });
    }
    if(category == "oldtech")
    {
        var blogtech_icon = makeIcon(
            browser_section,
            "blogtech",
            "blogpost");
        var zshdumb_icon = makeIcon(
            browser_section,
            "zshdumb",
            "blogpost");
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
	    latestButton,
	    function()
	    {
	        load_post(
		    bloggingtech,
		    "blogtech",
		    "Blogging is Hard.",
		    "7/31/2019");
	    });
        setDblClickAction(
            blogtech_icon,
            function()
	    {
	        load_post(
		    bloggingtech,
		    "blogtech",
		    "Blogging is Hard.",
		    "7/31/2019");
	    });
        setDblClickAction(
            zshdumb_icon,
            function()
	    {
	        load_post(
		    zshdumb,
		    "zshdumb",
		    "ZSH Scripts are Dumb.",
		    "7/27/2019");
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
}

function make_menu_buttons()
{
    var menu_space = makeWidgetSpace();
    addMenuElement(menu_space);
    makeLabel(
	makeSection(menu_space),
	"cannoncontraption.github.io/");
    var tech_button = makeButton(
        menu_space,
        "menubutton",
        "Software/Tech");
    var keyboard_button = makeButton(
	menu_space,
	"menubutton",
	"Keyboards");
    var food_button = makeButton(
        menu_space,
        "menubutton",
        "Food");
    var games_button = makeButton(
        menu_space,
        "menubutton",
        "Video Games");
    var about_button = makeButton(
	menu_space,
	"menubutton",
	"about");
    setClickAction(
	keyboard_button,
	function(){
	    menuexec(
                function(){blog_window("keyboards")});
	});
    setClickAction(
	tech_button,
	function(){
	    menuexec(
                function(){blog_window("tech")});
	});
    setClickAction(
        food_button,
        function(){
            menuexec(
                function(){blog_window("food")});
        });
    setClickAction(
        games_button,
        function(){
            menuexec(function(){blog_window("games")})});
    setClickAction(
	about_button,
	function(){
	    menuexec(make_about_window);
	});
}

addStartupHook(make_menu_buttons);
addStartupHook(make_introduction_window);
