function DocumentsPanel() {
  try {
    const documents = [
      { id: 1, name: 'Reporte Anual 2025.pdf', status: 'Completado', modified: '2025-11-27' },
      { id: 2, name: 'Propuesta Proyecto.docx', status: 'En Revisión', modified: '2025-11-26' },
      { id: 3, name: 'Presupuesto Q4.xlsx', status: 'Pendiente', modified: '2025-11-25' },
      { id: 4, name: 'Contrato Cliente.pdf', status: 'Completado', modified: '2025-11-24' }
    ];

    const statusColors = {
      'Completado': 'bg-green-100 text-green-800',
      'En Revisión': 'bg-yellow-100 text-yellow-800',
      'Pendiente': 'bg-red-100 text-red-800'
    };

    return (
      <div className="bg-white rounded-xl p-6 shadow-lg" data-name="documents-panel" data-file="components/DocumentsPanel.js">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Documentos</h2>
        <div className="space-y-3">
          {documents.map(doc => (
            <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="icon-file-text text-xl text-gray-600"></div>
                <div>
                  <p className="font-bold text-gray-900">{doc.name}</p>
                  <p className="text-sm text-gray-500">Modificado: {doc.modified}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${statusColors[doc.status]}`}>
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('DocumentsPanel component error:', error);
    return null;
  }
}