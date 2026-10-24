const tools = [
  { name: 'Claude', category: 'Writing', rating: 4.8 },
  { name: 'Midjourney', category: 'Image', rating: 4.9 },
  { name: 'Cursor', category: 'Coding', rating: 4.7 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">AI Tools Directory</h1>
        <p className="text-gray-400">Discover and compare the best AI tools.</p>
      </header>
      
      <main className="grid gap-6">
        {tools.map((tool) => (
          <div key={tool.name} className="p-6 border border-gray-800 rounded-lg bg-gray-900">
            <h2 className="text-xl font-semibold">{tool.name}</h2>
            <p className="text-sm text-gray-500">{tool.category}</p>
            <div className="mt-2 text-yellow-500">Rating: {tool.rating}</div>
          </div>
        ))}
      </main>
    </div>
  );
}
