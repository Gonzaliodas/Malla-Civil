// Créditos oficiales de cada ramo
const creditos = {
  'fundamentos1': 3,
  'quimica': 3,
  'biologia': 6,
  'mate': 2,
  'fisica': 2,
  'educacion1': 4,
  'cs_sociales1': 6,
  'cfg1': 2,
  'ingles1': 3,
  'saludcom1': 4,
  'bioquimica': 3,
  'biodesarrollo': 4,
  'fisiologia': 4,
  'anatomia': 5,
  'histologia': 3,
  'integracion1': 2,
  'cfg2': 2,
  'ingles2': 3,
  'fundamentos2': 4,
  'obstetricia1': 4,
  'neonatologia1': 4,
  'fisiologia_sis': 5,
  'inmunologia': 3,
  'agentes': 3,
  'cs_sociales2': 5,
  'ingles3': 3,
  'neonatologia2': 3,
  'obstetricia2': 3,
  'gineco1': 5,
  'fisiopato': 5,
  'infectologia': 3,
  'farmacologia': 4,
  'integracion2': 3,
  'investigacion1': 3,
  'clinica_neonatal1': 5,
  'clinica_partos1': 5,
  'clinica_ap1': 5,
  'clinica_puerperio': 5,
  'clinica_saludcom': 4,
  'modulo1': 4,
  'neonatologia3': 4,
  'saludcom2': 6,
  'obstetricia_pat': 4,
  'gestion1': 4,
  'educacion2': 3,
  'investigacion2': 5,
  'cs_sociales3': 4,
  'cfg3': 2,
  'enfermeria_mq': 6,
  'reproduccion': 2,
  'gineco_pat': 5,
  'gestion2': 5,
  'investigacion3': 6,
  'cs_sociales4': 4,
  'clinica_neonatal2': 5,
  'clinica_partos2': 4,
  'clinica_ap2': 5,
  'alto_riesgo': 4,
  'clinica_mq': 4,
  'modulo2': 5,
  'seminario1': 2,
  'internado_neonatologia': 10,
  'internado_obstetricia': 10,
  'internado_ap': 10,
  'internado_gineco': 10,
  'internado_electivo': 15,
  'seminario2': 3,
  'ingles4': 3,
  'internado_electivo1': 15
};

// Prerrequisitos de cada ramo (ramos que deben estar aprobados para desbloquear este)
const prerequisitos = {
    'ingles2': ['ingles1'],
    'ingles3': ['ingles2'],
    'ingles4': ['ingles3'],
    'calculo_ing2': ['calculo_ing1'],
    'algebra_ing2': ['algebra_ing1'],
    'fisica_ing2': ['fisica_ing1'],
    'programacion_ing': ['diseno_ing'],
    'analisis_obras': ['calculo_ing1'],

    'calculo_ing3': ['calculo_ing2'],
    'diferencial_ing': ['calculo_ing2', 'algebra_ing2'],
    'fundeco_ing': ['calculo_ing1'],
    'estatica_aplicada': ['fisica_ing2'],
    'herramienta_computacional1': ['programacion_ing'],

    'taller_diseno': ['fundeco_ing'],
    'analisis_estructural': ['estatica_aplicada', 'diferencial_ing'],
    'materiales_ing': ['ingles2', 'calculo_ing2','algebra_ing2', 'fisica_ing2','programacion_ing','analisis_obras'],
    'topografia': ['herramienta_computacional1'],
    'ciencias_ambientales': ['ingles2', 'calculo_ing2','algebra_ing2', 'fisica_ing2','programacion_ing','analisis_obras'],   

    'mecanica_fluido': ['ciencias_ambientales'],
    'tecnologia_hormigon': ['materiales_ing'],
    'mecanica_solido': ['analisis_estructural'],
    'edificacion': ['topografia'],
    'taller_integracion1': ['ingles4', 'taller_diseno','analisis_estructural', 'materiales_ing','topografia','ciencias_ambientales'],   

    'hidraulica': ['mecanica_fluido'],
    'ing_sismica': ['mecanica_solido'],
    'investigacion_operacion': ['ingles4', 'taller_diseno','analisis_estructural', 'materiales_ing','topografia','ciencias_ambientales'],   
    'mecanica_suelo1': ['edificacion'],
    'ingles_profesional1': ['ingles4'],
    'herramienta_computacional2': ['edificacion'],

    'hidrologia_aplicada': ['hidraulica'],
    'hormigon_armado1': ['ing_sismica', 'mecanica_suelo1'],
    'estructura_acero': ['ing_sismica'],
    'mecanica_suelo2': ['mecanica_suelo1'],
    'taller_integracion2': ['hidraulica', 'mecanica_suelo1', 'herramienta_computacional2'],

    'agua_alcantarillado': ['hidrologia_aplicada'],
    'topico_especialidad1': ['hidraulica', 'ing_sismica','investigacion_operacion', 'mecanica_suelo1','ingles_profesional1','herramienta_computacional2'],   
    'hormigon_armado2': ['hormigon_armado1'],
    'diseno_camino': ['mecanica_suelo2'],
    'ingles_profesional2': ['ingles_profesional1'],
    'evaluacion_proyecto': ['taller_integracion2'],

    'admin_obra': ['evaluacion_proyecto'],
    'topico_especialidad2': ['hidrologia_aplicada','hormigon_armado1', 'estructura_acero','mecanica_suelo2','taller_integracion2'],   
    'ingenieria_vial': ['diseno_camino'],
    'planificacion_proyecto': ['evaluacion_proyecto'],
    'topico_especialidad3': ['hidrologia_aplicada','hormigon_armado1', 'estructura_acero','mecanica_suelo2','taller_integracion2'],   
    'electivo1': ['hidrologia_aplicada','hormigon_armado1', 'estructura_acero','mecanica_suelo2','taller_integracion2'],   

    'seminario_titulacion': ['admin_obra', 'topico_especialidad2','ingenieria_vial', 'planificacion_proyecto','topico_especialidad3','electivo1'],   
    'direccion_empresa': ['admin_obra'],
    'topico_especialidad4': ['agua_alcantarillado', 'topico_especialidad1','hormigon_armado2', 'diseno_camino','ingles_profesional2','evaluacion_proyecto'],   
    'ambiental_ocupacional': ['agua_alcantarillado'],
    'taller_integracion3': ['estructura_acero', 'mecanica_suelo2','hormigon_armado2'],   
    'electivo2': ['agua_alcantarillado', 'topico_especialidad1','hormigon_armado2', 'diseno_camino','ingles_profesional2','evaluacion_proyecto'],   

    'trabajo_titulacion': ['seminario_titulacion', 'direccion_empresa','topico_especialidad4', 'ambiental_ocupacional','taller_integracion3','electivo2'],   



 
};

