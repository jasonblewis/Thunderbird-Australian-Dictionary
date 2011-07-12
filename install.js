var err = initInstall("English (Australian) Dictionary", "en-AU@dictionaries.addons.mozilla.org", "2.1.1");
if (err != SUCCESS)
    cancelInstall();

var fProgram = getFolder("Program");
err = addDirectory("", "en-AU@dictionaries.addons.mozilla.org",
		   "dictionaries", fProgram, "dictionaries", true);
if (err != SUCCESS)
    cancelInstall();

performInstall();