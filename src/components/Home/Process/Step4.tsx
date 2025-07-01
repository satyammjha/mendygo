const Step4 = () => {
    const systems = [
        { name: 'Chatbot', status: '↻', color: 'text-purple-400' },
        { name: 'Workflow', status: '↓', color: 'text-blue-400' },
        { name: 'Sales', status: '✓', color: 'text-green-400' },
    ];

    return (
        <div className="bg-[#0a0a0a] text-white p-6 w-90 h-80 rounded-xl shadow-xl flex flex-col">
      
            <div className="flex flex-col mb-6">
                <span className="bg-white/10 text-white px-2 py-1 text-xs rounded-md self-start mb-2">
                    Step 4
                </span>
                <h2 className="text-xl font-bold mb-1">Optimization</h2>
                <p className="text-gray-300 text-xs leading-tight">
                    Continuous monitoring and improvement.
                </p>
            </div>

            <div className="flex-1 space-y-3">
                {systems.map((system, i) => (
                    <div key={i} className="border border-white/30 rounded-md p-3 hover:bg-white/5 transition">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-xs">
                                    🤖
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{system.name} system</p>
                                    <p className="text-xs text-white/70">
                                        {i === 0 ? 'Efficiency +20%' : i === 1 ? 'Update available' : 'Up to date'}
                                    </p>
                                </div>
                            </div>
                            <span className={`text-lg ${system.color}`}>{system.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Step4;