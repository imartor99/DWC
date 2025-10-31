import db  from '../json/db.json' with {type: 'json'};


function combinarEstudiantesYCursos(db) {
    const arrayComb = [];
    arrayComb = arrayComb.concat(db.students);
    arrayComb = arrayComb.concat(db.courses)

    return arrayComb;
        
}

//Misma funcion pero con spread operator
function combinarEstudiantesYCursos2(db) {
    return [...db.students, ...db.courses];
}

// Funcion que recibe db e idAlumno y devuelve un array de id de cursos en los que el alumno esta matriculado
function devuelveCursosAlumno (db,idAlumno){

    return db.enrollments.filter(({studentId}) => studentId == idAlumno)
        .map(({courseId}) => courseId);
    
}

// Funcion como la anterior pero que devuelva un objeto con el id alumno, enrollmentDate y completed como atributos
function devuelveCursosAlumnos2(db, idAlumno){
       return db.enrollments.filter(({studentId}) => studentId == idAlumno)
        .map(({courseId, enrollmentDate, completed}) => ({courseId, enrollmentDate, completed}));
}

//Funcion para ordenar los enrollments por enrollmentDate(String) teniendo en cuenta que lo quiero como fecha

function ordenaFechaMatriculacion(db){
    return db.enrollments.sort((a,b) => new Date (a.enrollmentDate) - new Date (b.enrollmentDate));
}

//FUncion que reciba el id del alumno y me muestre los cursos en los que esta matriculado


/**
 * main12.js    
 */
(function (){
    console.log("Hola desde main12.js");
    console.log("Cargando datos desde JSON...");
    console.log(db);
    console.log("Estudiantes",db.students);
    console.log("Cursos",db.courses);
    console.log("Enrollments",db.enrollments);

    console.log("Array combinado alumnos y cursos con spread operator: ", combinarEstudiantesYCursos2(db));

    console.log("Cursos en los que esta matriculado el alumno con id 1: ", devuelveCursosAlumno(db, 1));

    console.log("Cursos en los que esta matriculado el alumno id 1 y algunos de sus datos: ", devuelveCursosAlumnos2(db, 1));

    console.log("Enrollments ordenados por enrollmentDate: ", ordenaFechaMatriculacion(db));
    
})();