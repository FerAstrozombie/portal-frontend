export class Paciente {
    nombre = "";
    apellido = "";
    dni = "";
    email = "";
    direccion = "";
    codigoPostal = "";
    fechaNacimiento = "";
    nacionalidad = "";
    cobertura = "";

    constructor(nombre, apellido, dni, email, direccion, codigoPostal, fechaNacimiento, nacionalidad, cobertura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.direccion = direccion;
        this.codigoPostal = codigoPostal;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
        this.cobertura = cobertura;
    }
}