// ============================================================
//  SCRIPT PRINCIPAL - Juego de Tablero Glándulas Exocrinas
// ============================================================

const TIEMPO_DADO = 500;
const TIEMPO_BASE = 35; // segundos por pregunta

// 30 casillas de juego + inicio + final = 32 total
const CASILLAS_CONFIG = [
  { tipo: 'inicio',    etiqueta: '🏁 INICIO',    color: '#22C55E' },
  { tipo: 'q200',      etiqueta: '200 pts',       color: '#38BDF8' },
  { tipo: 'q500',      etiqueta: '500 pts',       color: '#FB923C' },
  { tipo: 'q500',      etiqueta: '500 pts',       color: '#FB923C' },
  { tipo: 'q1000',     etiqueta: '1000 pts',      color: '#F87171' },
  { tipo: 'castigo',   etiqueta: '💀 CASTIGO',    color: '#C084FC' },
  { tipo: 'beneficio', etiqueta: '⭐ BENEFICIO',  color: '#FBBF24' },
  { tipo: 'q1000',     etiqueta: '1000 pts',      color: '#F87171' },
  { tipo: 'q500',      etiqueta: '500 pts',       color: '#FB923C' },
  { tipo: 'q200',      etiqueta: '200 pts',       color: '#38BDF8' },
  { tipo: 'q1000',     etiqueta: '1000 pts',      color: '#F87171' },
  { tipo: 'beneficio', etiqueta: '⭐ BENEFICIO',  color: '#FBBF24' },
  { tipo: 'q500',      etiqueta: '500 pts',       color: '#FB923C' },
  { tipo: 'castigo',   etiqueta: '💀 CASTIGO',    color: '#C084FC' },
  { tipo: 'q200',      etiqueta: '200 pts',       color: '#38BDF8' },
  { tipo: 'q1000',     etiqueta: '1000 pts',      color: '#F87171' },
  { tipo: 'castigo',   etiqueta: '💀 CASTIGO',    color: '#C084FC' },
  { tipo: 'q200',      etiqueta: '200 pts',       color: '#38BDF8' },
  { tipo: 'q500',      etiqueta: '500 pts',       color: '#FB923C' },
  { tipo: 'beneficio', etiqueta: '⭐ BENEFICIO',  color: '#FBBF24' },
  { tipo: 'q200',      etiqueta: '200 pts',       color: '#38BDF8' },
  { tipo: 'q1000',     etiqueta: '1000 pts',      color: '#F87171' },
  { tipo: 'castigo',   etiqueta: '💀 CASTIGO',    color: '#C084FC' },
  { tipo: 'q500',      etiqueta: '500 pts',       color: '#FB923C' },
  { tipo: 'beneficio', etiqueta: '⭐ BENEFICIO',  color: '#FBBF24' },
  { tipo: 'q1000',     etiqueta: '1000 pts',      color: '#F87171' },
  { tipo: 'q200',      etiqueta: '200 pts',       color: '#38BDF8' },
  { tipo: 'castigo',   etiqueta: '💀 CASTIGO',    color: '#C084FC' },
  { tipo: 'q500',      etiqueta: '500 pts',       color: '#FB923C' },
  { tipo: 'q1000',     etiqueta: '1000 pts',      color: '#F87171' },
  { tipo: 'beneficio', etiqueta: '⭐ BENEFICIO',  color: '#FBBF24' },
  { tipo: 'final',     etiqueta: '🏆 FINAL',      color: '#FBBF24' },
];

const GRUPOS_BASE = [
  { nombre: 'Grupo Azul',    color: '#1D4ED8', colorClaro: '#DBEAFE', emoji: '🔵' },
  { nombre: 'Grupo Rojo',    color: '#DC2626', colorClaro: '#FEE2E2', emoji: '🔴' },
  { nombre: 'Grupo Verde',   color: '#16A34A', colorClaro: '#DCFCE7', emoji: '🟢' },
  { nombre: 'Grupo Morado',  color: '#7C3AED', colorClaro: '#EDE9FE', emoji: '🟣' },
  { nombre: 'Grupo Naranja', color: '#EA580C', colorClaro: '#FFF7ED', emoji: '🟠' },
  { nombre: 'Grupo Rosa',    color: '#DB2777', colorClaro: '#FCE7F3', emoji: '🩷' },
];

