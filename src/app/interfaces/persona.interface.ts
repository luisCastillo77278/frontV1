export interface Personas {
  persona: Persona[];
}

export interface Persona {
  id: number;
  nombre: string;
  apellidoP: string;
  apellidoM: string;
  correo: string;
  telefono: string;
  numReg: string;
  createdAt: string;
  updatedAt: string;
}