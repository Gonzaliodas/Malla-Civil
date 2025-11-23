/* script.js - malla interactiva con desbloqueo automático y localStorage */

/* ========== Datos de ramos ========== 
   Lista con { id: "10130", code, name, level }
   He incluido todos los ramos que enviaste y los ubiqué en niveles (best effort).
   La detección de prerequisitos se hace automáticamente para cadenas "BASE ... I/II/III/IV".
*/
const courses = [
  // NIVEL 1
  { id: "10130", code: "10130", name: "INGLÉS I", level: 1 },
  { id: "10138", code: "10138", name: "CÁLCULO I PARA INGENIERÍA", level: 1 },
  { id: "10139", code: "10139", name: "ÁLGEBRA I PARA INGENIERÍA", level: 1 },
  { id: "10140", code: "10140", name: "FÍSICA I PARA INGENIERÍA", level: 1 },
  { id: "10141", code: "10141", name: "INTRODUCCIÓN AL DISEÑO EN INGENIERÍA", level: 1 },

  // NIVEL 2
  { id: "10131", code: "10131", name: "INGLÉS II", level: 2 },
  { id: "10142", code: "10142", name: "CÁLCULO II PARA INGENIERÍA", level: 2 },
  { id: "10143", code: "10143", name: "ÁLGEBRA II PARA INGENIERÍA", level: 2 },
  { id: "10144", code: "10144", name: "FÍSICA II PARA INGENIERÍA", level: 2 },
  { id: "10145", code: "10145", name: "FUNDAMENTOS DE PROGRAMACIÓN PARA INGENIERÍA", level: 2 },

  // NIVEL 3
  { id: "10132", code: "10132", name: "INGLÉS III", level: 3 },
  { id: "10146", code: "10146", name: "CÁLCULO III PARA INGENIERÍA", level: 3 },
  { id: "10155", code: "10155", name: "ECUACIONES DIFERENCIALES PARA INGENIERÍA", level: 3 },
  { id: "10157", code: "10157", name: "FUNDAMENTOS DE ECONOMÍA PARA INGENIERÍA", level: 3 },
  { id: "18501", code: "18501", name: "ESTÁTICA APLICADA", level: 3 },

  // NIVEL 4
  { id: "10133", code: "10133", name: "INGLÉS IV", level: 4 },
  { id: "10148", code: "10148", name: "TALLER DE DISEÑO EN INGENIERÍA", level: 4 },
  { id: "18504", code: "18504", name: "ANÁLISIS ESTRUCTURAL", level: 4 },
  { id: "18505", code: "18505", name: "MATERIALES DE INGENIERÍA", level: 4 },
  { id: "18506", code: "18506", name: "TOPOGRAFÍA", level: 4 },

  // NIVEL 5
  { id: "18508", code: "18508", name: "MECÁNICA DE FLUIDOS", level: 5 },
  { id: "18509", code: "18509", name: "TECNOLOGÍA DEL HORMIGÓN", level: 5 },
  { id: "18510", code: "18510", name: "MECÁNICA DE SÓLIDOS", level: 5 },
  { id: "18511", code: "18511", name: "EDIFICACIÓN", level: 5 },
  { id: "18512", code: "18512", name: "TALLER DE INTEGRACIÓN I", level: 5 },

  // NIVEL 6
  { id: "18513", code: "18513", name: "HIDRÁULICA", level: 6 },
  { id: "18514", code: "18514", name: "INGENIERÍA SÍSMICA", level: 6 },
  { id: "18515", code: "18515", name: "INVESTIGACIÓN DE OPERACIONES", level: 6 },
  { id: "18516", code: "18516", name: "MECÁNICA DE SUELOS I", level: 6 },
  { id: "18517", code: "18517", name: "TALLER DE INTEGRACIÓN II", level: 6 },

  // NIVEL 7
  { id: "18519", code: "18519", name: "HIDROLOGÍA APLICADA", level: 7 },
  { id: "18520", code: "18520", name: "DISEÑO EN HORMIGÓN ARMADO I", level: 7 },
  { id: "18521", code: "18521", name: "DISEÑO DE ESTRUCTURAS DE ACERO", level: 7 },
  { id: "18522", code: "18522", name: "MECÁNICA DE SUELOS II", level: 7 },
  { id: "18523", code: "18523", name: "INGLÉS PROFESIONAL I", level: 7 },

  // NIVEL 8
  { id: "18524", code: "18524", name: "REDES DE AGUA POTABLE Y ALCANTARILLADO", level: 8 },
  { id: "18525", code: "18525", name: "TÓPICO DE ESPECIALIDAD I", level: 8 },
  { id: "18526", code: "18526", name: "DISEÑO EN HORMIGÓN ARMADO II", level: 8 },
  { id: "18527", code: "18527", name: "DISEÑO DE CAMINOS", level: 8 },
  { id: "18528", code: "18528", name: "TALLER DE INTEGRACIÓN III", level: 8 },

  // NIVEL 9
  { id: "18530", code: "18530", name: "ADMINISTRACIÓN DE OBRAS", level: 9 },
  { id: "18531", code: "18531", name: "TÓPICO DE ESPECIALIDAD II", level: 9 },
  { id: "18532", code: "18532", name: "INGENIERÍA VIAL", level: 9 },
  { id: "18533", code: "18533", name: "PLANIFICACIÓN DE PROYECTOS", level: 9 },
  { id: "18534", code: "18534", name: "INGLÉS PROFESIONAL II", level: 9 },

  // NIVEL 10
  { id: "18536", code: "18536", name: "SEMINARIO DE TÍTULACIÓN", level: 10 },
  { id: "18537", code: "18537", name: "DIRECCIÓN DE EMPRESA", level: 10 },
  { id: "18538", code: "18538", name: "TÓPICO DE ESPECIALIDAD IV", level: 10 },
  { id: "18539", code: "18539", name: "GESTIÓN AMBIENTAL Y OCUPACIONAL", level: 10 },
  { id: "18540", code: "18540", name: "TÓPICO DE ESPECIALIDAD III", level: 10 },

  // NIVEL 11 / CULMINACIÓN
  { id: "18542", code: "18542", name: "TRABAJO DE TITULACIÓN", level: 11 },
  { id: "18541", code: "18541", name: "ELECTIVO II", level: 11 },
  { id: "18535", code: "18535", name: "ELECTIVO I", level: 11 },
  { id: "18543", code: "18543", name: "ANÁLISIS ESTADÍSTICO PARA OBRAS", level: 11 },
  { id: "18529", code: "18529", name: "EVALUACIÓN DE PROYECTOS", level: 11 }
];