let estado = {
  iniciado: false,
  turnoActual: 0,
  rondaActual: 1,
  maxRondas: 10,
  grupos: [],
  turnosTotales: 0,
  dadoBloqueado: false,
  preguntasUsadas: { 200: [], 500: [], 1000: [] },
  timerPregunta: null,
  tiempoRestante: 0,
  // para castigo transferencia eleccion
  _castigo_transferencia_valor: 0,
  bonoMetaOtorgado: false,
};

document.addEventListener('DOMContentLoaded', () => {
  renderizarConfiguracion();
  renderizarTablero();
});

// ─── CONFIG ───────────────────────────────────────────────────

function renderizarConfiguracion() {
  const cont = document.getElementById('config-grupos');
  cont.innerHTML = '';
  GRUPOS_BASE.forEach((g, i) => {
    const div = document.createElement('div');
    div.className = 'config-grupo-item';
    div.innerHTML = `<span class="config-ficha" style="background:${g.color}">${g.emoji}</span>
      <input type="text" id="nombre-grupo-${i}" value="${g.nombre}" maxlength="20" />`;
    cont.appendChild(div);
  });
}

function iniciarJuego() {
  const maxR = parseInt(document.getElementById('max-rondas').value);
  if (isNaN(maxR) || maxR < 1) { alert('Ingresa un número válido de rondas.'); return; }
  estado.maxRondas = maxR;
  estado.grupos = GRUPOS_BASE.map((g, i) => ({
    ...g,
    nombre: document.getElementById(`nombre-grupo-${i}`).value.trim() || g.nombre,
    puntos: 0, posicion: 0, estadoEspecial: null,
  }));
  estado.iniciado = true;
  estado.turnoActual = 0;
  estado.rondaActual = 1;
  estado.turnosTotales = 0;
  estado.preguntasUsadas = { 200: [], 500: [], 1000: [] };
  document.getElementById('pantalla-config').style.display = 'none';
  document.getElementById('pantalla-juego').style.display = 'flex';
  renderizarTablero();
  renderizarMarcador();
  renderizarControlMarcador();
  actualizarInfoTurno();
  registrarEvento('🎮 Juego iniciado. ¡Que comience la competencia!', 'inicio');
  document.getElementById('btn-dado').disabled = false;
}

// ─── TABLERO ──────────────────────────────────────────────────

function renderizarTablero() {
  const tablero = document.getElementById('tablero');
  tablero.innerHTML = '';
  const total = CASILLAS_CONFIG.length;
  const porFila = 8;
  const filas = Math.ceil(total / porFila);
  for (let f = 0; f < filas; f++) {
    const fila = document.createElement('div');
    fila.className = 'fila-tablero';
    const esInvertida = f % 2 !== 0;
    let casillasEnFila = [];
    for (let c = 0; c < porFila; c++) {
      const idx = f * porFila + c;
      if (idx < total) casillasEnFila.push(idx);
    }
    if (esInvertida) casillasEnFila.reverse();
    casillasEnFila.forEach(idx => {
      const conf = CASILLAS_CONFIG[idx];
      const div = document.createElement('div');
      div.className = `casilla casilla-${conf.tipo}`;
      div.id = `casilla-${idx}`;
      div.style.setProperty('--cas-color', conf.color);
      div.innerHTML = `<div class="casilla-numero">${idx}</div>
        <div class="casilla-etiqueta">${conf.etiqueta}</div>
        <div class="casilla-fichas" id="fichas-${idx}"></div>`;
      fila.appendChild(div);
    });
    tablero.appendChild(fila);
  }
  if (estado.iniciado) actualizarFichasTablero();
}

function actualizarFichasTablero() {
  document.querySelectorAll('.casilla-fichas').forEach(el => el.innerHTML = '');
  const porPos = {};
  estado.grupos.forEach((g, i) => {
    if (!porPos[g.posicion]) porPos[g.posicion] = [];
    porPos[g.posicion].push({ grupo: g, idx: i });
  });
  Object.keys(porPos).forEach(pos => {
    const cont = document.getElementById(`fichas-${pos}`);
    if (!cont) return;
    porPos[pos].forEach(({ grupo }) => {
      const ficha = document.createElement('div');
      ficha.className = 'ficha';
      ficha.title = grupo.nombre;
      ficha.style.background = grupo.color;
      ficha.textContent = grupo.emoji;
      cont.appendChild(ficha);
    });
  });
}

// ─── DADO ─────────────────────────────────────────────────────

