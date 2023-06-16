import Container from './container'

export default function Footer() {
  return (
    <footer className="border-t border-accent-2 bg-accent-1">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
            Maloca Blog.
          </h3>
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
            Follow us:

          </div>
        </div>
      </Container>
    </footer>
  )
}
