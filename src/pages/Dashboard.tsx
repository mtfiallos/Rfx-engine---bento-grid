import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <>
      <header className="flex justify-between items-end mb-2 shrink-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Central Command</h1>
          <p className="text-slate-500">Manage RFx responses, tracking, and document sync.</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Drive Status</span>
            <span className="text-sm text-slate-600">Synced 2m ago</span>
          </div>
          <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-green-500 shadow-sm">
            ●
          </div>
        </div>
      </header>

      <div className="flex-1 min-h-0 overflow-y-auto pr-2 pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,auto)] gap-6 h-full auto-rows-min">
          
          {/* Active RFx Pipeline - Col span 2, Row span 2 */}
          <div className="lg:col-span-2 lg:row-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col min-h-[400px]">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center shrink-0">
              <h3 className="font-bold text-lg">Active Response Pipeline</h3>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">3 OPPORTUNITIES</span>
            </div>
            <div className="flex-1 overflow-x-auto overflow-y-auto p-0">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider sticky top-0">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Opportunity Name / ID</th>
                    <th className="px-6 py-3 font-semibold">Phase</th>
                    <th className="px-6 py-3 font-semibold">Issuer</th>
                    <th className="px-6 py-3 font-semibold">Deadline</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="font-medium">Cloud Migration RFP</div>
                      <div className="text-xs text-slate-400 font-mono">#RFP-2024-081</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-[10px] font-bold uppercase tracking-wider">Drafting</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">TechCorp Inc.</td>
                    <td className="px-6 py-4 font-medium">Oct 12, 2024</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="font-medium">Security Audit RFQ</div>
                      <div className="text-xs text-slate-400 font-mono">#RFQ-2024-112</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-[10px] font-bold uppercase tracking-wider">Triage</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">Global Finance</td>
                    <td className="px-6 py-4 font-medium">Oct 28, 2024</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="font-medium">Hardware Procurement</div>
                      <div className="text-xs text-slate-400 font-mono">#RFP-2024-099</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[10px] font-bold uppercase tracking-wider">Submitted</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">EduSystems</td>
                    <td className="px-6 py-4 font-medium italic text-slate-400">Oct 01, 2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-blue-600 rounded-3xl p-6 text-white flex flex-col justify-between shadow-lg shadow-blue-200 shadow-xl lg:col-span-1 border border-blue-500">
            <div className="flex justify-between items-start mb-6 lg:mb-0">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl shadow-sm text-white font-bold pb-1">
                +
              </div>
              <div className="text-right">
                <div className="text-xs uppercase font-bold opacity-70 tracking-widest text-blue-100">Quick Action</div>
                <div className="text-lg font-semibold tracking-tight">Log Opportunity</div>
              </div>
            </div>
            <div className="space-y-3 mt-auto">
              <button className="w-full py-3.5 bg-white text-blue-600 font-bold rounded-xl text-sm shadow-md active:scale-95 transition-transform hover:bg-slate-50">
                Log New RFx
              </button>
              <button className="w-full py-3.5 bg-blue-500 text-white font-bold rounded-xl text-sm border border-blue-400 active:scale-95 transition-transform hover:bg-blue-400 shadow-inner">
                Draft Response
              </button>
            </div>
          </div>

          {/* Drive Storage */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between lg:col-span-1 group hover:border-slate-300 transition-colors cursor-pointer">
            <div className="flex items-center gap-3 mb-4 lg:mb-0">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              </div>
              <h4 className="font-bold text-slate-800">Drive Storage</h4>
            </div>
            <div className="flex-1 flex flex-col justify-end py-4">
              <div className="text-3xl font-bold tracking-tight text-slate-900">1,284</div>
              <div className="text-xs text-slate-500 font-medium">Documents tracked across 42 projects</div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full mt-5 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* GEM AI Insights */}
          <div className="bg-slate-900 rounded-3xl p-6 text-slate-100 col-span-1 lg:col-span-1 border border-slate-800 shadow-sm flex flex-col relative overflow-hidden">
             {/* Decorative gradient blur */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
             
             <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
               <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
               GEM AI Insights
             </h4>
             <div className="space-y-3 flex-1 overflow-y-auto pr-1">
               <div className="p-3 bg-slate-800/80 rounded-xl border-l-4 border-blue-500 backdrop-blur-sm">
                 <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Anomaly Detected</div>
                 <p className="text-[13px] text-slate-300 mt-1.5 leading-relaxed">Vendor X in #RFP-081 is 22% outside historical pricing norms.</p>
               </div>
               <div className="p-3 bg-slate-800/50 rounded-xl border-l-4 border-slate-600 opacity-80 backdrop-blur-sm">
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Drafting Tip</div>
                 <p className="text-[13px] text-slate-300 mt-1.5 leading-relaxed">Section 4.2 in Security RFQ matches 90% of compliance standards.</p>
               </div>
             </div>
          </div>

          {/* Analytic Snapshot - Col span 2 */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col sm:flex-row sm:gap-8 items-start sm:items-center">
            <div className="flex-1 w-full sm:w-auto mb-6 sm:mb-0">
               <h4 className="font-bold text-slate-900 tracking-tight text-lg">Analytic Snapshot</h4>
               <p className="text-xs text-slate-500 mb-6 font-medium">Response efficiency vs. previous quarter</p>
               
               <div className="flex items-end gap-3 h-20 px-2">
                 <div className="flex-1 bg-slate-100 hover:bg-slate-200 transition-colors h-[40%] rounded-t-sm group relative">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Q1</div>
                 </div>
                 <div className="flex-1 bg-slate-100 hover:bg-slate-200 transition-colors h-[60%] rounded-t-sm group relative"></div>
                 <div className="flex-1 bg-slate-100 hover:bg-slate-200 transition-colors h-[30%] rounded-t-sm group relative"></div>
                 <div className="flex-1 bg-blue-200 hover:bg-blue-300 transition-colors h-[80%] rounded-t-sm group relative"></div>
                 <div className="flex-1 bg-blue-400 hover:bg-blue-500 transition-colors h-[55%] rounded-t-sm group relative"></div>
                 <div className="flex-1 bg-blue-600 hover:bg-blue-700 transition-colors h-[95%] rounded-t-sm group relative"></div>
               </div>
               <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium px-2">
                 <span>JAN</span>
                 <span>JUN</span>
               </div>
            </div>
            
            <div className="w-full sm:w-px sm:h-full bg-slate-100 sm:mx-2 hidden sm:block"></div>
            
            <div className="w-full sm:w-48 flex flex-row sm:flex-col justify-between sm:justify-center items-center sm:items-start p-4 sm:p-0 bg-slate-50 sm:bg-transparent rounded-xl sm:rounded-none">
              <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest sm:mb-2">Avg. Cycle Time</div>
              <div className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tighter">
                14.2<span className="text-lg font-medium text-slate-500 tracking-normal ml-0.5">d</span>
              </div>
              <div className="text-xs text-green-600 font-bold bg-green-100 px-2 py-1 rounded w-fit sm:mt-2">
                ↓ 12% faster
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