function lanzarDado() {
  if (!estado.iniciado || estado.dadoBloqueado) return;
  estado.dadoBloqueado = true;
  document.getElementById('btn-dado').disabled = true;
  const caras = ['⚀','⚁','⚂','⚃','⚄','⚅'];
  const resultado = Math.floor(Math.random() * 6) + 1;
  const dadoEl = document.getElementById('dado-display');
  dadoEl.classList.add('animando');
  let cnt = 0;
  const iv = setInterval(() => {
    dadoEl.textContent = caras[Math.floor(Math.random() * 6)];
    cnt++;
    if (cnt >= 10) {
      clearInterval(iv);
      dadoEl.classList.remove('animando');
      dadoEl.textContent = caras[resultado - 1];
      document.getElementById('resultado-dado').textContent = `Resultado: ${resultado}`;
      registrarEvento(`🎲 ${estado.grupos[estado.turnoActual].nombre} lanzó el dado: ${resultado}`, 'dado');
      let seg = TIEMPO_DADO / 1000;
      const countEl = document.getElementById('cuenta-regresiva');
      countEl.style.display = 'block';
      countEl.textContent = `Moviendo en ${seg}s...`;
      const civ = setInterval(() => {
        seg--;
        if (seg <= 0) { clearInterval(civ); countEl.style.display = 'none'; moverFicha(resultado); }
        else countEl.textContent = `Moviendo en ${seg}s...`;
      }, 1000);
    }
  }, 80);
}

// ─── MOVIMIENTO ───────────────────────────────────────────────

function moverFicha(pasos) {
  const grupo = estado.grupos[estado.turnoActual];
  const posAnt = grupo.posicion;
  grupo.posicion = Math.min(grupo.posicion + pasos, CASILLAS_CONFIG.length - 1);
  actualizarFichasTablero();
  const casilla = CASILLAS_CONFIG[grupo.posicion];
  registrarEvento(`📍 ${grupo.nombre}: casilla ${posAnt} → ${grupo.posicion} (${casilla.etiqueta})`, 'movimiento');
  document.querySelectorAll('.casilla').forEach(el => el.classList.remove('activa'));
  document.getElementById(`casilla-${grupo.posicion}`)?.classList.add('activa');
  setTimeout(() => ejecutarCasilla(casilla, grupo), 400);
}

function ejecutarCasilla(casilla, grupo) {
if (casilla.tipo === 'final') {
  if (!estado.bonoMetaOtorgado) {
    grupo.puntos += 200;
    estado.bonoMetaOtorgado = true;
    registrarEvento(`🏁 ${grupo.nombre} llegó primero a la meta y recibió +200 pts de bonificación`, 'positivo');
    renderizarMarcador();
  }
  terminarJuego(`¡${grupo.nombre} llegó primero a la casilla final!`);
  return;
}  if (casilla.tipo === 'inicio') { finalizarTurno(); return; }
  if (casilla.tipo === 'beneficio') { mostrarModalBeneficio(grupo); return; }
  if (casilla.tipo === 'castigo') { mostrarModalCastigo(grupo); return; }
  if (['q200','q500','q1000'].includes(casilla.tipo)) {
    const val = parseInt(casilla.tipo.replace('q',''));
    mostrarModalPregunta(val, grupo, 'normal');
    return;
  }
  finalizarTurno();
}

// ─── MODAL PREGUNTA ───────────────────────────────────────────
// modoCalif: 'normal' | 'doble' | 'castigo_evitar' (correcta=sin penaliz, incorrecta=doble penaliz)

