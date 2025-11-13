import { Navbar } from '@/components';

export default function VestimentaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section
        className="fixed inset-0 absolute inset-0 h-screen w-full bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/FondoPage.jfif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
        }}
      ></section>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Equipos de Protección Personal Según Zonas de Trabajo
        </h1>

        <p className="text-gray-700 leading-relaxed mb-12 text-justify">
          El equipo de protección personal (EPP) es la última barrera de defensa ante los riesgos laborales que no pueden ser eliminados o controlados por medios técnicos, administrativos o de ingeniería. Su correcta selección depende de los peligros específicos del área de trabajo, de la exposición del trabajador y de la duración de la tarea.
          A continuación, se detallan las principales zonas de trabajo y los EPP requeridos en cada una, junto con su finalidad y recomendaciones de uso.
        </p>

        {/* 1 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            1. Zona de Manipulación y Procesamiento de Productos Químicos
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Riesgos:</strong> exposición a sustancias corrosivas, tóxicas, irritantes o inflamables; salpicaduras y vapores peligrosos.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>EPP recomendado:</strong> gafas de seguridad o careta facial completa sellada contra vapores; guantes de protección química (nitrilo, neopreno, butilo o PVC); ropa impermeable o traje de protección química; botas de goma antideslizantes; delantal y capucha impermeables; respirador con filtro para gases y vapores o equipo autónomo de respiración.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Consideraciones:</strong> el traje debe cubrir completamente la piel; después del uso, se debe limpiar y almacenar en un área ventilada. Se recomienda ducha de emergencia y lavaojos cercanos.
          </p>
        </section>

        {/* 2 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            2. Zona de Soldadura y Corte de Metales
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Riesgos:</strong> radiación UV e infrarroja, chispas, salpicaduras de metal fundido, humos metálicos, ruido elevado.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>EPP recomendado:</strong> máscara de soldar, gafas de seguridad con filtro lateral, guantes de cuero grueso, ropa ignífuga, mandil o chaqueta de cuero, botas de cuero de caña alta, protectores auditivos y mascarilla para humos metálicos.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Consideraciones:</strong> la ropa debe mantenerse seca; no usar materiales sintéticos; mantener cortinas ignífugas para aislar la zona.
          </p>
        </section>

        {/* 3 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            3. Zona de Fundición y Metalurgia (Altas Temperaturas)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Riesgos:</strong> exposición a calor radiante, salpicaduras de metal fundido, humos y gases.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>EPP recomendado:</strong> casco con visera reflectante, gafas protectoras con filtro térmico, careta aluminizada, traje aluminizado, guantes de Kevlar o Nomex, botas con aislamiento térmico y protección respiratoria.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Consideraciones:</strong> la ropa debe ser holgada pero ajustada en muñecas y tobillos; mantenerla seca para evitar vaporización instantánea.
          </p>
        </section>

        {/* 4 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            4. Zona con Exposición a Altas Temperaturas Ambientales
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Riesgos:</strong> estrés térmico, deshidratación, quemaduras solares, fatiga por calor.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>EPP recomendado:</strong> casco ventilado, ropa ligera y transpirable, lentes de sol UV, guantes ligeros y buena hidratación.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Consideraciones:</strong> balancear protección con ventilación; planificar turnos más cortos y vigilancia médica.
          </p>
        </section>

        {/* 5 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            5. Zona de Riesgo Eléctrico
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Riesgos:</strong> arco eléctrico, choque, explosión, contacto con partes energizadas.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>EPP recomendado:</strong> ropa ignífuga certificada, casco dieléctrico, guantes y botas dieléctricas, herramientas aisladas y alfombra dieléctrica.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Consideraciones:</strong> nunca usar ropa sintética bajo la ropa FR; mantener guantes secos y aplicar bloqueo y etiquetado (LOTO).
          </p>
        </section>

        {/* 6 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            6. Zona con Ruido Elevado
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Riesgos:</strong> pérdida auditiva, estrés, fatiga.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>EPP recomendado:</strong> tapones auditivos, orejeras y combinación de ambos en niveles extremos.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Consideraciones:</strong> los protectores deben usarse todo el tiempo de exposición; la pérdida auditiva es irreversible.
          </p>
        </section>

        {/* 7 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            7. Zona con Polvo o Partículas en Suspensión
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Riesgos:</strong> inhalación de partículas, irritación ocular, enfermedades respiratorias.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>EPP recomendado:</strong> mascarilla con filtro (N95 o superior), gafas cerradas, ropa ajustada, botas antideslizantes y guantes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Consideraciones:</strong> mantener ventilación forzada y evitar comer o fumar en el área.
          </p>
        </section>

        {/* 8 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            8. Zona de Espacios Confinados
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Riesgos:</strong> falta de oxígeno, gases tóxicos, atrapamiento.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>EPP recomendado:</strong> arnés completo, detector multigás, SCBA, casco, guantes y linterna intrínsecamente segura.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Consideraciones:</strong> siempre debe haber un vigilante externo y monitoreo atmosférico previo.
          </p>
        </section>

        {/* 9 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            9. Zona de Manipulación de Carga y Materiales Pesados
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Riesgos:</strong> golpes, atrapamientos, caídas de objetos.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>EPP recomendado:</strong> casco, chaleco reflectante, guantes reforzados, botas de seguridad y faja lumbar.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Consideraciones:</strong> buena iluminación y señalización; el uso de faja no sustituye la técnica correcta de levantamiento.
          </p>
        </section>

        {/* 10 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            10. Zona Biológica
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Riesgos:</strong> exposición a microorganismos, fluidos o agentes biológicos.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>EPP recomendado:</strong> bata impermeable, guantes desechables, mascarilla N95, gafas de seguridad y calzado cerrado.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Consideraciones:</strong> nunca reutilizar guantes ni tocar la cara con EPP contaminado; desechar en contenedores biológicos.
          </p>
        </section>

        {/* 11 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            11. Zona de Frío Extremo o Uso de Criogénicos
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Riesgos:</strong> quemaduras por frío, congelación, desplazamiento de oxígeno.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>EPP recomendado:</strong> guantes criogénicos, delantal aislante, botas térmicas, protección facial y respirador.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Consideraciones:</strong> evitar contacto con metales fríos o líquidos criogénicos; no usar objetos metálicos personales.
          </p>
        </section>

        {/* 12 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-4 border-black">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            12. Zona de Construcción y Trabajos en Altura
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Riesgos:</strong> caídas, golpes, proyección de objetos, exposición al clima.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>EPP recomendado:</strong> arnés anticaídas, casco con barboquejo, botas antideslizantes, guantes, gafas y chaleco reflectante.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Consideraciones:</strong> revisar arnés antes de cada uso; puntos de anclaje deben soportar al menos 2,200 kg.
          </p>
        </section>
      </main>
    </div>
  );
}
