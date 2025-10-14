export default function Layout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-purple-400">
      <h1>About Layout</h1>
      {children}
    </div>
  )
}