/* ---------- Utilities ---------- */

const STORAGE_KEY = "malla_state_v1";

/* detect roman suffix like ' I', ' II', ' III', ' IV' at end of name and return {base, roman} */
function parseRomanSuffix(name){
  const m = name.trim().toUpperCase().match(/^(.*?)(?:\s+([IVX]+))\s*$/);
  if(m){
    return { base: m[1].trim(), roman: m[2].trim() };
  }
  // also match "I PARA INGENIERÍA" -> consider "I" presence at end before extra words
  const m2 = name.trim().toUpperCase().match(/^(.*?)(I|II|III|IV)\s+(PARA|DE|EN)\b/);
  if(m2){
    return { base: (m2[1] + " " + m2[3]).trim(), roman: m2[2].trim() };
  }
  return { base: name.trim().toUpperCase(), roman: null };
}

/* Build a dictionary by id */
const byId = {};
courses.forEach(c => byId[c.id] = { ...c });

/* Build prereq relations automatically for sequences with roman numerals */
function buildPrereqs(list){
  // map by normalized base -> array of {id, romanOrder}
  const groups = {};
  for(const c of list){
    const parsed = parseRomanSuffix(c.name);
    const base = parsed.base;
    const roman = parsed.roman;
    if(roman){
      // roman to number
      const romanMap = { "I":1, "II":2, "III":3, "IV":4, "V":5 };
      const order = romanMap[roman] || 0;
      if(!groups[base]) groups[base] = [];
      groups[base].push({ id: c.id, order, name: c.name });
    }
  }
  // create prereqs where appropriate: item with order n has prereq item with order n-1 in same base
  const prereqMap = {};
  for(const base in groups){
    const arr = groups[base].sort((a,b)=>a.order - b.order);
    for(let i=1;i<arr.length;i++){
      const prev = arr[i-1].id;
      const curr = arr[i].id;
      if(!prereqMap[curr]) prereqMap[curr] = new Set();
      prereqMap[curr].add(prev);
    }
  }
  // return as object of arrays
  const result = {};
  for(const id in byId) result[id] = [];
  for(const k in prereqMap) result[k] = Array.from(prereqMap[k]);
  return result;
}