function mostrarModalPregunta(valor, grupo, modoCalif, penalizacionBase) {
  const pregunta = obtenerPregunta(valor);
  if (!pregunta) { registrarEvento(`⚠️ Sin preguntas de ${valor} pts.`, 'info'); finalizarTurno(); return; }

  let tiempo = TIEMPO_BASE;
  let notaHTML = '';
  const esp = grupo.estadoEspecial;
  if (esp) {
    if (esp.efecto.tipo === 'tiempo') tiempo = Math.max(10, tiempo + esp.efecto.valor);
    if (esp.efecto.tipo === 'pista_gratis') { setTimeout(() => mostrarPista(), 200); }
    const esB = (esp.efecto.valor > 0 || esp.efecto.tipo === 'pista_gratis' || esp.efecto.tipo === 'apuntes' || esp.efecto.tipo === 'apoyo_equipo' || esp.efecto.tipo === 'cambio_pregunta');
    notaHTML = `<div class="condicion-activa ${esB ? 'beneficio' : 'castigo'}">${esp.titulo}: ${esp.descripcion}</div>`;
  }

  if (modoCalif === 'doble') {
    notaHTML = `<div class="condicion-activa beneficio">🌟 TODO O NADA: si responde bien → +${valor * 2} pts. Si falla → 0 pts.</div>`;
  }
  if (modoCalif === 'castigo_evitar') {
    notaHTML = `<div class="condicion-activa castigo">⚠️ RESCATE: si responde bien → no pierde nada. Si falla → pierde ${penalizacionBase * 2} pts.</div>`;
  }

  document.getElementById('mp-grupo').textContent = grupo.nombre;
  document.getElementById('mp-grupo').style.color = grupo.color;
  document.getElementById('mp-valor').textContent = modoCalif === 'doble' ? `${valor * 2} pts (¡DOBLE!)` : `${valor} pts`;
  document.getElementById('mp-titulo-valor').textContent = valor;
  document.getElementById('mp-pregunta').textContent = pregunta.pregunta;
  document.getElementById('mp-pista').textContent = pregunta.pista;
  document.getElementById('mp-respuesta').textContent = pregunta.respuesta;
  document.getElementById('mp-condicion').innerHTML = notaHTML;
  document.getElementById('mp-pista-container').style.display = 'none';
  document.getElementById('mp-respuesta-container').style.display = 'none';
  document.getElementById('btn-mostrar-pista').disabled = esp && esp.efecto.tipo === 'sin_pista';

  // Calcular valores de botones según modo
  let vals = {};
  if (modoCalif === 'doble') {
    vals = { correcta: valor * 2, parcial: 0, neutra: 0, breve: 0, incorrecta: 0 };
  } else if (modoCalif === 'castigo_evitar') {
    vals = { correcta: 0, parcial: 0, neutra: 0, breve: -(penalizacionBase * 2), incorrecta: -(penalizacionBase * 2) };
  } else {
    vals = { correcta: valor, parcial: Math.floor(valor/2), neutra: 0, breve: -Math.floor(valor/2), incorrecta: -valor };
  }

  ['correcta','parcial','neutra','breve','incorrecta'].forEach(k => {
    const btn = document.getElementById(`btn-cal-${k}`);
    btn.setAttribute('data-valor', vals[k]);
    btn.setAttribute('data-grupo', estado.turnoActual);
    const signo = vals[k] > 0 ? '+' : '';
    btn.querySelector('.cal-puntos').textContent = `${signo}${vals[k]} pts`;
  });

  // Si es modo castigo_evitar, ocultar parcial/neutra/breve y cambiar labels
  const modoRestringido = modoCalif === 'doble' || modoCalif === 'castigo_evitar';
  ['parcial','neutra','breve'].forEach(k => {
    document.getElementById(`btn-cal-${k}`).style.display = modoRestringido ? 'none' : 'flex';
  });

  document.getElementById('modal-pregunta').classList.add('abierto');
  grupo.estadoEspecial = null;
  renderizarMarcador();
  iniciarTimerPregunta(tiempo, valor, grupo, modoCalif, penalizacionBase);
}

function iniciarTimerPregunta(segundos, valor, grupo, modoCalif, penalizacionBase) {
  clearInterval(estado.timerPregunta);
  estado.tiempoRestante = segundos;
  const el = document.getElementById('mp-timer');
  el.textContent = estado.tiempoRestante;
  el.classList.remove('urgente');
  estado.timerPregunta = setInterval(() => {
    estado.tiempoRestante--;
    el.textContent = estado.tiempoRestante;
    if (estado.tiempoRestante <= 10) el.classList.add('urgente');
    if (estado.tiempoRestante <= 0) {
      clearInterval(estado.timerPregunta);
      let penaFinal = 0;
      if (modoCalif === 'castigo_evitar') penaFinal = -(penalizacionBase * 2);
      else if (modoCalif !== 'doble') penaFinal = -valor;
      registrarEvento(`⏰ Tiempo agotado para ${grupo.nombre}.`, 'penalizacion');
      aplicarPuntaje(penaFinal, grupo, 'Tiempo agotado');
      cerrarModalPregunta();
    }
  }, 1000);
}

