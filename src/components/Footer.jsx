export default function Footer() {
  return (
    <footer className="py-10 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Anggi Nabila. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-gray-900" href="#">Dribbble</a>
          <a className="hover:text-gray-900" href="#">Behance</a>
          <a className="hover:text-gray-900" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
