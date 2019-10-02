const db = require('./_database')

async function changeParticipanteName(id, newName)
{

    await db.connect()

    const queryChange = "UPDATE participante SET nome = ($1) WHERE id = ($2)"

    await db.query(queryChange, [newName, id])

    //await db.query("UPDATE participante SET nome = 'Carlos Augusto' WHERE id = 2");

    console.log("Nome alterado");
}

changeParticipanteName(2, 'Carlos Augusto');

//changeParticipanteName();