function ajustarTiempoPregunta(cambio) {
  const modalAbierto = document.getElementById('modal-pregunta').classList.contains('abierto');
  if (!modalAbierto) return;

  estado.tiempoRestante += cambio;

  if (estado.tiempoRestante < 0) {
    estado.tiempoRestante = 0;
  }

  const el = document.getElementById('mp-timer');
  el.textContent = estado.tiempoRestante;

  if (estado.tiempoRestante <= 10) {
    el.classList.add('urgente');
  } else {
    el.classList.remove('urgente');
  }

  const grupo = estado.grupos[estado.turnoActual];
  const textoCambio = cambio > 0 ? `+${cambio}` : `${cambio}`;
  registrarEvento(`⏱️ Tiempo ajustado para ${grupo.nombre}: ${textoCambio} segundos`, 'info');
}



function mostrarPista() { document.getElementById('mp-pista-container').style.display = 'block'; }
function mostrarRespuesta() { document.getElementById('mp-respuesta-container').style.display = 'block'; }

function calificarRespuesta(btn) {
  clearInterval(estado.timerPregunta);
  const valor = parseInt(btn.getAttribute('data-valor'));
  const grupoIdx = parseInt(btn.getAttribute('data-grupo'));
  const grupo = estado.grupos[grupoIdx];
  const etiqBtn = btn.querySelector('.cal-nombre').textContent;
  aplicarPuntaje(valor, grupo, etiqBtn);
  cerrarModalPregunta();
}

function aplicarPuntaje(valor, grupo, descripcion) {
  grupo.puntos += valor;
  const signo = valor >= 0 ? '+' : '';
  registrarEvento(`💯 ${grupo.nombre}: ${descripcion} → ${signo}${valor} pts (Total: ${grupo.puntos})`, valor >= 0 ? 'positivo' : 'negativo');
  renderizarMarcador();
  finalizarTurno();
}

function cerrarModalPregunta() {
  clearInterval(estado.timerPregunta);
  document.getElementById('modal-pregunta').classList.remove('abierto');
  ['parcial','neutra','breve'].forEach(k => {
    document.getElementById(`btn-cal-${k}`).style.display = 'flex';
  });
}

// ─── MODAL BENEFICIO ─────────────────────────────────────────

function mostrarModalBeneficio(grupo) {
  const b = BENEFICIOS[Math.floor(Math.random() * BENEFICIOS.length)];
  grupo.estadoEspecial = b;

  document.getElementById('modal-especial-icono').textContent = '⭐';
  document.getElementById('modal-especial-titulo').textContent = '¡Beneficio!';
  document.getElementById('modal-especial-titulo').style.color = '#22C55E';
  document.getElementById('modal-especial-nombre').textContent = b.titulo;
  document.getElementById('modal-especial-desc').textContent = b.descripcion;
  document.getElementById('modal-especial-grupo').textContent = grupo.nombre;
  document.getElementById('modal-especial-grupo').style.color = grupo.color;

  // Zona de acciones extra
  const zona = document.getElementById('modal-especial-acciones');
  zona.innerHTML = '';

  if (b.efecto.tipo === 'todo_o_nada') {
    // Mostrar 3 botones de dificultad, luego se elige y aparece la pregunta
    zona.innerHTML = `
      <p style="color:#94A3B8;font-size:12px;margin-bottom:8px;">Elige la dificultad de tu pregunta:</p>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
        <button class="btn-nivel" style="background:#1D4ED8" onclick="elegirTodoONada(200, event)">200 pts → +400</button>
        <button class="btn-nivel" style="background:#EA580C" onclick="elegirTodoONada(500, event)">500 pts → +1000</button>
        <button class="btn-nivel" style="background:#DC2626" onclick="elegirTodoONada(1000, event)">1000 pts → +2000</button>
      </div>
      <p style="color:#FBBF24;font-size:11px;margin-top:8px;">O bien, cierra sin responder y continúa el turno normalmente.</p>
    `;
    document.getElementById('btn-modal-especial-continuar').textContent = 'Saltar — Continuar turno';
    document.getElementById('btn-modal-especial-continuar').onclick = () => cerrarModalEspecial(grupo);
  } else {
    document.getElementById('btn-modal-especial-continuar').textContent = 'Entendido — Continuar turno';
    document.getElementById('btn-modal-especial-continuar').onclick = () => cerrarModalEspecialConBeneficio(grupo, b);
  }

  document.getElementById('modal-especial').classList.add('abierto');
  registrarEvento(`⭐ ${grupo.nombre} obtuvo: ${b.titulo}`, 'beneficio');
  renderizarMarcador();
}

function elegirTodoONada(valor, evt) {
  document.getElementById('modal-especial').classList.remove('abierto');
  const grupo = estado.grupos[estado.turnoActual];
  grupo.estadoEspecial = null;
  mostrarModalPregunta(valor, grupo, 'doble');
}

