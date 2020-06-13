

# Punchbang's Stuff - Frase de la Decada
[![Build Status](https://travis-ci.org/dperezferrando/frase-de-la-decada.svg?branch=master)](https://travis-ci.org/dperezferrando/frase-de-la-decada)

Se acerca el comienzo de la votación de la **Frase de la Decada** por lo que es un buen momento para leer como garcha funciona esta cosa. Si te da paja leer esto, podés no leerlo porque en cada etapa se dará la información mínima para la misma, pero si después no entendés algo, no llores.


## Introducción
---------------
![logo](https://i.imgur.com/ILrP3qH.png)

La votación se va a desarrollar como el mismísimo mundial, o en realidad, como una Champions League *(porque para la parte de eliminación directa flashie mientras programaba e hice que cada fase salga por sorteo en vez de armarse un cruce por llaves y me dio paja cambiarlo - sin suerte - )*
Para esto la votación se dividirá en las siguientes etapas:


 * Eliminatorias **26/06 20:30 (MINUTOS ANTES: CEREMONIA DE INAUGURACION) - 28/06 20:30**
 * Fase de Grupos **29/06 20:00 - 30/06 20:00**
 * Eliminación Directa
   * Octavos de Final **30/06 21:00 - 01/07 20:00**
   * Cuartos de Final **01/07 21:00 - 02/07 20:00**
   * Semifinal **02/07 21:00 - 03/07 20:00**
   * Tercer Puesto **03/07 21:00 - 04/07 20:00**
   * Final **04/07 21:00 - 05/07 20:00**

Cada etapa tiene una fecha de comienzo y una fecha de fin, durante ese periodo se va a poder votar. Al llegar a la fecha de cierre se cierran los comicios y una hora mas tarde se harán públicos los resultados de dicha fase. Durante esa hora se valida que nada turbina haya sucedido y se procede a ejecutar los algoritmos mágicos que sortean la siguiente fase.
La cantidad de frases que se votan en cada etapa y el valor de cada voto depende de la etapa misma.

## Eliminatorias
---------------
En esta fase participan las **437** frases del periodo buscando un lugar dentro de las **32** que van a clasificar a la Fase de Grupos, sin embargo, las **7** Frases del Año ya están **clasificadas** como **Cabezas de Serie** , por lo que cada votante solo deberá elegir **25** frases que las acompañen.
Para realizar esta selección, hay filtros por año y por autor, ademas de un buscador de texto *(que es sensible a tildes y no todas las frases tienen los tildes que deberían - sin suerte nuevamente -)*.
La selección  deberá cumplir las siguientes restricciones (contando siempre a las frases ya clasificadas):
* Mínimo tiene que haber **2** frases de cada año *(Perdón por el comunismo)*
* Puede haber máximo **10** frases de un autor en particular. *(Para que gente como Yerman no vote solamente sus frases)*

 En el caso de que seas como Mauro y te dé paja hacer esto, hay un botón mágico que soluciona dicha problemática al cargar una selección random (y modificable) de frases. A pesar de esto, es importante recalcar que dicha herramienta debe ser usada con responsabilidad, **porque dejar las cosas libradas al azar puede llevar a la clasificación de frases cancerígenas**, lo cual está perfecto *(no hay que discriminar a quienes tienen cáncer)* pero luego no me vengan con *"¿Cómo ganó esa mierda?"* *"¿Quién votó esa poronga?"* *"¿Otra vez cagaron a Diego?"*  y demás troladas que surgen cuando votan como el orto *(uff con esta última oración tuve la oportunidad de hacer un chiste político y no lo hice, de nada).*
Mi recomendación es que os toméis un tiempo para recorrer los cromosomas de todos estos años para llegar a una buena selección, especialmente si estuvisteis presente durante todos los años. La preselección random puede ser un buen punto de partida si es modificada.

Cada frase en la selección del votante recibirá **1** voto, las **7** Frases del Año sumadas las **25** frases más votadas, serán clasificadas a la siguiente fase.

***Nota**: el valor final del voto estará sujeto al multiplicador del usuario, esto está explicado más adelante*

## Fase de Grupos
---------------
Una vez definidas las 32 frases clasificadas se sortearan **8** grupos con **4** frases cada uno. Cada Frase del Año, acompañadas por la frase que les siga en cantidad de votos, seran **cabezas de serie.**
El resto de las frases se repartiran en cada grupo de forma aleatoria cumpliendo las siguientes restricciones:
* No puede haber más de **2** frases del mismo año en un grupo.
* No puede haber más de **2** frases del mismo autor en un grupo.

**Nota para programadores:** *El algoritmo que hace el sorteo es tan rancio que lo único que hace es sortear recursivamente como un hijo de re mil puta hasta que encuentra un sorteo que cumpla ambas restricciones. Increíblemente lo encuentra rápido, por lo que su ineficiencia se me hace irrelevante.*

En el periodo de votación, cada participante deberá elegir por cada grupo sus dos frases preferidas. La primer posición recibe **2** votos mientras que la segunda posición recibe **1** voto. Al final del periodo, clasifican los dos primero de cada grupo.

***Nota**: el valor final del voto estará sujeto al multiplicador del usuario, esto está explicado más adelante*

## Eliminación Directa
---------------
A partir de las **16** frases que pasen la Fase de Grupos, se sortean los Octavos de Final formando 8 partidos 1v1 donde cada frase se enfrenta directamente a otra. Cada votante deberá elegir quien gana cada partido dándole de esta forma **1** voto a la frase ganadora.
Los ganadores pasan a la siguiente fase donde se vuelven a sortear partidos, y así sucesivamente hasta llegar a la final.  Los perdedores de cada Semifinal se enfrentaran en un partido por el tercer puesto.

***Nota**: el valor final del voto estará sujeto al multiplicador del usuario, esto está explicado más adelante*

## Criterios de Desempate
---------------
En caso de igualdad de votos se usarán los siguientes criterios, en el orden dado, para determinar que frase le gana a otra:
* **Coeficiente Autista (CA)**: pasa la que tiene mayor coeficiente *(Recordatorio: el CA es un promedio de la cantidad de personas que eligieron la frase como su primer opción en correspondiente votación para Frase del Año)*
* **Año**: la frase mas antigua pasa. Se considera que frases mas modernas van a ser ponderadas por los votantes por su cercanía temporal, por lo que en caso de empate se priorizan las viejas joyitas.
* **Random**: Se estima que no se va a llegar a este punto, pero si sucede, se quedara la frase que haya elegido el sistema.

## Habilitación de Cuentas y Multiplicadores
---------------
Esta votación *(como siempre)* está abierta al publico general, si bien no se espera una gran participación de personas ajenas a este mar de cromosomas, en caso de que la haya y con motivo de hacer valer mas los votos de las personas mas relevantes *(terrible voto calificado kaskaajsk)* solo estarán habilitadas para votar las cuentas de personas reconocibles o quienes quieran participar teniendo alguna conexión con algún autor de las frases.

***Nota**: las cuentas se habilitan a partir del nombre y mail que vengan de Google, si la cuenta no se reconoce -> no se habilita, en ese caso hincharle los huevos a Pérez.*

Los usuarios se dividirán en **3** categorías. Cada categoría determina el peso de su voto, el cual se define mediante un multiplicador.

* **Categoría 1**: todos los autores de frases hasta **2020 inclusive**. Multiplicador: **1**
* **Categoría 2**: todas las personas que sepan de la existencia de **antemano** y/o hayan presenciado regularmente el acto autista de las frases. Multiplicador: **0,5**
* **Categoría 3**: todas las personas que no entran en las anteriores categorías y por alguna extraña razón tienen una cuenta habilitada. Multiplicador: **0,2**

El multiplicador funciona de una forma bastante simple: multiplica al valor original del voto.
**Por ejemplo**, en Fase de Grupos donde los votos son: **2** para el primero y **1** para el segundo, aplicando el multiplicador de cada categoría los votos reales terminan siendo:

* **Categoría 1**:  **2** para el primero, **1** para el segundo.
* **Categoría 2**: **1** para el primero, **0,5** para el segundo.
* **Categoría 3**:  **0,4** para el primero, **0,2** para el segundo.

**Lo mismo se aplica en el resto de las fases.**

Las categorías y habilitaciones serán asignadas en base a lo aquí descrito, y no debería haber mucho margen de error, pero en caso de considerar incorrecta la asignación, se podrá solicitar una revisión al **Comité de las Frases.**

## Notas Varias
---------------
* Toda esta wea esta hosteada sin poner un peso, por lo que puede que su rendimiento no sea optimo, en caso de ponerse muy rancio se procederá a gatillar.
* De encontrarse un error comunicarselo a Pérez.
* La experiencia posiblemente sea una mierda desde el celular. Se recomienda usar PC.
