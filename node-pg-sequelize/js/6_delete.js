const db = require('./_database')

async function deleteParticipanteFromEvento(idParticipante, idEvento)
{

    await db.connect()
   
    await db.query(`
    DELETE FROM evento_participante AS ep
    WHERE ep.evento_id = 1 AND ep.participante_id = 1
    
    `)

    console.log("Participante deletado do evento");
}

deleteParticipanteFromEvento()

/*
Tirar Carlos 
{ id: 1, nome: 'Carlos' },

do Encontro de Nodejs
 { id: 1, nome: 'Encontro de Nodejs' }
*/
