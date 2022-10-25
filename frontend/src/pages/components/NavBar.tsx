export default function NavBar() {
  // Background color: bg-blue-200
  // Text color: text-slate-900
  return (
    <div className="sticky h-20 bg-blue-200 flex justify-around">
      <div className="font-main font-extrabold text-lg text-slate-900 place-self-center">Tournaments</div>
      <div className="font-main font-extrabold text-lg text-slate-900 place-self-center">Events</div>
      <div className="font-main font-extrabold text-lg text-slate-900 place-self-center">Organize</div>
      <div className="font-main font-extrabold text-lg text-slate-900 place-self-center">Logo</div>
      <div className="font-main font-extrabold text-lg text-slate-900 place-self-center">Search</div>
      <div className="font-main font-extrabold text-lg text-slate-900 place-self-center">Log in</div>
      <div className="font-main font-extrabold text-lg text-slate-900 place-self-center">Sign up</div>
    </div>
  )
}
