function DocumentsPanel() {
  try {
    const [documents, setDocuments] = React.useState([
      { id: 1, name: 'Informe Mensual.pdf', status: 'Completado', date: '2025-11-20', statusColor: 'bg-green-500' },
      { id: 2, name: 'Propuesta Proyecto.docx', status: 'En Revisión', date: '2025-11-25', statusColor: 'bg-yellow-500' },
      { id: 3, name: 'Análisis de Datos.xlsx', status: 'Pendiente', date: '2025-11-15', statusColor: 'bg-red-500' },
      { id: 4, name: 'Contrato Cliente.pdf', status: 'Completado', date: '2025-11-22', statusColor: 'bg-green-500' },
      { id: 5, name: 'Presentación Q4.pptx', status: 'En Proceso', date: '2025-11-26', statusColor: 'bg-blue-500' }
    ]);

    return (
      <div className="bg-white rounded-xl p-6 shadow-lg" data-name="documents-panel" data-file="components/DocumentsPanel.js">
        <h2 className="text-xl font-bold mb-4">Panel de Documentos</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Nombre del Documento</th>
                <th className="text-left py-3 px-4">Estado</th>
                <th className="text-left py-3 px-4">Última Modificación</th>
              </tr>
            </thead>
            <tbody>
              {documents.map(doc => (
                <tr key={doc.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="icon-file-text text-lg text-gray-600"></div>
                      <span>{doc.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`${doc.statusColor} text-white px-3 py-1 rounded-full text-sm`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{doc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DocumentsPanel component error:', error);
    return null;
  }
}