// Funciones para guardar y cargar progreso en localStorage
function obtenerAprobados() {
  const data = localStorage.getItem('mallaAprobados');
  return data ? JSON.parse(data) : [];
}   

function guardarAprobados(aprobados) {
  localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
}

// Calcula el total de créditos de ramos aprobados
function calcularCreditosAprobados() {
  const aprobados = obtenerAprobados();
  return aprobados.reduce((sum, ramo) => sum + (creditos[ramo] || 0), 0);
}

// Actualiza qué ramos están desbloqueados o bloqueados según prerrequisitos y créditos especiales
function actualizarDesbloqueos() {
  const aprobados = obtenerAprobados();
  const totalCreditos = calcularCreditosAprobados();

  for (const [destino, reqs] of Object.entries(prerequisitos)) {
    const elem = document.getElementById(destino);
    if (!elem) continue;

    // Verificar si se cumplen prerrequisitos normales
    let puedeDesbloquear = reqs.every(r => aprobados.includes(r));

    // Reglas especiales con créditos para ciertos módulos
    if (destino === 'modulo1') {
      puedeDesbloquear = totalCreditos >= 90;
    }
    if (destino === 'modulo2') {
      puedeDesbloquear = aprobados.includes('modulo1') && totalCreditos >= 170;
    }
    if (destino === 'internado_electivo' || destino === 'internado_electivo1') {
      puedeDesbloquear = totalCreditos >= 240;
    }

    if (!elem.classList.contains('aprobado')) {
      if (puedeDesbloquear) elem.classList.remove('bloqueado');
      else elem.classList.add('bloqueado');
    } else {
      // Si está aprobado, no debe estar bloqueado
      elem.classList.remove('bloqueado');
    }
  }
}

// Maneja el clic para aprobar o desaprobar un ramo (solo si no está bloqueado)
function aprobar(e) {
  const ramo = e.currentTarget;
  if (ramo.classList.contains('bloqueado')) return;

  ramo.classList.toggle('aprobado');

  const aprobados = obtenerAprobados();
  if (ramo.classList.contains('aprobado')) {
    if (!aprobados.includes(ramo.id)) aprobados.push(ramo.id);
  } else {
    const idx = aprobados.indexOf(ramo.id);
    if (idx > -1) aprobados.splice(idx, 1);
  }
  guardarAprobados(aprobados);

  actualizarDesbloqueos();
}

// Al cargar la página, asignar eventos, cargar progreso y actualizar desbloqueos
window.addEventListener('DOMContentLoaded', () => {
  const todosRamos = document.querySelectorAll('.ramo');

  const aprobados = obtenerAprobados();
  todosRamos.forEach(ramo => {
    if (aprobados.includes(ramo.id)) {
      ramo.classList.add('aprobado');
    }
  });

  todosRamos.forEach(ramo => {
    ramo.addEventListener('click', aprobar);
  });

  actualizarDesbloqueos();
});







document.getElementById("clearButton").addEventListener("click", () => {

    // 1. Quitar todos los colores de aprobado
    document.querySelectorAll(".ramo").forEach(ramo => {
        ramo.classList.remove("aprobado");
    });

    // 2. Bloquear TODOS los ramos primero
    document.querySelectorAll(".ramo").forEach(ramo => {
        ramo.classList.add("bloqueado");
    });

    // 3. Dejar SEMANA 1 como ramos base (desbloqueados)
    const semana1 = [
        "ingles1",
        "calculo_ing1",
        "algebra_ing1",
        "fisica_ing1",
        "diseno_ing"
    ];

    semana1.forEach(id => {
        const ramo = document.getElementById(id);
        if (ramo) {
            ramo.classList.remove("bloqueado");
        }
    });

    // 4. Borrar estado almacenado, si usas localStorage
    localStorage.removeItem("mallaAprobados");
});
