const stats = [
  { value: '500+', label: 'Properties Sold', description: 'Successful transactions completed' },
  { value: '15+', label: 'Years of Experience', description: 'Serving the local community' },
  { value: '98%', label: 'Client Satisfaction', description: 'Happy buyers and sellers' },
  { value: '50+', label: 'Expert Agents', description: 'Licensed professionals on our team' },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-navy-900 mb-1">{stat.value}</p>
              <p className="text-slate-900 font-semibold mb-1">{stat.label}</p>
              <p className="text-slate-500 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
