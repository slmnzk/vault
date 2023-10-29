import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>Hello, stranger. I used to be an adventurer like you. Then i took an arrow in knee...</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
