const Step2 = () => {
    return (
        <div className="bg-[#0a0a0a] text-white p-6 w-[26rem] h-80 rounded-xl shadow-xl flex flex-col">

            <div className="flex flex-col mb-4">
                <span className="bg-white/10 text-white px-2 py-1 text-xs rounded-md self-start mb-2">
                    Step 2
                </span>
                <h2 className="text-xl font-bold mb-1">AI Development</h2>
                <p className="text-gray-300 text-xs leading-tight">
                    Building intelligent automation systems.
                </p>
            </div>

            <div className="flex-1 bg-black border border-white/30 rounded-md overflow-hidden">
                <div className="flex items-center justify-between bg-white/5 px-3 py-1.5 text-xs border-b border-white/10">
                    <span className="font-mono">automation.py</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                </div>

                <pre className="text-xs p-3 font-mono leading-relaxed">
                    <code>
                        <span className="text-purple-400">class</span> AutoTrigger:
                        {'\n'}&nbsp;&nbsp;<span className="text-cyan-400">def</span> __init__(self):
                        {'\n'}&nbsp;&nbsp;&nbsp;&nbsp;self.status = <span className="text-yellow-400">"ready"</span>
                        {'\n\n'}&nbsp;&nbsp;<span className="text-cyan-400">def</span> <span className="text-blue-400">execute</span>(self):
                        {'\n'}&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">if</span> self.check():
                        {'\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">return</span> <span className="text-yellow-400">"success"</span>
                    </code>
                </pre>
            </div>
        </div>
    );
};
export default Step2;