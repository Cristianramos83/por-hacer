const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Estado de la tarea por hacer'
};




const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('listar', 'Mostrar todas las tareas por hacer')
    .command('actualizar', 'Modificar una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}