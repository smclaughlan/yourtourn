
export default function LandingPage() {
  return (
    <div className="bg-blue-500 min-h-screen">
      <div className="font-title font-extrabold text-lg text-white pt-10 text-center">Create Tournaments</div>
      <div className="font-main text-lg text-white text-center pt-5">Host Tournaments with friends</div>
      <div className="font-main text-lg text-white text-center">or open bracket events</div>
      <div className="flex justify-center mt-10 gap-10">
        <button className="font-main text-lg rounded-md bg-yellow-500 px-5 py-3 text-slate-900 hover:bg-yellow-600">Create Tournament</button>
        <button className="font-main text-lg rounded-md bg-slate-900 px-5 py-3 text-white hover:bg-slate-600">Search Tournaments</button>
      </div>
    </div>
  )
}
