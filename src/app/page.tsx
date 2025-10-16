import clsx from 'clsx';

export default function HomePage() {
  return (
    <div>
      <h2 
        className={clsx(
          'text-2xl', 
          'font-bold', 
          'text-blue-200', 
          'hover:text-purple-900', 
          'hover:bg-blue-900', 
          'transition', 
          'duration-200',
        )}
      >
          Página de Next.js
      </h2>
    </div>
  )
}