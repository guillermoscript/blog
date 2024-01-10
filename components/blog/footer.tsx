import Container from './container'
import { EXAMPLE_PATH } from '../../lib/constants'
import { buttonVariants } from '../ui/button'

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              className={buttonVariants({ variant: "outline" })}
              href="https://github.com/guillermoscript"
            >
              My github!
            </a>
            <a
              href={`mailto:guillomarindavila@gmail.com`}
              className="mx-3 font-bold hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
