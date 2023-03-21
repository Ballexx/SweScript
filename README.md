# SweScript
* A transpiler that enables you to write JavaScript with Swedish syntax
* Contains support for most keywords

# Example

in file /swescript/main.swescript

```
konstant importerad_variabel = kräv("./exempel/test")

klass test{
    konstruktor(){
        denna.test = "detta"
    }
    testfunk(){
        konsol.skriv(denna.test)
    }
    testa_importerad(){
        importerad_variabel()
    }
}

låt instans_av_klass = ny test()
instans_av_klass.testfunk()
instans_av_klass.testa_importerad()
```
in file /swescript/test/example.swescript

```
modul.exporteras = funktion test(){
    för(låt x = 0; x<10; x++){
        om(x == 5){
            fortsätt
        }
        konsol.skriv(x)
    }
}
```

# How to use

* Step one: create folder named swescript on base level, here all files will be stored
* Step two: create folder named run on base level, here the compiled code will be stored
* Step three: all files in swescript folder that will be compiled needs to end with .swescript
* Step four: run 'ts-node swescript.ts' to compile
* Step five: run 'run/file_to_run.js' where file_to_run is the file you want to run


# Currently supported keywords

```
"console": "konsol",
"log": "skriv",
"function": "funktion",
"let": "låt",
"const": "konstant",
"class": "klass",
"return": "returnera",
"constructor": "konstruktor",
"this": "denna",
"require": "kräv",
"export": "exportera",
"exports": "exporteras",
"module": "modul",
"push": "putta",
"split": "splitta",
"slice": "skär",
"find": "hitta",
"map":"karta",
"join":"sammansätt",
"keys":"nycklar",
"pop":"spräng",
"length":"längd",
"sort":"sortera",
"toString": "tillString",
"includes": "inkluderar",
"forEach": "förVarje",
"findIndex": "hittaPlats",
"isArray": "ärLista",
"filter": "filtrera",
"concat": "sammansätt",
"static":"statisk",
"extends":"förlänger",
"try":"försök",
"catch":"fånga",
"parse":"tolka",
"stringify":"stringifiera",
"trim":"klipp",
"search":"leta",
"replace":"ersätt",
"toLowerCase":"tillGemen",
"toUpperCase":"tillVersal",
"startsWith":"startarMed",
"endsWith":"slutarMed",
"repeat":"repetera",
"indexOf":"platsAv",
"break":"bryt",
"continue":"fortsätt",
"do":"gör",
"for":"för",
"in":"i",
"of":"av",
"switch":"byta",
"throw":"kasta",
"finally":"äntligen",
"var":"variabel",
"while":"medan",
"else":"annars",
"if":"om",
"new": "ny",
"typeof":"typav"
```