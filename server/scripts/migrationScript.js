import Promise from "bluebird";
import mysql from "mysql";
import _ from "lodash";

const fs = Promise.promisifyAll(require("fs"));

const connection = Promise.promisifyAll(mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'pbstuff'
}));
 
connection.connect();
 
connection.queryAsync(`
    SELECT frase, aclaracion, votos, fanio, destacada, an.anio, an.votosMaximos, a.nombre AS "autor"
    FROM frases_frase f
    INNER JOIN frases_anio AS an ON f.anio_id = an.id
    INNER JOIN frases_autor AS a ON f.autor_id = a.id
    WHERE pergamino = false AND an.id < 11
   `)
  .map(frase => toFraseDocument(frase), { concurrency: 20 })
  .then(frases => fs.writeFileAsync("frases.json", JSON.stringify(frases)))
  .then(() => connection.end());

const toFraseDocument = (frase) => {
  const fraseDoc = _(frase).omit(["votosMaximos", "votos"]).omitBy(_.isEmpty).value();
  const coeficienteAutista = parseFloat((frase.votos / frase.votosMaximos).toFixed(2));
  console.log(`Processing: ${frase.frase} - ${frase.autor} (${frase.anio}) [${coeficienteAutista}]`);
  return { ...fraseDoc, coeficienteAutista }

}