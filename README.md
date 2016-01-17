#Alkalmazások fejlesztése - 3. beadandó feladat
##2016.01.10

###A feladat leírása

A cél egy webes vastagkliens, azaz egyoldalas alkalmazás megvalósítása Ember.js segítségével. A feladatot illetően lehet a szerveroldali alkalmazásnak egy kliensoldali változata, de másik feladat is választható.

**A feladatra vonatkozó funkcionális elvárások a megrendelő részéről:**

* Legalább két modell (egy-sok kapcsolatban)
* Legalább 1 űrlap
* Legalább 1 listázó oldal
* Legyen lehetőség új rekord felvételére
* Legyen lehetőség meglévő rekord szerkesztésére
* Legyen lehetőség meglévő rekord törlésére
* REST API végpont kialakítása
* Az adatok perzisztálása szerveroldalon történjen (fájlba)

####A feladat témája opcionális. A kódtárban szereplő feladat egy elemi filmes adatbázisról szól. Az alapötletet az IMDB My Movies List szolgáltatta, de jelen beadandó esetén nem volt követelmény egy hasonló komplexitású site létrehozása, így ez csak a legegyszerűbb funkciókat tartalmazza.

###Futattási segédlet

**Két különálló workspacet kell létrehoznunk:**
* Egyet a szervernek, amely jelen esetben az órán elkészített RestAPIt tartalmazza
* Egyet magának a projektnek

A program repozitorijának kezdőoldalánál letölthetjük a projektet .zip formátumban. A Cloud9-re való felmásolás és kitömörítés után megjelenik a megfelelő mappaszerkezet. A projektünket össze kell kötni a saját szerverünkkel. Ezt úgy tudjuk megtenni, hogy a szerver URLjét kimásolva beillesztjük azt a projekten belül a */app/pods/application/adapter.js* fájl host: utáni részébe. A hiányzó modulokat telepíteni kell, melyet az `npm install <modulneve>` paranccsal tudunk megtenni. Ha már minden modul instalálásra került, akkor el kell indítanunk a szerver projektjén belül található server_kurzus1.js-t, valamint a projekten belül ki kell adnunk a következő parancsot: `./node_modules/ember-cli/bin/ember server`.

Böngészőben történő futtatáshoz a *Serving on http://localhost:8080/* feliratra kell mennünk a c9 commandline-jában.

###Drótvázterv(design):

![drotterv](http://i.imgur.com/I0x6tmJ.png)

###Végpontok

Főoldal: http://alkfejl-masodikbead-csattila1995.c9users.io

Lista megtekintése: http://alkfejl-masodikbead-csattila1995.c9users.io/errors/list

Új film felvitele: http://alkfejl-masodikbead-csattila1995.c9users.io/errors/new

**Egy bizonyos film megtekintése: http://alkfejl-masodikbead-csattila1995.c9users.io/errors**

**Módosítás: http://alkfejl-masodikbead-csattila1995.c9users.io/errors/edit**

###Adatmodell

Az oldal mögötti adatbázis tartalma (oszlopfejlécek): 
1. Felvétel időpontja 
2. Műfaj
3. Filmcím

###Használati leírás

A LISTA MEGTEKINTÉSE menüpont alatt hozzáférhetünk a filmes adattáblához. Lehetőség van filmet hozzáadni, törölni és módosítani.

Műveletek:
* Megtekintés: ID alapján egy könnyebben átlátható formában listázza ki az adott filmet. (Műfaj, Filmcím, Felvétel időpontja)
* Módosítás: Megváltoztathatjuk a műfajt és a Film címét. (A címet a rendszer automatikusan visszatölti, így nem kell újra beírnunk)
* Törlés: Adott film eltávolítása az adatbázisból

A program nem kezel külön felhasználókat. Így mindenki egyetlen, adott adattáblához fér hozzá. Nincsenek jogbéli eltérések, tehát mindenki admin jogokkal rendelkezik.

###Mappaszerkezet

* app/
* config/
* dist/
* public/
* tests/
* tmp/
* vendor/
* README.md


### A futtatáshoz szükséges az alábbiak megléte

* Egy javascript futtatására alkalmas böngésző (Edge, Firefox, Chrome, Safari, Opera)
* Bármilyen 32 vagy 64 bites PC tetszőleges operációs rendszerrel
* EmberJS keretrendszer megléte