function cerrarModalEspecialConBeneficio(grupo, b) {
  document.getElementById('modal-especial').classList.remove('abierto');
  // El beneficio queda en estadoEspecial para la siguiente pregunta del turno
  // (si hay casilla de pregunta después, se aplicará)
  // Como ya estamos al final del turno (vino de casilla beneficio), lanzamos turno
  finalizarTurno();
}

function cerrarModalEspecial(grupo) {
  document.getElementById('modal-especial').classList.remove('abierto');
  if (grupo) grupo.estadoEspecial = null;
  finalizarTurno();
}

// ─── MODAL CASTIGO ───────────────────────────────────────────

function mostrarModalCastigo(grupo) {
  const c = CASTIGOS[Math.floor(Math.random() * CASTIGOS.length)];

  document.getElementById('modal-especial-icono').textContent = '💀';
  document.getElementById('modal-especial-titulo').textContent = '¡Castigo!';
  document.getElementById('modal-especial-titulo').style.color = '#EF4444';
  document.getElementById('modal-especial-nombre').textContent = c.titulo;
  document.getElementById('modal-especial-desc').textContent = c.descripcion;
  document.getElementById('modal-especial-grupo').textContent = grupo.nombre;
  document.getElementById('modal-especial-grupo').style.color = grupo.color;

  const zona = document.getElementById('modal-especial-acciones');
  zona.innerHTML = '';

  if (c.efecto.tipo === 'quitar_con_opcion') {
    const val = c.efecto.valor;
    zona.innerHTML = `
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:4px;">
        <button class="btn-nivel" style="background:#7C3AED" onclick="intentarRescate(${val}, event)">⚡ Intentar pregunta de ${val} pts (rescate)</button>
        <button class="btn-nivel" style="background:#4B5563" onclick="aceptarCastigoPuntos(${val}, event)">Aceptar castigo (−${val} pts)</button>
      </div>
    `;
    document.getElementById('btn-modal-especial-continuar').style.display = 'none';
  } else if (c.efecto.tipo === 'transferencia_siguiente') {
    const val = c.efecto.valor;
    const sigIdx = (estado.turnoActual + 1) % estado.grupos.length;
    const sigGrupo = estado.grupos[sigIdx];
    zona.innerHTML = `<p style="color:#FCA5A5;font-size:12px;">Se transfieren <strong>${val} pts</strong> a <strong style="color:${sigGrupo.color}">${sigGrupo.nombre}</strong>.</p>`;
    document.getElementById('btn-modal-especial-continuar').textContent = 'Confirmar transferencia';
    document.getElementById('btn-modal-especial-continuar').style.display = 'block';
    document.getElementById('btn-modal-especial-continuar').onclick = () => ejecutarTransferenciaS(val, sigIdx, grupo);
  } else if (c.efecto.tipo === 'transferencia_eleccion') {
    const val = c.efecto.valor;
    estado._castigo_transferencia_valor = val;
    let btnsGrupos = estado.grupos.map((g, i) => {
      if (i === estado.turnoActual) return '';
      return `<button class="btn-nivel" style="background:${g.color}" onclick="ejecutarTransferenciaE(${i}, event)">${g.emoji} ${g.nombre}</button>`;
    }).join('');
    zona.innerHTML = `
      <p style="color:#FCA5A5;font-size:12px;margin-bottom:6px;">Elige a qué grupo transferirle <strong>${val} pts</strong>:</p>
      <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;">${btnsGrupos}</div>
    `;
    document.getElementById('btn-modal-especial-continuar').style.display = 'none';
  } else {
    // Castigo normal (tiempo, sin_pista, etc.) → aplica en la siguiente pregunta del turno
    grupo.estadoEspecial = c;
    document.getElementById('btn-modal-especial-continuar').textContent = 'Entendido — Continuar';
    document.getElementById('btn-modal-especial-continuar').style.display = 'block';
    document.getElementById('btn-modal-especial-continuar').onclick = () => {
      document.getElementById('modal-especial').classList.remove('abierto');
      finalizarTurno();
    };
  }

  document.getElementById('modal-especial').classList.add('abierto');
  registrarEvento(`💀 ${grupo.nombre} recibió castigo: ${c.titulo}`, 'castigo');
  renderizarMarcador();
}

function intentarRescate(val, evt) {
  document.getElementById('modal-especial').classList.remove('abierto');
  document.getElementById('btn-modal-especial-continuar').style.display = 'block';
  const grupo = estado.grupos[estado.turnoActual];
  grupo.estadoEspecial = null;
  mostrarModalPregunta(val, grupo, 'castigo_evitar', val);
}

