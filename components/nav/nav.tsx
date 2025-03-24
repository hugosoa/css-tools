import Link from "next/link"

export const Nav = () => {
    return (

        <nav className="py-4 px-3 space-y-1">
            <Link
                href="/"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                Home
            </Link>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-2"></div>
            <Link
                href="/shadow-tool"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                box-shadow
            </Link>
            <Link
                href="/button-generator"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                button
            </Link>


        </nav>
    )
}