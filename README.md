# Punchbang's Stuff - Frase de la Decada
[![Build Status](https://travis-ci.org/dperezferrando/frase-de-la-decada.svg?branch=master)](https://travis-ci.org/dperezferrando/frase-de-la-decada)

Se acerca el comienzo de la votación de la **Frase de la Decada** por lo que es un buen momento para leer como garcha funciona esta cosa. Si sos como Mauro y te da paja leer esto, podes no leerlo, en cada etapa se dará la información necesaria. Sin embargo, todos los detalles van a estar acá, si después no entendes algo ~~andate a la concha de tu madre~~ no llores.


<div style="text-align: center;">

![logo](https://i.imgur.com/eDNCtkc.png)</div>

La votación se va a desarrollar como el mismísimo mundial, o en realidad, como una Champions League *(porque para la parte de eliminación directa flashie mientras programaba e hice que cada fase salga por sorteo en vez de armarse un cruce por llaves y me dio paja cambiarlo - sin suerte - )*
Para esto la votación se dividirá en las siguientes etapas:

 * Eliminatorias
 * Fase de Grupos
 * Eliminación Directa
   * Octavos de Final
   * Cuartos de Final
   * Semifinal
   * Tercer Puesto
   * Final

Cada etapa  tendrá una fecha de comienzo y una fecha de fin, durante ese periodo se va a poder votar. Al llegar a la fecha de cierre, ya nadie podrá votar y una hora mas tarde se harán públicos los resultados de dicha fase. En esa hora se valida que nada turbina haya sucedió y se procede a ejecutar los algoritmos mágicos que sortean la siguiente fase.
La cantidad de frases que se votan en cada etapa y el valor de cada voto depende de la etapa misma

## Eliminatorias
En esta fase participan las **437** frases del periodo buscando un lugar dentro de las **32** que van a clasificar a la Fase de Grupos, sin embargo, las **7** Frases del Año ya están **clasificadas** a la Fase de Grupos como **Cabezas de Serie** , por lo que cada votante solo deberá elegir **25** frases que las acompañen.
Para elegir las restantes frases el votante tendrá a disposición filtros por año y por autor, ademas de un buscador de texto *(que es sensible a tildes y no todas las frases tienen los tildes que deberían - sin suerte nuevamente -)*.
La selección  deberá cumplir las siguientes restricciones (contando siempre a las frases ya clasificadas):
* Mínimo tiene que haber **3** frases de cada año *(Para asegurar la participación de cada año - hiper comunista, perdón)*
* Puede haber máximo **10** frases de un autor en particular. *(Para que gente como Yerman no vote solamente sus frases)*

 En el caso de que seas como Mauro y te de paja hacer esto, hay un botón mágico que soluciona dicha problemática al cargar una selección random (y modificable) de frases. A pesar de esto, es importante recalcar que dicha herramienta debe ser usada con responsabilidad, porque dejar las cosas libradas al azar puede llevar a la clasificación de frases cancerígenas, lo cual esta perfecto (no hay que discriminar a quienes tienen cáncer) pero luego no me vengan con *"Como gano esa mierda?"* *"Quien voto esa poronga?"* *"Otra vez cagaron a Diego?"*  y demás troladas que surgen cuando votan como el orto (tuve la oportunidad de hacer un chiste político y no lo hice, de nada).
Mi recomendación es que os toméis un tiempo para recorrer los cromosomas de todos estos años para llegar a una buena selección, especialmente si estuvisteis presente durante todos los años. La preselección random puede ser un buen punto de partida si es modificada.

Cada frase en la selección del votante recibirá **1** voto, las **7** Frases del Año sumadas las **25** frases mas votadas, serán clasificadas a la siguiente fase.

## Fase de Grupos
Una vez definidos las 32 frases clasificadas se sortearan los **8** grupos con **4** frases cada uno. Cada Frase del Año, acompañadas por la frase que les siga en cantidad de votos, seran cabezas de serie.
El resto de las frases se repartiran en cada grupo de forma aleatoria cumpliendo las siguientes restricciones:
* No puede haber mas de **2** frases del mismo año en un grupo.
* No puede haber mas de **2** frases del mismo autor en un grupo.

**Nota para programadores:** *El algoritmo que hace el sorteo es tan rancio que lo unico que hace es sortear recursivamente como un hijo de re mil puta hasta que encuentra un sorteo que cumpla ambas restricciones. Increiblemente lo encuentra rapido, por lo que su ineficiencia se me hace irrelevante.*

En el periodo de votacion, cada participante debera elegir por cada grupo sus dos frases preferidas. La primer posicion recibe **2** votos mientras que la segunda posicion recibe **1** voto. Al final del periodo, clasifican los dos primero de cada grupo, teniendo en cuenta los criterios de desempate.

## Eliminacion Directa

## PREMIOS ??

## HABILITACION DE CUENTAS

## Aclaraciones Varias
* posibleas fallas tecnicas, free tier
* no recomendable en celular






**Criterios de Desempate**
En caso de igualdad en votos, los siguientes criterios se tendrán en cuenta para determinar que frase le gana a otra:
* **Coeficiente Autista (CA)**: pasa la que tiene mayor coeficiente *(Recordatorio: el CA es un promedio de la cantidad de personas que eligieron la frase como su primer opción en correspondiente votación para Frase del Año)*
* **Año**: la frase mas antigua pasa. Se considera que frases mas modernas van a ser ponderadas por los votantes por su cercanía temporal, por lo que en caso de empate se prioriza las viejas joyitas.
* **Random**: Se estima que no se va a llegar a este punto, pero si sucede, se quedara la frase que haya elegido el sistema.

