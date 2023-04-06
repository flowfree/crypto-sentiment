import { Link } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-full flex flex-col h-screen">
      <div className="container mx-auto flex-grow">
        {children}
      </div>
      <footer className="bg-white mt-10">
        <div className="mx-auto max-w-full pb-3 px-8">
          <p className="text-sm text-gray-400 text-right">
            Copyright &copy; 2023 Nashruddin Amin {' '} &bull; {' '}
            <a href="https://github.com/flowfree/crypto-sentiment">
              Github
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
