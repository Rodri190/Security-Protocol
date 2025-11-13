"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface RowData {
  zona: string;
  A: number | null;
  S: number | null;
  IR?: number;
}

export default function Page() {
  const [data, setData] = useState<RowData[]>([
    { zona: "Zona 1", A: null, S: null },
    { zona: "Zona 2", A: null, S: null },
  ]);

  const dataWithIR = data.map((item) => ({
    ...item,
    IR: item.A && item.S ? item.A * item.S : 0,
  }));

  const sortedUniqueIR = Array.from(
    new Set(dataWithIR.map((d) => d.IR ?? 0))
  ).sort((a, b) => b - a);

  const maxIR = sortedUniqueIR[0] ?? 0;
  const midIR = sortedUniqueIR[1] ?? 0;
  const minIR = sortedUniqueIR[sortedUniqueIR.length - 1] ?? 0;

  const chartData = useMemo(() => {
    return dataWithIR.map((item) => {
      let color = "#9ca3af"; // gris por defecto
      if (item.IR === maxIR) color = "#dc2626"; // rojo (mayor)
      else if (item.IR === midIR && item.IR !== maxIR && item.IR !== minIR)
        color = "#facc15"; // amarillo (intermedio)
      else if (item.IR === minIR) color = "#22c55e"; // verde (menor)
      return { zona: item.zona, IR: item.IR ?? 0, color };
    });
  }, [dataWithIR, maxIR, midIR, minIR]);

  const addRow = () =>
    setData([...data, { zona: `Zona ${data.length + 1}`, A: null, S: null }]);
  const removeRow = () => data.length > 1 && setData(data.slice(0, -1));

  const handleChange = (index: number, field: string, value: string) => {
    const newData = [...data];
    if (field === "zona") newData[index].zona = value;
    else if (field === "A" || field === "S") {
      newData[index][field as "A" | "S"] = value ? Number(value) : null;
    }
    setData(newData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Fondo */}
        <section
          className="fixed inset-0 h-screen w-full bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/FondoAnalisis.jfif")',
          }}
        ></section>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col lg:flex-row gap-6 relative z-10">
          {/* Tabla */}
          <div className="flex-1 overflow-x-auto">
            <p className="text-center text-black">
              Ingrese los valores de <strong>A</strong> (Accidentes Anuales) y{" "}
              <strong>S</strong> (Severidad 1–5). El sistema calculará el{" "}
              <strong>Índice de Riesgo (IR)</strong> automáticamente:
            </p>
            <p className="text-center font-mono text-gray-600 mb-4">IR = A × S</p>

            <table className="min-w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="px-4 py-2 border">N.º</th>
                  <th className="px-4 py-2 border">Zona de Trabajo</th>
                  <th className="px-4 py-2 border text-center">A</th>
                  <th className="px-4 py-2 border text-center">S</th>
                  <th className="px-4 py-2 border text-center">IR</th>
                </tr>
              </thead>
              <tbody>
                {dataWithIR.map((item, i) => {
                  const color =
                    chartData.find((d) => d.zona === item.zona)?.color ||
                    "#9ca3af";
                  return (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="border px-4 py-2">{i + 1}</td>
                      <td className="border px-4 py-2 text-center">
                        <input
                          type="text"
                          value={item.zona}
                          onChange={(e) => handleChange(i, "zona", e.target.value)}
                          className="w-32 text-center border rounded border-gray-300 focus:ring focus:ring-blue-200"
                        />
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <input
                          type="number"
                          value={item.A ?? ""}
                          onChange={(e) => handleChange(i, "A", e.target.value)}
                          className="w-20 text-center border rounded border-gray-300 focus:ring focus:ring-blue-200"
                        />
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <input
                          type="number"
                          value={item.S ?? ""}
                          onChange={(e) => handleChange(i, "S", e.target.value)}
                          className="w-20 text-center border rounded border-gray-300 focus:ring focus:ring-blue-200"
                        />
                      </td>
                      <td
                        className="border px-4 py-2 text-center font-semibold"
                        style={{ color }}
                      >
                        {item.IR}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={addRow}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                + Agregar Fila
              </button>
              <button
                onClick={removeRow}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                - Eliminar Fila
              </button>
            </div>
          </div>

          {/* Gráfica de barras */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Índices de Riesgo por Zona
            </h2>

            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 50, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="zona" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="IR" barSize={60}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Leyenda */}
            <div className="mt-6 flex gap-6 justify-center flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-600 rounded"></div>
                <span className="text-sm text-gray-700">Riesgo más alto</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                <span className="text-sm text-gray-700">Riesgo intermedio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-700">Riesgo más bajo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
                <span className="text-sm text-gray-700">Otros</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
