# Resultat exercici 7

![resultat exercici 7](img/resultatExercici7.jpg)

# Apunts (anotacions)
* Volem vincular un component **wineList** amb el component **wineItem** per fer-ho des de el component fill **wineItem** haurem d'incloure a les variables del pare  **wineList** per fer-ho ho farem de la següent manera:

![Vincular components](img/passarVariableComponentPareAComponentFill.jpg)

* Aquí una explicació detallada https://www.youtube.com/watch?v=7Y1KpLbMTJw
* També és important el tractament dels 'nulls' dins del fitxer HTML del component fill, en aquest cas la fitxa del vi 'wineitem'

![tractament null](img/objectNULL.jpg)

# La variable no reconoce los valores del @input
si volem accedir a un valor que ve donat per un input l'hem de cridar des d' **ngOnInit()**, si ho fem des del contructor la variable sempre donarà el valor inicial, en el nostre cas ***null***.

![ngOnInit](img/ngOnInit.jpg)

https://es.stackoverflow.com/questions/322171/error-con-input-angular

# Rebre informació del component fill

Aquí volem passar dades del fill al pare, per fer-ho hem de crear un emisor d'event produït al fill i passar-li la info al pare.

![fillApare](img/fillApare.jpg)


# Vincular un control a una variable


* Aquí l'explicació 
  https://www.angularjswiki.com/angular/ngmodelchange-change-angular/