function aceptarCastigoPuntos(val, evt) {
  document.getElementById('modal-especial').classList.remove('abierto');
  document.getElementById('btn-modal-especial-continuar').style.display = 'block';
  const grupo = estado.grupos[estado.turnoActual];
  grupo.puntos -= val;
  registrarEvento(`💀 ${grupo.nombre} aceptó castigo: −${val} pts (Total: ${grupo.puntos})`, 'negativo');
  renderizarMarcador();
  finalizarTurno();
}

function ejecutarTransferenciaS(val, sigIdx, grupoActual) {
  document.getElementById('modal-especial').classList.remove('abierto');
  document.getElementById('btn-modal-especial-continuar').style.display = 'block';
  grupoActual.puntos -= val;
  estado.grupos[sigIdx].puntos += val;
  registrarEvento(`🔀 ${grupoActual.nombre} transfirió ${val} pts a ${estado.grupos[sigIdx].nombre}`, 'negativo');
  renderizarMarcador();
  finalizarTurno();
}

function ejecutarTransferenciaE(destinoIdx, evt) {
  document.getElementById('modal-especial').classList.remove('abierto');
  document.getElementById('btn-modal-especial-continuar').style.display = 'block';
  const val = estado._castigo_transferencia_valor;
  const grupoActual = estado.grupos[estado.turnoActual];
  grupoActual.puntos -= val;
  estado.grupos[destinoIdx].puntos += val;
  registrarEvento(`🎯 ${grupoActual.nombre} transfirió ${val} pts a ${estado.grupos[destinoIdx].nombre} (por elección)`, 'negativo');
  renderizarMarcador();
  finalizarTurno();
}

// ─── TURNOS Y RONDAS ──────────────────────────────────────────

function finalizarTurno() {
  estado.dadoBloqueado = false;
  document.getElementById('resultado-dado').textContent = '';
  document.getElementById('btn-dado').disabled = false;
  estado.turnosTotales++;
  const rondaAnt = estado.rondaActual;
  estado.turnoActual = (estado.turnoActual + 1) % estado.grupos.length;
  estado.rondaActual = Math.floor(estado.turnosTotales / estado.grupos.length) + 1;
  if (estado.rondaActual > estado.maxRondas) { terminarJuego('Se alcanzó el número máximo de rondas.'); return; }
  if (estado.rondaActual !== rondaAnt) registrarEvento(`🔄 Inicio de Ronda ${estado.rondaActual}`, 'ronda');
  actualizarInfoTurno();
}

function actualizarInfoTurno() {
  if (!estado.iniciado) return;
  const g = estado.grupos[estado.turnoActual];
  document.getElementById('turno-nombre').textContent = g.nombre;
  document.getElementById('turno-nombre').style.color = g.color;
  document.getElementById('turno-emoji').textContent = g.emoji;
  document.getElementById('ronda-info').textContent = `Ronda ${estado.rondaActual} de ${estado.maxRondas}`;
  registrarEvento(`➡️ Turno del ${g.nombre}`, 'turno');
}

// ─── MARCADOR ─────────────────────────────────────────────────

function renderizarMarcador() {
  const cont = document.getElementById('marcador-container');
  cont.innerHTML = '';
  estado.grupos.forEach((g, i) => {
    const esActual = i === estado.turnoActual && estado.iniciado;
    const card = document.createElement('div');
    card.className = `marcador-card ${esActual ? 'activo' : ''}`;
    card.style.borderColor = g.color;
    card.style.background = g.colorClaro;
    const badge = g.estadoEspecial
      ? `<div class="estado-badge" style="background:${g.estadoEspecial.efecto.valor > 0 ? '#16A34A' : '#DC2626'}">${g.estadoEspecial.titulo}</div>`
      : '';
    card.innerHTML = `
      <div class="marcador-header">
        <span class="marcador-emoji">${g.emoji}</span>
        <span class="marcador-nombre" style="color:${g.color}">${g.nombre}</span>
        ${esActual ? '<span class="turno-badge">TURNO</span>' : ''}
      </div>
      <div class="marcador-puntos" style="color:${g.color}">${g.puntos} pts</div>
      <div class="marcador-casilla">Casilla: ${g.posicion} / ${CASILLAS_CONFIG.length - 1}</div>
      ${badge}`;
    cont.appendChild(card);
  });
}