const prereqAuto = buildPrereqs(courses);

/* Create full course state (status: locked|pendiente|cursando|aprobado, prereqs array, enabled) */
function initState(){
  const state = {};
  for(const c of courses){
    const prereqs = prereqAuto[c.id] || [];
    state[c.id] = {
      id: c.id,
      code: c.code,
      name: c.name,
      level: c.level,
      prereqs,
      status: prereqs.length ? "locked" : "pendiente"  // if has prereqs start locked, else pendiente
    };
  }
  // But ensure level 1 courses without prereqs are pendiente (done).
  return state;
}

/* Load or create */
function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw){
    try{
      const parsed = JSON.parse(raw);
      // Merge with current course list (in case of updates)
      const base = initState();
      for(const id in base){
        if(parsed[id]){
          base[id] = { ...base[id], ...parsed[id] };
        }
      }
      return base;
    }catch(e){
      console.warn("Error parsing storage, resetting.");
      return initState();
    }
  } else return initState();
}

/* Save */
function saveState(state){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/* Check for unlocks: when a course is approved, any course where all prereqs are aprobado -> set pendiente */
function refreshUnlocks(state){
  let changed = false;
  for(const id in state){
    const c = state[id];
    if(c.status === "locked"){
      // if all prereqs exist and are aprobado
      const allOk = c.prereqs.length === 0 || c.prereqs.every(pid => state[pid] && state[pid].status === "aprobado");
      if(allOk){
        c.status = "pendiente";
        changed = true;
      }
    }
  }
  if(changed) saveState(state);
}

/* Approve a course */
function approveCourse(state, id){
  const c = state[id];
  if(!c) return;
  // only approve if not locked
  if(c.status === "locked") return;
  c.status = "aprobado";
  // after approving, attempt to unlock others
  refreshUnlocks(state);
  saveState(state);
}

/* Toggle cursando/pendiente - optional */
function toggleCursando(state, id){
  const c = state[id];
  if(!c || c.status === "locked") return;
  if(c.status === "cursando") c.status = "pendiente";
  else if(c.status === "pendiente") c.status = "cursando";
  saveState(state);
}

/* Reset all */
function resetAll(){
  if(!confirm("¿Seguro que quieres reiniciar todo? Esto eliminará lo aprobado.")) return;
  const state = initState();
  saveState(state);
  render(state);
}

/* Export state as JSON file */
function exportStateFile(state){
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "malla_estado.json";
  a.click();
  URL.revokeObjectURL(url);
}

/* Import state from file */
function importStateFile(file){
  const reader = new FileReader();
  reader.onload = e => {
    try{
      const parsed = JSON.parse(e.target.result);
      // minimal validation: must be object with ids
      if(typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Formato inválido.");
      const base = initState();
      for(const id in base){
        if(parsed[id] && parsed[id].status) base[id].status = parsed[id].status;
      }
      saveState(base);
      render(base);
      alert("Estado importado correctamente.");
    }catch(err){
      alert("Error importando archivo: " + err.message);
    }
  };
  reader.readAsText(file);
}

/* ---------- Rendering ---------- */

function render(stateArg){
  const state = stateArg || loadState();
  // ensure unlock rules
  refreshUnlocks(state);

  const levelsContainer = document.getElementById("levels");
  levelsContainer.innerHTML = "";

  // determine number of levels (max level in data)
  const maxLevel = Math.max(...courses.map(c=>c.level));

  for(let lvl=1; lvl<=maxLevel; lvl++){
    const col = document.createElement("div");
    col.className = "level-col";
    const header = document.createElement("div");
    header.className = "level-header";
    header.innerText = `NIVEL ${lvl}`;
    col.appendChild(header);

    // courses in this level
    const list = courses.filter(c=>c.level===lvl);
    if(list.length === 0){
      const empty = document.createElement("div");
      empty.className = "course small";
      empty.innerHTML = `<div class="name">—</div><div class="meta small">Sin ramos</div>`;
      col.appendChild(empty);
    } else {
      for(const c of list){
        const s = state[c.id];
        const card = document.createElement("div");
        card.className = "course";
        if(s.status === "locked") card.classList.add("locked");
        const codeEl = document.createElement("div");
        codeEl.className = "code";
        codeEl.innerText = s.code;
        const nameEl = document.createElement("div");
        nameEl.className = "name";
        nameEl.innerText = s.name;
        const meta = document.createElement("div");
        meta.className = "meta";
        meta.innerText = s.prereqs.length ? `Requisito(s): ${s.prereqs.join(", ")}` : "Sin requisito";

        // status badge
        const status = document.createElement("div");
        status.className = "status " + (s.status === "locked" ? "locked" : s.status === "pendiente" ? "pendiente" : s.status === "cursando" ? "cursando" : "aprobado");
        status.innerText = s.status === "locked" ? "BLOQUEADO" : s.status.toUpperCase();

        // actions
        const actions = document.createElement("div");
        actions.className = "card-actions";

        const btnApprove = document.createElement("button");
        btnApprove.className = "btn approve";
        btnApprove.innerText = "Se aprueba el ramo";
        btnApprove.title = "Aprobar ramo";
        btnApprove.disabled = (s.status === "locked" || s.status === "aprobado");
        btnApprove.onclick = () => {
          approveCourse(state, s.id);
          render(state);
        };

        const btnToggle = document.createElement("button");
        btnToggle.className = "btn";
        btnToggle.innerText = s.status === "cursando" ? "Marcar pendiente" : "Marcar cursando";
        btnToggle.disabled = (s.status === "locked" || s.status === "aprobado");
        btnToggle.onclick = () => {
          toggleCursando(state, s.id);
          render(state);
        };

        const btnReset = document.createElement("button");
        btnReset.className = "btn";
        btnReset.style.minWidth = "42px";
        btnReset.innerText = "Reset";
        btnReset.title = "Volver a pendiente (si no quieres aprobado)";
        btnReset.onclick = () => {
          if(confirm("¿Volver este ramo a 'pendiente'? Esto no quitará aprobaciones de ramos que dependen de éste.")){
            // only allow reset if not locked
            if(s.prereqs.length && s.prereqs.some(pid => state[pid] && state[pid].status !== "aprobado")){
              // if prereqs not satisfied, set locked
              state[s.id].status = "locked";
            } else {
              state[s.id].status = "pendiente";
            }
            saveState(state);
            render(state);
          }
        };

        actions.appendChild(btnApprove);
        actions.appendChild(btnToggle);
        actions.appendChild(btnReset);

        card.appendChild(codeEl);
        card.appendChild(nameEl);
        card.appendChild(meta);
        card.appendChild(status);
        card.appendChild(actions);

        col.appendChild(card);
      }
    }
    levelsContainer.appendChild(col);
  }
}

/* ---------- Init UI ---------- */

document.addEventListener("DOMContentLoaded", () => {
  const state = loadState();
  render(state);

  document.getElementById("resetAll").onclick = resetAll;
  document.getElementById("exportState").onclick = () => exportStateFile(loadState());
  document.getElementById("importState").onclick = () => document.getElementById("importInput").click();
  document.getElementById("importInput").addEventListener("change", (e)=>{
    const f = e.target.files?.[0];
    if(f) importStateFile(f);
    e.target.value = "";
  });
});
