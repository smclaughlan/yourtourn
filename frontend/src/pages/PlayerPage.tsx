export default function PlayerPage() {
  return (
    // Div to contain everything
    // Div to contain specific player
    // Flex container for Avatar and username
    // flex container for game tags
    // normal div for bio text
    <div className="bg-slate-600 min-h-screen flex justify-center">
      <div className="bg-slate-400 mt-10 my-auto">
        <div className="flex w-96">
          <div className="ml-5 mt-3">Avatar</div>
          <div className="font-main text-lg ml-5 mt-3">Username</div>
        </div>
        <div className="flex gap-3 mt-3 ml-10">
          <button className="rounded-md bg-slate-900 px-3 py-2 text-white hover:bg-slate-600">tag 1</button>
          <button className="rounded-md bg-slate-900 px-3 py-2 text-white hover:bg-slate-600">tag 2</button>
          <button className="rounded-md bg-slate-900 px-3 py-2 text-white hover:bg-slate-600">tag 3</button>
        </div>
        <div className="font-main mt-5 ml-5 mb-10">Bio text.</div>
      </div>
    </div>
  )
}
