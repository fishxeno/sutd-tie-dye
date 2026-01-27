export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 relative z-10">
      <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">DYE-NATION</h3>
            <p className="text-xl text-gray-300 mb-2">February 6, 2026 | 11am - 4pm | Campus Centre Level 1</p>
            <p className="text-lg text-gray-400 mb-6">
              Supporting the Salvation Army • Hosted by EnROOT Group 6
            </p>
            <div className="flex justify-center gap-8 text-3xl">
                {/* Can attach links here instead */}
              <span>🌈</span>
              <span>❤️</span>
              <span>✨</span>
              <span>🎨</span>
              <span>👕</span>
            </div>
            <p className="mt-6 text-gray-500">🎨 Let your creativity shine. Help those in need. February 6, 2026 🎨</p>
            <p className="text-gray-500 mt-8">© 2026 EnROOT Group 6. All rights reserved.</p>
      </div>
    </footer>
  )
}