function renderizarControlMarcador() {
  const cont = document.getElementById('control-marcador');
  cont.innerHTML = '<h3>Ajuste Manual de Puntos</h3>';
  estado.grupos.forEach((g, i) => {
    const div = document.createElement('div');
    div.className = 'ajuste-grupo';
    div.style.borderLeft = `4px solid ${g.color}`;
    div.innerHTML = `
      <span class="ajuste-nombre">${g.emoji} ${g.nombre}</span>
      <div class="ajuste-controles">
        <input type="number" id="ajuste-${i}" min="0" value="100" class="ajuste-input" />
        <button class="btn-ajuste sumar" onclick="ajustarPuntos(${i}, 1)">+ Sumar</button>
        <button class="btn-ajuste restar" onclick="ajustarPuntos(${i}, -1)">− Restar</button>
      </div>`;
    cont.appendChild(div);
  });
}

function ajustarPuntos(idx, signo) {
  const val = parseInt(document.getElementById(`ajuste-${idx}`).value);
  if (isNaN(val) || val <= 0) return;
  const g = estado.grupos[idx];
  g.puntos += signo * val;
  registrarEvento(`✏️ Ajuste manual ${signo > 0 ? '+' : '−'}${val} pts para ${g.nombre} (Total: ${g.puntos})`, signo > 0 ? 'positivo' : 'negativo');
  renderizarMarcador();
}

// ─── BANCO DE PREGUNTAS ───────────────────────────────────────

function obtenerPregunta(valor) {
  const banco = PREGUNTAS[valor];
  const usadas = estado.preguntasUsadas[valor];
  let disponibles = banco.map((p, i) => i).filter(i => !usadas.includes(i));
  if (disponibles.length === 0) { estado.preguntasUsadas[valor] = []; disponibles = banco.map((p, i) => i); }
  const idx = disponibles[Math.floor(Math.random() * disponibles.length)];
  estado.preguntasUsadas[valor].push(idx);
  return banco[idx];
}

// ─── REGISTRO ────────────────────────────────────────────────

function registrarEvento(texto, tipo = 'info') {
  const log = document.getElementById('evento-log');
  const hora = new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const entry = document.createElement('div');
  entry.className = `log-entry log-${tipo}`;
  entry.innerHTML = `<span class="log-hora">${hora}</span> <span class="log-texto">${texto}</span>`;
  log.prepend(entry);
  while (log.children.length > 50) log.removeChild(log.lastChild);
}

// ─── FINAL DEL JUEGO ──────────────────────────────────────────

function terminarJuego(motivo) {
  estado.iniciado = false;
  clearInterval(estado.timerPregunta);
  const ranking = [...estado.grupos].sort((a, b) => b.puntos - a.puntos);
  const ganador = ranking[0];
  document.getElementById('fin-motivo').textContent = motivo;
  document.getElementById('fin-ganador').textContent = ganador.nombre;
  document.getElementById('fin-ganador').style.color = ganador.color;
  document.getElementById('fin-puntaje').textContent = `${ganador.puntos} puntos`;
  const rankEl = document.getElementById('fin-ranking');
  rankEl.innerHTML = '';
  ranking.forEach((g, i) => {
    const d = document.createElement('div');
    d.className = 'ranking-item';
    d.innerHTML = `<span class="ranking-pos">${i+1}°</span><span class="ranking-emoji">${g.emoji}</span>
      <span class="ranking-nombre" style="color:${g.color}">${g.nombre}</span>
      <span class="ranking-pts">${g.puntos} pts</span>`;
    rankEl.appendChild(d);
  });
  document.getElementById('modal-final').classList.add('abierto');
  registrarEvento(`🏁 ${motivo} — Ganador: ${ganador.nombre} con ${ganador.puntos} pts`, 'fin');
}

function reiniciarJuego() {
  document.getElementById('modal-final').classList.remove('abierto');
  document.getElementById('pantalla-juego').style.display = 'none';
  document.getElementById('pantalla-config').style.display = 'flex';
 estado = {
  iniciado: false,
  turnoActual: 0,
  rondaActual: 1,
  maxRondas: 10,
  grupos: [],
  turnosTotales: 0,
  dadoBloqueado: false,
  preguntasUsadas: { 200: [], 500: [], 1000: [] },
  timerPregunta: null,
  tiempoRestante: 0,
  _castigo_transferencia_valor: 0,
  bonoMetaOtorgado: false
};
  renderizarConfiguracion();
  renderizarTablero();
}
